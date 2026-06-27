"use client";

import { motion } from "framer-motion";

const SPARKS = 14;

export function SuccessBurst() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      {/* Kıvılcımlar */}
      {Array.from({ length: SPARKS }).map((_, i) => {
        const angle = (i / SPARKS) * Math.PI * 2;
        const dist = 46 + (i % 3) * 8;
        return (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold-300"
            style={{ boxShadow: "0 0 6px 1px rgba(212,175,55,0.7)" }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist,
              opacity: [0, 1, 0],
              scale: [0.4, 1, 0.3],
            }}
            transition={{
              duration: 0.9,
              delay: 0.15 + (i % 3) * 0.05,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Halka */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gold-400/50 bg-gold-400/10"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      />
      {/* Yayılan dalga */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gold-400/50"
        initial={{ scale: 0.6, opacity: 0.7 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Tik — çizilerek */}
      <svg viewBox="0 0 24 24" className="relative h-9 w-9">
        <motion.path
          d="M20 6 9 17l-5-5"
          fill="none"
          stroke="#e9c45a"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
