import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Web sitemizde kullanılan çerezler hakkında bilgilendirme.",
};

export default function CookiePage() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      updated="Haziran 2025"
      intro="Web sitemizde kullanılan çerezler ve bunları nasıl yönetebileceğiniz hakkında bilgi."
      sections={[
        {
          heading: "Çerez Nedir?",
          body: [
            "Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını ve deneyiminizin iyileştirilmesini sağlarlar.",
          ],
        },
        {
          heading: "Kullandığımız Çerezler",
          body: [
            "Zorunlu çerezler: Sitenin temel işlevleri için gereklidir (örn. çerez tercih kaydınız).",
            "Performans/analitik çerezler: Ziyaretçi davranışını anonim olarak ölçmek için kullanılabilir.",
          ],
        },
        {
          heading: "Çerezleri Yönetme",
          body: [
            "Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak, sitenin bazı bölümlerinin düzgün çalışmamasına neden olabilir.",
            "Site üzerindeki çerez bildirimi aracılığıyla tercihinizi dilediğiniz zaman güncelleyebilirsiniz.",
          ],
        },
      ]}
    />
  );
}
