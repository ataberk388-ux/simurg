import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { PhoenixLogo } from "@/components/PhoenixLogo";
import { CookiePrefsButton } from "@/components/CookiePrefsButton";
import { site } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.96 1.83-1.97 3.77-1.97 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" },
  { label: "Instagram", href: site.social.instagram, d: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.2-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32C15.52 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 8.15A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Zm6.3-8.34a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" },
  { label: "YouTube", href: site.social.youtube, d: "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" },
  { label: "X", href: site.social.x, d: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7.1l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 3.9H5.6L16.5 20Z" },
  { label: "Facebook", href: site.social.facebook, d: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.300000000000001c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" },
].filter((s) => s.href);

const pageLinks = [
  { key: "about", href: "/hakkimizda" },
  { key: "story", href: "/simurgun-hikayesi" },
  { key: "group", href: "/grup-yapimiz" },
  { key: "services", href: "/hizmetler" },
  { key: "consultants", href: "/danismanlar" },
  { key: "references", href: "/referanslar" },
  { key: "blog", href: "/blog" },
  { key: "career", href: "/kariyer" },
  { key: "contact", href: "/iletisim" },
];

const legalLinks = [
  { key: "kvkk", href: "/kvkk-aydinlatma" },
  { key: "privacy", href: "/gizlilik-politikasi" },
  { key: "cookie", href: "/cerez-politikasi" },
  { key: "terms", href: "/kullanim-kosullari" },
];

export async function Footer() {
  const tf = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tl = await getTranslations("legalNav");

  return (
    <footer className="relative mt-24 border-t border-gold-400/15 bg-ink-900">
      <div className="gold-radial absolute inset-x-0 top-0 h-40" />
      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marka */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <PhoenixLogo size={44} />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
                  SİMURG
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400/80">
                  Finansal Danışmanlık A.Ş.
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/55">
              {tf("tagline")}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-400/10"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Sayfalar */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {tf("pages")}
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/60 transition-colors hover:text-gold-200">
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {tf("legal")}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/60 transition-colors hover:text-gold-200">
                    {tl(item.key)}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePrefsButton
                  label={tf("manageCookies")}
                  className="text-left text-sm text-foreground/60 transition-colors hover:text-gold-200"
                />
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {tf("contact")}
            </h3>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-gold-200">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-200">
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.address.line}
                <br />
                {site.address.district}
              </li>
              <li className="text-foreground/45">{tf("hoursValue")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-7 text-xs text-foreground/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {tf("rights")}
          </p>
          <p>Kadıköy / İstanbul</p>
        </div>
      </Container>
    </footer>
  );
}
