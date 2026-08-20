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

  const guestGroup = clean(body.guestGroup, 200);
  if (!guestGroup) {
    return NextResponse.json({ error: "guest_group_required" }, { status: 400 });
  }

  if (typeof body.attending !== "boolean") {
    return NextResponse.json({ error: "attending_required" }, { status: 400 });
  }

  if (typeof body.vegetarian !== "boolean") {
    return NextResponse.json({ error: "vegetarian_required" }, { status: 400 });
  }

  const rawCompanions = Number(body.companions);
  const companions = Number.isFinite(rawCompanions) ? Math.max(Math.trunc(rawCompanions), 0) : 0;

  try {
    await addRsvp({
      name,
      guestGroup,
      attending: body.attending,
      companions,
      allergy: clean(body.allergy, 500),
      vegetarian: body.vegetarian,
    });
  } catch (error) {
    console.error("Failed to save RSVP", error);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
