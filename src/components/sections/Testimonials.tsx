import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Referanslar"
          title="Bize güvenenler anlatıyor"
          subtitle="İşletmelerin Simurg ile çalışırken yaşadığı deneyim."
        />
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
