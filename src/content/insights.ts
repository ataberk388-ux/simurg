import { L, pick } from "./_pick";

/**
 * SIMURG INSIGHTS — Finansal İstihbarat ve Stratejik Perspektif
 * Brif (Ekim 2026, Sürüm 2.0) bölüm 4 ve 5.
 *
 * Editoryal ilke: gündemi aktarmak değil, iş dünyası için anlamlandırmak.
 * Haber metni birebir kopyalanmaz; doğrulanmış gelişmelerden özgün çıkarım üretilir.
 */

/** Makale gövde blokları. */
export type Block =
  | { k: "p"; text: string }
  | { k: "h"; text: string }
  | { k: "note"; text: string }
  | { k: "points"; items: { title: string; text: string }[] };

export type CategoryKey =
  | "market"
  | "corpfin"
  | "trade"
  | "regulation"
  | "guides";

export const categoryKeys: CategoryKey[] = [
  "market",
  "corpfin",
  "trade",
  "regulation",
  "guides",
];

const categoryLabels: L<Record<CategoryKey, string>> = {
  tr: {
    market: "Piyasa ve Ekonomi Analizleri",
    corpfin: "Kurumsal Finans ve Yatırım",
    trade: "Uluslararası Ticaret ve Strateji",
    regulation: "Mevzuat ve Kurumsal Dönüşüm",
    guides: "İşletme ve Finans Rehberleri",
  },
  en: {
    market: "Market and Economy Analysis",
    corpfin: "Corporate Finance and Investment",
    trade: "International Trade and Strategy",
    regulation: "Regulation and Corporate Transformation",
    guides: "Business and Finance Guides",
  },
};

export type Insight = {
  slug: string;
  title: string;
  category: CategoryKey;
  /** Tam tarih (2026-10-23) ya da yalnızca yıl (2026). */
  date: string;
  /** Güncelleme tarihi (varsa). */
  updated?: string;
  /** Kısa yönetici özeti — kart metni ve meta description temeli. */
  excerpt: string;
  /** Giriş paragrafı. */
  lead?: string;
  blocks: Block[];
  /** "Simurg'un Stratejik Değerlendirmesi" bölümü. */
  assessment?: string[];
  /** Kapanış yönlendirmesi. */
  ctaTitle?: string;
  ctaText?: string;
  /** İlgili hizmet slug'ı. */
  relatedService?: string;
  /** Yatırım tavsiyesi olmadığına dair uyarı. */
  disclaimer?: string;
  /** Birincil kaynaklar. */
  sources?: { label: string; url?: string }[];
  seoTitle?: string;
  seoDescription?: string;
};

