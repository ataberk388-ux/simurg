import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getLocale, getTranslations } from "next-intl/server";
import { getGroupCompanies, getGroupIntro } from "@/content/group";

export const metadata: Metadata = {
  title: "Grup Yapımız",
  description:
    "Simurg Finansal Danışmanlık, DG Vizyon Mali Müşavirlik ve DEWOX Kimya'dan oluşan bütünleşik ekosistem.",
};

export default async function GroupPage() {
  const locale = await getLocale();
  const tn = await getTranslations("nav");
  const tp = await getTranslations("pages");
  const groupCompanies = getGroupCompanies(locale);
  const groupIntro = getGroupIntro(locale);
  return (
    <>
      <PageHero
        eyebrow={tp("corporate")}
        title={<span className="text-gold-gradient">{tn("group")}</span>}
        description={groupIntro}
      />

      <section className="pb-8">
        <Container>
          <div className="space-y-6">
            {groupCompanies.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.08}
                className="grid gap-6 rounded-3xl border border-gold-400/15 bg-ink-700/40 p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent font-serif text-2xl text-gold-gradient">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                    {c.tag}
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                    {c.name}
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground/65">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 rounded-2xl border border-dashed border-gold-400/25 bg-ink-900/40 p-8 text-center">
            <p className="mx-auto max-w-2xl leading-relaxed text-foreground/70">
              {tp("groupNote")}
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
