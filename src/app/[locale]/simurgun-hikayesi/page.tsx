import type { Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import {
  getStoryParagraphs,
  getStoryHighlights,
  getValleys,
} from "@/content/about";

export const metadata: Metadata = {
  title: "Simurg'un Hikayesi",
  description:
    "Otuz kuşun yolculuğu ve Simurg'un çalışma felsefesi: gerçek güç, doğru stratejiyle keşfedilen içsel potansiyelde saklıdır.",
};

export default async function StoryPage() {
  const locale = await getLocale();
  const t = await getTranslations("pages");
  const storyParagraphs = getStoryParagraphs(locale);
  const storyHighlights = getStoryHighlights(locale);
  const valleys = getValleys(locale);
  return (
    <>
      <PageHero
        eyebrow={t("corporate")}
        title={
          <>
            {t("storyTitle")} <span className="text-gold-gradient">{t("storyTitleHi")}</span>
          </>
        }
        description={t("storyDesc")}
      />

      {/* Hikâye metni + amblem */}
      <section className="pb-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5">
              {storyParagraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="leading-relaxed text-foreground/70">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="space-y-6">
              <Reveal className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-700 to-ink-900 p-8">
                <div className="gold-radial absolute inset-0" />
                <div className="relative mx-auto aspect-square w-full max-w-xs">
                  <Image
                    src="/brand/phoenix.png"
                    alt="Simurg amblemi"
                    fill
                    sizes="320px"
                    className="object-contain"
                  />
                </div>
              </Reveal>

              {/* Yedi vadi */}
              <Reveal delay={0.1} className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {t("valleys")}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {valleys.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-gold-400/25 px-3 py-1.5 text-sm text-foreground/75"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Vurgu cümleleri */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {storyHighlights.map((h, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7"
              >
                <span className="font-serif text-3xl text-gold-gradient">"</span>
                <p className="mt-2 leading-relaxed text-foreground/80">{h}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
