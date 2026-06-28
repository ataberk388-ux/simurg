import { L, pick } from "./_pick";

export type GroupCompany = {
  name: string;
  tag: string;
  description: string;
};

const groupCompaniesData: L<GroupCompany[]> = {
  tr: [
    {
      name: "Simurg Finansal Danışmanlık A.Ş.",
      tag: "Strateji & Koordinasyon",
      description: "Strateji, yatırım, danışmanlık, uluslararası iş geliştirme ve kurumsal koordinasyon merkezi.",
    },
    {
      name: "DG Vizyon Mali Müşavirlik",
      tag: "Mali Operasyon",
      description: "Mali müşavirlik, muhasebe, vergi, SGK, bordro ve operasyonel mali süreçlerin yürütüldüğü profesyonel yapı.",
    },
    {
      name: "DEWOX Kimya",
      tag: "Üretim & Ticaret",
      description: "Üretim, ticaret, ihracat ve reel sektör deneyimiyle grup yapısının sahadaki ticari ve üretim gücünü temsil eden şirket.",
    },
  ],
  en: [
    {
      name: "Simurg Financial Consulting Inc.",
      tag: "Strategy & Coordination",
      description: "The center for strategy, investment, advisory, international business development and corporate coordination.",
    },
    {
      name: "DG Vizyon Mali Müşavirlik",
      tag: "Fiscal Operations",
      description: "The professional structure carrying out fiscal advisory, accounting, tax, social security, payroll and operational fiscal processes.",
    },
    {
      name: "DEWOX Kimya",
      tag: "Production & Trade",
      description: "The company representing the group's commercial and production strength in the field, with experience in production, trade, export and the real sector.",
    },
  ],
};

const groupIntroData: L<string> = {
  tr: "Simurg, yalnızca danışmanlık veren teorik bir yapı değil; mali operasyon, finansal danışmanlık, üretim, ticaret ve ihracat deneyimini aynı çatı altında birleştiren bütünleşik bir ekosistemdir.",
  en: "Simurg is not merely a theoretical advisory firm; it is an integrated ecosystem that brings together fiscal operations, financial advisory, production, trade and export experience under one roof.",
};

export const getGroupCompanies = (l: string) => pick(groupCompaniesData, l);
export const getGroupIntro = (l: string) => pick(groupIntroData, l);
