import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Referanslarimiz -> Proje Deneyimimiz (brif Ekim 2026)
      { source: "/referanslar", destination: "/proje-deneyimimiz", statusCode: 301 },
      { source: "/en/referanslar", destination: "/en/proje-deneyimimiz", statusCode: 301 },
    ];
  },
};

export default withNextIntl(nextConfig);
