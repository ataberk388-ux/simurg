import { L, pick } from "./_pick";

/**
 * Hizmet sayfalarındaki "Çözüm Yaklaşımımız" bileşeni.
 * Brif (Ekim 2026, Sürüm 2.0) bölüm 2 metinleri.
 *
 * insightSlug yalnızca YAYIMLANMIŞ bir Simurg Insights makalesi varsa doldurulur;
 * yayımlanmamış konular bağlantısız başlık olarak gösterilir.
 */
export type ServiceApproach = {
  /** Müşteri sorusu */
  question: string;
  /** Sorunun etkisi */
  impact: string;
  /** Çözüm yaklaşımımız */
  approach: string;
  /** Çalışma kapsamı ve çıktıları */
  deliverables: string[];
  /** İlgili Simurg Insights konusu */
  insightTopic: string;
  /** Yayımlanmış makale varsa slug */
  insightSlug?: string;
  /** Yönlendirme butonu metni */
  cta: string;
};

const tr: Record<string, ServiceApproach> = {
  "mali-ve-vergisel-danismanlik": {
    question: "Şirketinizin mali süreçleri büyüme hızınıza ayak uydurabiliyor mu?",
    impact:
      "İşletmeler büyüdükçe muhasebe, vergi, bordro ve raporlama ihtiyaçları daha karmaşık hâle gelir. Dağınık kayıt ve geciken raporlama sağlıklı karar almayı zorlaştırabilir.",
    approach:
      "Simurg, DG Vizyon Mali Müşavirlik iş birliğiyle işletmelerin mali süreçlerinin değerlendirilmesini ve daha düzenli, izlenebilir bir yapıya kavuşturulmasını destekler. Muhasebe, vergi, bordro ve finansal raporlama süreçleri, yönetim kararlarını destekleyecek bütünleşik bilgi akışı çerçevesinde ele alınır.",
    deliverables: [
      "Mali süreçlerin değerlendirilmesi ve iyileştirme alanları",
      "Vergi, SGK, bordro ve e-belge süreçlerinin koordinasyonu",
      "Finansal raporlama düzeni ve yönetim değerlendirmeleri",
      "Dönemsel mali kontrol ve raporlama takvimi",
    ],
    insightTopic:
      "Finansal tablolar yönetim kararları için nasıl daha etkin kullanılabilir?",
    cta: "Mali Süreçlerinizi Birlikte Değerlendirelim",
  },
  "sirket-kurulusu-ve-kurumsal-yapilanma": {
    question:
      "Yeni bir şirket kurarken veya mevcut yapınızı büyütürken doğru modeli seçiyor musunuz?",
    impact:
      "Ortaklık yapısı, faaliyet alanı, yönetim yetkileri ve yatırım planları birlikte değerlendirilmelidir.",
    approach:
      "Simurg, yeni kurulan veya yeniden yapılandırılan işletmelerin ticari hedeflerine uygun kurumsal yapının oluşturulmasında süreç koordinasyonu sağlar. Şirket türü, ortaklık modeli, mali düzen ve hukuki gereklilikler ilgili uzmanlarla ele alınır.",
    deliverables: [
      "Şirket türü ve ortaklık modeli ön değerlendirmesi",
      "Kuruluş, tescil ve resmî kurum işlemleri koordinasyonu",
      "Ortaklık ve yönetim yetkilerinin yapılandırılması",
      "Kurumsal işleyiş başlangıç yol haritası",
    ],
    insightTopic:
      "Yatırım almayı hedefleyen şirketlerde ortaklık yapısı neden önemlidir?",
    cta: "Şirketinizin Kurumsal Yapısını Planlayalım",
  },
  "finansal-danismanlik-ve-yeniden-yapilandirma": {
    question:
      "Şirketiniz kârlı olmasına rağmen finansman ve nakit akışı baskısı mı yaşıyor?",
    impact:
      "Uzun tahsilat vadeleri, stok gereksinimi, borç ödemeleri ve yatırım harcamaları büyüme döneminde işletme sermayesini zorlayabilir.",
    approach:
      "Simurg; nakit akışı, borçluluk, işletme sermayesi ve finansman ihtiyaçlarını inceler. Mevcut yükümlülüklerin sürdürülebilirliğini, alternatif finansman modellerini ve olası yeniden yapılandırma senaryolarını karşılaştırmaya yönelik analizler yürütür.",
    deliverables: [
      "Finansal durum ve borçluluk analizi",
      "Nakit akışı ve işletme sermayesi projeksiyonları",
      "Alternatif kredi ve finansman modeli değerlendirmesi",
      "Finansman görüşmelerine yönelik kurumsal dokümantasyon",
      "Yeniden yapılandırma yol haritası",
    ],
    insightTopic: "Kârlı bir şirket neden nakit sıkıntısı yaşayabilir?",
    cta: "Finansman İhtiyacınızı Değerlendirelim",
  },
  "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi": {
    question:
      "Yatırım projeniz finansal, operasyonel ve kurumsal açıdan ne kadar hazır?",
    impact:
      "Pazar, sermaye ihtiyacı, giderler, geri dönüş süresi ve finansman alternatifleri birlikte incelenmelidir.",
    approach:
      "Simurg yatırım projelerinin ticari ve finansal sürdürülebilirliğini değerlendirir; fizibilite, bütçe, finansal projeksiyon, teşvik araştırması ve yatırımcı iletişimine hazırlık çalışmalarını koordine eder.",
    deliverables: [
      "Yatırım ihtiyaç analizi ve ön fizibilite",
      "Sermaye harcamaları ve faaliyet giderleri bütçesi",
      "Finansal projeksiyon ve senaryo analizi",
      "Yatırımcı sunumu ve bilgi dosyası",
      "Teşvik / destek programları ön değerlendirmesi",
      "Ortaklık ve inceleme süreçlerinin koordinasyonu",
    ],
    insightTopic:
      "MSCI Uyarısı Şirketlere Ne Söylüyor? Yatırımcı Güveni İçin Hazırlanması Gereken 8 Kanıt",
    insightSlug: "msci-yatirimci-guveni-sekiz-kanit",
    cta: "Yatırım Projenizin Potansiyelini Değerlendirelim",
  },
  "uluslararasi-is-gelistirme-ve-ihracat-danismanligi": {
    question: "Yeni pazarlara açılırken yalnızca alıcı bulmak yeterli mi?",
    impact:
      "Ticari bağlantılar kadar ürün uygunluğu, fiyatlandırma, sevkiyat, ödeme koşulları ve tedarik sürekliliği de önemlidir.",
    approach:
      "Simurg hedef pazar, potansiyel iş ortağı, tedarik ve dış ticaret seçeneklerini çok boyutlu değerlendirir; fiyat ve maliyet karşılaştırmaları ile ticari görüşmelerin koordinasyonunu destekler.",
    deliverables: [
      "Hedef pazar ve fırsat araştırması",
      "Alıcı, tedarikçi ve iş ortağı değerlendirmesi",
      "Teklif, fiyat ve maliyet karşılaştırmaları",
      "Lojistik ve tedarik zinciri alternatifleri",
      "Uluslararası ticari görüşme koordinasyonu",
    ],
    insightTopic:
      "Uluslararası ticarette tedarik sürekliliği neden fiyat kadar önemlidir?",
    cta: "Uluslararası Büyüme Fırsatlarını Değerlendirelim",
  },
  "hukuki-koordinasyon-ve-sozlesme-surecleri": {
    question: "Ticari ilişkileriniz sözleşmesel açıdan yeterince güvence altında mı?",
    impact:
      "Eksik sözleşme hükümleri, belirsiz sorumluluklar ve açıkça tanımlanmamış yetkiler ileride uyuşmazlık doğurabilir.",
    approach:
      "Simurg ticari projelerdeki hukuki ihtiyaçların ilgili avukatlarla değerlendirilmesini koordine eder; ticari gerekliliklerle sözleşmesel çerçevenin uyumuna ve risklerin erken belirlenmesine odaklanır.",
    deliverables: [
      "Sözleşme ihtiyaçlarının belirlenmesi",
      "Aracılık, danışmanlık ve iş birliği modellerinin tanımlanması",
      "Tarafların yetki ve sorumluluklarının netleştirilmesi",
      "Avukatlar aracılığıyla hukuki risk değerlendirmesi",
      "Sözleşme ve hukuki süreç takibi",
    ],
    insightTopic:
      "Uluslararası ortaklıklarda sözleşme öncesi hangi riskler değerlendirilmeli?",
    cta: "Ticari İlişkilerinizin Hukuki Yapısını Değerlendirelim",
  },
  "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi": {
    question: "Büyüme kararlarınızın arkasında ölçülebilir bir strateji bulunuyor mu?",
    impact:
      "Yeni üretim, pazar veya kapasite yatırımlarının kaynak gereksinimi sistematik olarak değerlendirilmelidir.",
    approach:
      "Simurg büyüme ve yatırım kararlarını pazar koşulları, maliyet, operasyonel kapasite ve finansal hedefler açısından inceler; alternatif iş modellerini ve uygulanabilirlik senaryolarını karşılaştırır.",
    deliverables: [
      "Pazar ve rekabet araştırması",
      "İş modeli ve gelir yapısı değerlendirmesi",
      "Ön fizibilite ve maliyet analizi",
      "Finansal modelleme ve senaryolar",
      "Kaynak planlaması ve proje yol haritası",
    ],
    insightTopic: "Üretim yatırımlarında fizibilite hangi soruları yanıtlamalı?",
    cta: "Büyüme Stratejinizi Birlikte Planlayalım",
  },
};

