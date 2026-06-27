import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold-400/25 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 px-6 py-16 text-center sm:px-12">
          <div className="gold-radial absolute inset-0" />
          <Parallax speed={0.5} className="pointer-events-none absolute -right-20 -top-20">
            <div className="h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
          </Parallax>
          <Parallax speed={0.35} className="pointer-events-none absolute -bottom-24 -left-16">
            <div className="h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
          </Parallax>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              İşletmenizi <span className="text-gold-gradient">küllerinden doğuralım</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/65">
              İlk görüşme ücretsiz. İhtiyacınızı dinleyelim, size özel bir yol
              haritası çıkaralım.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/iletisim">Ücretsiz Görüşme Alın</Button>
              <Button href={`tel:${site.phoneRaw}`} variant="outline">
                {site.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
