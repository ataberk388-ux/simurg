/**
 * GA4 olay gönderimi. Ölçüm yalnızca:
 *  - NEXT_PUBLIC_GA_ID tanımlıysa ve
 *  - kullanıcı analitik çerezlere onay verdiyse
 * aktif olur (bkz. components/Analytics.tsx). Aksi hâlde track() sessizce döner.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const CONSENT_KEY = "simurg-cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

export type ConsentPrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function readConsent(): ConsentPrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentPrefs>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Ölçümleme hazır değilse hiçbir şey yapmaz. */
export function track(event: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
