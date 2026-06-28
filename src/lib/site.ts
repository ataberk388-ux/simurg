export const site = {
  name: "Simurg Finansal Danışmanlık",
  legalName: "Simurg Finansal Danışmanlık A.Ş.",
  legalNameEn: "Simurg Financial Consulting Inc.",
  shortName: "Simurg",
  tagline: "Potansiyelinizi keşfedin, geleceğinizi stratejiyle inşa edin.",
  taglineEn: "Discover your potential, build your future with strategy.",
  description:
    "Simurg Finansal Danışmanlık A.Ş.; mali, finansal, hukuki ve stratejik danışmanlık çözümleriyle şirketinizin büyüme, dönüşüm ve kurumsallaşma yolculuğunda güvenilir çözüm ortağınızdır.",
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
    title: "Finansal Danışman",
  },
  // Sosyal medya hesapları netleşince güncellenecek (brief: İbrahim Bey onayı)
  social: {
    linkedin: "https://www.linkedin.com/company/simurgdanismanlik",
    instagram: "https://www.instagram.com/simurgdanismanlik",
    youtube: "",
    x: "",
    facebook: "",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/kurumsal",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Simurg'un Hikayesi", href: "/simurgun-hikayesi" },
      { label: "Misyon & Vizyon", href: "/misyon-vizyon" },
      { label: "Grup Yapımız", href: "/grup-yapimiz" },
    ],
  },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Danışmanlarımız", href: "/danismanlar" },
  { label: "Referanslarımız", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalNav = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
] as const;
