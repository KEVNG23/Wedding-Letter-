import Image from "next/image";
import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

export function Welcome() {
  return (
    <section className="relative overflow-hidden bg-[#461c22] px-6 py-20 sm:py-28">
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-16">
        <Reveal className="flex justify-center md:justify-start">
          <div className="relative w-[70%] max-w-[320px] -rotate-[5deg] drop-shadow-[0_26px_50px_rgba(24,6,10,0.55)] sm:w-[62%] md:w-full">
            <Image
              src="/assets/couple-polaroid.png"
              alt="Annie và Dũng thuở nhỏ"
              width={699}
              height={799}
              sizes="(max-width: 768px) 60vw, 320px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="text-center md:text-left">
          <Reveal delay={0.12}>
            <h2 className="font-display text-[clamp(1.15rem,3.6vw,1.7rem)] tracking-[0.2em] text-[#f7ecd9]">
              {invitation.welcomeHeading}
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mx-auto mt-7 max-w-[34rem] text-[clamp(1.05rem,2.6vw,1.32rem)] leading-[1.75] font-light text-[#ecd9be] italic md:mx-0">
              {invitation.welcomeBody}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-center md:justify-between">
              <p className="text-[clamp(1.2rem,3vw,1.5rem)] text-[#f2e2c9] italic">
                {invitation.welcomeSignature}
              </p>

              <Image
                src="/assets/geese.png"
                alt=""
                width={800}
                height={655}
                sizes="220px"
                className="pointer-events-none h-auto w-[180px] opacity-70 sm:w-[200px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
