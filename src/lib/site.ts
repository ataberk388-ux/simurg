export const site = {
  name: "Simurg Finansal Danışmanlık",
  legalName: "Simurg Finansal Danışmanlık A.Ş.",
  shortName: "Simurg",
  tagline: "Küllerinden doğan finansal güç",
  description:
    "Simurg Finansal Danışmanlık A.Ş. — mali müşavirlik, finans, hukuk ve insan kaynakları alanlarında işletmenize değer katan kurumsal danışmanlık.",
  url: "https://www.simurgdanismanlik.com",
  email: "beyzanur.gul@simurgdanismanlik.com",
  phone: "+90 530 282 96 92",
  phoneRaw: "+905302829692",
  whatsapp: "905302829692",
  address: {
    line: "Rasimpaşa Mah. Ayrılıkçeşme Sok. No:142A",
    district: "Kadıköy / İstanbul",
    full: "Rasimpaşa Mah. Ayrılıkçeşme Sok. No:142A, Kadıköy / İstanbul",
  },
  hours: "Pazartesi – Cuma · 09:00 – 18:00",
  contactPerson: {
    name: "Beyzanur Gül",
    title: "İş Geliştirme ve Proje Yöneticisi",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/simurgdanismanlik",
    instagram: "https://www.instagram.com/simurgdanismanlik",
    x: "https://x.com/simurgdanisman",
  },
} as const;

export const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Basında Biz", href: "/basinda-biz" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const legalNav = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
] as const;
