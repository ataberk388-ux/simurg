import type { Metadata } from "next";
import { site } from "./site";

/**
 * Dile duyarlı canonical + hreflang üretir.
 * Yönlendirme şeması: TR prefiksiz (/hizmetler), EN /en önekli (/en/hizmetler).
 *
 * @param path Dil öneki olmayan yol. Ana sayfa için "" veya "/".
 */
export function pageAlternates(path: string, locale: string): Metadata["alternates"] {
  const clean = path === "/" ? "" : path;
  const tr = `${site.url}${clean || "/"}`;
  const en = `${site.url}/en${clean}`;

  return {
    canonical: locale === "en" ? en : tr,
    languages: {
      "tr-TR": tr,
      "en-US": en,
      "x-default": tr,
    },
  };
}

/** Organization/AccountingService şeması — layout'ta kullanılır. */
export function organizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#organization`,
    name: locale === "en" ? site.legalNameEn : site.legalName,
    alternateName: site.shortName,
    description: locale === "en" ? site.descriptionEn : site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: "Kadıköy",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: "TR",
    priceRange: "₺₺",
    sameAs: [site.social.linkedin, site.social.instagram].filter(Boolean),
  };
}
