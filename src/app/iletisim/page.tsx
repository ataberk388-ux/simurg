import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Simurg Finansal Danışmanlık ile iletişime geçin. Ücretsiz ön görüşme için formu doldurun, arayın veya WhatsApp'tan yazın.",
};

const mapQuery = encodeURIComponent(
  "Rasimpaşa Mahallesi Ayrılıkçeşme Sokak No:142A Kadıköy İstanbul",
);

const contactItems = [
  {
    label: "Telefon",
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
    d: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z",
  },
  {
    label: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
    d: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5",
  },
  {
    label: "WhatsApp",
    value: "Hemen yazın",
    href: `https://wa.me/${site.whatsapp}`,
    d: "M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 1 1-3.6 13l-.4-.2-2.3.6.6-2.2-.2-.4A7 7 0 0 1 12 5Z",
  },
  {
    label: "Adres",
    value: site.address.full,
    href: `https://www.google.com/maps?q=${mapQuery}`,
    d: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Hadi tanışalım"
        description="İlk görüşme ücretsiz. İhtiyacınızı dinleyelim, işletmenize özel bir yol haritası çıkaralım."
      />

      <section className="pb-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            {/* Sol: iletişim bilgileri */}
            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const external = item.href.startsWith("http");
                return (
                  <Reveal key={item.label} delay={i * 0.06}>
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-gold-400/15 bg-ink-700/40 p-5 transition-all hover:border-gold-400/40 hover:bg-ink-600/50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/25 bg-gradient-to-br from-gold-400/15 to-transparent text-gold-300">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.d} />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.15em] text-gold-400">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm text-foreground/75 group-hover:text-gold-100">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}

              <Reveal delay={0.3} className="rounded-2xl border border-gold-400/15 bg-ink-700/40 p-5">
                <span className="block text-xs uppercase tracking-[0.15em] text-gold-400">
                  Çalışma Saatleri
                </span>
                <span className="mt-1 block text-sm text-foreground/75">
                  {site.hours}
                </span>
                <span className="mt-1 block text-xs text-foreground/45">
                  Hafta sonu randevu ile.
                </span>
              </Reveal>
            </div>

            {/* Sağ: form */}
            <Reveal delay={0.1} className="rounded-3xl border border-gold-400/20 bg-ink-800/60 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Bize yazın
              </h2>
              <p className="mt-2 text-sm text-foreground/55">
                Formu doldurun, en kısa sürede size dönelim.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Harita */}
      <section className="pb-8">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-gold-400/20">
            <iframe
              title="Simurg Finansal Danışmanlık konumu"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[300px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
