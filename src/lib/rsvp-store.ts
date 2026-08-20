import "server-only";

import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import type { Pool } from "pg";

export type RsvpEntry = {
  id: string;
  name: string;
  guestGroup: string;
  attending: boolean;
  companions: number;
  allergy: string;
  vegetarian: boolean;
  createdAt: string;
};

export type NewRsvp = Omit<RsvpEntry, "id" | "createdAt">;

const FILE_PATH = path.join(process.cwd(), ".data", "rsvp.json");

/**
 * Postgres is used when DATABASE_URL is present (that's what Railway injects
 * when you add a Postgres service). Without it we fall back to a JSON file so
 * the site runs locally with zero setup.
 */
const usePostgres = Boolean(process.env.DATABASE_URL);

let poolPromise: Promise<Pool> | null = null;

async function getPool(): Promise<Pool> {
  if (!poolPromise) {
    poolPromise = (async () => {
      const { Pool: PgPool } = await import("pg");
      const pool = new PgPool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.DATABASE_URL?.includes("localhost")
          ? undefined
          : { rejectUnauthorized: false },
      });

      await pool.query(`
        CREATE TABLE IF NOT EXISTS rsvp (
          id           TEXT PRIMARY KEY,
          name         TEXT NOT NULL,
          guest_group  TEXT NOT NULL DEFAULT '',
          attending    BOOLEAN NOT NULL,
          companions   INTEGER NOT NULL DEFAULT 0,
          allergy      TEXT NOT NULL DEFAULT '',
          vegetarian   BOOLEAN NOT NULL DEFAULT false,
          created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `);

      return pool;
    })();
  }

  return poolPromise;
}

async function readFileEntries(): Promise<RsvpEntry[]> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as RsvpEntry[]) : [];
  } catch {
    return [];
  }
}

export async function addRsvp(input: NewRsvp): Promise<RsvpEntry> {
  const entry: RsvpEntry = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (usePostgres) {
    const pool = await getPool();
    await pool.query(
      `INSERT INTO rsvp (id, name, guest_group, attending, companions, allergy, vegetarian, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        entry.id,
        entry.name,
        entry.guestGroup,
        entry.attending,
        entry.companions,
        entry.allergy,
        entry.vegetarian,
        entry.createdAt,
      ],
    );
    return entry;
  }

  const entries = await readFileEntries();
  entries.push(entry);
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(entries, null, 2), "utf8");
  return entry;
}

export async function listRsvps(): Promise<RsvpEntry[]> {
  if (usePostgres) {
    const pool = await getPool();
    const { rows } = await pool.query(
      `SELECT id, name, guest_group, attending, companions, allergy, vegetarian, created_at
       FROM rsvp ORDER BY created_at DESC`,
    );

    return rows.map((r) => ({
      id: r.id as string,
      name: r.name as string,
      guestGroup: r.guest_group as string,
      attending: r.attending as boolean,
      companions: r.companions as number,
      allergy: r.allergy as string,
      vegetarian: r.vegetarian as boolean,
      createdAt: new Date(r.created_at as string | Date).toISOString(),
    }));
  }

  const entries = await readFileEntries();
  return entries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function summarise(entries: RsvpEntry[]) {
  const attending = entries.filter((e) => e.attending);
  const declined = entries.filter((e) => !e.attending);

  return {
    responses: entries.length,
    attending: attending.length,
    declined: declined.length,
    headcount: attending.reduce((sum, e) => sum + (e.companions || 0) + 1, 0),
  };
}
