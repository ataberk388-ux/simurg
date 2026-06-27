"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* WebGL yoksa/çökerse: CSS + Framer ile TAM EKRAN animasyonlu Anka
   (küllerinden doğuş + tüm ekrana yayılan korlar + nefes alan hâle + süzülme). */
export function PhoenixFallback() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero boyunca scroll'a bağlı büyüme + yukarı süzülme + sönme
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.18], ["0%", "-14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.18], [1, 0.7, 0]);

  // Fare parallax eğimi (3B hissi)
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      ry.set((e.clientX / window.innerWidth - 0.5) * 12);
      rx.set(-(e.clientY / window.innerHeight - 0.5) * 9);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, rx, ry]);

  // Tüm ekrana yayılan korlar
  const emberCount =
    typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 28;
  const embers = useMemo(
    () =>
      Array.from({ length: emberCount }).map(() => ({
        left: Math.random() * 100,
        bottom: Math.random() * 22,
        size: Math.random() * 5 + 2.5,
        delay: Math.random() * 7,
        dur: Math.random() * 5 + 6,
        drift: Math.random() * 80 - 40,
      })),
    [emberCount],
  );

  return (
    <motion.div style={{ scale, y, opacity }} className="absolute inset-0">
      {/* Full-bleed nefes alan hâle */}
      <div
        className="absolute inset-0 motion-safe:animate-[glow-pulse_6s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(closest-side at 50% 44%, rgba(212,175,55,0.2), transparent 72%)",
        }}
      />

      {/* Korlar — tüm genişlik, ekran boyunca yükselir */}
      {!reduced &&
        embers.map((e, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full bg-gold-300"
            style={{
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: e.size,
              height: e.size,
              ["--drift" as string]: `${e.drift}px`,
              animation: `ember-rise ${e.dur}s linear ${e.delay}s infinite`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 6px 1px rgba(212,175,55,0.55)",
            }}
          />
        ))}

      {/* Anka — ortada, küllerinden doğuş + süzülme + eğim */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      >
        <motion.div
          className="relative h-[80vmin] w-[80vmin] max-h-[760px] max-w-[760px]"
          initial={
            reduced
              ? false
              : {
                  clipPath: "inset(100% 0 0 0)",
                  scale: 0.92,
                  filter: "blur(10px)",
                  opacity: 0,
                }
          }
          animate={{
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{ duration: 1.7, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={reduced ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/brand/phoenix.png"
              alt="Simurg Anka kuşu amblemi"
              fill
              priority
              sizes="80vmin"
              className="object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.28)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
