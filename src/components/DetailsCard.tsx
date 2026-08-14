import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

export function DetailsCard() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    invitation.mapsQuery,
  )}`;

  return (
    <section className="bg-[#461c22] px-6 py-20 sm:py-28">
      <Reveal className="mx-auto w-full max-w-[460px]">
        <div className="bg-[#faf1dc] px-7 py-14 text-center shadow-[0_30px_60px_rgba(20,5,9,0.45)] sm:px-12 sm:py-16">
          <h2 className="font-display text-[clamp(1.5rem,5.5vw,2rem)] text-[#3f2a1e]">
            {invitation.ceremonyName}
          </h2>
          <p className="mt-2 text-[clamp(0.95rem,3vw,1.1rem)] text-[#6b5b45]">
            {invitation.ceremonyLead}
          </p>

          <p className="mt-9 text-[0.8rem] tracking-[0.2em] text-[#8a7448] uppercase">
            {invitation.venueLabel}
          </p>

          <div className="mt-3 space-y-1 text-[clamp(0.95rem,2.9vw,1.08rem)] leading-relaxed text-[#6b5b45]">
            <p>{invitation.addressLine1}</p>
            <p>{invitation.addressLine2}</p>
          </div>

          <p className="mt-3 text-[0.72rem] leading-relaxed text-[#9c8a6d]">
            {invitation.addressOld}
          </p>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block border-b border-[#b9a480] pb-[2px] text-[0.72rem] tracking-[0.18em] text-[#8a7448] uppercase transition-colors hover:border-[#8a7448] hover:text-[#5f4c2c]"
          >
            {invitation.mapsLabel}
          </a>

          <p className="mt-9 text-[clamp(1.3rem,4.5vw,1.7rem)] text-[#8a7448]">
            {invitation.doubleHappiness}
          </p>

          <div className="gold-rule mt-8" />

          <p className="mt-6 text-[0.72rem] tracking-[0.28em] text-[#8a7448] uppercase">
            {invitation.month}
          </p>

          <p className="mt-3 flex items-center justify-center gap-3 text-[clamp(1.05rem,3.4vw,1.3rem)] text-[#6b5b45]">
            <span>{invitation.weekday}</span>
            <span className="text-[#c3b193]">|</span>
            <span className="font-display text-[clamp(2.6rem,10vw,3.6rem)] leading-none text-[#a8894f]">
              {invitation.day}
            </span>
            <span className="text-[#c3b193]">|</span>
            <span>{invitation.timeOfDay}</span>
          </p>

          <p className="font-display mt-3 text-[clamp(1rem,3.2vw,1.2rem)] tracking-[0.14em] text-[#a8894f]">
            {invitation.year}
          </p>

          <p className="mt-3 text-[0.74rem] tracking-[0.08em] text-[#9c8a6d]">
            {invitation.lunar}
          </p>

          <div className="gold-rule mt-7" />

          <p className="mt-12 text-[0.8rem] leading-relaxed text-[#9c8a6d] italic">
            {invitation.footerNote}
          </p>
          <p className="mt-2 text-[0.8rem] text-[#8a3b3b]">♥</p>
        </div>
      </Reveal>
    </section>
  );
}
