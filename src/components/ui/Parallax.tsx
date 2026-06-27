"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* Scroll'a bağlı dikey kayma (derinlik hissi).
   Dış kap ölçülür, iç katman hareket eder → geri besleme olmaz. */
export function Parallax({
  children,
  speed = 0.25,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 120}px`, `${speed * 120}px`],
  );
  const y = useSpring(raw, { stiffness: 120, damping: 30, restDelta: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
