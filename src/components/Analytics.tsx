"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  GA_ID,
  CONSENT_EVENT,
  readConsent,
  track,
  type ConsentPrefs,
} from "@/lib/analytics";

/**
 * GA4 — KVKK/çerez onayına bağlı yükleme.
 *
 * Ölçüm kodu, kullanıcı "Analitik Çerezler"e onay vermedikçe sayfaya hiç
 * eklenmez. Onay sonradan verilirse çerez paneli olay yayınlar ve script
 * o anda yüklenir; onay geri alınırsa bir sonraki sayfa yüklemesinde durur.
 *
 * NEXT_PUBLIC_GA_ID tanımlı değilse bileşen tamamen devre dışıdır.
 */
export function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    const apply = (p: ConsentPrefs | null) => setAllowed(Boolean(p?.analytics));
    apply(readConsent());

    const onChange = () => apply(readConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  /* Dönüşüm olayları: WhatsApp, e-posta ve telefon tıklamaları.
     Tek bir yakalayıcı, sitedeki tüm bağlantıları kapsar. */
  useEffect(() => {
    if (!allowed) return;

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("a");
      const href = el?.getAttribute("href");
      if (!href) return;

      if (href.startsWith("https://wa.me/") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_url: href });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { link_url: href });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [allowed]);

  if (!GA_ID || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted'
          });
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
