import "server-only";

import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const AUTH_COOKIE = "rsvp_admin";

/**
 * Set ADMIN_PASSWORD in the environment. The fallback only exists so the
 * dashboard is reachable during local development.
 */
export function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "annie-dung-2027";
}

export function tokenFor(password: string): string {
  return createHash("sha256").update(`rsvp-admin:${password}`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(AUTH_COOKIE)?.value;
  return Boolean(token && safeEqual(token, tokenFor(adminPassword())));
}