const tr: Insight[] = [
  {
    slug: "msci-yatirimci-guveni-sekiz-kanit",
    title:
      "MSCI Uyarısı Şirketlere Ne Söylüyor? Yatırımcı Güveni İçin Hazırlanması Gereken 8 Kanıt",
    category: "corpfin",
    date: "2026-10-23",
    excerpt:
      "MSCI'nin Türkiye endekslerine ilişkin kararı, şirketler için finansal performansın ötesinde bir soruyu gündeme taşıyor: sunulan bilgi ne ölçüde doğrulanabilir? Yatırımcı incelemesine hazırlık için sekiz kurumsal kanıt başlığını ele alıyoruz.",
    lead: "Uluslararası yatırımcıların Türkiye piyasasına yönelik değerlendirmesi, şirketler açısından önemli bir soruyu yeniden gündeme taşıyor: Finansal performans, yatırımcı güveni oluşturmak için tek başına yeterli mi?",
    blocks: [
      { k: "h", text: "Yatırımcı güveninin yeni sınavı: Doğrulanabilirlik" },
      {
        k: "p",
        text: "15 Ekim 2026 tarihinde uluslararası endeks sağlayıcısı MSCI, Türkiye hisse senedi endekslerinde belirli değişiklikleri geçici olarak dondurduğunu açıkladı. Açıklamanın arka planında belirli piyasa işlemleri, fiili dolaşımdaki pay oranlarının güvenilirliği ve nihai faydalanıcı sahipliğine ilişkin şeffaflık konularında endişeler bulunuyor. MSCI'nin değerlendirmesi, sermaye piyasasının işleyişine yönelik olmakla birlikte daha geniş bir yönetim sorusunu gündeme getiriyor: Şirketler sundukları bilgileri ne ölçüde doğrulayabiliyor?",
      },
      {
        k: "note",
        text: "Aşağıdaki sekiz madde MSCI'nin doğrudan talep ettiği bir liste değildir; Simurg'un bu gelişmeden türettiği önerisel yatırımcı hazırlık çerçevesidir.",
      },
      { k: "h", text: "Şeffaflık neden finansman kapasitesini etkiler?" },
      {
        k: "p",
        text: "Yatırımcılar yalnızca potansiyel getiriyi değil, verilerin güvenilirliğini ve risklerin öngörülebilirliğini de inceler. Belirsiz ortaklık yapısı, açıklanmamış ilişkili taraf işlemleri veya birbiriyle uyuşmayan finansal tablolar daha uzun inceleme süreçlerine ve ek güvence taleplerine yol açabilir. Şeffaflık böylece yalnızca uyum konusu değil, sermayeye erişimde stratejik hazırlığın bir unsurudur.",
      },
      {
        k: "points",
        items: [
          {
            title: "Açık ve güncel ortaklık yapısı",
            text: "Doğrudan ortaklar, oy hakları, imtiyazlar ve grup kontrol ilişkileri bir şema ile ortaya konulmalıdır.",
          },
          {
            title: "Gerçek faydalanıcı sahipliği",
            text: "Nihai ekonomik fayda ve kontrol ilişkisinin kimlerde toplandığı uygun belgelerle doğrulanabilmelidir.",
          },
          {
            title: "Tutarlı, denetlenebilir finansal tablolar",
            text: "Bilanço, gelir tablosu ve nakit akışı tutarlı olmalı; FAVÖK gibi alternatif performans göstergelerinin hesaplama yöntemi açıklanmalıdır.",
          },
          {
            title: "İlişkili taraf işlemlerinin açıklığı",
            text: "Grup içi mal ve hizmet işlemleri, borçlar, teminatlar ve transferlerin ekonomik gerekçeleri belgelenmelidir.",
          },
          {
            title: "Kurumsal yönetim ve iç kontrol",
            text: "Yönetim organlarının yetkileri, karar alma mekanizmaları ve çıkar çatışması politikaları belirgin olmalıdır.",
          },
          {
            title: "Nakit akışı ve finansman senaryoları",
            text: "Satış tahminleri yanında işletme sermayesi, borç ödeme kapasitesi, yatırım harcamaları ve stres senaryoları modellenmelidir.",
          },
          {
            title: "Hukuki ve operasyonel risk envanteri",
            text: "Önemli sözleşme, ruhsat, vergi, uyuşmazlık ve operasyonel bağımlılıklar belirlenerek risk yönetim yaklaşımı hazırlanmalıdır.",
          },
          {
            title: "Tutarlı yatırımcı iletişimi",
            text: "Yatırım sonrası raporlama takvimi, temel göstergeler ve önemli gelişmelerin iletişim usulü önceden tanımlanmalıdır.",
          },
        ],
      },
      { k: "h", text: "Finansal hazırlığın ötesinde: Kurumsal güven altyapısı" },
      {
        k: "p",
        text: "Bu sekiz kanıtın oluşturulması yalnızca finans departmanının işi değildir. Muhasebe, hukuk, yönetim, operasyon ve stratejik planlama disiplinleri aynı doğrulanabilir veri seti üzerinde çalışmalıdır. Güçlü bir sunumun ardında tutarlı belgeler bulunmadığında yatırım incelemesindeki sorular çoğalır. Amaç risksiz bir şirket görüntüsü çizmek değil, riskleri ve verileri açık biçimde ortaya koymaktır.",
      },
    ],
    assessment: [
      "MSCI değerlendirmesinden şirketler adına çıkarılabilecek esas ders, güvenin yalnızca beyanlarla değil doğrulanabilir bilgi ve tutarlı kurumsal uygulamalarla desteklenmesi gerektiğidir. Bu yaklaşım halka açık şirketlerin yanında yatırımcı arayan, yeni ortaklıklara hazırlanan veya alternatif finansman değerlendiren özel şirketler açısından da anlamlıdır.",
      "Simurg, finansal analiz, kurumsal dokümantasyon, finansman modelleme ve süreç koordinasyonunu birlikte ele alan bir yatırımcı hazırlık yaklaşımını benimser. Güçlü bir yatırım hikâyesi dikkat çeker; güvenilir bir yatırım sürecini ise o hikâyenin arkasındaki veriler taşır.",
    ],
    ctaTitle: "Şirketiniz yatırımcı incelemesine ne kadar hazır?",
    ctaText:
      "Yatırım, ortaklık veya alternatif finansman süreçlerinde şirketinizin finansal ve kurumsal hazırlık ihtiyaçlarını birlikte değerlendirebiliriz.",
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
    disclaimer:
      "Bu analiz genel bilgilendirme ve stratejik değerlendirme niteliğindedir; yatırım tavsiyesi veya şirkete özel hukuki/finansal görüş değildir.",
    sources: [
      {
        label: "MSCI — MSCI Implements a Freeze on the MSCI Turkey Indexes (15 Ekim 2026)",
        url: "https://www.msci.com/downloads/documents/press-releases/media-room/Turkey_PR_Oct_26.pdf",
      },
      {
        label: "MSCI — Results of the MSCI 2026 Market Classification Review (Haziran 2026)",
        url: "https://www.msci.com/downloads/documents/press-releases/media-room/MSCI_2026_MCR_PR.pdf",
      },
      {
        label: "MSCI — 2026 Global Market Accessibility Review Report (Haziran 2026)",
        url: "https://www.msci.com/downloads/web/msci-com/indexes/index-resources/market-classification/MSCI%202026%20GLOBAL%20MARKET%20ACCESSIBILITY%20REVIEW%20REPORT.pdf",
      },
    ],
    seoTitle: "MSCI Uyarısı ve Yatırımcı Güveni: 8 Kritik Kanıt",
    seoDescription:
      "MSCI'nin Türkiye değerlendirmesi şirketlere ne anlatıyor? Yatırımcı güvenini güçlendirmek için sekiz kurumsal hazırlık başlığını inceliyoruz.",
  },
  {
    slug: "2026-tesvik-ve-hibe-programlari",
    title: "2026 Yılı Güncel Teşvik ve Hibe Programları",
    category: "guides",
    date: "2026",
    excerpt:
      "KOSGEB, TÜBİTAK ve yatırım teşvik belgesi başta olmak üzere işletmelerin yararlanabileceği güncel destek programlarına genel bir bakış.",
    blocks: [
      {
        k: "p",
        text: "Şirketlerin büyüme ve yatırım hedeflerini desteklemek için sunulan teşvik ve hibe programları, doğru planlandığında ciddi bir maliyet avantajı sağlar. 2026 yılında KOSGEB destekleri, TÜBİTAK Ar-Ge programları, TKDK kırsal kalkınma destekleri ve yatırım teşvik belgesi uygulamaları öne çıkan başlıklar arasında yer alıyor.",
      },
      {
        k: "p",
        text: "Her programın kendine özgü uygunluk kriterleri, başvuru takvimi ve raporlama yükümlülükleri bulunur. Bu nedenle başvuru öncesinde şirketin faaliyet alanı, ölçeği ve yatırım planı dikkate alınarak doğru programın seçilmesi kritik önem taşır.",
      },
      {
        k: "p",
        text: "Simurg olarak uygunluk analizinden başvuru dosyasının hazırlanmasına ve sürecin takibine kadar tüm aşamalarda işletmelerin yanında yer alıyoruz.",
      },
    ],
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
  },
  {
    slug: "yatirim-tesvik-belgesi-basvurusu",
    title: "Yatırım Teşvik Belgesi Başvurusunda Dikkat Edilmesi Gerekenler",
    category: "guides",
    date: "2026",
    excerpt:
      "Yatırım teşvik belgesi sürecinde sık yapılan hatalar ve başvuruyu güçlendiren temel noktalar.",
    blocks: [
      {
        k: "p",
        text: "Yatırım teşvik belgesi; vergi indirimi, SGK prim desteği, gümrük muafiyeti ve faiz desteği gibi avantajlar sunar. Ancak başvurunun doğru kurgulanması, yatırımın bölgesi, sektörü ve tutarı gibi unsurların mevzuata uygun biçimde değerlendirilmesini gerektirir.",
      },
      {
        k: "p",
        text: "En sık yapılan hatalar; eksik belge, yanlış harcama sınıflandırması ve yatırım kalemlerinin teşvik kapsamı dışında planlanmasıdır. Bu hatalar süreci uzatır veya destek kaybına yol açar.",
      },
      {
        k: "p",
        text: "Doğru bir fizibilite ve uzman desteğiyle hazırlanan başvuru, hem onay sürecini hızlandırır hem de yatırımın geri dönüşünü artırır.",
      },
    ],
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
  },
  {
    slug: "yabanci-yatirimci-sirket-kurulusu",
    title: "Türkiye'de Yabancı Yatırımcılar İçin Şirket Kuruluş Süreci",
    category: "guides",
    date: "2026",
    excerpt:
      "Yabancı yatırımcıların Türkiye'de şirket kurarken izlemesi gereken adımlar ve dikkat edilmesi gereken noktalar.",
    blocks: [
      {
        k: "p",
        text: "Türkiye, yabancı yatırımcılara yerli yatırımcılarla eşit haklar tanıyan bir mevzuata sahiptir. Şirket kuruluşu; şirket türünün belirlenmesi, ana sözleşmenin hazırlanması, ticaret sicil tescili ve vergi-SGK kayıtlarının yapılması adımlarını içerir.",
      },
      {
        k: "p",
        text: "Yabancı ortak yapısında potansiyel vergi anlaşmaları, vize/çalışma izni süreçleri ve banka hesabı açılışı gibi ek konular da planlamaya dahil edilmelidir.",
      },
      {
        k: "p",
        text: "Simurg, yabancı yatırımcılar için kuruluştan operasyonel sürece kadar tüm aşamaları tek elden yöneterek süreci hızlı ve güvenli hale getirir.",
      },
    ],
    relatedService: "sirket-kurulusu-ve-kurumsal-yapilanma",
  },
  {
    slug: "kobi-nakit-akisi-yonetimi",
    title: "KOBİ'ler İçin Nakit Akışı Yönetimi Neden Kritiktir?",
    category: "guides",
    date: "2026",
    excerpt:
      "Kârlı görünen şirketlerin bile neden nakit sıkıntısı yaşadığını ve sağlıklı nakit akışının nasıl kurulduğunu ele alıyoruz.",
    blocks: [
      {
        k: "p",
        text: "Bir şirketin kâğıt üzerinde kârlı olması, her zaman nakit açısından güçlü olduğu anlamına gelmez. Tahsilat-ödeme dengesizliği, stok yönetimi ve vade uyumsuzlukları nakit akışını zorlayan başlıca etkenlerdir.",
      },
      {
        k: "p",
        text: "Sağlıklı bir nakit akışı yönetimi; gelir-gider projeksiyonları, tahsilat planlaması ve erken uyarı sistemleriyle kurulur. Böylece şirket, kısa ve orta vadeli nakit ihtiyacını önceden görür.",
      },
      {
        k: "p",
        text: "Simurg, KOBİ'lerin nakit akışını öngörülebilir kılacak finansal disiplin ve planlama sistemlerini kurarak büyüme kararlarını sağlam zemine oturtur.",
      },
    ],
    relatedService: "finansal-danismanlik-ve-yeniden-yapilandirma",
  },
  {
    slug: "ihracata-baslangic-yol-haritasi",
    title: "İhracata Başlamak İsteyen Şirketler İçin Yol Haritası",
    category: "guides",
    date: "2026",
    excerpt:
      "Yurt içi pazardan uluslararası pazarlara açılmak isteyen şirketler için temel adımlar.",
    blocks: [
      {
        k: "p",
        text: "İhracat, doğru planlandığında şirketler için önemli bir büyüme kanalıdır. Süreç; hedef pazar analizi, ürün-fiyat stratejisi, gerekli belgelerin hazırlanması ve lojistik-gümrük süreçlerinin kurulmasıyla başlar.",
      },
      {
        k: "p",
        text: "Pazara giriş modeli (doğrudan ihracat, distribütör, ortaklık) şirketin kapasitesine ve hedef ülkenin dinamiklerine göre belirlenmelidir. Yanlış model seçimi, hem maliyet hem zaman kaybına yol açar.",
      },
      {
        k: "p",
        text: "Simurg, pazar araştırmasından distribütör bulmaya ve ihracat süreç yönetimine kadar uluslararası açılım yolculuğunda şirketlere stratejik rehberlik eder.",
      },
    ],
    relatedService: "uluslararasi-is-gelistirme-ve-ihracat-danismanligi",
  },
];

