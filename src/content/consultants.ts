import { L, pick } from "./_pick";

export type Consultant = {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
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
      title: "Finansal Danışman",
      bio: "Beyzanur Gül, Simurg Finansal Danışmanlık A.Ş.'de finansal danışmanlık, müşteri ilişkileri, proje koordinasyonu ve uluslararası iş görüşmeleri süreçlerinde aktif rol alan bir endüstri mühendisidir. Şirketlerin ihtiyaç analizlerinin yapılması, danışmanlık süreçlerinin doğru yönlendirilmesi ve müşteriyle sürdürülebilir iletişim kurulması alanlarında görev alır.",
      expertise: ["Finansal danışmanlık", "Müşteri ilişkileri", "Proje koordinasyonu", "Uluslararası toplantı süreçleri", "Kurumsal iletişim"],
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
      title: "Financial Consultant",
      bio: "Beyzanur Gül is an industrial engineer who takes an active role in financial advisory, client relations, project coordination and international business meetings at Simurg Financial Consulting Inc. She works on conducting companies' needs analyses, properly directing advisory processes and building sustainable communication with clients.",
      expertise: ["Financial advisory", "Client relations", "Project coordination", "International meeting processes", "Corporate communication"],
    },
  ],
};

export const getConsultants = (l: string) => pick(consultantsData, l);

export const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
