import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="bg-[#351218] px-6 py-16 text-center">
      <Reveal>
        <p className="font-script text-[clamp(2.4rem,9vw,3.4rem)] leading-none text-[#e0c9a8]">
          {invitation.monogram.left}
          <span className="mx-1 text-[0.6em] align-middle">&amp;</span>
          {invitation.monogram.right}
        </p>

        <p className="mt-6 text-[0.7rem] tracking-[0.3em] text-[#c9ab8a] uppercase">
          {invitation.groomFull}
        </p>
        <p className="mt-1 text-[0.7rem] tracking-[0.3em] text-[#c9ab8a] uppercase">
          {invitation.brideFull}
        </p>

        <p className="mt-8 text-[0.68rem] tracking-[0.32em] text-[#a98a72] uppercase">
          {invitation.weekday} · {invitation.day}.01.{invitation.year}
        </p>
      </Reveal>
    </footer>
  );
}
