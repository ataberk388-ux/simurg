import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Simurg Finansal Danışmanlık gizlilik politikası.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      updated="Haziran 2025"
      intro="Kişisel verilerinizin gizliliği bizim için önceliklidir. Bu politika, verilerinizi nasıl koruduğumuzu açıklar."
      sections={[
        {
          heading: "Genel",
          body: [
            `${site.legalName}, web sitesi ziyaretçilerinin gizliliğine saygı duyar ve kişisel verilerin korunmasına azami önem verir.`,
          ],
        },
        {
          heading: "Toplanan Bilgiler",
          body: [
            "İletişim formu aracılığıyla paylaştığınız ad-soyad, telefon, e-posta ve mesaj bilgileri ile, web sitesi kullanımına ilişkin teknik veriler (çerezler) toplanabilir.",
          ],
        },
        {
          heading: "Bilgilerin Kullanımı",
          body: [
            "Toplanan bilgiler yalnızca talebinizi yanıtlamak, hizmet sunmak ve sizinle iletişim kurmak amacıyla kullanılır; izniniz olmadan pazarlama amaçlı üçüncü taraflara satılmaz.",
          ],
        },
        {
          heading: "Veri Güvenliği",
          body: [
            "Verileriniz, yetkisiz erişime karşı uygun teknik ve idari tedbirlerle korunur. Web sitemiz SSL (HTTPS) ile şifrelenmiş bağlantı üzerinden hizmet verir.",
          ],
        },
        {
          heading: "İletişim",
          body: [
            `Gizlilik uygulamalarımıza ilişkin sorularınız için ${site.email} adresinden bize ulaşabilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
