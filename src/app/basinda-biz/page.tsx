import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { press } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Basında Biz",
  description:
    "Simurg Finansal Danışmanlık'ın basında yer alan haberleri, röportajları ve uzman görüşleri.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Basında Biz"
        title="Sektörde söz sahibiyiz"
        description="Finans ve mevzuat gündemine dair uzman görüşlerimiz ve basında yer alan içeriklerimiz."
      />

      <section className="pb-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {press.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="group flex flex-col rounded-2xl border border-gold-400/15 bg-ink-700/50 p-7 transition-all hover:border-gold-400/40"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-gold-400">
                  <span>{item.outlet}</span>
                  <span className="h-1 w-1 rounded-full bg-gold-400/50" />
                  <span className="text-foreground/45">{item.date}</span>
                </div>
                <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                  {item.excerpt}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 group-hover:gap-3"
                  >
                    Haberi oku
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-2xl border border-dashed border-gold-400/25 bg-ink-800/50 p-8 text-center">
            <p className="text-sm text-foreground/55">
              Basın işbirlikleri ve röportaj talepleriniz için{" "}
              <a href="/iletisim" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
                bizimle iletişime geçebilirsiniz
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
