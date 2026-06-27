export const stats = [
  { value: "15+", label: "Yıllık birikim" },
  { value: "250+", label: "Memnun işletme" },
  { value: "%100", label: "Mevzuat uyumu" },
  { value: "4", label: "Uzmanlık alanı" },
];

export const values = [
  {
    title: "Güven",
    body: "Danışmanlıkta en değerli sermaye güvendir. Şeffaflık ve gizlilik ilkemizden ödün vermeyiz.",
  },
  {
    title: "Uzmanlık",
    body: "Mali, finansal, hukuki ve İK alanlarında deneyimli kadromuzla bütüncül çözümler sunarız.",
  },
  {
    title: "Süreklilik",
    body: "Anlık çözümler değil, işletmenizle birlikte büyüyen uzun soluklu bir yol arkadaşlığı kurarız.",
  },
  {
    title: "Öngörü",
    body: "Riskleri oluşmadan görür, fırsatları rakamlarla okur; sizi geleceğe hazırlarız.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// Gerçek müşteri yorumları geldikçe burası güncellenecek.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Muhasebe ve vergi süreçlerimizi Simurg'a devrettikten sonra hem maliyetlerimiz düştü hem de cezalı duruma düşme korkumuz tamamen ortadan kalktı.",
    author: "A. Yılmaz",
    role: "Üretim · Genel Müdür",
  },
  {
    quote:
      "Nakit akışımızı ilk kez bu kadar net görebiliyoruz. Finans danışmanlığı sayesinde büyüme yatırımımızı doğru zamanda yaptık.",
    author: "M. Demir",
    role: "E-ticaret · Kurucu Ortak",
  },
  {
    quote:
      "Bordro ve SGK işlerimizi gönül rahatlığıyla teslim ettik. Hızlı, titiz ve her zaman ulaşılabilir bir ekip.",
    author: "S. Kaya",
    role: "Hizmet Sektörü · İK Müdürü",
  },
];

// Logoların gerçek görselleri geldikçe `logo` alanına eklenecek.
export const clients = [
  "Anatolia Lojistik",
  "Marmara Tekstil",
  "Bosphorus Yazılım",
  "Ege Gıda",
  "Kadıköy İnşaat",
  "Levent Mühendislik",
];

export type PressItem = {
  title: string;
  outlet: string;
  date: string;
  excerpt: string;
  href?: string;
};

// Basın içerikleri geldikçe burası güncellenecek.
export const press: PressItem[] = [
  {
    title: "KOBİ'lerde finansal disiplin nasıl kurulur?",
    outlet: "Ekonomi Gündemi",
    date: "2025",
    excerpt:
      "Simurg Finansal Danışmanlık, küçük ve orta ölçekli işletmelerin sürdürülebilir büyümesi için finansal planlamanın önemini değerlendirdi.",
  },
  {
    title: "Dijital muhasebeye geçişte yapılan hatalar",
    outlet: "İş Dünyası Dergisi",
    date: "2025",
    excerpt:
      "e-Fatura ve e-Defter sürecinde işletmelerin dikkat etmesi gereken kritik noktalar uzman görüşüyle ele alındı.",
  },
  {
    title: "2025'te işletmeleri bekleyen vergi değişiklikleri",
    outlet: "Finans Bülteni",
    date: "2025",
    excerpt:
      "Yeni dönemde yürürlüğe giren mevzuat değişikliklerinin işletmelere etkisi Simurg ekibi tarafından yorumlandı.",
  },
];
