import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getMission, getVision, getPhilosophy } from "@/content/about";

export const metadata: Metadata = {
  title: "Misyon & Vizyon",
  description:
    "Simurg Finansal Danışmanlık A.Ş.'nin misyonu, vizyonu ve marka felsefesi.",
};

export default async function MissionVisionPage() {
  const locale = await getLocale();
  const t = await getTranslations("pages");
  const tn = await getTranslations("nav");

  return (
    <>
      <PageHero
        eyebrow={t("corporate")}
        title={
          <>
            {tn("missionVision").split("&")[0].trim()}{" "}
            <span className="text-gold-gradient">&amp; {tn("missionVision").split("&")[1]?.trim()}</span>
          </>
        }
        description={t("mvDesc")}
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-ink-700/50 p-8 sm:p-10">
              <div className="gold-radial absolute inset-0 opacity-50" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {t("mission")}
                </span>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  {getMission(locale)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-ink-700/50 p-8 sm:p-10">
              <div className="gold-radial absolute inset-0 opacity-50" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {t("vision")}
                </span>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  {getVision(locale)}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-6 rounded-3xl border border-gold-400/15 bg-ink-900/50 p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t("philosophy")}
            </span>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground/75">
              {getPhilosophy(locale)}
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
