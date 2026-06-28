import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getBlogPosts, getBlogCategories } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog / Makaleler",
  description:
    "Güncel teşvikler, vergi gündemi, şirket kuruluşu, yatırım ve ihracat üzerine Simurg'dan uzman içerikler.",
};

export default async function BlogPage() {
  const locale = await getLocale();
  const t = await getTranslations("blog");
  const tc = await getTranslations("common");
  const blogPosts = getBlogPosts(locale);
  const blogCategories = getBlogCategories(locale);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={
          <>
            {t("title1")} <span className="text-gold-gradient">{t("titleHi")}</span>
          </>
        }
        description={t("desc")}
      />

      <section className="pb-8">
        <Container>
          <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5">
            {blogCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-gold-400/20 px-4 py-1.5 text-xs text-foreground/65"
              >
                {c}
              </span>
            ))}
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gold-400/15 bg-ink-700/40 p-7 transition-all hover:-translate-y-1 hover:border-gold-400/40"
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-gold-400">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-400/50" />
                    <span className="text-foreground/45">{post.date}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-foreground group-hover:text-gold-200">
                    {post.title}
                  </h2>
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
        </Container>
      </section>

      <CTABand />
    </>
  );
}
