import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import {
  getInsights,
  getCategories,
  getCategoryLabel,
  formatInsightDate,
} from "@/content/insights";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("insights");
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: pageAlternates("/blog", locale),
  };
}

export default async function InsightsPage() {
  const locale = await getLocale();
  const t = await getTranslations("insights");
  const tc = await getTranslations("common");
  const insights = getInsights(locale);
  const categories = getCategories(locale).filter((c) =>
    insights.some((p) => p.category === c.key),
  );

  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow={t("brand")}
        title={
          <>
            {t("title1")} <span className="text-gold-gradient">{t("titleHi")}</span>
          </>
        }
        description={t("desc")}
      />

      <section className="pb-8">
        <Container>
          {/* Editoryal ilke */}
          <Reveal className="mx-auto mb-12 max-w-3xl rounded-2xl border border-gold-400/15 bg-ink-700/40 p-6 text-center">
            <p className="text-sm leading-relaxed text-foreground/65">
              {t("principle")}
            </p>
          </Reveal>

          {/* Kategoriler */}
          <Reveal className="mb-12 flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <a
                key={c.key}
                href={`#${c.key}`}
                className="rounded-full border border-gold-400/20 px-4 py-1.5 text-xs text-foreground/65 transition-colors hover:border-gold-400/50 hover:text-gold-200"
              >
                {c.label}
              </a>
            ))}
          </Reveal>

          {/* Öne çıkan analiz */}
          {featured && (
            <Reveal className="mb-14">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-6 rounded-3xl border border-gold-400/20 bg-ink-700/40 p-8 transition-all hover:border-gold-400/45 sm:p-10 lg:grid-cols-[1.4fr_1fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-gold-400">
                    <span className="rounded-full border border-gold-400/30 px-3 py-1">
                      {t("latest")}
                    </span>
                    <span>{getCategoryLabel(featured.category, locale)}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-400/50" />
                    <span className="text-foreground/45">
                      {formatInsightDate(featured.date, locale)}
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold leading-snug text-foreground group-hover:text-gold-200 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-foreground/65">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-end">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-all group-hover:gap-3">
                    {tc("readMore")}
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Kategoriye göre listeleme */}
          <div className="space-y-16">
            {categories.map((c) => {
              const items = rest.filter((p) => p.category === c.key);
              if (items.length === 0) return null;
              return (
                <div key={c.key} id={c.key} className="scroll-mt-28">
                  <Reveal className="mb-6 flex items-center gap-4">
                    <h2 className="font-serif text-xl font-semibold text-foreground">
                      {c.label}
                    </h2>
                    <span className="h-px flex-1 bg-gradient-to-r from-gold-400/30 to-transparent" />
                  </Reveal>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((post, i) => (
                      <Reveal key={post.slug} delay={i * 0.06}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex h-full flex-col rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7 transition-all hover:-translate-y-1 hover:border-gold-400/40"
                        >
                          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-gold-400">
                            <span>{getCategoryLabel(post.category, locale)}</span>
                            <span className="h-1 w-1 rounded-full bg-gold-400/50" />
                            <span className="text-foreground/45">
                              {formatInsightDate(post.date, locale)}
                            </span>
                          </div>
                          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground group-hover:text-gold-200">
                            {post.title}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                            {post.excerpt}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-all group-hover:gap-3">
                            {tc("readMore")}
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
