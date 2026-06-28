import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Parallax } from "@/components/ui/Parallax";
import { PhoenixHero } from "@/components/sections/PhoenixHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import { getServices } from "@/content/services";
import { getGroupCompanies, getGroupIntro } from "@/content/group";
import { getConsultants, initials } from "@/content/consultants";
import { pick } from "@/content/_pick";
import {
  companyIntro,
  processIntro,
  getWhyCards,
  getProcessSteps,
  getReferenceProjects,
  getStats,
} from "@/content/home";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("common");

  const whyCards = getWhyCards(locale);
  const processSteps = getProcessSteps(locale);
  const referenceProjects = getReferenceProjects(locale);
  const stats = getStats(locale);
  const groupCompanies = getGroupCompanies(locale);
  const consultants = getConsultants(locale);
  const services = getServices(locale);

  return (
    <>
      <PhoenixHero />

      {/* Simurg Kimdir? */}
      <section id="icerik" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24">
        <Parallax speed={0.4} className="pointer-events-none absolute -left-24 top-10">
          <div className="h-72 w-72 rounded-full bg-gold-400/8 blur-[90px]" />
        </Parallax>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionTitle
              align="left"
              eyebrow={t("whoEyebrow")}
              title={
                <>
                  {t("whoTitle1")}{" "}
                  <span className="text-gold-gradient">{t("whoTitleHi")}</span>
                </>
              }
              subtitle={pick(companyIntro, locale)}
            />
            <Reveal delay={0.1} className="rounded-3xl border border-gold-400/15 bg-ink-700/40 p-8">
              <p className="text-lg leading-relaxed text-foreground/80">
                {t("whoQuote")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                {t("whoQuoteSub")}
              </p>
              <div className="mt-7">
                <Button href="/simurgun-hikayesi" variant="outline">
                  {t("whoCta")}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Grup Yapımız */}
      <section className="border-y border-gold-400/15 bg-ink-900/50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("groupEyebrow")}
            title={t("groupTitle")}
            subtitle={getGroupIntro(locale)}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {groupCompanies.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.1}
                className="flex flex-col rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                  {c.tag}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {c.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* İstatistik şeridi */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <CountUp
                  value={s.value}
                  className="block font-serif text-4xl font-semibold text-gold-gradient sm:text-5xl"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/55">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Parallax speed={0.45} className="pointer-events-none absolute -right-24 top-20">
          <div className="h-80 w-80 rounded-full bg-gold-500/8 blur-[100px]" />
        </Parallax>
        <Container>
          <SectionTitle
            eyebrow={t("servicesEyebrow")}
            title={t("servicesTitle")}
            subtitle={t("servicesSubtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
            <Reveal className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold-400/25 bg-ink-700/30 p-7 text-center">
              <p className="font-serif text-lg text-foreground/80">
                {t("servicesCardQ")}
              </p>
              <p className="mt-2 text-sm text-foreground/55">
                {t("servicesCardText")}
              </p>
              <div className="mt-5">
                <Button href="/iletisim" variant="outline" className="px-5 py-2 text-xs">
                  {tc("getInTouch")}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Neden Simurg? */}
      <section className="border-y border-gold-400/15 bg-ink-900/50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("whyEyebrow")}
            title={t("whyTitle")}
            subtitle={t("whySubtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.07}
                className="rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400/25 to-transparent font-serif text-gold-300">
                  {i + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Süreç Nasıl İşler? */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("processEyebrow")}
            title={t("processTitle")}
            subtitle={pick(processIntro, locale)}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.06}
                className="relative rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7"
              >
                <span className="font-serif text-3xl font-semibold text-gold-gradient">
                  {p.step}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Danışmanlar önizleme */}
      <section className="border-y border-gold-400/15 bg-ink-900/50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("consultantsEyebrow")}
            title={t("consultantsTitle")}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {consultants.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.1}
                className="flex flex-col items-center rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/30 bg-gradient-to-br from-gold-400/20 to-transparent">
                  <span className="font-serif text-2xl text-gold-gradient">
                    {initials(c.name)}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-gold-300">{c.title}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/danismanlar" variant="outline">
              {t("consultantsCta")}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Referanslar — anonim proje deneyimleri */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("refEyebrow")}
            title={t("refTitle")}
            subtitle={t("refSubtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {referenceProjects.map((r, i) => (
              <Reveal
                key={r.sector}
                delay={i * 0.06}
                className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-gold-200">
                  {r.sector}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {r.scope}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog önizleme */}
      <section className="border-t border-gold-400/15 bg-ink-900/50 py-16 sm:py-24">
        <Container>
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold-400/15 bg-ink-700/40 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {t("blogLabel")}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                {t("blogTitle")}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-foreground/60">
                {t("blogText")}
              </p>
            </div>
            <Button href="/blog" className="shrink-0">
              {tc("viewAll")}
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
