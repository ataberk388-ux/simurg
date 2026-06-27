"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoenixLogo } from "@/components/PhoenixLogo";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold-400/15 bg-ink-900/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <PhoenixLogo size={40} className="transition-transform duration-500 group-hover:scale-110" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
              SİMURG
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400/80">
              Finansal Danışmanlık
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors",
                  active
                    ? "text-gold-300"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={`tel:${site.phoneRaw}`} variant="outline" className="px-5 py-2 text-xs">
            {site.phone}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-px w-6 bg-gold-300 transition-all", open && "translate-y-[7px] rotate-45")} />
          <span className={cn("h-px w-6 bg-gold-300 transition-all", open && "opacity-0")} />
          <span className={cn("h-px w-6 bg-gold-300 transition-all", open && "-translate-y-[7px] -rotate-45")} />
        </button>
      </Container>

      {/* Mobil menü */}
      <div
        className={cn(
          "overflow-hidden border-t border-gold-400/10 bg-ink-900/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm text-foreground/80 hover:bg-gold-400/10 hover:text-gold-200"
            >
              {item.label}
            </Link>
          ))}
          <Button href={`tel:${site.phoneRaw}`} className="mt-2">
            {site.phone}
          </Button>
        </Container>
      </div>
    </header>
  );
}