const en: Record<string, ServiceApproach> = {
  "mali-ve-vergisel-danismanlik": {
    question: "Can your company's financial processes keep up with your growth rate?",
    impact:
      "As businesses grow, accounting, tax, payroll and reporting needs become more complex. Scattered records and delayed reporting can make sound decision-making harder.",
    approach:
      "In cooperation with DG Vizyon Mali Müşavirlik, Simurg supports the assessment of companies' financial processes and their transition to a more orderly, traceable structure. Accounting, tax, payroll and financial reporting are addressed within an integrated information flow that supports management decisions.",
    deliverables: [
      "Assessment of financial processes and improvement areas",
      "Coordination of tax, social security, payroll and e-document processes",
      "Financial reporting order and management reviews",
      "Periodic financial control and reporting calendar",
    ],
    insightTopic:
      "How can financial statements be used more effectively for management decisions?",
    cta: "Let Us Review Your Financial Processes",
  },
  "sirket-kurulusu-ve-kurumsal-yapilanma": {
    question:
      "Are you choosing the right model when establishing a new company or scaling your existing structure?",
    impact:
      "Partnership structure, field of activity, management authorities and investment plans should be evaluated together.",
    approach:
      "Simurg provides process coordination in building a corporate structure aligned with the commercial goals of newly established or restructured businesses. Company type, partnership model, financial order and legal requirements are addressed with the relevant professionals.",
    deliverables: [
      "Preliminary assessment of company type and partnership model",
      "Coordination of incorporation, registration and public authority procedures",
      "Structuring of partnership and management authorities",
      "Initial roadmap for corporate operations",
    ],
    insightTopic:
      "Why does partnership structure matter for companies seeking investment?",
    cta: "Let Us Plan Your Corporate Structure",
  },
  "finansal-danismanlik-ve-yeniden-yapilandirma": {
    question:
      "Is your company facing financing and cash flow pressure despite being profitable?",
    impact:
      "Long collection terms, inventory requirements, debt repayments and capital expenditure can strain working capital during growth.",
    approach:
      "Simurg reviews cash flow, indebtedness, working capital and financing needs. It carries out analyses comparing the sustainability of existing obligations, alternative financing models and possible restructuring scenarios.",
    deliverables: [
      "Financial position and indebtedness analysis",
      "Cash flow and working capital projections",
      "Assessment of alternative credit and financing models",
      "Corporate documentation for financing discussions",
      "Restructuring roadmap",
    ],
    insightTopic: "Why can a profitable company still run short of cash?",
    cta: "Let Us Assess Your Financing Needs",
  },
  "yatirim-birlesme-satin-alma-ve-tesvik-danismanligi": {
    question:
      "How prepared is your investment project financially, operationally and organizationally?",
    impact:
      "Market, capital requirements, expenses, payback period and financing alternatives should be examined together.",
    approach:
      "Simurg evaluates the commercial and financial sustainability of investment projects, and coordinates feasibility, budgeting, financial projections, incentive research and investor-readiness work.",
    deliverables: [
      "Investment needs analysis and pre-feasibility",
      "Capital expenditure and operating expense budget",
      "Financial projections and scenario analysis",
      "Investor presentation and information file",
      "Preliminary assessment of incentive / support programs",
      "Coordination of partnership and due diligence processes",
    ],
    insightTopic:
      "What the MSCI Warning Tells Companies: Eight Proofs to Prepare for Investor Confidence",
    insightSlug: "msci-yatirimci-guveni-sekiz-kanit",
    cta: "Let Us Assess Your Investment Project",
  },
  "uluslararasi-is-gelistirme-ve-ihracat-danismanligi": {
    question: "When entering new markets, is finding a buyer enough on its own?",
    impact:
      "Product suitability, pricing, shipment, payment terms and supply continuity matter as much as commercial connections.",
    approach:
      "Simurg evaluates target markets, potential business partners, sourcing and foreign trade options from multiple angles, and supports price and cost comparisons alongside the coordination of commercial negotiations.",
    deliverables: [
      "Target market and opportunity research",
      "Assessment of buyers, suppliers and business partners",
      "Offer, price and cost comparisons",
      "Logistics and supply chain alternatives",
      "Coordination of international commercial negotiations",
    ],
    insightTopic:
      "Why is supply continuity as important as price in international trade?",
    cta: "Let Us Assess Your International Growth Opportunities",
  },
  "hukuki-koordinasyon-ve-sozlesme-surecleri": {
    question: "Are your commercial relationships adequately secured contractually?",
    impact:
      "Missing contract provisions, unclear responsibilities and undefined authorities can lead to disputes later on.",
    approach:
      "Simurg coordinates the assessment of legal needs in commercial projects with the relevant attorneys, focusing on the alignment of the contractual framework with commercial requirements and on identifying risks early.",
    deliverables: [
      "Identification of contract requirements",
      "Definition of brokerage, advisory and cooperation models",
      "Clarification of the parties' authorities and responsibilities",
      "Legal risk assessment through attorneys",
      "Contract and legal process follow-up",
    ],
    insightTopic:
      "Which risks should be assessed before signing in international partnerships?",
    cta: "Let Us Review the Legal Structure of Your Commercial Relations",
  },
  "stratejik-planlama-marka-varlik-ve-dogal-kaynak-danismanligi": {
    question: "Is there a measurable strategy behind your growth decisions?",
    impact:
      "The resource requirements of new production, market or capacity investments should be assessed systematically.",
    approach:
      "Simurg examines growth and investment decisions in terms of market conditions, cost, operational capacity and financial targets, and compares alternative business models and feasibility scenarios.",
    deliverables: [
      "Market and competition research",
      "Business model and revenue structure assessment",
      "Pre-feasibility and cost analysis",
      "Financial modeling and scenarios",
      "Resource planning and project roadmap",
    ],
    insightTopic:
      "Which questions should a feasibility study answer in production investments?",
    cta: "Let Us Plan Your Growth Strategy Together",
  },
};

const data: L<Record<string, ServiceApproach>> = { tr, en };

export const getServiceApproach = (
  slug: string,
  locale: string,
): ServiceApproach | undefined => pick(data, locale)[slug];
