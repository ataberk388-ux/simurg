"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "simurg-cookie-consent";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };

const defaultPrefs: Prefs = { necessary: true, analytics: false, marketing: false };

/** Footer'dan paneli yeniden açmak için: window.dispatchEvent(new Event("open-cookie-prefs")) */
export function CookieConsent() {
  const t = useTranslations("cookie");
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);

  useEffect(() => {
    setMounted(true);
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* yoksay */
    }
    if (!stored) setShowBanner(true);
    else {
      try {
        setPrefs({ ...defaultPrefs, ...JSON.parse(stored) });
      } catch {
        /* yoksay */
      }
    }

    const open = () => {
      setPanelOpen(true);
      setShowBanner(false);
    };
    window.addEventListener("open-cookie-prefs", open);
    return () => window.removeEventListener("open-cookie-prefs", open);
  }, []);

  const persist = (p: Prefs) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch {
      /* yoksay */
    }
    setPrefs(p);
    setShowBanner(false);
    setPanelOpen(false);
  };

  const acceptAll = () => persist({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => persist({ necessary: true, analytics: false, marketing: false });

  if (!mounted) return null;

  return (
    <>
      {/* İlk giriş banner'ı */}
      <AnimatePresence>
        {showBanner && !panelOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-x-0 bottom-0 z-[60] p-4"
          >
            <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-gold-400/20 bg-ink-900/95 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:p-6">
              <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                {t("bannerText")}{" "}
                <Link href="/cerez-politikasi" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
                  {t("bannerLink")}
                </Link>{" "}
                {t("bannerTextEnd")}
              </p>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => setPanelOpen(true)}
                  className="rounded-full border border-gold-400/30 px-4 py-2 text-xs font-medium text-gold-200 transition-colors hover:bg-gold-400/10"
                >
                  {t("manage")}
                </button>
                <button
                  onClick={rejectAll}
                  className="rounded-full border border-gold-400/30 px-4 py-2 text-xs font-medium text-foreground/70 transition-colors hover:bg-gold-400/10"
                >
                  {t("reject")}
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-2 text-xs font-semibold text-ink-900"
                >
                  {t("acceptAll")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tercih yönetim paneli */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
          >
            <div className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm" onClick={() => setPanelOpen(false)} />
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold-400/20 bg-ink-800 shadow-2xl"
            >
              <div className="gold-radial absolute inset-x-0 top-0 h-24" />
              <div className="relative p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {t("title")}
                </h3>
                <p className="mt-2 text-sm text-foreground/55">
                  {t("subtitle")}
                </p>

                <div className="mt-6 space-y-3">
                  <PrefRow
                    title={t("necessary")}
                    desc={t("necessaryDesc")}
                    locked
                    checked
                  />
                  <PrefRow
                    title={t("analytics")}
                    desc={t("analyticsDesc")}
                    checked={prefs.analytics}
                    onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                  />
                  <PrefRow
                    title={t("marketing")}
                    desc={t("marketingDesc")}
                    checked={prefs.marketing}
                    onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                  />
                </div>

                <div className="mt-7 flex flex-wrap justify-end gap-2.5">
                  <button
                    onClick={rejectAll}
                    className="rounded-full border border-gold-400/30 px-4 py-2 text-xs font-medium text-foreground/70 transition-colors hover:bg-gold-400/10"
                  >
                    {t("onlyNecessary")}
                  </button>
                  <button
                    onClick={() => persist(prefs)}
                    className="rounded-full border border-gold-400/30 px-4 py-2 text-xs font-medium text-gold-200 transition-colors hover:bg-gold-400/10"
                  >
                    {t("save")}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-2 text-xs font-semibold text-ink-900"
                  >
                    {t("acceptAll")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PrefRow({
  title,
  desc,
  checked,
  locked,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-gold-400/15 bg-ink-700/40 p-4">
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground/55">{desc}</p>
      </div>
      <button
        type="button"
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        aria-pressed={checked}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-gold-400" : "bg-ink-500"
        } ${locked ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-ink-900 transition-all ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
