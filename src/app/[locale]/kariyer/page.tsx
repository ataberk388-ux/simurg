import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CareerForm } from "@/components/CareerForm";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Simurg Finansal Danışmanlık A.Ş. ile çalışmak isteyen adaylar için genel başvuru.",
};

export default async function CareerPage() {
  const tp = await getTranslations("pages");
  const tn = await getTranslations("nav");
  return (
    <>
      <PageHero
        eyebrow={tn("career")}
        title={
          <>
            {tp("careerTitle1")} <span className="text-gold-gradient">{tp("careerTitleHi")}</span>
          </>
        }
        description={tp("careerDesc")}
      />

      <section className="pb-8">
        <Container className="max-w-3xl">
          <Reveal className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7 text-center">
            <p className="leading-relaxed text-foreground/70">
              {tp("careerIntro")}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 rounded-3xl border border-gold-400/20 bg-ink-800/60 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {tp("careerFormTitle")}
            </h2>
            <p className="mt-2 text-sm text-foreground/55">
              {tp("careerFormSub")}
            </p>
            <div className="mt-7">
              <CareerForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
