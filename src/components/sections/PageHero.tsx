import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="gold-radial absolute inset-x-0 top-0 h-80" />
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <Container className="relative text-center">
        {eyebrow && (
          <Reveal className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-400" />
          </Reveal>
        )}
        <Reveal>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
