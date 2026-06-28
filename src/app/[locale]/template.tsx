"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Geçiş perdesi — her geçişte yukarı kalkar (üstte altın ince kenar) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[80] border-t-2 border-gold-400 bg-ink-900"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
