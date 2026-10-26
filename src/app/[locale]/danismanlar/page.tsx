import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getLocale, getTranslations } from "next-intl/server";
import { getConsultants, getTeamIntro, initials } from "@/content/consultants";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const tp = await getTranslations("pages");
  return {
    title: tp("team"),
    description: getTeamIntro(locale).slice(0, 180),
    alternates: pageAlternates("/danismanlar", locale),
  };
}

export default async function TeamPage() {
  const locale = await getLocale();
  const tp = await getTranslations("pages");
  const consultants = getConsultants(locale);

  return (
    <>
      <PageHero
        eyebrow={tp("team")}
        title={
          <>
            {tp("consultantsTitle1")}{" "}
            <span className="text-gold-gradient">{tp("consultantsTitleHi")}</span>
          </>
        }
        description={getTeamIntro(locale)}
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {consultants.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.06}
                className="flex h-full flex-col rounded-3xl border border-gold-400/15 bg-ink-700/40 p-7 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  {/* Genel görsel yer tutucu — baş harfler */}
                  <div
                    aria-hidden
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-400/20 to-transparent sm:h-24 sm:w-24"
                  >
                    <span className="font-serif text-2xl text-gold-gradient sm:text-3xl">
                      {initials(c.name)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                      {c.name}
                    </h2>
                    <p className="mt-1.5 text-sm font-medium text-gold-300">
                      {c.title}
                      {c.org && (
                        <span className="text-foreground/45"> · {c.org}</span>
                      )}
                    </p>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/65">
                  {c.bio}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-gold-400/10 pt-5">
                  {c.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1.5 text-xs text-foreground/75"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
