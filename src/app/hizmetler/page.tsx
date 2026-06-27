import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Mali müşavirlik, finans danışmanlığı, hukuk ve insan kaynakları alanlarında işletmenize özel kurumsal çözümler.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tek çatı altında dört uzmanlık"
        description="İşletmenizin finansal ve idari ihtiyaçlarını birbirini tamamlayan bütüncül bir yaklaşımla karşılıyoruz."
      />
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
