"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    // İmleç ışığı konumu
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    // Hafif 3B tilt
    el.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 8}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Link
      ref={ref}
      href={`/hizmetler/${service.slug}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: "perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-400/15 bg-ink-700/60 p-7 transition-[transform,border-color,background-color] duration-300 ease-out [transform-style:preserve-3d] hover:-translate-y-1 hover:border-gold-400/45 hover:bg-ink-600/70"
    >
      {/* İmleç ışığı */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.16), transparent 65%)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold-400/15" />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent text-gold-300 transition-colors duration-500 group-hover:text-gold-200">
        <ServiceIcon icon={service.icon} className="h-7 w-7" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
        {service.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-all group-hover:gap-3">
        Detayları görün
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
