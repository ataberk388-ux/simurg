"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { SuccessBurst } from "@/components/SuccessBurst";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-gold-400/20 bg-ink-800/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20";

export function CareerForm() {
  const t = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if ((fd.get("website") as string)?.length) return; // honeypot

    const consent = fd.get("consent") === "on";
    if (!consent) {
      setError(t("consentError"));
      return;
    }

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      subject: "Kariyer — Genel Başvuru",
      message: `Uzmanlık alanı: ${fd.get("expertise") || "-"}\n\n${fd.get("message") || ""}`,
      consent: true,
    };

    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.error || t("genericError"));
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t("genericError"));
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-gold-400/25 bg-ink-700/50 p-10 text-center"
      >
        <SuccessBurst />
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          {t("applySuccessTitle")}
        </h3>
        <p className="mt-3 max-w-sm text-sm text-foreground/60">
          {t("applySuccessText")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">{t("name")} *</label>
          <input name="name" required className={fieldClass} placeholder={t("namePh")} autoComplete="name" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">{t("phone")} *</label>
          <input name="phone" required className={fieldClass} placeholder="+90 5xx xxx xx xx" autoComplete="tel" inputMode="tel" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">{t("email")} *</label>
          <input name="email" type="email" required className={fieldClass} placeholder={t("emailPh")} autoComplete="email" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">{t("expertise")}</label>
          <input name="expertise" className={fieldClass} placeholder={t("expertisePh")} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-foreground/70">{t("message")}</label>
        <textarea name="message" rows={4} className={cn(fieldClass, "resize-none")} placeholder={t("applyMessagePh")} />
      </div>

      <p className="text-xs text-foreground/45">
        {t("cvNote1")}{" "}
        <a href={`mailto:${site.email}`} className="text-gold-300 hover:text-gold-200">
          {site.email}
        </a>
        {t("cvNote2")}
      </p>

      <label className="flex items-start gap-3 text-sm text-foreground/65">
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-gold-400" />
        <span>
          {t("consentPre")}
          <Link href="/kvkk-aydinlatma" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
            {t("consentLink")}
          </Link>
          {t("applyConsentPost")}
        </span>
      </label>

      {status === "error" && error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? t("sending") : t("applySend")}
      </button>
    </form>
  );
}