const en: Insight[] = [
  {
    slug: "msci-yatirimci-guveni-sekiz-kanit",
    title:
      "What the MSCI Warning Tells Companies: Eight Proofs to Prepare for Investor Confidence",
    category: "corpfin",
    date: "2026-10-23",
    excerpt:
      "MSCI's decision on the Turkey indexes raises a question that goes beyond financial performance: how verifiable is the information a company presents? We examine eight corporate proof points for investor readiness.",
    lead: "International investors' assessment of the Turkish market brings an important question back onto the agenda for companies: is financial performance enough on its own to build investor confidence?",
    blocks: [
      { k: "h", text: "The new test of investor confidence: verifiability" },
      {
        k: "p",
        text: "On 15 October 2026, the international index provider MSCI announced that it was temporarily freezing certain changes in its Turkish equity indexes. Behind the announcement lie concerns about certain market transactions, the reliability of free float estimates and transparency around ultimate beneficial ownership. While MSCI's assessment concerns the functioning of the capital market, it raises a broader governance question: to what extent can companies verify the information they present?",
      },
      {
        k: "note",
        text: "The eight points below are not a list MSCI directly requires; they are an advisory investor-readiness framework that Simurg derives from this development.",
      },
      { k: "h", text: "Why does transparency affect financing capacity?" },
      {
        k: "p",
        text: "Investors examine not only potential returns but also the reliability of data and the predictability of risks. An unclear ownership structure, undisclosed related-party transactions or inconsistent financial statements can lead to longer review processes and additional assurance requests. Transparency is therefore not merely a compliance matter but an element of strategic readiness for access to capital.",
      },
      {
        k: "points",
        items: [
          {
            title: "A clear and current ownership structure",
            text: "Direct shareholders, voting rights, privileges and group control relationships should be set out in a diagram.",
          },
          {
            title: "Ultimate beneficial ownership",
            text: "It should be possible to verify, with appropriate documentation, where ultimate economic benefit and control reside.",
          },
          {
            title: "Consistent, auditable financial statements",
            text: "The balance sheet, income statement and cash flow statement should be consistent, and the calculation method for alternative performance measures such as EBITDA should be disclosed.",
          },
          {
            title: "Clarity of related-party transactions",
            text: "The economic rationale for intra-group goods and services transactions, debts, guarantees and transfers should be documented.",
          },
          {
            title: "Corporate governance and internal control",
            text: "The authorities of governing bodies, decision-making mechanisms and conflict-of-interest policies should be clearly defined.",
          },
          {
            title: "Cash flow and financing scenarios",
            text: "Alongside sales forecasts, working capital, debt service capacity, capital expenditure and stress scenarios should be modeled.",
          },
          {
            title: "Legal and operational risk inventory",
            text: "Material contracts, licenses, tax matters, disputes and operational dependencies should be identified and a risk management approach prepared.",
          },
          {
            title: "Consistent investor communication",
            text: "The post-investment reporting calendar, key indicators and the procedure for communicating material developments should be defined in advance.",
          },
        ],
      },
      { k: "h", text: "Beyond financial readiness: a corporate trust infrastructure" },
      {
        k: "p",
        text: "Building these eight proofs is not the finance department's job alone. Accounting, legal, management, operations and strategic planning should work on the same verifiable data set. When a strong presentation is not backed by consistent documentation, questions multiply during investment review. The aim is not to present a risk-free company, but to set out risks and data clearly.",
      },
    ],
    assessment: [
      "The main lesson companies can draw from the MSCI assessment is that trust must be supported not by statements alone but by verifiable information and consistent corporate practice. This holds not only for listed companies but also for private companies seeking investors, preparing for new partnerships or evaluating alternative financing.",
      "Simurg takes an investor-readiness approach that addresses financial analysis, corporate documentation, financing modeling and process coordination together. A strong investment story attracts attention; a credible investment process is carried by the data behind that story.",
    ],
    ctaTitle: "How ready is your company for investor review?",
    ctaText:
      "We can assess your company's financial and corporate readiness needs together for investment, partnership or alternative financing processes.",
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
    disclaimer:
      "This analysis is general information and strategic commentary; it is not investment advice or a company-specific legal or financial opinion.",
    sources: [
      {
        label: "MSCI — MSCI Implements a Freeze on the MSCI Turkey Indexes (15 October 2026)",
        url: "https://www.msci.com/downloads/documents/press-releases/media-room/Turkey_PR_Oct_26.pdf",
      },
      {
        label: "MSCI — Results of the MSCI 2026 Market Classification Review (June 2026)",
        url: "https://www.msci.com/downloads/documents/press-releases/media-room/MSCI_2026_MCR_PR.pdf",
      },
      {
        label: "MSCI — 2026 Global Market Accessibility Review Report (June 2026)",
        url: "https://www.msci.com/downloads/web/msci-com/indexes/index-resources/market-classification/MSCI%202026%20GLOBAL%20MARKET%20ACCESSIBILITY%20REVIEW%20REPORT.pdf",
      },
    ],
    seoTitle: "The MSCI Warning and Investor Confidence: 8 Critical Proofs",
    seoDescription:
      "What does MSCI's assessment of Türkiye tell companies? We examine eight corporate readiness themes for strengthening investor confidence.",
  },
  {
    slug: "2026-tesvik-ve-hibe-programlari",
    title: "Current Incentive and Grant Programs for 2026",
    category: "guides",
    date: "2026",
    excerpt:
      "An overview of current support programs businesses can benefit from, primarily KOSGEB, TÜBİTAK and the investment incentive certificate.",
    blocks: [
      {
        k: "p",
        text: "Incentive and grant programs offered to support companies' growth and investment goals provide a significant cost advantage when planned correctly. In 2026, KOSGEB supports, TÜBİTAK R&D programs, TKDK rural development supports and investment incentive certificate applications are among the prominent headings.",
      },
      {
        k: "p",
        text: "Each program has its own eligibility criteria, application schedule and reporting obligations. Therefore, selecting the right program by considering the company's field of activity, scale and investment plan is critically important.",
      },
      {
        k: "p",
        text: "At Simurg, we stand by businesses at every stage, from eligibility analysis to preparing the application file and following up the process.",
      },
    ],
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
  },
  {
    slug: "yatirim-tesvik-belgesi-basvurusu",
    title: "Key Points When Applying for an Investment Incentive Certificate",
    category: "guides",
    date: "2026",
    excerpt:
      "Common mistakes in the investment incentive certificate process and the key points that strengthen the application.",
    blocks: [
      {
        k: "p",
        text: "The investment incentive certificate offers advantages such as tax reduction, social security premium support, customs exemption and interest support. However, structuring the application correctly requires evaluating elements such as the region, sector and amount of the investment in compliance with legislation.",
      },
      {
        k: "p",
        text: "The most common mistakes are missing documents, incorrect expense classification, and planning investment items outside the scope of the incentive. These mistakes prolong the process or lead to loss of support.",
      },
      {
        k: "p",
        text: "An application prepared with the right feasibility and expert support both speeds up the approval process and increases the return on investment.",
      },
    ],
    relatedService: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
  },
  {
    slug: "yabanci-yatirimci-sirket-kurulusu",
    title: "Company Formation Process for Foreign Investors in Türkiye",
    category: "guides",
    date: "2026",
    excerpt:
      "The steps foreign investors should follow when establishing a company in Türkiye and the points to consider.",
    blocks: [
      {
        k: "p",
        text: "Türkiye has legislation that grants foreign investors equal rights with domestic investors. Company formation includes determining the company type, preparing the articles of association, trade registry registration and completing tax and social security records.",
      },
      {
        k: "p",
        text: "In a foreign-partner structure, additional matters such as potential tax treaties, visa/work permit processes and opening a bank account should also be included in the planning.",
      },
      {
        k: "p",
        text: "Simurg makes the process fast and secure by managing all stages, from formation to operation, from a single point for foreign investors.",
      },
    ],
    relatedService: "sirket-kurulusu-ve-kurumsal-yapilanma",
  },
  {
    slug: "kobi-nakit-akisi-yonetimi",
    title: "Why Is Cash Flow Management Critical for SMEs?",
    category: "guides",
    date: "2026",
    excerpt:
      "We discuss why even seemingly profitable companies experience cash shortages and how healthy cash flow is established.",
    blocks: [
      {
        k: "p",
        text: "A company being profitable on paper does not always mean it is strong in terms of cash. Collection-payment imbalances, inventory management and maturity mismatches are the main factors straining cash flow.",
      },
      {
        k: "p",
        text: "Healthy cash flow management is established with income-expense projections, collection planning and early warning systems. This way, the company sees its short and medium-term cash needs in advance.",
      },
      {
        k: "p",
        text: "Simurg places growth decisions on solid ground by setting up the financial discipline and planning systems that make SMEs' cash flow predictable.",
      },
    ],
    relatedService: "finansal-danismanlik-ve-yeniden-yapilandirma",
  },
  {
    slug: "ihracata-baslangic-yol-haritasi",
    title: "A Roadmap for Companies Looking to Start Exporting",
    category: "guides",
    date: "2026",
    excerpt:
      "Essential steps for companies wishing to expand from the domestic market into international markets.",
    blocks: [
      {
        k: "p",
        text: "Export, when planned correctly, is an important growth channel for companies. The process begins with target market analysis, product-price strategy, preparation of the necessary documents and setting up logistics-customs processes.",
      },
      {
        k: "p",
        text: "The market entry model (direct export, distributor, partnership) should be determined according to the company's capacity and the dynamics of the target country. Choosing the wrong model leads to both cost and time loss.",
      },
      {
        k: "p",
        text: "Simurg provides strategic guidance to companies on their international expansion journey, from market research to finding distributors and managing export processes.",
      },
    ],
    relatedService: "uluslararasi-is-gelistirme-ve-ihracat-danismanligi",
  },
];

