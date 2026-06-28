import { L, pick } from "./_pick";

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: "ledger" | "building" | "finance" | "invest" | "globe" | "law" | "strategy";
  features: string[];
  details: { heading: string; body: string }[];
};

const tr: Service[] = [
  {
    slug: "mali-ve-vergisel-danismanlik",
    title: "Mali ve Vergisel Danışmanlık",
    short: "Muhasebe, vergi, SGK ve finansal raporlama süreçlerinde sürdürülebilir operasyonel düzen.",
    summary: "Şirketinizin mali süreçlerini mevzuata uyumlu, düzenli ve raporlanabilir bir yapıya dönüştürürüz. Muhasebe, vergi, SGK ve finansal raporlama süreçlerinde sürdürülebilir bir operasyonel düzen kurarız.",
    icon: "ledger",
    features: [
      "Aylık muhasebe ve defter tutma",
      "Vergi beyannamelerinin hazırlanması ve takibi",
      "SGK ve bordro işlemleri",
      "E-Defter, E-Fatura, E-Arşiv süreçleri",
      "Vergi planlaması ve optimizasyonu",
      "Mali tablo analizi ve finansal raporlama",
    ],
    details: [
      { heading: "Mevzuata tam uyum", body: "Sürekli değişen vergi mevzuatını sizin adınıza takip eder, tüm yükümlülüklerinizi zamanında ve cezasız biçimde yerine getiririz." },
      { heading: "Dijital muhasebe altyapısı", body: "E-Defter, E-Fatura ve E-Arşiv süreçlerinizi uçtan uca kurar; kâğıtsız, hızlı ve denetlenebilir bir mali operasyon sağlarız." },
      { heading: "Karar destek raporları", body: "Mali tablolarınızı sade ve yorumlanmış raporlara dönüştürür, şirketinizi rakamlarla yönetmenizi sağlarız." },
    ],
  },
  {
    slug: "sirket-kurulusu-ve-kurumsal-yapilanma",
    title: "Şirket Kuruluşu ve Kurumsal Yapılanma",
    short: "Şirket kuruluşundan kurumsal yönetim yapısına kadar doğru hukuki, mali ve stratejik planlama.",
    summary: "Şirket kuruluşundan kurumsal yönetim yapısına kadar tüm süreçleri doğru hukuki, mali ve stratejik çerçevede planlarız. Yabancı yatırımcılar dahil, kurumsallaşma yolculuğunuzun her adımında yanınızdayız.",
    icon: "building",
    features: [
      "Anonim, limited ve şahıs şirketi kuruluşu",
      "Yabancı yatırımcılar için Türkiye'de şirket kurulumu",
      "Ticaret sicil ve adres tescil işlemleri",
      "Ortaklık yapısı tasarımı",
      "Ana sözleşme hazırlığı",
      "Kurumsallaşma danışmanlığı",
      "Şirket devir ve tasfiye işlemleri",
    ],
    details: [
      { heading: "Doğru kuruluş", body: "Şirket türü, ortaklık yapısı ve sermaye planlamasını mali ve hukuki açıdan en avantajlı şekilde kurgularız." },
      { heading: "Yabancı yatırımcı desteği", body: "Türkiye'de şirket kurmak isteyen yabancı yatırımcılar için tüm tescil, izin ve operasyonel süreçleri yönetiriz." },
      { heading: "Kurumsallaşma", body: "Aile şirketlerinden ölçeklenen yapılara geçişte yönetim, karar ve raporlama sistemlerini kurarız." },
    ],
  },
  {
    slug: "finansal-danismanlik-ve-yeniden-yapilandirma",
    title: "Finansal Danışmanlık ve Yeniden Yapılandırma",
    short: "Nakit akışı, borç yapısı ve finansman kaynaklarını sürdürülebilir hale getiren çözümler.",
    summary: "Şirketinizin finansal görünümünü analiz eder; nakit akışı, borç yapısı ve finansman kaynaklarını daha sürdürülebilir hale getirecek çözümler geliştiririz.",
    icon: "finance",
    features: [
      "Nakit akışı yönetimi",
      "Finansal planlama",
      "Banka borcu yeniden yapılandırma",
      "Alternatif finansman kaynakları",
      "Akreditif ve ticaret finansmanı çözümleri",
      "SBLC danışmanlığı",
      "Finansal kriz yönetimi",
    ],
    details: [
      { heading: "Nakit akışı kontrolü", body: "Gelir-gider dengesini öngörülebilir kılar, kısa ve orta vadeli nakit ihtiyacınızı önceden planlarız." },
      { heading: "Borç yeniden yapılandırma", body: "Banka ve finansman borçlarınızı sürdürülebilir bir takvime kavuşturacak yapılandırma çözümleri geliştiririz." },
      { heading: "Ticaret finansmanı", body: "Akreditif, SBLC ve alternatif finansman araçlarıyla ticari operasyonlarınıza finansal güç katarız." },
    ],
  },
  {
    slug: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
    title: "Yatırım, Birleşme & Satın Alma ve Teşvik Danışmanlığı",
    short: "Yatırım, teşvik, değerleme, ortaklık ve mevzuat süreçlerini bütüncül yönetiriz.",
    summary: "Yatırım süreçlerini yalnızca finansal açıdan değil; teşvik, değerleme, ortaklık, mevzuat ve süreç yönetimi boyutlarıyla bütüncül olarak ele alırız.",
    icon: "invest",
    features: [
      "Yatırımcı ile şirket buluşturma",
      "Hisse devri ve ortaklık yapılandırması",
      "Due diligence süreçleri",
      "Şirket değerleme",
      "Yatırım anlaşması müzakeresi",
      "KOSGEB ve TÜBİTAK Ar-Ge destekleri",
      "TKDK, TARSİM ve tarımsal destekler",
      "Yatırım teşvik belgesi başvurusu",
      "Teknokent ve serbest bölge başvuru danışmanlığı",
    ],
    details: [
      { heading: "Teşvik ve hibe", body: "KOSGEB, TÜBİTAK, TKDK ve yatırım teşvik belgesi süreçlerinde uygunluk analizinden başvuruya kadar yanınızdayız." },
      { heading: "Birleşme & satın alma", body: "Due diligence, şirket değerleme ve müzakere süreçlerini yöneterek doğru yatırım kararını destekleriz." },
      { heading: "Yatırımcı eşleştirme", body: "Yatırım arayan şirketlerle doğru yatırımcıları buluşturur, ortaklık yapısını kurgularız." },
    ],
  },
  {
    slug: "uluslararasi-is-gelistirme-ve-ihracat-danismanligi",
    title: "Uluslararası İş Geliştirme ve İhracat Danışmanlığı",
    short: "Pazar analizi, ihracat süreçleri ve uluslararası ortaklık yapılarını stratejik yönetim.",
    summary: "Şirketlerin uluslararası pazarlara açılım sürecinde pazar analizi, iş geliştirme, ihracat süreçleri ve yabancı ortaklık yapılarını stratejik biçimde yönetiriz.",
    icon: "globe",
    features: [
      "Yurt dışı pazar araştırması",
      "Pazar giriş stratejisi",
      "İhracat süreç yönetimi",
      "Uluslararası ortaklık ve distribütör bulma",
      "Transit ticaret yapılandırması",
      "Yabancı yatırımcıların Türkiye'deki iş süreçleri",
      "Orta Doğu, Afrika ve Orta Asya pazar geliştirme",
    ],
    details: [
      { heading: "Pazar giriş stratejisi", body: "Hedef pazarları analiz eder, doğru giriş modeli ve fiyatlama stratejisini birlikte belirleriz." },
      { heading: "İhracat operasyonu", body: "İhracat süreçlerini, gümrük ve lojistik koordinasyonunu uçtan uca yönetiriz." },
      { heading: "Bölgesel uzmanlık", body: "Orta Doğu, Afrika ve Orta Asya pazarlarında iş geliştirme bağlantıları kurarız." },
    ],
  },
  {
    slug: "hukuki-koordinasyon-ve-sozlesme-surecleri",
    title: "Hukuki Koordinasyon ve Sözleşme Süreçleri",
    short: "Uzman hukuk bürolarıyla koordinasyon sağlayarak ticari kararları güvenli zemine oturturuz.",
    summary: "Hukuki süreçlerde doğrudan hukuk hizmeti vermek yerine uzman hukuk bürolarıyla koordinasyon sağlayarak şirketlerin ticari kararlarını daha güvenli zemine oturturuz.",
    icon: "law",
    features: [
      "Ticaret hukuku uyum danışmanlığı",
      "Sözleşme hazırlama ve müzakere desteği",
      "Bayi, franchise ve distribütör anlaşmaları",
      "İdari itiraz ve dava süreçleri koordinasyonu",
      "İş hukuku süreçleri",
      "Gayrimenkul hukuku süreç yönetimi",
    ],
    details: [
      { heading: "Sözleşme güvencesi", body: "Ticari sözleşmelerinizi hazırlar veya inceler; haklarınızı koruyan, açık ve uygulanabilir maddelerle imza atmanızı sağlarız." },
      { heading: "Çözüm ortaklığı", body: "Uzmanlık gerektiren konularda anlaşmalı hukuk bürolarıyla koordineli çalışır, sürecin tek elden takibini sağlarız." },
      { heading: "Risk yönetimi", body: "Ticari ilişkilerinizdeki hukuki riskleri önceden tespit eder, uyuşmazlığa dönüşmeden önleyici çözümler üretiriz." },
    ],
  },
  {
    slug: "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi",
    title: "Stratejik Planlama, Marka, Varlık ve Doğal Kaynak Danışmanlığı",
    short: "Büyüme, marka, varlık ve kaynak yönetiminde stratejik ve uygulanabilir yol haritaları.",
    summary: "Şirketlerin büyüme, marka, varlık, yatırım ve kaynak yönetimi süreçlerinde stratejik ve uygulanabilir yol haritaları oluştururuz.",
    icon: "strategy",
    features: [
      "İş planı ve fizibilite raporu",
      "Pazar analizi ve finansal projeksiyon",
      "Büyüme stratejisi ve senaryo modelleme",
      "Marka ve ürün konumlandırma",
      "Marka tescil, patent ve faydalı model süreçleri",
      "Fikri mülkiyet portföy yönetimi",
      "Ticari gayrimenkul ve değerleme danışmanlığı",
      "Maden sahası kiralama, ruhsat ve devir aracılığı",
      "Hammadde tedarik zinciri yönetimi",
    ],
    details: [
      { heading: "Strateji ve fizibilite", body: "İş planı, fizibilite ve finansal projeksiyonlarla yatırım ve büyüme kararlarınızı sağlam zemine oturturuz." },
      { heading: "Marka ve fikri mülkiyet", body: "Marka konumlandırma, tescil, patent ve fikri mülkiyet portföyü yönetimini uçtan uca yürütürüz." },
      { heading: "Varlık ve doğal kaynak", body: "Ticari gayrimenkul, maden sahası ve hammadde tedarik süreçlerinde değerleme ve aracılık danışmanlığı sunarız." },
    ],
  },
];

