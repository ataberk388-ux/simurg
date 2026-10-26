import { Container } from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";

export type LegalSection = { heading: string; body: string[] };

export async function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  const t = await getTranslations("legal");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={title} description={intro} />
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-xs uppercase tracking-[0.15em] text-foreground/40">
              {t("updated")}: {updated}
            </p>
            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={s.heading}>
                  <h2 className="font-serif text-xl font-semibold text-gold-200">
                    {i + 1}. {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 leading-relaxed text-foreground/65">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
