import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import { getServices } from "@/content/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Mali ve vergisel danışmanlık, şirket kuruluşu, finansal yapılandırma, yatırım & teşvik, uluslararası iş geliştirme, hukuki koordinasyon ve stratejik planlama alanlarında uçtan uca çözümler.",
};

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const services = getServices(locale);
  return (
    <>
      <PageHero
        eyebrow={t("servicesEyebrow")}
        title={t("servicesTitle")}
        description={t("servicesSubtitle")}
      />
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
