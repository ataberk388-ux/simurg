import { L, pick } from "./_pick";

export type ServiceExtra = {
  forWhom: string[];
  faqs: { q: string; a: string }[];
};

const tr: Record<string, ServiceExtra> = {
  "mali-ve-vergisel-danismanlik": {
    forWhom: [
      "Muhasebe ve vergi yükünü profesyonele devretmek isteyen KOBİ'ler",
      "Yeni kurulan ve mali düzenini oturtmak isteyen şirketler",
      "E-dönüşüm (E-Fatura, E-Defter) sürecine geçen işletmeler",
      "Düzenli finansal raporlama isteyen yönetimler",
    ],
    faqs: [
      { q: "Muhasebe sürecini tamamen size devredebilir miyim?", a: "Evet. Defter tutmadan beyanname takibine, SGK'dan finansal raporlamaya kadar tüm süreci sizin adınıza yönetiriz." },
      { q: "E-Fatura ve E-Defter geçişini siz mi yapıyorsunuz?", a: "Evet. Başvurudan entegrasyona kadar uçtan uca kurar, sistemlerinize uyarlarız." },
      { q: "Vergi planlaması bana ne kazandırır?", a: "Mevzuata uygun şekilde vergi yükünüzü optimize eder, cezalı duruma düşmenizi önler ve nakit planlamanıza katkı sağlar." },
    ],
  },
  "sirket-kurulusu-ve-kurumsal-yapilanma": {
    forWhom: [
      "Yeni şirket kuracak girişimciler",
      "Türkiye'de şirket kurmak isteyen yabancı yatırımcılar",
      "Tür değişikliği, devir veya tasfiye planlayan şirketler",
      "Kurumsallaşmak isteyen aile şirketleri",
    ],
    faqs: [
      { q: "Yabancı olarak Türkiye'de şirket kurabilir miyim?", a: "Evet. Tüm tescil, izin ve operasyonel süreçleri sizin adınıza yönetiriz." },
      { q: "Hangi şirket türü bana uygun?", a: "İhtiyaç analizine göre anonim, limited veya şahıs şirketi seçeneklerini mali ve hukuki açıdan birlikte değerlendiririz." },
      { q: "Kuruluş süreci ne kadar sürer?", a: "Evraklar hazır olduğunda genellikle birkaç iş günü içinde tamamlanır." },
    ],
  },
  "finansal-danismanlik-ve-yeniden-yapilandirma": {
    forWhom: [
      "Nakit akışını öngörülebilir kılmak isteyen şirketler",
      "Banka borcu yeniden yapılandırması gereken işletmeler",
      "Büyüme için alternatif finansman arayanlar",
      "Akreditif / SBLC gibi ticaret finansmanı ihtiyacı olanlar",
    ],
    faqs: [
      { q: "Banka borçlarımı yeniden yapılandırabilir misiniz?", a: "Evet. Sürdürülebilir bir ödeme planı için bankalarla yapılandırma çözümleri geliştiririz." },
      { q: "Akreditif ve SBLC danışmanlığı veriyor musunuz?", a: "Evet. Ticaret finansmanı araçlarında süreç kurulumu ve yönetimi sağlarız." },
      { q: "Nakit akışı yönetimi neleri kapsar?", a: "Gelir-gider projeksiyonu, tahsilat-ödeme planlaması ve erken uyarı sistemlerini içerir." },
    ],
  },
  "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi": {
    forWhom: [
      "Yeni yatırım planlayan şirketler",
      "Teşvik ve hibe başvurusu yapacak işletmeler",
      "Hisse devri / ortaklık yapılandırması arayanlar",
      "Ar-Ge, teknokent ve serbest bölge başvurusu yapacaklar",
    ],
    faqs: [
      { q: "Hangi teşvik ve desteklerden yararlanabilirim?", a: "KOSGEB, TÜBİTAK, TKDK ve yatırım teşvik belgesi uygunluğunuzu analiz eder, başvuruyu yönetiriz." },
      { q: "Şirket değerleme yapıyor musunuz?", a: "Evet. Satış, ortaklık ve yatırım süreçleri için profesyonel değerleme sunarız." },
      { q: "Yatırımcı bulmaya yardımcı olur musunuz?", a: "Doğru yatırımcılarla eşleştirme, due diligence ve müzakere desteği sağlarız." },
    ],
  },
  "uluslararasi-is-gelistirme-ve-ihracat-danismanligi": {
    forWhom: [
      "İhracata başlamak isteyen veya yeni başlayan şirketler",
      "Yurt dışı pazarlara açılmak isteyen işletmeler",
      "Distribütör veya uluslararası ortak arayanlar",
      "Türkiye'ye yatırım yapan yabancı şirketler",
    ],
    faqs: [
      { q: "İhracata nasıl başlarım?", a: "Pazar analizi, fiyatlama ve ihracat süreç kurulumunu birlikte planlar, operasyonu yönetiriz." },
      { q: "Hangi pazarlarda deneyiminiz var?", a: "Başta Orta Doğu, Afrika ve Orta Asya olmak üzere geniş bir iş geliştirme ağına sahibiz." },
      { q: "Distribütör bulmada yardımcı olur musunuz?", a: "Evet. Uluslararası ortaklık ve distribütör eşleştirmesi sağlarız." },
    ],
  },
  "hukuki-koordinasyon-ve-sozlesme-surecleri": {
    forWhom: [
      "Sözleşmelerini güvenceye almak isteyen şirketler",
      "Bayi, franchise veya distribütör yapısı kuranlar",
      "Ticari uyuşmazlık riski taşıyan işletmeler",
      "Hukuki süreçlerinde tek elden koordinasyon arayanlar",
    ],
    faqs: [
      { q: "Doğrudan avukatlık hizmeti veriyor musunuz?", a: "Hayır. Uzman hukuk bürolarıyla koordinasyon sağlayarak süreci sizin adınıza yönetiriz." },
      { q: "Sözleşmelerimi inceler misiniz?", a: "Evet. Sözleşme hazırlık ve müzakere desteği sunar, risk maddelerini önceden tespit ederiz." },
      { q: "Dava sürecini takip eder misiniz?", a: "Anlaşmalı hukuk bürolarıyla koordineli olarak süreci tek noktadan izleriz." },
    ],
  },
  "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi": {
    forWhom: [
      "Büyüme ve yol haritası stratejisi arayan şirketler",
      "Marka, patent ve fikri mülkiyet süreci olan işletmeler",
      "Fizibilite / iş planı ihtiyacı olan yatırımcılar",
      "Gayrimenkul, maden ve doğal kaynak yatırımcıları",
    ],
    faqs: [
      { q: "Fizibilite raporu hazırlıyor musunuz?", a: "Evet. Pazar analizi ve finansal projeksiyonlarla yatırım kararınızı destekleyen raporlar hazırlarız." },
      { q: "Marka tescili sürecini yönetir misiniz?", a: "Evet. Marka tescil başvurusu, patent, faydalı model ve fikri mülkiyet portföy yönetimini yürütürüz." },
      { q: "Maden ve gayrimenkul danışmanlığı neleri kapsar?", a: "Değerleme, ruhsat süreçleri, saha kiralama/devir aracılığı ve hammadde tedarik zinciri yönetimini içerir." },
    ],
  },
};

