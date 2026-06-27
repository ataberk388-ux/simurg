import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalLayout
      title="KVKK Aydınlatma Metni"
      updated="Haziran 2025"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme."
      sections={[
        {
          heading: "Veri Sorumlusu",
          body: [
            `${site.legalName} (“Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca veri sorumlusu sıfatıyla hareket etmekteyiz.`,
            `Adres: ${site.address.full} · E-posta: ${site.email}`,
          ],
        },
        {
          heading: "İşlenen Kişisel Veriler",
          body: [
            "Web sitemizdeki iletişim formu aracılığıyla; ad-soyad, telefon numarası, e-posta adresi ve tarafımıza ilettiğiniz mesaj içeriği işlenmektedir.",
          ],
        },
        {
          heading: "İşleme Amaçları",
          body: [
            "Kişisel verileriniz; talep ve sorularınıza yanıt vermek, sizinle iletişime geçmek, hizmetlerimiz hakkında bilgilendirme yapmak ve sözleşme öncesi süreçleri yürütmek amacıyla işlenir.",
          ],
        },
        {
          heading: "Hukuki Sebep",
          body: [
            "Verileriniz; KVKK m.5/2 kapsamında meşru menfaat ve sözleşmenin kurulması/ifası hukuki sebeplerine ve gerektiğinde açık rızanıza dayanılarak işlenir.",
          ],
        },
        {
          heading: "Aktarım",
          body: [
            "Kişisel verileriniz, yasal yükümlülükler saklı kalmak kaydıyla üçüncü kişilerle paylaşılmaz. Hizmet aldığımız altyapı sağlayıcıları (örn. e-posta gönderim servisi) ile sınırlı ölçüde paylaşılabilir.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            "KVKK m.11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme ve diğer haklarınızı kullanma hakkına sahipsiniz.",
            `Taleplerinizi ${site.email} adresine iletebilirsiniz.`,
          ],
        },
      ]}
    />
  );
}
