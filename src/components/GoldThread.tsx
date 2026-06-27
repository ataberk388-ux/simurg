"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* Sayfanın solunda, scroll ile çizilen ince altın iplik + ışıltılı uç. */
export function GoldThread() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pointer-events-none fixed left-6 top-0 z-40 hidden h-screen w-px xl:block">
      {/* Soluk taban çizgi */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/15 to-transparent" />
      {/* Çizilen parlak kısım */}
      <motion.div
        style={{ scaleY }}
        className="absolute inset-0 origin-top bg-gradient-to-b from-gold-500/0 via-gold-400 to-gold-300"
      />
      {/* Işıltılı uç */}
      <motion.div
        style={{ top: dotY }}
        className="absolute -left-[3px] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold-200 shadow-[0_0_12px_3px_rgba(212,175,55,0.7)]"
      />
    </div>
  );
}
