import { L, pick } from "./_pick";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
};

const categories: L<string[]> = {
  tr: ["Güncel Teşvikler", "Vergi ve Muhasebe", "Şirket Kuruluşu", "Yatırım ve Finansman", "İhracat ve Uluslararası Ticaret"],
  en: ["Current Incentives", "Tax & Accounting", "Company Formation", "Investment & Financing", "Export & International Trade"],
};

const tr: BlogPost[] = [
  {
    slug: "2026-tesvik-ve-hibe-programlari",
    title: "2026 Yılı Güncel Teşvik ve Hibe Programları",
    category: "Güncel Teşvikler",
    date: "2026",
    excerpt: "KOSGEB, TÜBİTAK ve yatırım teşvik belgesi başta olmak üzere işletmelerin yararlanabileceği güncel destek programlarına genel bir bakış.",
    body: [
      "Şirketlerin büyüme ve yatırım hedeflerini desteklemek için sunulan teşvik ve hibe programları, doğru planlandığında ciddi bir maliyet avantajı sağlar. 2026 yılında KOSGEB destekleri, TÜBİTAK Ar-Ge programları, TKDK kırsal kalkınma destekleri ve yatırım teşvik belgesi uygulamaları öne çıkan başlıklar arasında yer alıyor.",
      "Her programın kendine özgü uygunluk kriterleri, başvuru takvimi ve raporlama yükümlülükleri bulunur. Bu nedenle başvuru öncesinde şirketin faaliyet alanı, ölçeği ve yatırım planı dikkate alınarak doğru programın seçilmesi kritik önem taşır.",
      "Simurg olarak uygunluk analizinden başvuru dosyasının hazırlanmasına ve sürecin takibine kadar tüm aşamalarda işletmelerin yanında yer alıyoruz.",
    ],
  },
  {
    slug: "yatirim-tesvik-belgesi-basvurusu",
    title: "Yatırım Teşvik Belgesi Başvurusunda Dikkat Edilmesi Gerekenler",
    category: "Güncel Teşvikler",
    date: "2026",
    excerpt: "Yatırım teşvik belgesi sürecinde sık yapılan hatalar ve başvuruyu güçlendiren temel noktalar.",
    body: [
      "Yatırım teşvik belgesi; vergi indirimi, SGK prim desteği, gümrük muafiyeti ve faiz desteği gibi avantajlar sunar. Ancak başvurunun doğru kurgulanması, yatırımın bölgesi, sektörü ve tutarı gibi unsurların mevzuata uygun biçimde değerlendirilmesini gerektirir.",
      "En sık yapılan hatalar; eksik belge, yanlış harcama sınıflandırması ve yatırım kalemlerinin teşvik kapsamı dışında planlanmasıdır. Bu hatalar süreci uzatır veya destek kaybına yol açar.",
      "Doğru bir fizibilite ve uzman desteğiyle hazırlanan başvuru, hem onay sürecini hızlandırır hem de yatırımın geri dönüşünü artırır.",
    ],
  },
  {
    slug: "yabanci-yatirimci-sirket-kurulusu",
    title: "Türkiye'de Yabancı Yatırımcılar İçin Şirket Kuruluş Süreci",
    category: "Şirket Kuruluşu",
    date: "2026",
    excerpt: "Yabancı yatırımcıların Türkiye'de şirket kurarken izlemesi gereken adımlar ve dikkat edilmesi gereken noktalar.",
    body: [
      "Türkiye, yabancı yatırımcılara yerli yatırımcılarla eşit haklar tanıyan bir mevzuata sahiptir. Şirket kuruluşu; şirket türünün belirlenmesi, ana sözleşmenin hazırlanması, ticaret sicil tescili ve vergi-SGK kayıtlarının yapılması adımlarını içerir.",
      "Yabancı ortak yapısında potansiyel vergi anlaşmaları, vize/çalışma izni süreçleri ve banka hesabı açılışı gibi ek konular da planlamaya dahil edilmelidir.",
      "Simurg, yabancı yatırımcılar için kuruluştan operasyonel sürece kadar tüm aşamaları tek elden yöneterek süreci hızlı ve güvenli hale getirir.",
    ],
  },
  {
    slug: "kobi-nakit-akisi-yonetimi",
    title: "KOBİ'ler İçin Nakit Akışı Yönetimi Neden Kritiktir?",
    category: "Yatırım ve Finansman",
    date: "2026",
    excerpt: "Kârlı görünen şirketlerin bile neden nakit sıkıntısı yaşadığını ve sağlıklı nakit akışının nasıl kurulduğunu ele alıyoruz.",
    body: [
      "Bir şirketin kâğıt üzerinde kârlı olması, her zaman nakit açısından güçlü olduğu anlamına gelmez. Tahsilat-ödeme dengesizliği, stok yönetimi ve vade uyumsuzlukları nakit akışını zorlayan başlıca etkenlerdir.",
      "Sağlıklı bir nakit akışı yönetimi; gelir-gider projeksiyonları, tahsilat planlaması ve erken uyarı sistemleriyle kurulur. Böylece şirket, kısa ve orta vadeli nakit ihtiyacını önceden görür.",
      "Simurg, KOBİ'lerin nakit akışını öngörülebilir kılacak finansal disiplin ve planlama sistemlerini kurarak büyüme kararlarını sağlam zemine oturtur.",
    ],
  },
  {
    slug: "ihracata-baslangic-yol-haritasi",
    title: "İhracata Başlamak İsteyen Şirketler İçin Yol Haritası",
    category: "İhracat ve Uluslararası Ticaret",
    date: "2026",
    excerpt: "Yurt içi pazardan uluslararası pazarlara açılmak isteyen şirketler için temel adımlar.",
    body: [
      "İhracat, doğru planlandığında şirketler için önemli bir büyüme kanalıdır. Süreç; hedef pazar analizi, ürün-fiyat stratejisi, gerekli belgelerin hazırlanması ve lojistik-gümrük süreçlerinin kurulmasıyla başlar.",
      "Pazara giriş modeli (doğrudan ihracat, distribütör, ortaklık) şirketin kapasitesine ve hedef ülkenin dinamiklerine göre belirlenmelidir. Yanlış model seçimi, hem maliyet hem zaman kaybına yol açar.",
      "Simurg, pazar araştırmasından distribütör bulmaya ve ihracat süreç yönetimine kadar uluslararası açılım yolculuğunda şirketlere stratejik rehberlik eder.",
    ],
  },
];

