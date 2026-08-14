import type { Metadata } from "next";
import { listRsvps, summarise } from "@/lib/rsvp-store";
import { isAuthenticated } from "./auth";
import { Dashboard } from "./Dashboard";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Quản lý RSVP",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    return (
      <main className="min-h-[100svh] bg-[#461c22] px-5">
        <LoginForm />
      </main>
    );
  }

  const entries = await listRsvps();

  return (
    <main className="min-h-[100svh] bg-[#461c22]">
      <Dashboard entries={entries} summary={summarise(entries)} />
    </main>
  );
}
