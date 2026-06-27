import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { values } from "@/content/site-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Simurg Finansal Danışmanlık'ın hikâyesi, değerleri ve işletmenize sunduğu bütüncül danışmanlık yaklaşımı.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            Efsanevi Anka kuşundan
            <span className="block text-gold-gradient">ilham alan bir vizyon</span>
          </>
        }
        description="Simurg; mali, finansal, hukuki ve insan kaynakları danışmanlığını tek çatı altında buluşturan kurumsal bir çözüm ortağıdır."
      />

      {/* Hikâye */}
      <section className="py-12">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-700 to-ink-900 p-10">
                <div className="gold-radial absolute inset-0" />
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                  <Image
                    src="/brand/phoenix.png"
                    alt="Simurg Anka kuşu amblemi"
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-contain"
                  />
                </div>
                <p className="relative mt-4 text-center font-serif text-xl text-gold-gradient">
                  {site.tagline}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Adımızın anlamı
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-foreground/65">
                <p>
                  Simurg (Anka kuşu), pek çok kültürde bilgeliğin, yeniden
                  doğuşun ve dönüşümün sembolüdür. Küllerinden yeniden doğan bu
                  efsanevi kuş gibi, biz de işletmelerin her koşulda güçlenerek
                  yükselmesine inanıyoruz.
                </p>
                <p>
                  Simurg Finansal Danışmanlık A.Ş. olarak; muhasebeden finansa,
                  hukuktan insan kaynaklarına kadar işletmenizin tüm idari
                  yükünü üzerimize alıyor, sizin asıl işinize odaklanmanızı
                  sağlıyoruz.
                </p>
                <p>
                  Amacımız yalnızca rakamları tutmak değil; verinin arkasındaki
                  hikâyeyi okuyup, geleceğinizi birlikte planlamaktır.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Değerler */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Değerlerimiz"
            title="Çalışma şeklimizi belirleyen ilkeler"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-gold-200">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ekip / yetkili */}
      <section className="py-12">
        <Container>
          <SectionTitle eyebrow="Ekibimiz" title="Tanışalım" />
          <div className="mx-auto mt-12 max-w-md">
            <Reveal className="rounded-2xl border border-gold-400/20 bg-ink-700/50 p-8 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold-400/30 bg-gradient-to-br from-gold-400/20 to-transparent">
                <span className="font-serif text-3xl text-gold-gradient">
                  {site.contactPerson.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {site.contactPerson.name}
              </h3>
              <p className="mt-1 text-sm text-gold-300">
                {site.contactPerson.title}
              </p>
              <div className="mt-5 flex flex-col items-center gap-2 text-sm text-foreground/60">
                <a href={`tel:${site.phoneRaw}`} className="hover:text-gold-200">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold-200">
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
