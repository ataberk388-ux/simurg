"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/content/site-content";

const INTERVAL = 5500;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto mt-14 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-gold-400/20 bg-ink-700/50 p-8 sm:min-h-[240px] sm:p-12">
        <div className="gold-radial absolute inset-0 opacity-60" />
        <svg
          viewBox="0 0 24 24"
          className="relative mb-6 h-10 w-10 fill-gold-400/40"
        >
          <path d="M9.5 8C6.5 8 4 10.5 4 13.5S6 19 9 19c.3 0 .5 0 .8-.1C9 20.7 7.2 22 5 22v2c5 0 9-4.3 9-9.5C14 10.5 12 8 9.5 8Zm10 0C16.5 8 14 10.5 14 13.5S16 19 19 19c.3 0 .5 0 .8-.1C19 20.7 17.2 22 15 22v2c5 0 9-4.3 9-9.5C24 10.5 22 8 19.5 8Z" />
        </svg>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="relative cursor-grab touch-pan-y select-none active:cursor-grabbing"
          >
            <p className="text-lg leading-relaxed text-foreground/85 sm:text-xl">
              “{t.quote}”
            </p>
            <div className="mt-6">
              <p className="font-serif text-lg font-medium text-gold-200">
                {t.author}
              </p>
              <p className="text-sm text-foreground/45">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Kontroller */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Önceki"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}. yorum`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-gold-400"
                  : "w-2 bg-gold-400/30 hover:bg-gold-400/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Sonraki"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
