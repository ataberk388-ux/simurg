import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import {
  getProjectExperience,
  getProjectsHeadline,
  getProjectsIntro,
  getProjectsConfidentiality,
  getProjectsClosingTitle,
  getProjectsClosingBody,
} from "@/content/projects";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const tn = await getTranslations("nav");
  return {
    title: tn("projects"),
    description: getProjectsIntro(locale).slice(0, 180),
    alternates: pageAlternates("/proje-deneyimimiz", locale),
  };
}

export default async function ProjectExperiencePage() {
  const locale = await getLocale();
  const tn = await getTranslations("nav");
  const tp = await getTranslations("projects");
  const projects = getProjectExperience(locale);

  return (
    <>
      <PageHero
        eyebrow={tn("projects")}
        title={<span className="text-gold-gradient">{getProjectsHeadline(locale)}</span>}
        description={getProjectsIntro(locale)}
      />

      <section className="pb-8">
        <Container>
          {/* Gizlilik ilkesi */}
          <Reveal className="mx-auto mb-14 max-w-3xl rounded-2xl border border-gold-400/15 bg-ink-700/40 p-6 text-center">
            <p className="text-sm leading-relaxed text-foreground/65">
              {getProjectsConfidentiality(locale)}
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal
                key={p.no}
                delay={i * 0.06}
                className="flex flex-col rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7 transition-all hover:border-gold-400/35 sm:p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl font-semibold text-gold-gradient">
                    {p.no}
                  </span>
                  <h2 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
                    {p.title}
                  </h2>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/65">
                  {p.body}
                </p>
                <div className="mt-6 border-t border-gold-400/10 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-400/80">
                    {tp("areas")}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.areas.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1.5 text-xs text-foreground/75"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Kapanış */}
          <Reveal className="mt-14 rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-700 to-ink-900 p-8 text-center sm:p-12">
            <h2 className="mx-auto max-w-2xl font-serif text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              {getProjectsClosingTitle(locale)}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/65 sm:text-base">
              {getProjectsClosingBody(locale)}
            </p>
            <div className="mt-8">
              <Button href="/iletisim">{tp("cta")}</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