const en: Service[] = [
  {
    slug: "mali-ve-vergisel-danismanlik",
    title: "Fiscal & Tax Advisory",
    short: "A sustainable operational order across accounting, tax, social security and financial reporting.",
    summary: "We transform your company's fiscal processes into a compliant, organized and reportable structure. We establish a sustainable operational order across accounting, tax, social security and financial reporting.",
    icon: "ledger",
    features: [
      "Monthly accounting and bookkeeping",
      "Preparation and follow-up of tax returns",
      "Social security and payroll operations",
      "E-Ledger, E-Invoice and E-Archive processes",
      "Tax planning and optimization",
      "Financial statement analysis and reporting",
    ],
    details: [
      { heading: "Full compliance", body: "We track the constantly changing tax legislation on your behalf and fulfill all your obligations on time, without penalties." },
      { heading: "Digital accounting infrastructure", body: "We set up your E-Ledger, E-Invoice and E-Archive processes end-to-end, ensuring a paperless, fast and auditable fiscal operation." },
      { heading: "Decision-support reports", body: "We turn your financial statements into clear, interpreted reports so you can manage your company with numbers." },
    ],
  },
  {
    slug: "sirket-kurulusu-ve-kurumsal-yapilanma",
    title: "Company Formation & Corporate Structuring",
    short: "From company formation to corporate governance, with the right legal, fiscal and strategic planning.",
    summary: "We plan every process from company formation to corporate management structure within the right legal, fiscal and strategic framework. Including foreign investors, we are with you at every step of your corporate journey.",
    icon: "building",
    features: [
      "Joint-stock, limited and sole proprietorship formation",
      "Company setup in Türkiye for foreign investors",
      "Trade registry and address registration",
      "Partnership structure design",
      "Articles of association preparation",
      "Corporate structuring advisory",
      "Company transfer and liquidation",
    ],
    details: [
      { heading: "The right formation", body: "We structure the company type, partnership and capital planning in the most advantageous way from a fiscal and legal perspective." },
      { heading: "Foreign investor support", body: "For foreign investors who wish to establish a company in Türkiye, we manage all registration, permit and operational processes." },
      { heading: "Corporate transformation", body: "We build the management, decision and reporting systems for the transition from family businesses to scaling structures." },
    ],
  },
  {
    slug: "finansal-danismanlik-ve-yeniden-yapilandirma",
    title: "Financial Advisory & Restructuring",
    short: "Solutions that make cash flow, debt structure and financing sources more sustainable.",
    summary: "We analyze your company's financial outlook and develop solutions to make your cash flow, debt structure and financing sources more sustainable.",
    icon: "finance",
    features: [
      "Cash flow management",
      "Financial planning",
      "Bank debt restructuring",
      "Alternative financing sources",
      "Letter of credit and trade finance solutions",
      "SBLC advisory",
      "Financial crisis management",
    ],
    details: [
      { heading: "Cash flow control", body: "We make the income-expense balance predictable and plan your short and medium-term cash needs in advance." },
      { heading: "Debt restructuring", body: "We develop solutions to put your bank and financing debts on a sustainable schedule." },
      { heading: "Trade finance", body: "With letters of credit, SBLC and alternative financing instruments, we add financial strength to your commercial operations." },
    ],
  },
  {
    slug: "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi",
    title: "Investment, M&A and Incentive Advisory",
    short: "We handle investment, incentives, valuation, partnership and regulatory processes holistically.",
    summary: "We address investment processes not only financially but holistically, across incentives, valuation, partnership, regulation and process management.",
    icon: "invest",
    features: [
      "Matching investors with companies",
      "Share transfer and partnership structuring",
      "Due diligence processes",
      "Company valuation",
      "Investment agreement negotiation",
      "KOSGEB and TÜBİTAK R&D supports",
      "TKDK, TARSİM and agricultural supports",
      "Investment incentive certificate application",
      "Technopark and free-zone application advisory",
    ],
    details: [
      { heading: "Incentives and grants", body: "From eligibility analysis to application, we are with you in KOSGEB, TÜBİTAK, TKDK and investment incentive certificate processes." },
      { heading: "Mergers & acquisitions", body: "By managing due diligence, company valuation and negotiation, we support the right investment decision." },
      { heading: "Investor matching", body: "We match companies seeking investment with the right investors and structure the partnership." },
    ],
  },
  {
    slug: "uluslararasi-is-gelistirme-ve-ihracat-danismanligi",
    title: "International Business Development & Export Advisory",
    short: "Strategic management of market analysis, export processes and international partnership structures.",
    summary: "We strategically manage market analysis, business development, export processes and foreign partnership structures during companies' expansion into international markets.",
    icon: "globe",
    features: [
      "Foreign market research",
      "Market entry strategy",
      "Export process management",
      "Finding international partners and distributors",
      "Transit trade structuring",
      "Business processes of foreign investors in Türkiye",
      "Middle East, Africa and Central Asia market development",
    ],
    details: [
      { heading: "Market entry strategy", body: "We analyze target markets and determine the right entry model and pricing strategy together." },
      { heading: "Export operations", body: "We manage export processes, customs and logistics coordination end-to-end." },
      { heading: "Regional expertise", body: "We establish business development connections across the Middle East, Africa and Central Asia." },
    ],
  },
  {
    slug: "hukuki-koordinasyon-ve-sozlesme-surecleri",
    title: "Legal Coordination & Contract Processes",
    short: "We place commercial decisions on a secure footing by coordinating with expert law firms.",
    summary: "Rather than providing legal services directly, we put companies' commercial decisions on a more secure footing by coordinating with expert law firms.",
    icon: "law",
    features: [
      "Commercial law compliance advisory",
      "Contract drafting and negotiation support",
      "Dealer, franchise and distributor agreements",
      "Administrative objection and litigation coordination",
      "Labor law processes",
      "Real estate law process management",
    ],
    details: [
      { heading: "Contract assurance", body: "We draft or review your commercial contracts, ensuring you sign with clear, enforceable terms that protect your rights." },
      { heading: "Solution partnership", body: "On matters requiring expertise, we work in coordination with partner law firms and manage the process from a single point." },
      { heading: "Risk management", body: "We identify legal risks in your commercial relationships in advance and produce preventive solutions before they turn into disputes." },
    ],
  },
  {
    slug: "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi",
    title: "Strategic Planning, Brand, Asset & Natural Resource Advisory",
    short: "Strategic and actionable roadmaps in growth, brand, asset and resource management.",
    summary: "We create strategic and actionable roadmaps for companies' growth, brand, asset, investment and resource management processes.",
    icon: "strategy",
    features: [
      "Business plan and feasibility report",
      "Market analysis and financial projection",
      "Growth strategy and scenario modeling",
      "Brand and product positioning",
      "Trademark registration, patent and utility model processes",
      "Intellectual property portfolio management",
      "Commercial real estate and valuation advisory",
      "Mine site leasing, license and transfer brokerage",
      "Raw material supply chain management",
    ],
    details: [
      { heading: "Strategy and feasibility", body: "With business plans, feasibility studies and financial projections, we put your investment and growth decisions on solid ground." },
      { heading: "Brand and IP", body: "We carry out brand positioning, registration, patents and intellectual property portfolio management end-to-end." },
      { heading: "Asset and natural resources", body: "We provide valuation and brokerage advisory in commercial real estate, mine sites and raw material supply processes." },
    ],
  },
];

const servicesData: L<Service[]> = { tr, en };

export const services = tr; // geriye dönük (slug listesi, statik params)
export const serviceSlugs = tr.map((s) => s.slug);
export const getServices = (locale: string) => pick(servicesData, locale);
export const getService = (slug: string, locale = "tr") =>
  pick(servicesData, locale).find((s) => s.slug === slug);
