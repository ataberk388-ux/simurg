import { L, pick } from "./_pick";

/**
 * Proje Deneyimimiz sayfası — brif (Ekim 2026, Sürüm 2.0) bölüm 3.
 *
 * Gizlilik ilkesi: kurum adları, ticari veriler ve proje ayrıntıları bu dosyada
 * da tutulmaz; kartlar yalnızca genel kapsam düzeyinde ifade edilir.
 */
export type ProjectExperience = {
  no: string;
  title: string;
  body: string;
  areas: string[];
};

const headlineData: L<string> = {
  tr: "Farklı sektörler, bütünleşik çözümler.",
  en: "Different sectors, integrated solutions.",
};

const introData: L<string> = {
  tr: "Simurg Finansal Danışmanlık, finansal ve stratejik danışmanlık yaklaşımını farklı sektörlerin ihtiyaçlarına uyarlayarak şirketlerin ticari, kurumsal ve yatırım odaklı süreçlerine katkı sağlamaktadır. Üretim ve sanayiden uluslararası ticarete, finansal yapılanmadan yeni iş modellerinin geliştirilmesine kadar uzanan çalışma alanlarında analiz, planlama, ticari koordinasyon ve uygulama süreçlerini bütünleşik perspektifle ele alır.",
  en: "Simurg Financial Consulting adapts its financial and strategic advisory approach to the needs of different sectors, contributing to companies' commercial, corporate and investment-focused processes. Across fields ranging from manufacturing and industry to international trade, and from financial structuring to the development of new business models, it addresses analysis, planning, commercial coordination and implementation from an integrated perspective.",
};

const confidentialityData: L<string> = {
  tr: "Gizlilik ve ticari güven ilkelerimiz doğrultusunda proje deneyimlerimizi kurum ve taraf bilgilerini açıklamadan genel kapsamlarıyla paylaşıyoruz. Müşteri isimleri, ticari veriler ve detaylar yalnızca ilgili tarafların açık onayıyla yayımlanmaktadır.",
  en: "In line with our principles of confidentiality and commercial trust, we share our project experience at a general level, without disclosing institutions or parties involved. Client names, commercial data and details are published only with the explicit consent of the relevant parties.",
};

const closingTitleData: L<string> = {
  tr: "Her Proje, Yeni Bir Stratejik Yolculuktur",
  en: "Every Project Is a New Strategic Journey",
};

const closingBodyData: L<string> = {
  tr: "Her şirketin faaliyet alanı, büyüme hedefleri ve karşılaştığı zorluklar farklıdır. Simurg olarak ihtiyaçların analiz edilmesi, uygulanabilir seçeneklerin değerlendirilmesi ve uzmanlıkların bir araya getirilmesi yaklaşımıyla çalışıyoruz. Şirketinizin ihtiyaçlarına uygun çalışma alanlarını değerlendirmek için bizimle iletişime geçebilirsiniz.",
  en: "Every company has a different field of activity, growth targets and challenges. At Simurg we work by analyzing needs, evaluating workable options and bringing the right expertise together. You can contact us to discuss the areas of work that fit your company's needs.",
};

