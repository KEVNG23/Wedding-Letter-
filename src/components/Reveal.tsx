"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXURY } from "@/lib/invitation-data";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({ children, className, delay = 0, y = 30, as = "div" }: Props) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -12% 0px" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 1.05, ease: EASE_LUXURY, delay }
      }
    >
      {children}
    </Tag>
  );
}