const en: BlogPost[] = [
  {
    slug: "2026-tesvik-ve-hibe-programlari",
    title: "Current Incentive and Grant Programs for 2026",
    category: "Current Incentives",
    date: "2026",
    excerpt: "An overview of current support programs businesses can benefit from, primarily KOSGEB, TÜBİTAK and the investment incentive certificate.",
    body: [
      "Incentive and grant programs offered to support companies' growth and investment goals provide a significant cost advantage when planned correctly. In 2026, KOSGEB supports, TÜBİTAK R&D programs, TKDK rural development supports and investment incentive certificate applications are among the prominent headings.",
      "Each program has its own eligibility criteria, application schedule and reporting obligations. Therefore, selecting the right program by considering the company's field of activity, scale and investment plan is critically important.",
      "At Simurg, we stand by businesses at every stage, from eligibility analysis to preparing the application file and following up the process.",
    ],
  },
  {
    slug: "yatirim-tesvik-belgesi-basvurusu",
    title: "Key Points When Applying for an Investment Incentive Certificate",
    category: "Current Incentives",
    date: "2026",
    excerpt: "Common mistakes in the investment incentive certificate process and the key points that strengthen the application.",
    body: [
      "The investment incentive certificate offers advantages such as tax reduction, social security premium support, customs exemption and interest support. However, structuring the application correctly requires evaluating elements such as the region, sector and amount of the investment in compliance with legislation.",
      "The most common mistakes are missing documents, incorrect expense classification, and planning investment items outside the scope of the incentive. These mistakes prolong the process or lead to loss of support.",
      "An application prepared with the right feasibility and expert support both speeds up the approval process and increases the return on investment.",
    ],
  },
  {
    slug: "yabanci-yatirimci-sirket-kurulusu",
    title: "Company Formation Process for Foreign Investors in Türkiye",
    category: "Company Formation",
    date: "2026",
    excerpt: "The steps foreign investors should follow when establishing a company in Türkiye and the points to consider.",
    body: [
      "Türkiye has legislation that grants foreign investors equal rights with domestic investors. Company formation includes determining the company type, preparing the articles of association, trade registry registration and completing tax and social security records.",
      "In a foreign-partner structure, additional matters such as potential tax treaties, visa/work permit processes and opening a bank account should also be included in the planning.",
      "Simurg makes the process fast and secure by managing all stages, from formation to operation, from a single point for foreign investors.",
    ],
  },
  {
    slug: "kobi-nakit-akisi-yonetimi",
    title: "Why Is Cash Flow Management Critical for SMEs?",
    category: "Investment & Financing",
    date: "2026",
    excerpt: "We discuss why even seemingly profitable companies experience cash shortages and how healthy cash flow is established.",
    body: [
      "A company being profitable on paper does not always mean it is strong in terms of cash. Collection-payment imbalances, inventory management and maturity mismatches are the main factors straining cash flow.",
      "Healthy cash flow management is established with income-expense projections, collection planning and early warning systems. This way, the company sees its short and medium-term cash needs in advance.",
      "Simurg places growth decisions on solid ground by setting up the financial discipline and planning systems that make SMEs' cash flow predictable.",
    ],
  },
  {
    slug: "ihracata-baslangic-yol-haritasi",
    title: "A Roadmap for Companies Looking to Start Exporting",
    category: "Export & International Trade",
    date: "2026",
    excerpt: "Essential steps for companies wishing to expand from the domestic market into international markets.",
    body: [
      "Export, when planned correctly, is an important growth channel for companies. The process begins with target market analysis, product-price strategy, preparation of the necessary documents and setting up logistics-customs processes.",
      "The market entry model (direct export, distributor, partnership) should be determined according to the company's capacity and the dynamics of the target country. Choosing the wrong model leads to both cost and time loss.",
      "Simurg provides strategic guidance to companies on their international expansion journey, from market research to finding distributors and managing export processes.",
    ],
  },
];

const postsData: L<BlogPost[]> = { tr, en };

export const blogPosts = tr;
export const postSlugs = tr.map((p) => p.slug);
export const getBlogCategories = (l: string) => pick(categories, l);
export const getBlogPosts = (l: string) => pick(postsData, l);
export const getPost = (slug: string, locale = "tr") =>
  pick(postsData, locale).find((p) => p.slug === slug);
