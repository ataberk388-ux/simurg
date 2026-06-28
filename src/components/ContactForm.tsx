"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, subjects, type ContactInput } from "@/lib/contact-schema";
import { SuccessBurst } from "@/components/SuccessBurst";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-gold-400/20 bg-ink-800/80 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/20";

export function ContactForm() {
  const t = useTranslations("form");
  const ts = useTranslations("subjects");
  const fe = useTranslations("ferr");
  const errMsg = (m?: string) => (m ? fe(m) : "");
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: subjects[0] },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || t("genericError"));
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : t("genericError"));
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="flex flex-col items-center justify-center rounded-2xl border border-gold-400/25 bg-ink-700/50 p-10 text-center"
      >
        <SuccessBurst />
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-5 font-serif text-2xl font-semibold text-foreground"
        >
          {t("successTitle")}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
          className="mt-3 max-w-sm text-sm text-foreground/60"
        >
          {t("successText")}
        </motion.p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold-300 hover:text-gold-200"
        >
          {t("newMessage")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            {t("name")} *
          </label>
          <input
            {...register("name")}
            className={fieldClass}
            placeholder={t("namePh")}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.name.message)}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            {t("phone")} *
          </label>
          <input
            {...register("phone")}
            className={fieldClass}
            placeholder="+90 5xx xxx xx xx"
            autoComplete="tel"
            inputMode="tel"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.phone.message)}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            {t("company")}
          </label>
          <input
            {...register("companyName")}
            className={fieldClass}
            placeholder={t("companyPh")}
            autoComplete="organization"
          />
          {errors.companyName && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.companyName.message)}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            {t("email")} *
          </label>
          <input
            {...register("email")}
            className={fieldClass}
            placeholder={t("emailPh")}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.email.message)}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            {t("subject")} *
          </label>
          <select {...register("subject")} className={cn(fieldClass, "appearance-none")}>
            {subjects.map((s, i) => (
              <option key={s} value={s} className="bg-ink-800">
                {ts(`s${i}`)}
              </option>
            ))}
          </select>
          {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.subject.message)}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-foreground/70">
          {t("message")} *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className={cn(fieldClass, "resize-none")}
          placeholder={t("messagePh")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.message.message)}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-foreground/65">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold-400"
          />
          <span>
            {t("consentPre")}
            <Link href="/kvkk-aydinlatma" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
              {t("consentLink")}
            </Link>
            {t("consentPost")}
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-xs text-red-400">{errMsg(errors.consent.message)}</p>}
      </div>

      {status === "error" && serverError && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-[0_8px_30px_-8px_rgba(212,175,55,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-6px_rgba(212,175,55,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? t("sending") : t("send")}
      </button>
    </form>
  );
}
