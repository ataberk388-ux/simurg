import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/referanslar",
    "/basinda-biz",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma",
    "/cerez-politikasi",
    "/kullanim-kosullari",
  ];

  const now = new Date();

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

  return [...staticPages, ...servicePages];
}
