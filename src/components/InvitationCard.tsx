import Image from "next/image";
import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

/**
 * Lace doily card sitting in front of the open envelope.
 * Text is laid out in the VISIBLE oval (above the envelope fold), matching
 * the Canva composition: title in the top quarter, names in the centre,
 * heart just above the envelope, interlocking DT on the envelope face.
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

            {/* Visible oval only — envelope covers from ~63% down. */}
            <div className="absolute inset-x-[16%] top-[10%] bottom-[39%] flex flex-col items-center text-center text-[#5a3a24]">
              <div className="shrink-0">
                <p className="font-display whitespace-pre-line text-[clamp(0.6rem,2.15vw,0.78rem)] leading-[1.35] tracking-[0.14em]">
                  {invitation.cardTitle}
                </p>
                <span
                  aria-hidden
                  className="mx-auto mt-[0.55rem] block h-px w-[42%]"
                  style={{ backgroundColor: "#bfa887" }}
                />
              </div>

              <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-[2%]">
                <p className="font-script text-[clamp(1.15rem,4.8vw,1.7rem)] leading-[1.15]">
                  {invitation.groomFull}
                </p>
                <p className="font-display my-[0.35rem] text-[clamp(0.7rem,2.6vw,0.95rem)] leading-none">
                  &amp;
                </p>
                <p className="font-script text-[clamp(1.15rem,4.8vw,1.7rem)] leading-[1.15]">
                  {invitation.brideName}
                </p>
                <p className="font-script mt-[0.15rem] text-[clamp(0.82rem,3.3vw,1.15rem)] leading-none">
                  {invitation.brideNickname}
                </p>
              </div>

              <span
                aria-hidden
                className="shrink-0 text-[clamp(0.68rem,2.4vw,0.9rem)] text-[#8a6f52]"
              >
                ♥
              </span>
            </div>
          </div>

          <div
            aria-hidden
            className="font-script pointer-events-none absolute inset-x-0 top-[73.5%] flex justify-center text-[clamp(3.6rem,17vw,5.6rem)] leading-none text-[#6f5943]"
          >
            <span className="relative inline-block h-[1.05em] w-[1.68em]">
              <span className="absolute left-0 top-0">{invitation.monogram.left}</span>
              <span className="absolute left-[0.58em] top-0">
                {invitation.monogram.right}
              </span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
