import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CTABand } from "@/components/sections/CTABand";
import { services, getService } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Hizmet bulunamadı" };
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="gold-radial absolute inset-x-0 top-0 h-80" />
        <Container className="relative">
          <Reveal>
            <Link
              href="/hizmetler"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gold-300 transition-colors hover:text-gold-200"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Tüm Hizmetler
            </Link>
          </Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent text-gold-300">
                <ServiceIcon icon={service.icon} className="h-8 w-8" />
              </div>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/65">
                {service.summary}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Detaylar + özellik listesi */}
      <section className="py-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-8">
              {service.details.map((d, i) => (
                <Reveal
                  key={d.heading}
                  delay={i * 0.08}
                  className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7"
                >
                  <h2 className="font-serif text-xl font-semibold text-gold-200">
                    {d.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground/65">
                    {d.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="h-fit rounded-2xl border border-gold-400/20 bg-ink-800/80 p-7 lg:sticky lg:top-28">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Kapsamımız
              </h3>
              <ul className="mt-5 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-gold-400" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/iletisim" className="w-full">
                  Teklif Alın
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Diğer hizmetler */}
      <section className="py-16">
        <Container>
          <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">
            Diğer hizmetler
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-gold-400/15 bg-ink-700/40 p-5 transition-all hover:border-gold-400/40 hover:bg-ink-600/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-400/20 text-gold-300">
                  <ServiceIcon icon={s.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-gold-200">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
