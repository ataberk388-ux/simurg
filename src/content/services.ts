export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: "ledger" | "finance" | "law" | "hr";
  features: string[];
  details: { heading: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "mali-musavirlik",
    title: "Mali Müşavirlik & Muhasebe",
    short: "Defter, beyanname, e-fatura ve şirket kuruluşunda tam uyum.",
    summary:
      "İşletmenizin tüm muhasebe ve vergi süreçlerini mevzuata tam uyumlu, zamanında ve şeffaf biçimde yönetiyoruz. Rakamların arkasındaki stratejiyi sizin için okunur kılıyoruz.",
    icon: "ledger",
    features: [
      "Defter tutma ve dönem sonu işlemleri",
      "KDV, geçici ve kurumlar vergisi beyannameleri",
      "e-Fatura, e-Arşiv ve e-Defter geçişi",
      "Şirket kuruluşu, tür değişikliği ve tasfiye",
      "Vergi planlaması ve mevzuat danışmanlığı",
    ],
    details: [
      {
        heading: "Mevzuata tam uyum",
        body: "Sürekli değişen vergi mevzuatını sizin adınıza takip eder, cezalı duruma düşmeden tüm yükümlülüklerinizi zamanında yerine getiririz.",
      },
      {
        heading: "Dijital muhasebe",
        body: "e-Fatura, e-Arşiv ve e-Defter süreçlerinizi uçtan uca kurar; kâğıtsız, hızlı ve denetlenebilir bir muhasebe altyapısı sağlarız.",
      },
      {
        heading: "Karar destek raporları",
        body: "Aylık mali tablolarınızı sade ve yorumlanmış raporlara dönüştürür, işletmenizi rakamlarla yönetmenizi sağlarız.",
      },
    ],
  },
  {
    slug: "finans-danismanligi",
    title: "Finans Danışmanlığı",
    short: "Bütçe, nakit akışı, mali analiz ve yatırım planlaması.",
    summary:
      "Büyümeyi sürdürülebilir kılan finansal disiplini kuruyoruz. Bütçeden nakit akışına, fizibiliteden yatırım kararına kadar işletmenizin finansal pusulası oluyoruz.",
    icon: "finance",
    features: [
      "Bütçeleme ve nakit akışı yönetimi",
      "Mali analiz ve performans raporlaması",
      "Yatırım ve fizibilite değerlendirmesi",
      "Banka ve kredi yapılandırma desteği",
      "Maliyet ve kârlılık optimizasyonu",
    ],
    details: [
      {
        heading: "Nakit akışı kontrolü",
        body: "Gelir-gider dengesini öngörülebilir kılar, kısa ve orta vadeli nakit ihtiyacınızı önceden planlayarak sürprizleri ortadan kaldırırız.",
      },
      {
        heading: "Yatırım kararları",
        body: "Yeni yatırımlarınızı fizibilite ve geri dönüş analizleriyle değerlendirir, sermayenizi en verimli alana yönlendiririz.",
      },
      {
        heading: "Finansman erişimi",
        body: "Banka ve kredi süreçlerinde işletmenizi en güçlü şekilde temsil edecek finansal sunumları hazırlarız.",
      },
    ],
  },
  {
    slug: "hukuk",
    title: "Hukuk Danışmanlığı",
    short: "Ticaret hukuku ve sözleşmelerde çözüm ortağı yaklaşımı.",
    summary:
      "Anlaşmalı avukatlarımız ve uzman kadromuzla ticari ilişkilerinizi sağlam hukuki zemine oturtuyoruz. Riskleri sözleşme aşamasında çözüyor, sizi olası uyuşmazlıklardan koruyoruz.",
    icon: "law",
    features: [
      "Ticaret ve şirketler hukuku danışmanlığı",
      "Sözleşme hazırlık ve inceleme",
      "Alacak takibi ve uyuşmazlık yönetimi",
      "Sözleşmesel risk analizi",
      "Çözüm ortağı avukatlarla yönlendirme",
    ],
    details: [
      {
        heading: "Sözleşme güvencesi",
        body: "Ticari sözleşmelerinizi hazırlar veya inceler; haklarınızı koruyan, açık ve uygulanabilir maddelerle imza atmanızı sağlarız.",
      },
      {
        heading: "Risk yönetimi",
        body: "Ticari ilişkilerinizdeki hukuki riskleri önceden tespit eder, uyuşmazlığa dönüşmeden önleyici çözümler üretiriz.",
      },
      {
        heading: "Çözüm ortaklığı",
        body: "Uzmanlık gerektiren davalarda anlaşmalı avukatlarımızla koordineli çalışır, sürecin tek elden takibini sağlarız.",
      },
    ],
  },
  {
    slug: "insan-kaynaklari",
    title: "İnsan Kaynakları",
    short: "Bordrolama, SGK işlemleri ve özlük süreç yönetimi.",
    summary:
      "Personel süreçlerinizi yasal mevzuata uygun, hatasız ve gizlilik içinde yönetiyoruz. Bordrodan özlük dosyasına kadar tüm İK yükünü üzerinizden alıyoruz.",
    icon: "hr",
    features: [
      "Bordro hazırlama ve maaş yönetimi",
      "SGK işe giriş/çıkış ve bildirimler",
      "Özlük dosyası ve doküman yönetimi",
      "İş hukuku ve tazminat hesaplamaları",
      "İK politika ve süreç danışmanlığı",
    ],
    details: [
      {
        heading: "Hatasız bordro",
        body: "Maaş, prim, kesinti ve tazminat hesaplarınızı eksiksiz yapar, çalışan memnuniyetini ve yasal uyumu birlikte sağlarız.",
      },
      {
        heading: "SGK uyumu",
        body: "İşe giriş-çıkış, eksik gün ve teşvik süreçlerinizi zamanında yönetir, idari para cezası riskini ortadan kaldırırız.",
      },
      {
        heading: "Gizli ve düzenli özlük",
        body: "Personel özlük dosyalarınızı KVKK'ya uygun, denetime hazır ve güvenli biçimde dijital olarak saklarız.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
