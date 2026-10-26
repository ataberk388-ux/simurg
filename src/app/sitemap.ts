import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { allInsights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/hakkimizda",
    "/simurgun-hikayesi",
    "/misyon-vizyon",
    "/grup-yapimiz",
    "/hizmetler",
    "/danismanlar",
    "/proje-deneyimimiz",
    "/blog",
    "/kariyer",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma",
    "/cerez-politikasi",
    "/kullanim-kosullari",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightPages: MetadataRoute.Sitemap = allInsights.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date.length > 4 ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // TR prefiksiz, EN /en önekli; her yol iki dilde listelenir.
  const all = [...staticPages, ...servicePages, ...insightPages];
  const enPages: MetadataRoute.Sitemap = all.map((e) => ({
    ...e,
    url: e.url.replace(site.url, `${site.url}/en`),
  }));

  return [...all, ...enPages];
}
