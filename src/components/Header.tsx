"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PhoenixLogo } from "@/components/PhoenixLogo";
import { cn } from "@/lib/cn";

const navKey: Record<string, string> = {
  "/": "home",
  "/kurumsal": "corporate",
  "/hakkimizda": "about",
  "/simurgun-hikayesi": "story",
  "/misyon-vizyon": "missionVision",
  "/grup-yapimiz": "group",
  "/hizmetler": "services",
  "/danismanlar": "consultants",
  "/referanslar": "references",
  "/blog": "blog",
  "/iletisim": "contact",
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const label = (href: string, fallback: string) =>
    navKey[href] ? t(navKey[href]) : fallback;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold-400/15 bg-ink-900/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <PhoenixLogo size={38} className="transition-transform duration-500 group-hover:scale-110" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
              SİMURG
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-gold-400/80">
              Finansal Danışmanlık
            </span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group/dd relative">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm transition-colors",
                    item.children.some((c) => isActive(pathname, c.href))
                      ? "text-gold-300"
                      : "text-foreground/75 hover:text-foreground",
                  )}
                >
                  {label(item.href, item.label)}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current transition-transform group-hover/dd:rotate-180" strokeWidth={2}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100 focus-within:visible focus-within:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-gold-400/20 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                          isActive(pathname, c.href)
                            ? "bg-gold-400/10 text-gold-200"
                            : "text-foreground/75 hover:bg-gold-400/10 hover:text-gold-200",
                        )}
                      >
                        {label(c.href, c.label)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm transition-colors",
                  isActive(pathname, item.href)
                    ? "text-gold-300"
                    : "text-foreground/75 hover:text-foreground",
                )}
              >
                {label(item.href, item.label)}
                {isActive(pathname, item.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                )}
              </Link>
            ),
          )}
        </nav>

        {/* Sağ: dil + WhatsApp */}
        <div className="hidden items-center gap-3 xl:flex">
          <LangSwitch />
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-2 text-xs font-medium text-gold-200 transition-all hover:border-gold-400 hover:bg-gold-400/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.4.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1Z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobil hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
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
          "overflow-y-auto overscroll-contain border-t border-gold-400/10 bg-ink-900/97 backdrop-blur-xl transition-all duration-500 xl:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href}>
                <button
                  onClick={() => setSubOpen((s) => (s === item.href ? null : item.href))}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-foreground/85 hover:bg-gold-400/10"
                >
                  {label(item.href, item.label)}
                  <svg viewBox="0 0 24 24" className={cn("h-4 w-4 fill-none stroke-current transition-transform", subOpen === item.href && "rotate-180")} strokeWidth={2}>
                    <path d="M6 9l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={cn("overflow-hidden pl-3 transition-all", subOpen === item.href ? "max-h-72" : "max-h-0")}>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-foreground/65 hover:bg-gold-400/10 hover:text-gold-200"
                    >
                      {label(c.href, c.label)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm text-foreground/85 hover:bg-gold-400/10 hover:text-gold-200"
              >
                {label(item.href, item.label)}
              </Link>
            ),
          )}
          <div className="mt-3 flex items-center justify-between border-t border-gold-400/10 pt-4">
            <LangSwitch />
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-2.5 text-xs font-semibold text-ink-900"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}

/* TR/EN dil seçici — aynı sayfada dili değiştirir */
function LangSwitch() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <Link
        href={pathname}
        locale="tr"
        className={cn("rounded px-1.5 py-0.5", locale === "tr" ? "text-gold-300" : "text-foreground/40 hover:text-foreground/70")}
      >
        TR
      </Link>
      <span className="text-foreground/30">|</span>
      <Link
        href={pathname}
        locale="en"
        className={cn("rounded px-1.5 py-0.5", locale === "en" ? "text-gold-300" : "text-foreground/40 hover:text-foreground/70")}
      >
        EN
      </Link>
    </div>
  );
}
