"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { PhoenixFallback } from "@/components/phoenix/PhoenixFallback";
import { site } from "@/lib/site";

const PhoenixScene = dynamic(() => import("@/components/phoenix/PhoenixScene"), {
  ssr: false,
});

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl2") ||
        c.getContext("webgl") ||
        c.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const wordVariant = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function PhoenixHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef(0);
  const [mode, setMode] = useState<"loading" | "3d" | "fallback">("loading");
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // WebGL hiç yoksa veya düşük-hareket tercihinde → CSS sürümü (gerçek son çare)
    if (reduced || !supportsWebGL()) {
      setMode("fallback");
      return;
    }
    // 3D'yi preloader bitince başlat (GPU yükü çakışmasın)
    const done =
      (window as Window & { __simurgIntroDone?: boolean }).__simurgIntroDone ===
      true;
    if (done) {
      setMode("3d");
      return;
    }
    const onDone = () => setMode("3d");
    window.addEventListener("simurg-intro-done", onDone, { once: true });
    const safety = setTimeout(onDone, 4500); // emniyet
    return () => {
      window.removeEventListener("simurg-intro-done", onDone);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const h = el.offsetHeight || window.innerHeight;
      scrollRef.current = Math.min(1, Math.max(0, window.scrollY / h));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPointer = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--hy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onPointer}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Anka — birincil 3D sahne; WebGL yoksa/onarılamazsa CSS sürümü */}
      <div className="absolute inset-0">
        {mode === "3d" && (
          <PhoenixScene
            scrollRef={scrollRef}
            onUnrecoverable={() => setMode("fallback")}
          />
        )}
        {mode === "fallback" && <PhoenixFallback />}
      </div>

      {/* İmleç takipli ışık */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--hx,50%) var(--hy,35%), rgba(212,175,55,0.12), transparent 70%)",
        }}
      />

      {/* Alt karartma (scrim) — sayfa zeminiyle (ink-800) kusursuz birleşir */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-ink-800 from-10% via-ink-800/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-800/70 to-transparent" />

      {/* Üst: şirket adı */}
      <div className="absolute inset-x-0 top-24 z-10 flex justify-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-ink-900/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-300 backdrop-blur"
        >
          {site.legalName}
        </motion.span>
      </div>

      {/* Alt: başlık + CTA */}
      <Container className="relative z-10 pb-8 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } },
            }}
            initial="hidden"
            animate="show"
            className="font-serif text-3xl font-semibold leading-[1.22] text-foreground sm:text-5xl md:text-6xl"
          >
            <span className="block">
              {t("line1").split(" ").map((w, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block">
                  {w}&nbsp;
                </motion.span>
              ))}
            </span>
            <span className="block">
              {t("line2").split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block text-gold-gradient pb-[0.18em] -mb-[0.18em] pt-[0.06em] -mt-[0.06em]"
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.45, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          >
            <Magnetic>
              <Button href="/hizmetler">{tc("exploreServices")}</Button>
            </Magnetic>
            <Magnetic>
              <Button href="/iletisim" variant="outline">
                {tc("freeConsult")}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href={`https://wa.me/${site.whatsapp}`}
                variant="ghost"
                className="border border-gold-400/20"
              >
                {tc("whatsapp")}
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </Container>

      <a
        href="#icerik"
        className="absolute bottom-2 left-1/2 z-10 hidden -translate-x-1/2 text-gold-300/60 transition-colors hover:text-gold-300 sm:block"
        aria-label="Aşağı kaydır"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-gold-400/40 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </span>
      </a>
    </section>
  );
}
