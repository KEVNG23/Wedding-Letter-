import { NextResponse } from "next/server";
import { addRsvp } from "@/lib/rsvp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  if (!name) {
    return NextResponse.json({ error: "name_required" }, { status: 400 });
  }

  if (typeof body.attending !== "boolean") {
    return NextResponse.json({ error: "attending_required" }, { status: 400 });
  }

  const rawGuests = Number(body.guests);
  const guests = body.attending
    ? Math.min(Math.max(Number.isFinite(rawGuests) ? Math.trunc(rawGuests) : 1, 1), 20)
    : 0;

  try {
    await addRsvp({
      name,
      attending: body.attending,
      guests,
      phone: clean(body.phone, 40),
      message: clean(body.message, 1000),
    });
  } catch (error) {
    console.error("Failed to save RSVP", error);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
