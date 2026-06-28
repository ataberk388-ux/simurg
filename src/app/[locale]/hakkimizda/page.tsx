import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getLocale, getTranslations } from "next-intl/server";
import { pick } from "@/content/_pick";
import { companyIntro, getWhyCards } from "@/content/home";
import { getPhilosophy } from "@/content/about";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Simurg Finansal Danışmanlık A.Ş.; mali, finansal, hukuki ve stratejik danışmanlığı tek çatı altında buluşturan bütünleşik bir çözüm ortağıdır.",
};

export default async function AboutPage() {
  const locale = await getLocale();
  const tp = await getTranslations("pages");
  const tn = await getTranslations("nav");
  const tc2 = await getTranslations("common2");
  const whyCards = getWhyCards(locale);

  const kurumsalLinks = [
    { label: tn("story"), href: "/simurgun-hikayesi", desc: tp("linkStoryDesc") },
    { label: tn("missionVision"), href: "/misyon-vizyon", desc: tp("linkMvDesc") },
    { label: tn("group"), href: "/grup-yapimiz", desc: tp("linkGroupDesc") },
    { label: tn("consultants"), href: "/danismanlar", desc: tp("linkConsultantsDesc") },
  ];

  return (
    <>
      <PageHero
        eyebrow={tp("corporate")}
        title={
          <>
            {tp("aboutTitle1")}{" "}
            <span className="text-gold-gradient">{tp("aboutTitleHi")}</span>
          </>
        }
        description={tp("aboutDesc")}
      />

      {/* Tanıtım */}
      <section className="py-8">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-700 to-ink-900 p-10">
                <div className="gold-radial absolute inset-0" />
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                  <Image
                    src="/brand/phoenix.png"
                    alt="Simurg amblemi"
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                {tp("aboutWho")}
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/70">{pick(companyIntro, locale)}</p>
              <p className="mt-4 leading-relaxed text-foreground/60">{getPhilosophy(locale)}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Kurumsal sayfalara yönlendirme */}
      <section className="py-12">
        <Container>
          <SectionTitle eyebrow={tp("corporate")} title={tp("aboutExplore")} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {kurumsalLinks.map((k, i) => (
              <Reveal key={k.href} delay={i * 0.07}>
                <Link
                  href={k.href}
                  className="group flex h-full flex-col rounded-2xl border border-gold-400/15 bg-ink-700/50 p-6 transition-all hover:-translate-y-1 hover:border-gold-400/40"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold-200">
                    {k.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-foreground/55">{k.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold-300 transition-all group-hover:gap-3">
                    {tc2("explore")}
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Değerler */}
      <section className="py-12">
        <Container>
          <SectionTitle eyebrow={tp("aboutValuesEyebrow")} title={tp("aboutValuesTitle")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.07}
                className="rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-gold-200">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
