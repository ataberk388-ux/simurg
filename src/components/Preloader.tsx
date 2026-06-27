"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const finish = () => {
      (window as Window & { __simurgIntroDone?: boolean }).__simurgIntroDone =
        true;
      window.dispatchEvent(new Event("simurg-intro-done"));
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Her yüklemede (yenileme dahil) baştan oynar — yalnızca düşük-hareket
    // tercihinde atlanır.
    if (reduced) {
      finish();
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      finish();
    }, 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="gold-radial absolute inset-0" />

          {/* Anka — küllerden belirir */}
          <motion.div
            className="relative h-44 w-44 sm:h-56 sm:w-56"
            initial={{ opacity: 0, scale: 0.6, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <Image
              src="/brand/phoenix.png"
              alt="Simurg"
              fill
              priority
              sizes="240px"
              className="object-contain"
            />
          </motion.div>

          {/* Wordmark */}
          <motion.div
            className="relative mt-2 flex gap-[0.12em] font-serif text-4xl font-semibold tracking-[0.2em] sm:text-5xl"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
          >
            {"SİMURG".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="text-gold-gradient"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* Altın çizgi çizilir */}
          <motion.span
            className="mt-4 block h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 220, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />
          <motion.p
            className="mt-3 text-[10px] uppercase tracking-[0.35em] text-foreground/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Finansal Danışmanlık
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
