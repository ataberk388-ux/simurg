import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { CountUp } from "@/components/ui/CountUp";
import { clients, testimonials, stats } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Simurg Finansal Danışmanlık'a güvenen işletmeler ve müşteri yorumları.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Güven, en değerli sermayemiz"
        description="Farklı sektörlerden işletmeler, finansal ve idari süreçlerini Simurg'a emanet ediyor."
      />

      {/* İstatistik */}
      <section className="pb-12">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-gold-400/15 bg-ink-900/50 p-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <CountUp
                  value={s.value}
                  className="block font-serif text-4xl font-semibold text-gold-gradient"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/55">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Müşteri logoları */}
      <section className="py-8">
        <Container>
          <h2 className="text-center text-xs uppercase tracking-[0.25em] text-foreground/40">
            Çalıştığımız işletmelerden bazıları
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {clients.map((c, i) => (
              <Reveal
                key={c}
                delay={i * 0.05}
                className="flex h-24 items-center justify-center rounded-xl border border-gold-400/15 bg-ink-700/40 px-4 text-center font-serif text-lg text-foreground/45 transition-colors hover:text-gold-300/80"
              >
                {c}
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-foreground/35">
            Müşteri gizliliği gereği bazı kurum isimleri paylaşılmamaktadır.
          </p>
        </Container>
      </section>

      {/* Yorumlar */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.author}
                delay={i * 0.1}
                className="flex flex-col rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7"
              >
                <svg viewBox="0 0 24 24" className="mb-5 h-9 w-9 fill-gold-400/30">
                  <path d="M9.5 8C6.5 8 4 10.5 4 13.5S6 19 9 19c.3 0 .5 0 .8-.1C9 20.7 7.2 22 5 22v2c5 0 9-4.3 9-9.5C14 10.5 12 8 9.5 8Zm10 0C16.5 8 14 10.5 14 13.5S16 19 19 19c.3 0 .5 0 .8-.1C19 20.7 17.2 22 15 22v2c5 0 9-4.3 9-9.5C24 10.5 22 8 19.5 8Z" />
                </svg>
                <p className="flex-1 text-sm leading-relaxed text-foreground/75">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-gold-400/10 pt-4">
                  <p className="font-medium text-gold-200">{t.author}</p>
                  <p className="text-xs text-foreground/45">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
