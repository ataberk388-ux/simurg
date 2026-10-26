import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import {
  insightSlugs,
  getInsights,
  getInsight,
  getCategoryLabel,
  formatInsightDate,
  isoDate,
} from "@/content/insights";
import { getService } from "@/content/services";
import { pageAlternates } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const post = getInsight(slug, locale);
  if (!post) return { title: "404" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: pageAlternates(`/blog/${slug}`, locale),
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: isoDate(post.date),
      modifiedTime: isoDate(post.updated || post.date),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("insights");
  const post = getInsight(slug, locale);
  if (!post) notFound();

  const others = getInsights(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const related = post.relatedService
    ? getService(post.relatedService, locale)
    : undefined;

  const published = isoDate(post.date);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    articleSection: getCategoryLabel(post.category, locale),
    inLanguage: locale === "en" ? "en" : "tr",
    url: `${site.url}${locale === "en" ? "/en" : ""}/blog/${post.slug}`,
    ...(published && { datePublished: published }),
    ...(isoDate(post.updated || post.date) && {
      dateModified: isoDate(post.updated || post.date),
    }),
    author: { "@type": "Organization", name: site.legalName },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-12">
        <div className="gold-radial absolute inset-x-0 top-0 h-72" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gold-300 transition-colors hover:text-gold-200"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              {t("allPosts")}
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-gold-400">
              <span>{getCategoryLabel(post.category, locale)}</span>
              <span className="h-1 w-1 rounded-full bg-gold-400/50" />
              <span className="text-foreground/45">
                {formatInsightDate(post.date, locale)}
              </span>
              {post.updated && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gold-400/50" />
                  <span className="text-foreground/45">
                    {t("updated")}: {formatInsightDate(post.updated, locale)}
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            {post.lead && (
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                {post.lead}
              </p>
            )}
          </Reveal>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="max-w-3xl">
          {/* Yönetici özeti */}
          <Reveal className="rounded-2xl border border-gold-400/20 bg-ink-700/50 p-6 sm:p-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t("summary")}
            </span>
            <p className="mt-3 leading-relaxed text-foreground/75">
              {post.excerpt}
            </p>
          </Reveal>

          {/* Gövde */}
          <div className="mt-10 space-y-6">
            {post.blocks.map((b, i) => {
              if (b.k === "h")
                return (
                  <Reveal key={i}>
                    <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                      {b.text}
                    </h2>
                  </Reveal>
                );
              if (b.k === "note")
                return (
                  <Reveal
                    key={i}
                    className="rounded-xl border border-dashed border-gold-400/30 bg-ink-900/40 p-5"
                  >
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {b.text}
                    </p>
                  </Reveal>
                );
              if (b.k === "points")
                return (
                  <Reveal key={i} className="space-y-3">
                    {b.items.map((it, n) => (
                      <div
                        key={it.title}
                        className="flex gap-4 rounded-2xl border border-gold-400/15 bg-ink-700/40 p-5"
                      >
                        <span className="font-serif text-2xl leading-none text-gold-gradient">
                          {n + 1}
                        </span>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-gold-200">
                            {it.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                            {it.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Reveal>
                );
              return (
                <Reveal key={i}>
                  <p className="leading-relaxed text-foreground/75">{b.text}</p>
                </Reveal>
              );
            })}
          </div>

          {/* Simurg'un Stratejik Değerlendirmesi */}
          {post.assessment && post.assessment.length > 0 && (
            <Reveal className="mt-12 rounded-3xl border border-gold-400/25 bg-gradient-to-br from-ink-700 to-ink-900 p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {t("assessment")}
              </span>
              <div className="mt-4 space-y-4">
                {post.assessment.map((p, i) => (
                  <p key={i} className="leading-relaxed text-foreground/75">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          )}

          {/* İlgili hizmet CTA */}
          <Reveal className="mt-10 rounded-2xl border border-gold-400/20 bg-ink-800/80 p-7">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {post.ctaTitle || t("ctaFallbackTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              {post.ctaText || t("ctaFallbackText")}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/iletisim">{t("ctaButton")}</Button>
              {related && (
                <Button
                  href={`/hizmetler/${related.slug}`}
                  variant="outline"
                >
                  {related.title}
                </Button>
              )}
            </div>
          </Reveal>

          {/* Kaynaklar */}
          {post.sources && post.sources.length > 0 && (
            <Reveal className="mt-10">
              <h2 className="font-serif text-lg font-semibold text-foreground">
                {t("sources")}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {post.sources.map((s) => (
                  <li key={s.label} className="flex gap-3 text-sm text-foreground/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="underline underline-offset-2 transition-colors hover:text-gold-200"
                      >
                        {s.label}
                      </a>
                    ) : (
                      s.label
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* Uyarı */}
          {post.disclaimer && (
            <Reveal className="mt-8 rounded-xl border border-gold-400/15 bg-ink-900/50 p-5">
              <p className="text-xs leading-relaxed text-foreground/50">
                {post.disclaimer}
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      {/* İlgili makaleler */}
      {others.length > 0 && (
        <section className="py-12">
          <Container className="max-w-3xl">
            <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">
              {t("otherPosts")}
            </h2>
            <div className="space-y-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-gold-400/15 bg-ink-700/40 p-5 transition-all hover:border-gold-400/40"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.12em] text-gold-400/80">
                      {getCategoryLabel(p.category, locale)}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-foreground/80 group-hover:text-gold-200">
                      {p.title}
                    </span>
                  </span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-gold-400" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand />
    </>
  );
}
