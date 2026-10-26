# Simurg Finansal Danışmanlık — Kurumsal Web Sitesi

Mali, finansal, hukuki ve stratejik danışmanlık hizmetleri için lacivert–altın
temalı, TR/EN çift dilli kurumsal web sitesi. Ana sayfada 3D Anka kuşu sahnesi,
yedi hizmet detay sayfası, Simurg Insights analiz yayını ve iletişim formu yer alır.

## Teknolojiler

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — lacivert/altın tasarım sistemi
- **next-intl** — TR (öneksiz) / EN (`/en`) çift dil
- **React Three Fiber + drei + three** — ana sayfadaki 3D Anka sahnesi
- **GSAP**, **Framer Motion** — scroll ve bölüm animasyonları
- **Lenis** — smooth scroll
- **React Hook Form + Zod** — form doğrulama
- **Resend** — iletişim ve kariyer formu e-posta gönderimi

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derleme
npm start        # production sunucu
npm run lint
```

## Ortam değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyalayıp doldurun.
Production'da aynı değerler Vercel → Settings → Environment Variables altına girilir.

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `RESEND_API_KEY` | Form için | https://resend.com üzerinden alınır. Tanımsızsa geliştirmede gönderim konsola loglanır, production'da `/api/contact` 503 döner. |
| `CONTACT_FROM` | Form için | Gönderen adres. Domain doğrulanana kadar `Simurg Web <onboarding@resend.dev>`. |
| `CONTACT_TO` | Form için | Form mesajlarının düşeceği adres (`info@simurgdanismanlik.com`). |
| `NEXT_PUBLIC_GA_ID` | Opsiyonel | GA4 ölçüm kimliği (`G-XXXXXXX`). Tanımsızsa ölçümleme tamamen kapalıdır. |

## Dil yapısı

`src/i18n/routing.ts` — TR varsayılan ve öneksiz (`/hizmetler`), EN `/en` önekli
(`/en/hizmetler`). `src/i18n/request.ts` içindeki birleştirme sayesinde
`messages/en.json` içinde eksik bir anahtar varsa Türkçesine düşer.

Arayüz metinleri `messages/tr.json` ve `messages/en.json` içinde;
sayfa içerikleri ise `src/content/` altında her dil için ayrı tutulur.

## İçerik düzenleme

| Ne | Nerede |
| --- | --- |
| Hizmetler (başlık, özet, kapsam) | `src/content/services.ts` |
| Hizmet sayfası "Çözüm Yaklaşımımız" bileşeni | `src/content/service-approach.ts` |
| Hizmet SSS ve "kimler için" listeleri | `src/content/service-extra.ts` |
| Ekibimiz sayfası | `src/content/consultants.ts` |
| Proje Deneyimimiz kartları | `src/content/projects.ts` |
| Simurg Insights makaleleri ve kategorileri | `src/content/insights.ts` |
| Ana sayfa blokları (neden Simurg, süreç, istatistik) | `src/content/home.ts` |
| Grup şirketleri | `src/content/group.ts` |
| İletişim ve marka bilgileri, menü | `src/lib/site.ts` |
| Logo / amblem görselleri | `public/brand/` |

### Yeni Simurg Insights makalesi ekleme

`src/content/insights.ts` içindeki `tr` ve `en` dizilerine birer kayıt ekleyin.
Makale gövdesi blok dizisidir: `p` (paragraf), `h` (ara başlık), `note`
(çerçeveli not), `points` (numaralı maddeler). Opsiyonel alanlar: `lead`,
`assessment` (Simurg'un Stratejik Değerlendirmesi), `sources`, `disclaimer`,
`relatedService`, `seoTitle`, `seoDescription`.

Editoryal kurallar:

- Haber metni birebir kopyalanmaz; doğrulanmış gelişmeden özgün çıkarım üretilir.
- `date` tam tarih (`2026-10-23`) verilirse makale Article şemasında
  `datePublished` ile yayımlanır; yalnızca yıl verilirse tarih etiketi yıl olur.
- `sources` içindeki bağlantılar yayından önce birincil kaynakta doğrulanmalıdır.
- Kategorisinde henüz makale yoksa o kategori listede görünmez; ilk makaleyle
  birlikte otomatik açılır.

## SEO

- Her sayfa `src/lib/seo.ts` içindeki `pageAlternates()` ile dile duyarlı
  canonical ve hreflang (`tr-TR`, `en-US`, `x-default`) üretir.
- Makalelerde `Article`, sitede `AccountingService`/`Organization` yapılandırılmış
  verisi bulunur.
- `src/app/sitemap.ts` her yolu iki dilde listeler; `src/app/robots.ts` `/api/`
  dizinini dışarıda bırakır.
- Kaldırılan yollar için kalıcı yönlendirmeler `next.config.ts` içindedir
  (`/referanslar` → `/proje-deneyimimiz`, 301).

## Ölçümleme ve çerezler

GA4 yalnızca `NEXT_PUBLIC_GA_ID` tanımlıysa **ve** ziyaretçi çerez panelinden
analitik çerezlere onay verdiyse yüklenir (`src/components/Analytics.tsx`).
Onay yoksa ölçüm kodu sayfaya hiç eklenmez.

Ölçülen olaylar: `contact_form_success`, `contact_form_error`,
`career_form_success`, `whatsapp_click`, `email_click`, `phone_click`.

## Formlar

İletişim ve kariyer formları `/api/contact` üzerinden Resend'e iletilir.
Uç nokta IP başına 10 dakikada 5 istekle sınırlıdır, bot tuzağı (honeypot)
alanı içerir ve girdileri Zod ile doğrular.

## Yapılacaklar

- Ekip üyelerinin profil fotoğraflarını ekleyin (`src/content/consultants.ts`
  ve `src/app/[locale]/danismanlar/page.tsx` içindeki baş harf yer tutucusu).
- Vercel'de `NEXT_PUBLIC_GA_ID` tanımlayıp Search Console doğrulamasını yapın.
- Yasal metinleri (KVKK, gizlilik, çerez, kullanım koşulları) hukuk danışmanına
  onaylatın.
- Sosyal medya URL'lerini doğrulayın (`src/lib/site.ts` → `social`).
- `src/content/site-content.ts` artık hiçbir sayfadan kullanılmıyor (eski
  referans/yorum/basın taslakları); gerekmiyorsa silinebilir.

## Deploy

Depo Vercel'e bağlıdır: `main` dalına yapılan her push otomatik derleme ve
yayına alma tetikler. Ortam değişkenleri Vercel proje ayarlarından tanımlanır.
Kurumsal alan adı bağlandığında `src/lib/site.ts` içindeki `url` alanı
canonical adresleri belirler.
