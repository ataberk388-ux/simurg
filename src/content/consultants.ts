import { L, pick } from "./_pick";

export type Consultant = {
  name: string;
  title: string;
  /** Bağlı olduğu yapı (ör. DG Vizyon). Boşsa Simurg kadrosu. */
  org?: string;
  bio: string;
  expertise: string[];
};

/** Ekibimiz sayfası giriş metni. */
const teamIntroData: L<string> = {
  tr: "Simurg Finansal Danışmanlık ve iş birliği içerisinde çalıştığı uzman ekipler; finansal danışmanlık, muhasebe, kurumsal yönetim, iş geliştirme ve hukuki süreçlerde farklı disiplinleri bir araya getirerek şirketlerin ihtiyaçlarına bütünleşik çözümler sunar.",
  en: "Simurg Financial Consulting and the expert teams it works with bring together different disciplines across financial advisory, accounting, corporate governance, business development and legal processes to deliver integrated solutions for companies' needs.",
};

const consultantsData: L<Consultant[]> = {
  tr: [
    {
      name: "Doğukan Gül",
      title: "Yönetim Kurulu Başkanı",
      bio: "Doğukan Gül, Simurg Finansal Danışmanlık A.Ş.'nin yönetim ve stratejik büyüme süreçlerine liderlik eder. Şirketlerin yatırım, iş geliştirme, kurumsal yapılanma ve finansal karar süreçlerinde bütüncül bir bakış açısıyla yol haritası oluşturulmasına katkı sağlar. Simurg'un Türkiye ve uluslararası pazarlarda güvenilir bir danışmanlık yapısı olarak konumlanmasında aktif rol üstlenir.",
      expertise: ["Stratejik yönetim", "İş geliştirme", "Yatırım süreçleri", "Kurumsal ilişkiler", "Uluslararası pazar bağlantıları"],
    },
    {
      name: "İbrahim Nadi İnanır",
      title: "Yönetim Kurulu Başkan Yardımcısı",
      bio: "İbrahim Nadi İnanır, Simurg Finansal Danışmanlık A.Ş.'de yönetim kurulu başkan yardımcısı olarak kurumsal karar süreçleri, stratejik ilişkiler ve şirketin büyüme vizyonunun geliştirilmesinde görev alır. Finansal danışmanlık, kurumsal yapılanma ve iş ortaklıkları süreçlerinde yönetim perspektifiyle katkı sağlar.",
      expertise: ["Kurumsal yönetim", "Stratejik karar süreçleri", "Finansal danışmanlık", "İş ortaklıkları", "Yönetim koordinasyonu"],
    },
    {
      name: "Beyzanur Gül",
      title: "İş Geliştirme ve Proje Yöneticisi",
      bio: "Beyzanur Gül, Simurg Finansal Danışmanlık bünyesinde iş geliştirme, proje yönetimi, uluslararası ticari ilişkiler ve stratejik iş birliklerinin koordinasyonunda görev almaktadır. Endüstri mühendisliği altyapısını finansal ve ticari analiz süreçleriyle birleştirerek yeni iş fırsatlarının geliştirilmesi, ulusal ve uluslararası paydaşlarla ilişkilerin yürütülmesi ve projelerin planlama aşamasından uygulama sürecine kadar takip edilmesinde aktif rol üstlenmektedir.",
      expertise: ["İş geliştirme", "Proje yönetimi", "Uluslararası ticari ilişkiler", "Stratejik iş birlikleri", "Ticari analiz"],
    },
    {
      name: "Rojda Eren",
      title: "Muhasebe Müdürü",
      org: "DG Vizyon",
      bio: "Rojda Eren, DG Vizyon bünyesinde muhasebe, finansal yönetim ve mali danışmanlık süreçlerinin koordinasyonunu üstlenmektedir. İşletmelerin mali yükümlülüklerinin yönetilmesi, vergisel süreçlerin planlanması ve finansal operasyonların düzenli yürütülmesinde aktif rol almaktadır. Bilgi birikimi ve yönetim yaklaşımıyla şirketlerin mali yapılarının güçlendirilmesine ve sürdürülebilir büyüme hedeflerinin desteklenmesine katkı sağlamaktadır.",
      expertise: ["Muhasebe yönetimi", "Finansal yönetim", "Mali danışmanlık", "Vergisel süreç planlaması", "Finansal operasyon"],
    },
    {
      name: "Diclecan Daşdan",
      title: "Muhasebe Uzmanı",
      org: "DG Vizyon",
      bio: "Diclecan Daşdan, DG Vizyon bünyesinde muhasebe, mali danışmanlık ve kurumsal işlem süreçlerinde aktif rol almaktadır. İşletmelerin mali ve vergisel yükümlülüklerinin yürütülmesinin yanı sıra şirket kuruluşu, ticaret sicili işlemleri ve resmî kurumlarla yürütülen süreçlerin koordinasyonuna katkı sağlamaktadır. Profesyonel ve çözüm odaklı yaklaşımıyla işletmelerin mali ve kurumsal faaliyetlerinin güvenilir, düzenli ve etkin biçimde ilerlemesini desteklemektedir.",
      expertise: ["Muhasebe", "Mali danışmanlık", "Şirket kuruluşu işlemleri", "Ticaret sicili süreçleri", "Resmî kurum koordinasyonu"],
    },
    {
      name: "Zekeriya Dedebaş",
      title: "Hukuk Danışmanı | Avukat",
      bio: "Zekeriya Dedebaş, Simurg Finansal Danışmanlık'ın hukuki süreçlerinde destek sağlayan avukat olarak şirketlerin ticari ve kurumsal faaliyetlerine ilişkin hukuki değerlendirme ve koordinasyon çalışmalarında görev almaktadır. Ticari sözleşmelerin incelenmesi ve hazırlanması, şirketler hukuku kapsamındaki işlemler, kurumsal yükümlülüklerin değerlendirilmesi ve ticari ilişkilerden doğabilecek hukuki risklerin yönetilmesi konularında destek sunmaktadır. Hukuki süreçlerin mali ve ticari hedeflerle uyumlu yürütülmesine katkı sağlamaktadır.",
      expertise: ["Ticari sözleşmeler", "Şirketler hukuku", "Kurumsal uyum", "Hukuki risk yönetimi", "Süreç koordinasyonu"],
    },
  ],
  en: [
    {
      name: "Doğukan Gül",
      title: "Chairman of the Board",
      bio: "Doğukan Gül leads the management and strategic growth processes of Simurg Financial Consulting Inc. He contributes to building roadmaps for companies' investment, business development, corporate structuring and financial decision processes with a holistic perspective. He plays an active role in positioning Simurg as a trusted advisory firm in Türkiye and international markets.",
      expertise: ["Strategic management", "Business development", "Investment processes", "Corporate relations", "International market connections"],
    },
    {
      name: "İbrahim Nadi İnanır",
      title: "Vice Chairman of the Board",
      bio: "As Vice Chairman of the Board at Simurg Financial Consulting Inc., İbrahim Nadi İnanır takes part in corporate decision processes, strategic relations and the development of the company's growth vision. He contributes to financial advisory, corporate structuring and business partnership processes from a management perspective.",
      expertise: ["Corporate governance", "Strategic decision processes", "Financial advisory", "Business partnerships", "Management coordination"],
    },
    {
      name: "Beyzanur Gül",
      title: "Business Development and Project Manager",
      bio: "Beyzanur Gül works on business development, project management, international commercial relations and strategic partnerships at Simurg Financial Consulting. Drawing on her industrial engineering background, she contributes to commercial analysis, partner coordination and the follow-through of projects from planning to implementation.",
      expertise: ["Business development", "Project management", "International commercial relations", "Strategic partnerships", "Commercial analysis"],
    },
    {
      name: "Rojda Eren",
      title: "Accounting Manager",
      org: "DG Vizyon",
      bio: "Rojda Eren coordinates accounting, financial management and financial advisory processes at DG Vizyon. She contributes to the management of companies' financial obligations, tax processes and orderly financial operations, supporting stronger financial structures and sustainable growth.",
      expertise: ["Accounting management", "Financial management", "Financial advisory", "Tax process planning", "Financial operations"],
    },
    {
      name: "Diclecan Daşdan",
      title: "Accounting Specialist",
      org: "DG Vizyon",
      bio: "Diclecan Daşdan supports accounting, financial advisory and corporate administrative processes at DG Vizyon. Her work includes financial and tax obligations, company incorporations, trade registry procedures and coordination with public authorities.",
      expertise: ["Accounting", "Financial advisory", "Company incorporation", "Trade registry procedures", "Public authority coordination"],
    },
    {
      name: "Zekeriya Dedebaş",
      title: "Legal Advisor | Attorney-at-Law",
      bio: "Zekeriya Dedebaş supports Simurg Financial Consulting in legal matters relating to commercial and corporate activities, including commercial contracts, company law matters, compliance considerations and the assessment of legal risks associated with business relationships.",
      expertise: ["Commercial contracts", "Company law", "Corporate compliance", "Legal risk management", "Process coordination"],
    },
  ],
};

export const getConsultants = (l: string) => pick(consultantsData, l);
export const getTeamIntro = (l: string) => pick(teamIntroData, l);

export const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
