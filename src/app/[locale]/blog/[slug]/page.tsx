import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { postSlugs, getBlogPosts, getPost } from "@/content/blog";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("blog");
  const post = getPost(slug, locale);
  if (!post) notFound();

  const others = getBlogPosts(locale).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
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
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-gold-400">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-gold-400/50" />
              <span className="text-foreground/45">{post.date}</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="max-w-3xl">
          <Reveal className="space-y-5">
            {post.body.map((p, i) => (
              <p key={i} className="leading-relaxed text-foreground/75">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="mt-10 rounded-2xl border border-dashed border-gold-400/25 bg-ink-700/40 p-6 text-sm text-foreground/60">
            {t("ctaNote")}{" "}
            <Link href="/iletisim" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
              {t("ctaLink")}
            </Link>
            .
          </div>
        </Container>
      </section>

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
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-gold-200">
                    {p.title}
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
