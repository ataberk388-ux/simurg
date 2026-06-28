import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export function ComingSoon({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Hazırlanıyor"
        title={title}
        description={note ?? "Bu bölüm yakında yayında olacak."}
      />
      <section className="pb-24">
        <Container className="text-center">
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-gold-400/25 bg-ink-700/40 p-10">
            <p className="text-sm text-foreground/55">
              İçerik çok yakında eklenecek. O zamana kadar bizimle iletişime
              geçebilirsiniz.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/iletisim">İletişim</Button>
              <Button href="/" variant="outline">
                Ana Sayfa
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
