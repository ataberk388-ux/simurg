"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * "15+", "%100", "250+", "4" gibi değerleri ön ek/son ek koruyarak sayar.
 *
 * Sunucuda ve ilk boyamada nihai değer yazılır: JavaScript çalışmazsa,
 * animasyon engellenirse veya bölüm hiç görünür alana girmezse sayaç
 * sıfırda kalmaz. Hareket azaltma tercihi açıkken animasyon atlanır.
 */
export function CountUp({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    if (!inView || !match) return;

    const prefix = match[1] ?? "";
    const target = parseInt(match[2], 10);
    const suffix = match[3] ?? "";

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, match, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
