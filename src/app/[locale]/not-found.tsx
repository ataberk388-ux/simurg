import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoenixMark } from "@/components/PhoenixMark";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center py-32">
      <Container className="text-center">
        <PhoenixMark className="mx-auto h-20 w-20 text-gold-400/70" />
        <p className="mt-8 font-serif text-7xl font-semibold text-gold-gradient">
          404
        </p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-foreground/55">
          Sayfa taşınmış veya hiç var olmamış olabilir. Sizi güvenli bir
          limana götürelim.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Ana Sayfaya Dön</Button>
          <Button href="/iletisim" variant="outline">
            İletişim
          </Button>
        </div>
      </Container>
    </section>
  );
}
