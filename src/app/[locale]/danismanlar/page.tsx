import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getLocale, getTranslations } from "next-intl/server";
import { getConsultants, initials } from "@/content/consultants";

export const metadata: Metadata = {
  title: "Danışmanlarımız",
  description:
    "Simurg Finansal Danışmanlık A.Ş. yönetim ekibi ve danışman kadrosu.",
};

export default async function ConsultantsPage() {
  const locale = await getLocale();
  const tp = await getTranslations("pages");
  const consultants = getConsultants(locale);
  return (
    <>
      <PageHero
        eyebrow={tp("team")}
        title={
          <>
            {tp("consultantsTitle1")} <span className="text-gold-gradient">{tp("consultantsTitleHi")}</span>
          </>
        }
        description={tp("consultantsDesc")}
      />

      <section className="pb-8">
        <Container>
          <div className="space-y-8">
            {consultants.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.06}
                className="grid gap-8 rounded-3xl border border-gold-400/15 bg-ink-700/40 p-7 sm:grid-cols-[auto_1fr] sm:p-9"
              >
                {/* Foto alanı (gerçek fotoğraf gelince eklenecek) */}
                <div className="mx-auto sm:mx-0">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-400/20 to-transparent">
                    <span className="font-serif text-4xl text-gold-gradient">
                      {initials(c.name)}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-gold-300">
                    {c.title}
                  </p>
                  <p className="mt-4 leading-relaxed text-foreground/65">
                    {c.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.expertise.map((e) => (
                      <span
                        key={e}
                        className="rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1.5 text-xs text-foreground/75"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-foreground/40">
            {tp("consultantsPhotoNote")}
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
