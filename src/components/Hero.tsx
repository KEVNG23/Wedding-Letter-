"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXURY, invitation } from "@/lib/invitation-data";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 1.4, ease: EASE_LUXURY, delay },
  });

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? { scale: 1 } : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      >
        <Image
          src="/assets/saigon-blur.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_38%]"
        />
      </motion.div>

      {/* A cream veil brightens the middle of the watercolour so the burgundy
          lettering reads, without draining the artwork's colour. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,241,220,0.42)_0%,rgba(250,241,220,0.22)_55%,rgba(250,241,220,0.04)_100%)]" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          {...rise(0.25)}
          className="font-serif text-[clamp(2.8rem,12vw,7.5rem)] leading-[0.95] font-light tracking-[0.14em] text-[#4a1d24] drop-shadow-[0_1px_18px_rgba(250,241,220,0.95)]"
        >
          {invitation.groomFirst}
        </motion.h1>

        <motion.span
          {...rise(0.45)}
          className="font-script my-1 text-[clamp(1.6rem,5.5vw,2.6rem)] text-[#8a5a3c] drop-shadow-[0_1px_14px_rgba(250,241,220,0.95)] sm:my-2"
        >
          {invitation.heroJoiner}
        </motion.span>

        <motion.h1
          {...rise(0.6)}
          className="font-serif text-[clamp(2.8rem,12vw,7.5rem)] leading-[0.95] font-light tracking-[0.14em] text-[#4a1d24] drop-shadow-[0_1px_18px_rgba(250,241,220,0.95)]"
        >
          {invitation.brideFirst}
        </motion.h1>

        <motion.p
          {...rise(0.85)}
          className="font-script mt-5 text-[clamp(1.5rem,5vw,2.4rem)] text-[#8a5a3c] drop-shadow-[0_1px_14px_rgba(250,241,220,0.95)] sm:mt-7"
        >
          {invitation.heroTagline}
        </motion.p>
      </div>

      <motion.div
        {...rise(1.4)}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-[#5a2a2a]"
      >
        <span className="font-serif text-[0.9rem] tracking-[0.18em] drop-shadow-[0_1px_8px_rgba(250,241,220,0.95)]">
          {invitation.heroScrollHint}
        </span>
        <motion.span
          aria-hidden
          className="block h-8 w-px bg-gradient-to-b from-[#5a2a2a] to-transparent"
          animate={reduceMotion ? {} : { opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