const projectsData: L<ProjectExperience[]> = {
  tr: [
    {
      no: "01",
      title: "Medya, Yayıncılık ve Eğlence Projeleri",
      body: "Medya ve eğlence sektöründe geliştirilen bir formatın yatırımcı, yayın kuruluşu ve yerel yönetim gibi farklı paydaşlara sunulmasına yönelik kurumsal dokümantasyon çalışmaları yürütülmüştür. Ticari anlatım, hedef kitleye özel sunumlar, marka kimliği ve proje koordinasyonu ele alınmıştır.",
      areas: ["Yatırımcı sunumları", "Ticari model anlatımı", "Kurumsal iletişim", "Proje koordinasyonu"],
    },
    {
      no: "02",
      title: "Üretim Yatırımları ve Fizibilite Çalışmaları",
      body: "Üretim yatırımlarına yönelik çalışmalarda tesis ihtiyaçları, üretim süreçleri, ekipman, hammadde tedariki, pazar potansiyeli ve yatırım maliyetleri değerlendirilmiştir. Uluslararası üretici teklifleri ve alternatif üretim/tedarik modelleri incelenmiştir.",
      areas: ["Ön fizibilite", "Üretim planlaması", "Maliyet analizi", "Yatırım bütçesi"],
    },
    {
      no: "03",
      title: "Uluslararası Ticaret ve Tedarik Zinciri",
      body: "Ülkeler arası ticari faaliyetlere ilişkin ürün tedariki, fiyatlandırma, sevkiyat ve iş ortaklığı alternatifleri değerlendirilmiştir. Numune kalitesi, teslimat koşulları ve uzun vadeli tedarik sürekliliğine odaklanılmıştır.",
      areas: ["Dış ticaret araştırması", "Tedarikçi değerlendirmesi", "Lojistik", "Ticari görüşmeler"],
    },
    {
      no: "04",
      title: "Kurumsal Finansman ve Yatırımcı Hazırlığı",
      body: "Yatırım ve finansman ihtiyaçlarına ilişkin modellerin değerlendirilmesi, yatırımcı iletişimine hazırlık, bilgi dosyaları ve paydaşlar arası koordinasyon çalışmaları ele alınmıştır. Finansman süreçlerinde görev ve sorumlulukların açık tanımlanmasına önem verilmiştir.",
      areas: ["Finansman ön değerlendirmesi", "Yatırımcı hazırlığı", "Dokümantasyon", "Koordinasyon"],
    },
    {
      no: "05",
      title: "Çok Markalı İş Modelleri ve Finansal Operasyonlar",
      body: "Çok markalı işletme operasyonlarında sipariş ve satış verileri, platform maliyetleri, fiyatlandırma, kârlılık ve raporlama süreçlerine yönelik çalışmalar yürütülmüştür. Satış kanallarının finansal etkileri karşılaştırılmıştır.",
      areas: ["Operasyonel finans", "Kârlılık analizi", "Satış kanalı değerlendirmesi", "Raporlama"],
    },
    {
      no: "06",
      title: "Ticari İş Birlikleri ve Sözleşmesel Yapılanma",
      body: "Aracılık, danışmanlık, tedarik ve uluslararası iş birliği modellerinde ilişki kapsamı, tarafların sorumlulukları ve sözleşmesel ihtiyaçların hukuki uzmanlarla koordinasyonu değerlendirilmiştir.",
      areas: ["Ticari iş modeli", "Aracılık yapıları", "Sözleşme koordinasyonu", "İş ortaklığı"],
    },
  ],
  en: [
    {
      no: "01",
      title: "Media, Publishing and Entertainment Projects",
      body: "Corporate documentation work was carried out to present a format developed in the media and entertainment sector to different stakeholders such as investors, broadcasters and local authorities. Commercial narrative, audience-specific presentations, brand identity and project coordination were addressed.",
      areas: ["Investor presentations", "Commercial model narrative", "Corporate communication", "Project coordination"],
    },
    {
      no: "02",
      title: "Production Investments and Feasibility Studies",
      body: "In work on production investments, facility requirements, production processes, equipment, raw material supply, market potential and investment costs were assessed. International manufacturer offers and alternative production/sourcing models were examined.",
      areas: ["Pre-feasibility", "Production planning", "Cost analysis", "Investment budget"],
    },
    {
      no: "03",
      title: "International Trade and Supply Chain",
      body: "Product sourcing, pricing, shipment and partnership alternatives relating to cross-border commercial activity were assessed, with a focus on sample quality, delivery terms and long-term supply continuity.",
      areas: ["Foreign trade research", "Supplier assessment", "Logistics", "Commercial negotiations"],
    },
    {
      no: "04",
      title: "Corporate Financing and Investor Readiness",
      body: "Assessment of models for investment and financing needs, preparation for investor communication, information files and coordination among stakeholders were addressed. Clear definition of roles and responsibilities in financing processes was prioritized.",
      areas: ["Preliminary financing assessment", "Investor readiness", "Documentation", "Coordination"],
    },
    {
      no: "05",
      title: "Multi-Brand Business Models and Financial Operations",
      body: "In multi-brand business operations, work was carried out on order and sales data, platform costs, pricing, profitability and reporting processes. The financial impact of sales channels was compared.",
      areas: ["Operational finance", "Profitability analysis", "Sales channel assessment", "Reporting"],
    },
    {
      no: "06",
      title: "Commercial Partnerships and Contractual Structuring",
      body: "In brokerage, advisory, supply and international cooperation models, the scope of the relationship, the parties' responsibilities and the coordination of contractual needs with legal professionals were assessed.",
      areas: ["Commercial business model", "Brokerage structures", "Contract coordination", "Business partnership"],
    },
  ],
};

export const getProjectExperience = (l: string) => pick(projectsData, l);
export const getProjectsHeadline = (l: string) => pick(headlineData, l);
export const getProjectsIntro = (l: string) => pick(introData, l);
export const getProjectsConfidentiality = (l: string) => pick(confidentialityData, l);
export const getProjectsClosingTitle = (l: string) => pick(closingTitleData, l);
export const getProjectsClosingBody = (l: string) => pick(closingBodyData, l);
