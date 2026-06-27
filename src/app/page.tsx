import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { PhoenixHero } from "@/components/sections/PhoenixHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Parallax } from "@/components/ui/Parallax";
import { services } from "@/content/services";
import { stats, values } from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <PhoenixHero />

      {/* Neden Simurg */}
      <section id="neden-simurg" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24">
        <Parallax speed={0.4} className="pointer-events-none absolute -left-24 top-10">
          <div className="h-72 w-72 rounded-full bg-gold-400/8 blur-[90px]" />
        </Parallax>
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                align="left"
                eyebrow="Neden Simurg"
                title={
                  <>
                    Rakamların ötesinde,{" "}
                    <span className="text-gold-gradient">stratejik ortaklık</span>
                  </>
                }
                subtitle="Simurg, tıpkı küllerinden yeniden doğan efsanevi Anka kuşu gibi, işletmenizin her dönemde güçlenerek yükselmesi için yanınızda. Mali, finansal, hukuki ve insan kaynakları süreçlerinizi tek çatı altında, bütüncül bir bakışla yönetiriz."
              />
              <div className="mt-8">
                <Button href="/hakkimizda" variant="outline">
                  Hikâyemizi Okuyun
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 0.08}
                  className="rounded-2xl border border-gold-400/15 bg-ink-700/50 p-6"
                >
                  <div className="mb-3 h-9 w-9 rounded-lg bg-gradient-to-br from-gold-400/25 to-transparent p-px">
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-ink-800 font-serif text-lg text-gold-300">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {v.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* İstatistik şeridi */}
      <section className="border-y border-gold-400/15 bg-ink-900/60 py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <CountUp
                  value={s.value}
                  className="block font-serif text-4xl font-semibold text-gold-gradient sm:text-5xl"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-foreground/55">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Parallax speed={0.45} className="pointer-events-none absolute -right-24 top-20">
          <div className="h-80 w-80 rounded-full bg-gold-500/8 blur-[100px]" />
        </Parallax>
        <Container>
          <SectionTitle
            eyebrow="Hizmetlerimiz"
            title="Tek çatı altında dört uzmanlık"
            subtitle="İşletmenizin ihtiyaç duyduğu finansal ve idari çözümleri, birbirini tamamlayan bütüncül bir yaklaşımla sunuyoruz."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Müşteri logoları — sonsuz akan şerit */}
      <section className="py-12">
        <Container>
          <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-foreground/40">
            Bize güvenen işletmeler
          </p>
        </Container>
        <LogoMarquee />
      </section>

      <Testimonials />
      <CTABand />
    </>
  );
}
