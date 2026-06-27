# Simurg Finansal Danışmanlık — Kurumsal Web Sitesi

Mali müşavirlik, finans, hukuk ve insan kaynakları danışmanlığı için premium,
siyah-altın temalı, scroll animasyonlu (Anka kuşu) kurumsal web sitesi.

## Teknolojiler

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — siyah/altın tasarım sistemi
- **GSAP + ScrollTrigger** — Anka kuşu scroll animasyonu
- **Framer Motion** — bölüm geçişleri / mikro etkileşimler
- **Lenis** — smooth scroll
- **React Hook Form + Zod** — form doğrulama
- **Resend** — iletişim formu e-posta gönderimi

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derleme
npm start        # production sunucu
```

## İletişim formu e-postası

Form gönderimleri `/api/contact` üzerinden **Resend** ile e-postaya iletilir.
Anahtar tanımlı değilse geliştirme ortamında gönderim konsola loglanır
(arayüz akışı çalışır), production'da ise 503 döner.

Kurmak için `.env.local.example` dosyasını `.env.local` olarak kopyalayın ve
doldurun:

```
RESEND_API_KEY=...            # https://resend.com
CONTACT_FROM="Simurg Web <onboarding@resend.dev>"   # domain doğrulanınca güncelleyin
CONTACT_TO="beyzanur.gul@simurgdanismanlik.com"
```

## İçerik düzenleme

- **Hizmetler:** `src/content/services.ts`
- **Referans / yorum / basın / istatistik:** `src/content/site-content.ts`
- **İletişim & marka bilgileri:** `src/lib/site.ts`
- **Logo (kartvizit):** `public/brand/kartvizit.jpeg`

## Yapılacaklar (gerçek içerik geldikçe)

- Referans logolarını görselle değiştirin (`site-content.ts → clients`)
- Gerçek müşteri yorumlarını ekleyin (`testimonials`)
- Basın haberlerini ve linklerini ekleyin (`press`)
- Yasal metinleri (KVKK, gizlilik, çerez, koşullar) bir hukuk danışmanına onaylatın
- Sosyal medya URL'lerini doğrulayın (`site.ts → social`)

## Deploy

[Vercel](https://vercel.com)'e bağlayıp ortam değişkenlerini ekleyin; otomatik
HTTPS ve CDN ile yayına alınır.
