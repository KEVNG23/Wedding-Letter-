import Image from "next/image";
import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

/**
 * Lace doily card sitting in front of the open envelope, matching the Canva
 * composition. The percentages below are measured from that artwork: the
 * doily is as wide as the envelope and overlaps its top ~40%.
 */
export function InvitationCard() {
  return (
    <section className="bg-[#461c22] px-6 pb-20 sm:pb-28">
      <Reveal className="mx-auto w-full max-w-[420px]">
        <div className="relative aspect-[312/662] w-full">
          <div className="absolute inset-x-0 top-[40.8%] h-[59.2%] drop-shadow-[0_24px_44px_rgba(22,6,9,0.5)]">
            <Image
              src="/assets/envelope-open.png"
              alt=""
              fill
              sizes="(max-width: 480px) 90vw, 420px"
              className="object-contain object-top"
            />
          </div>

          <div className="absolute inset-x-0 top-0 h-[65%]">
            <Image
              src="/assets/lace-oval.png"
              alt=""
              fill
              priority={false}
              sizes="(max-width: 480px) 90vw, 420px"
              className="object-contain object-top drop-shadow-[0_10px_26px_rgba(22,6,9,0.28)]"
            />

            <div className="absolute inset-x-[19%] top-[11%] bottom-[28%] flex flex-col items-center justify-center text-center text-[#5a3a24]">
              <p className="font-display whitespace-pre-line text-[clamp(0.55rem,2vw,0.74rem)] leading-[1.55] tracking-[0.14em]">
                {invitation.cardTitle}
              </p>

              <span
                aria-hidden
                className="my-[4%] block h-px w-[46%]"
                style={{ backgroundColor: "#bfa887" }}
              />

              <p className="font-script text-[clamp(1.05rem,4.4vw,1.55rem)] leading-[1.35]">
                {invitation.groomFull}
              </p>
              <p className="font-script my-[2%] text-[clamp(0.85rem,3.2vw,1.15rem)] leading-none">
                &amp;
              </p>
              <p className="font-script text-[clamp(1.05rem,4.4vw,1.55rem)] leading-[1.35]">
                {invitation.brideFull}
              </p>

              <span
                aria-hidden
                className="mt-[9%] text-[clamp(0.7rem,2.6vw,0.95rem)] text-[#8a6f52]"
              >
                ♥
              </span>
            </div>
          </div>

          <p
            aria-hidden
            className="font-script absolute inset-x-0 bottom-[4%] text-center text-[clamp(1.7rem,7vw,2.5rem)] leading-none text-[#6f5943]/85"
          >
            {invitation.monogram.left}
            {invitation.monogram.right}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
