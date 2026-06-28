import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CTABand } from "@/components/sections/CTABand";
import { serviceSlugs, getService, getServices } from "@/content/services";
import { getServiceExtra } from "@/content/service-extra";
import { getProcessSteps } from "@/content/home";
import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
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
  const locale = await getLocale();
  const service = getService(slug, locale);
  if (!service) notFound();

  const ts = await getTranslations("service");
  const tc = await getTranslations("common");
  const processSteps = getProcessSteps(locale);
  const extra = getServiceExtra(slug, locale);
  const others = getServices(locale).filter((s) => s.slug !== slug);

  return (
    <>
      {/* Başlık + kısa değer önerisi */}
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
              {tc("allServices")}
            </Link>
          </Reveal>
          <Reveal>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent text-gold-300">
              <ServiceIcon icon={service.icon} className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/65">
              {service.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-12">
              {/* Kimler için uygundur */}
              {extra?.forWhom && (
                <Reveal>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {ts("forWhom")}
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {extra.forWhom.map((f) => (
                      <li key={f} className="flex items-start gap-3 rounded-xl border border-gold-400/15 bg-ink-700/40 p-4 text-sm text-foreground/75">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {/* Kapsamında neler yapılır */}
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {ts("scope")}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-gold-400" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Simurg nasıl destek olur */}
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {ts("howWeHelp")}
                </h2>
                <div className="mt-5 space-y-4">
                  {service.details.map((d) => (
                    <div key={d.heading} className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-6">
                      <h3 className="font-serif text-lg font-semibold text-gold-200">
                        {d.heading}
                      </h3>
                      <p className="mt-2 leading-relaxed text-foreground/65">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Süreç adımları */}
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {ts("steps")}
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {processSteps.map((p) => (
                    <div key={p.step} className="flex gap-4 rounded-xl border border-gold-400/15 bg-ink-700/40 p-4">
                      <span className="font-serif text-xl text-gold-gradient">{p.step}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{p.title}</p>
                        <p className="mt-0.5 text-xs text-foreground/55">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* SSS */}
              {extra?.faqs && (
                <Reveal>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {ts("faq")}
                  </h2>
                  <div className="mt-5 space-y-3">
                    {extra.faqs.map((f) => (
                      <details
                        key={f.q}
                        className="group rounded-xl border border-gold-400/15 bg-ink-700/40 p-5 [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-foreground">
                          {f.q}
                          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-gold-400 transition-transform group-open:rotate-45" strokeWidth={2} strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Yan panel — CTA */}
            <div>
              <Reveal className="h-fit space-y-4 lg:sticky lg:top-28">
                <div className="rounded-2xl border border-gold-400/20 bg-ink-800/80 p-7">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {ts("ctaTitle")}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    {ts("ctaText")}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button href="/iletisim" className="w-full">
                      {ts("ctaButton")}
                    </Button>
                    <Button
                      href={`https://wa.me/${site.whatsapp}`}
                      variant="outline"
                      className="w-full"
                    >
                      {tc("whatsapp")}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Diğer hizmetler */}
      <section className="py-16">
        <Container>
          <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">
            {ts("others")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-gold-400/15 bg-ink-700/40 p-5 transition-all hover:border-gold-400/40 hover:bg-ink-600/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold-400/20 text-gold-300">
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
