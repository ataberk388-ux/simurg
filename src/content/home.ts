import { L, pick } from "./_pick";

export const companyIntro: L<string> = {
  tr: "Simurg Finansal Danışmanlık A.Ş.; şirketlerin mali, finansal, hukuki ve stratejik ihtiyaçlarını bütünleşik bir yaklaşımla ele alan kurumsal danışmanlık yapısıdır. Finansal analizden teşvik danışmanlığına, şirket kuruluşundan uluslararası iş geliştirmeye kadar geniş hizmet alanıyla işletmelerin sürdürülebilir büyüme hedeflerine ulaşmasını destekler.",
  en: "Simurg Financial Consulting Inc. is a corporate advisory structure that addresses companies' financial, fiscal, legal and strategic needs with an integrated approach. With a broad service range from financial analysis to incentive consulting and from company formation to international business development, it helps businesses reach their sustainable growth goals.",
};

type Card = { title: string; body: string };

const whyCardsData: L<Card[]> = {
  tr: [
    { title: "Bütünleşik Hizmet Yapısı", body: "Mali, finansal, hukuki ve stratejik danışmanlık süreçlerini tek çatı altında ele alırız." },
    { title: "Stratejik Bakış Açısı", body: "Sadece mevcut sorunlara değil, şirketinizin gelecek potansiyeline odaklanırız." },
    { title: "Güven ve Gizlilik", body: "Danışmanlık süreçlerinde şeffaflık, gizlilik ve güven ilkeleriyle hareket ederiz." },
    { title: "Uluslararası Perspektif", body: "Türkiye, Orta Doğu, Afrika ve Orta Asya pazarlarında iş geliştirme bakış açısı sunarız." },
    { title: "Reel Sektör Deneyimi", body: "Üretim, ticaret, ihracat ve mali operasyon süreçlerini yalnızca teorik değil, uygulamalı deneyimle değerlendiririz." },
  ],
  en: [
    { title: "Integrated Service Structure", body: "We handle financial, fiscal, legal and strategic advisory processes under one roof." },
    { title: "Strategic Perspective", body: "We focus not only on current problems but on your company's future potential." },
    { title: "Trust and Confidentiality", body: "We act with transparency, confidentiality and trust throughout every advisory process." },
    { title: "International Perspective", body: "We offer a business development perspective across Türkiye, the Middle East, Africa and Central Asia." },
    { title: "Real-Sector Experience", body: "We assess production, trade, export and financial operations not only in theory but with hands-on experience." },
  ],
};

type Step = { step: string; title: string; body: string };

const processStepsData: L<Step[]> = {
  tr: [
    { step: "01", title: "İlk Görüşme", body: "İhtiyaçlarınızı ve hedeflerinizi dinleriz." },
    { step: "02", title: "İhtiyaç Analizi", body: "Mevcut durumu ve beklentileri netleştiririz." },
    { step: "03", title: "Mevcut Durum Değerlendirmesi", body: "Mali, finansal ve operasyonel tabloyu analiz ederiz." },
    { step: "04", title: "Stratejik Yol Haritası", body: "Şirketinize özel, ölçülebilir bir plan oluştururuz." },
    { step: "05", title: "Uygulama ve Süreç Yönetimi", body: "Planı sahada uygular, süreci yönetiriz." },
    { step: "06", title: "Raporlama ve Takip", body: "Sonuçları şeffaf raporlarla izler ve geliştiririz." },
  ],
  en: [
    { step: "01", title: "Initial Meeting", body: "We listen to your needs and goals." },
    { step: "02", title: "Needs Analysis", body: "We clarify the current situation and expectations." },
    { step: "03", title: "Current State Assessment", body: "We analyze the financial, fiscal and operational picture." },
    { step: "04", title: "Strategic Roadmap", body: "We create a measurable plan tailored to your company." },
    { step: "05", title: "Implementation & Process Management", body: "We apply the plan in the field and manage the process." },
    { step: "06", title: "Reporting & Follow-up", body: "We track results with transparent reports and keep improving." },
  ],
};

export const processIntro: L<string> = {
  tr: "Simurg'da danışmanlık süreci yalnızca tavsiye vermekle sınırlı değildir. İhtiyaç analizinden uygulama takibine kadar her adım ölçülebilir, şeffaf ve yönetilebilir bir sistem içinde ilerler.",
  en: "At Simurg, advisory is not limited to giving advice. From needs analysis to implementation follow-up, every step proceeds within a measurable, transparent and manageable system.",
};

export type ReferenceProject = { sector: string; scope: string };

const referenceProjectsData: L<ReferenceProject[]> = {
  tr: [
    { sector: "Üretim Sektörü", scope: "Finansal yapılandırma ve nakit akışı planlaması" },
    { sector: "Dış Ticaret Sektörü", scope: "İhracat süreç yönetimi ve uluslararası pazar araştırması" },
    { sector: "Kimya Sektörü", scope: "Kurumsal yapı, marka konumlandırma ve iş geliştirme desteği" },
    { sector: "Yatırım Projeleri", scope: "Fizibilite, teşvik analizi ve yatırım planlama süreci" },
    { sector: "KOBİ Danışmanlığı", scope: "Muhasebe, SGK, vergi ve finansal raporlama süreçlerinin yapılandırılması" },
    { sector: "Yabancı Yatırımcı Süreçleri", scope: "Türkiye'de şirket kuruluşu ve operasyonel danışmanlık" },
  ],
  en: [
    { sector: "Manufacturing Sector", scope: "Financial restructuring and cash flow planning" },
    { sector: "Foreign Trade Sector", scope: "Export process management and international market research" },
    { sector: "Chemical Sector", scope: "Corporate structuring, brand positioning and business development support" },
    { sector: "Investment Projects", scope: "Feasibility, incentive analysis and investment planning" },
    { sector: "SME Consulting", scope: "Structuring accounting, social security, tax and financial reporting processes" },
    { sector: "Foreign Investor Processes", scope: "Company formation in Türkiye and operational consulting" },
  ],
};

const statsData: L<{ value: string; label: string }[]> = {
  tr: [
    { value: "7", label: "Ana hizmet alanı" },
    { value: "3", label: "Grup şirketi" },
    { value: "%100", label: "Gizlilik & şeffaflık" },
    { value: "4", label: "Hedef pazar bölgesi" },
  ],
  en: [
    { value: "7", label: "Core service areas" },
    { value: "3", label: "Group companies" },
    { value: "%100", label: "Confidentiality & transparency" },
    { value: "4", label: "Target market regions" },
  ],
};

export const getWhyCards = (l: string) => pick(whyCardsData, l);
export const getProcessSteps = (l: string) => pick(processStepsData, l);
export const getReferenceProjects = (l: string) => pick(referenceProjectsData, l);
export const getStats = (l: string) => pick(statsData, l);
