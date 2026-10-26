import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookieConsent";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Preloader } from "@/components/Preloader";
import { GoldThread } from "@/components/GoldThread";
import { Analytics } from "@/components/Analytics";

const serif = Playfair_Display({
  variable: "--font-serif-custom",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-custom",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";

  const name = en ? site.legalNameEn : site.legalName;
  const description = en ? site.descriptionEn : site.description;
  const title = en
    ? `${name} | Financial and Strategic Advisory`
    : `${name} | Finansal ve Stratejik Danışmanlık`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.shortName}` },
    description,
    keywords: en
      ? [
          "financial consulting",
          "fiscal advisory",
          "company formation in Türkiye",
          "investment incentives",
          "international business development",
          "strategic advisory",
          "Simurg Consulting",
        ]
      : [
          "finansal danışmanlık",
          "mali müşavirlik",
          "şirket kuruluşu",
          "yatırım teşvik",
          "uluslararası iş geliştirme",
          "stratejik danışmanlık",
          "Simurg Danışmanlık",
        ],
    authors: [{ name }],
    openGraph: {
      type: "website",
      locale: en ? "en_US" : "tr_TR",
      alternateLocale: en ? "tr_TR" : "en_US",
      url: en ? `${site.url}/en` : site.url,
      siteName: en ? site.nameEn : site.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: en ? site.nameEn : site.name,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const jsonLd = organizationJsonLd(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>
          <Preloader />
          <ScrollProgress />
          <GoldThread />
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <FloatingWhatsApp />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
