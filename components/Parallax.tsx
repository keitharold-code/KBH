"use client";

import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Subtle vertical drift (±40px) for hero backgrounds. Disabled for reduced motion. */
export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <div ref={ref} className={className}>
      <LazyMotion features={domAnimation} strict>
        <m.div style={reduce ? undefined : { y }} className="h-full w-full">
          {children}
        </m.div>
      </LazyMotion>
    </div>
  );
}
