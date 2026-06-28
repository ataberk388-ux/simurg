import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getReferenceProjects } from "@/content/home";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Gizlilik ilkesiyle yürüttüğümüz proje deneyimlerimizi sektör ve hizmet kapsamı üzerinden paylaşıyoruz.",
};

export default async function ReferencesPage() {
  const locale = await getLocale();
  const tn = await getTranslations("nav");
  const th = await getTranslations("home");
  const tp = await getTranslations("pages");
  const referenceProjects = getReferenceProjects(locale);
  return (
    <>
      <PageHero
        eyebrow={tn("references")}
        title={<span className="text-gold-gradient">{th("refTitle")}</span>}
        description={th("refSubtitle")}
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {referenceProjects.map((r, i) => (
              <Reveal
                key={r.sector}
                delay={i * 0.06}
                className="group rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7 transition-all hover:border-gold-400/35"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-gold-300" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="font-serif text-lg font-semibold text-gold-200">
                  {r.sector}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {r.scope}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-2xl border border-dashed border-gold-400/25 bg-ink-900/40 p-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/60">
              {tp("referencesNote")}
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
