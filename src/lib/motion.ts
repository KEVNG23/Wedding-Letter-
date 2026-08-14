import type { Variants } from "framer-motion";
import { EASE_LUXURY } from "./invitation-data";

export const luxuryTransition = {
  duration: 1.1,
  ease: EASE_LUXURY,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: luxuryTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: EASE_LUXURY } },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.3, ease: EASE_LUXURY } },
};

export const stagger = (staggerChildren = 0.14, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
