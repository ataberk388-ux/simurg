import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Web sitesi kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Kullanım Koşulları"
      updated="Haziran 2025"
      intro="Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız."
      sections={[
        {
          heading: "Kabul",
          body: [
            `Bu web sitesi ${site.legalName} tarafından işletilmektedir. Siteyi kullanarak bu koşulları kabul etmiş olursunuz.`,
          ],
        },
        {
          heading: "İçeriğin Kullanımı",
          body: [
            "Sitedeki içerikler bilgilendirme amaçlıdır ve profesyonel danışmanlık hizmetinin yerini tutmaz. İçerikler, yazılı izin olmaksızın çoğaltılamaz veya ticari amaçla kullanılamaz.",
          ],
        },
        {
          heading: "Sorumluluğun Sınırlandırılması",
          body: [
            "Sitede yer alan bilgilerin güncelliği ve doğruluğu için azami özen gösterilmekle birlikte; bu bilgilere dayanılarak alınan kararlardan doğabilecek sonuçlardan Şirket sorumlu tutulamaz. Kesin değerlendirme için tarafımızla iletişime geçmeniz önerilir.",
          ],
        },
        {
          heading: "Değişiklikler",
          body: [
            "Şirket, bu koşulları dilediği zaman güncelleme hakkını saklı tutar. Güncel koşullar bu sayfada yayımlandığı andan itibaren geçerlidir.",
          ],
        },
        {
          heading: "İletişim",
          body: [`Sorularınız için: ${site.email}`],
        },
      ]}
    />
  );
}
