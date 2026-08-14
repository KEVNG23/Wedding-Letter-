import { DetailsCard } from "@/components/DetailsCard";
import { Hero } from "@/components/Hero";
import { InvitationCard } from "@/components/InvitationCard";
import { MusicToggle } from "@/components/MusicToggle";
import { Rsvp } from "@/components/Rsvp";
import { SiteFooter } from "@/components/SiteFooter";
import { TheDay } from "@/components/TheDay";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <main className="bg-[#461c22]">
      <Hero />
      <Welcome />
      <InvitationCard />
      <TheDay />
      <DetailsCard />
      <Rsvp />
      <SiteFooter />
      <MusicToggle />
    </main>
  );
}