const insightsData: L<Insight[]> = { tr, en };

/** Yayın sırası: en yeni önce (tam tarihliler yıl-bazlılardan önce). */
function byDateDesc(a: Insight, b: Insight) {
  const score = (d: string) => (d.length > 4 ? `${d}-z` : `${d}-0`);
  return score(b.date).localeCompare(score(a.date));
}

export const insightSlugs = tr.map((p) => p.slug);
export const allInsights = tr;

export const getInsights = (l: string) =>
  [...pick(insightsData, l)].sort(byDateDesc);

export const getInsight = (slug: string, locale = "tr") =>
  pick(insightsData, locale).find((p) => p.slug === slug);

export const getCategoryLabel = (key: CategoryKey, locale: string) =>
  pick(categoryLabels, locale)[key];

export const getCategories = (locale: string) =>
  categoryKeys.map((key) => ({ key, label: getCategoryLabel(key, locale) }));

/** Tam tarih varsa yerelleştirilmiş gün-ay-yıl, yoksa yıl döner. */
export const formatInsightDate = (date: string, locale: string) => {
  if (date.length <= 4) return date;
  const d = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
};

/** JSON-LD için ISO tarih; yalnızca yıl verilmişse undefined. */
export const isoDate = (date: string) =>
  date.length > 4 ? date : undefined;