const en: Record<string, ServiceExtra> = {
  "mali-ve-vergisel-danismanlik": {
    forWhom: [
      "SMEs that want to delegate accounting and tax workload to professionals",
      "Newly established companies setting up their fiscal order",
      "Businesses transitioning to e-transformation (E-Invoice, E-Ledger)",
      "Management teams seeking regular financial reporting",
    ],
    faqs: [
      { q: "Can I fully delegate the accounting process to you?", a: "Yes. From bookkeeping to return follow-up, from social security to financial reporting, we manage the entire process on your behalf." },
      { q: "Do you handle the E-Invoice and E-Ledger transition?", a: "Yes. From application to integration, we set it up end-to-end and adapt it to your systems." },
      { q: "What does tax planning gain me?", a: "It optimizes your tax burden in line with legislation, prevents penalties, and supports your cash planning." },
    ],
  },
  "sirket-kurulusu-ve-kurumsal-yapilanma": {
    forWhom: [
      "Entrepreneurs establishing a new company",
      "Foreign investors wishing to set up a company in Türkiye",
      "Companies planning a type change, transfer or liquidation",
      "Family businesses seeking corporate structuring",
    ],
    faqs: [
      { q: "Can I, as a foreigner, establish a company in Türkiye?", a: "Yes. We manage all registration, permit and operational processes on your behalf." },
      { q: "Which company type suits me?", a: "Based on a needs analysis, we evaluate joint-stock, limited or sole proprietorship options together, from a fiscal and legal perspective." },
      { q: "How long does the formation take?", a: "Once the documents are ready, it is usually completed within a few business days." },
    ],
  },
  "finansal-danismanlik-ve-yeniden-yapilandirma": {
    forWhom: [
      "Companies that want to make cash flow predictable",
      "Businesses needing bank debt restructuring",
      "Those seeking alternative financing for growth",
      "Companies needing trade finance such as L/C or SBLC",
    ],
    faqs: [
      { q: "Can you restructure my bank debts?", a: "Yes. We develop restructuring solutions with banks for a sustainable payment plan." },
      { q: "Do you provide letter of credit and SBLC advisory?", a: "Yes. We set up and manage processes for trade finance instruments." },
      { q: "What does cash flow management cover?", a: "It includes income-expense projection, collection-payment planning and early warning systems." },
    ],
  },
  "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi": {
    forWhom: [
      "Companies planning new investments",
      "Businesses that will apply for incentives and grants",
      "Those seeking share transfer / partnership structuring",
      "Companies that will apply for R&D, technopark and free zones",
    ],
    faqs: [
      { q: "Which incentives and supports can I benefit from?", a: "We analyze your eligibility for KOSGEB, TÜBİTAK, TKDK and investment incentive certificates, and manage the application." },
      { q: "Do you perform company valuation?", a: "Yes. We provide professional valuation for sale, partnership and investment processes." },
      { q: "Do you help find investors?", a: "We provide matching with the right investors, due diligence and negotiation support." },
    ],
  },
  "uluslararasi-is-gelistirme-ve-ihracat-danismanligi": {
    forWhom: [
      "Companies starting or new to exporting",
      "Businesses wishing to expand into foreign markets",
      "Those seeking distributors or international partners",
      "Foreign companies investing in Türkiye",
    ],
    faqs: [
      { q: "How do I start exporting?", a: "We plan market analysis, pricing and export process setup together, and manage the operation." },
      { q: "Which markets do you have experience in?", a: "We have a broad business development network, especially across the Middle East, Africa and Central Asia." },
      { q: "Do you help find distributors?", a: "Yes. We provide international partnership and distributor matching." },
    ],
  },
  "hukuki-koordinasyon-ve-sozlesme-surecleri": {
    forWhom: [
      "Companies seeking to secure their contracts",
      "Those building dealer, franchise or distributor structures",
      "Businesses carrying commercial dispute risk",
      "Those seeking single-point coordination in legal processes",
    ],
    faqs: [
      { q: "Do you provide legal counsel directly?", a: "No. We coordinate with expert law firms and manage the process on your behalf." },
      { q: "Do you review my contracts?", a: "Yes. We provide contract drafting and negotiation support and identify risk clauses in advance." },
      { q: "Do you follow the litigation process?", a: "We track the process from a single point, in coordination with partner law firms." },
    ],
  },
  "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi": {
    forWhom: [
      "Companies seeking a growth and roadmap strategy",
      "Businesses with brand, patent and IP processes",
      "Investors needing feasibility / business plans",
      "Real estate, mining and natural resource investors",
    ],
    faqs: [
      { q: "Do you prepare feasibility reports?", a: "Yes. We prepare reports with market analysis and financial projections to support your investment decision." },
      { q: "Do you manage the trademark registration process?", a: "Yes. We handle trademark registration, patents, utility models and IP portfolio management." },
      { q: "What does mining and real estate advisory cover?", a: "It includes valuation, license processes, site leasing/transfer brokerage and raw material supply chain management." },
    ],
  },
};

const data: L<Record<string, ServiceExtra>> = { tr, en };

export const getServiceExtra = (slug: string, locale: string): ServiceExtra | undefined =>
  pick(data, locale)[slug];
