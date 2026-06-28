import { L, pick } from "./_pick";

const storyParagraphsData: L<string[]> = {
  tr: [
    "Simurg efsanesi, gerçek gücün dışarıda aranacak bir kurtarıcıda değil, yolculuğun kendisinde ve bu yolculukta keşfedilen içsel potansiyelde saklı olduğunu anlatan kadim bir bilgelik hikayesidir.",
    "Efsaneye göre kuşlar, tüm sorunlarına çözüm bulacağına inandıkları Simurg'u aramak için zorlu bir yolculuğa çıkar. Bu yolculukta istek, aşk, marifet, istiğna, tevhid, hayret ve yokluk vadilerinden geçerler. Her vadi, onları kendi sınırlarıyla, korkularıyla, arzularıyla ve egolarıyla yüzleştirir.",
    "Yolculuğun sonunda Kaf Dağı'na yalnızca otuz kuş ulaşır. Simurg'u ararken aslında kendi dönüşümlerini tamamladıklarını fark ederler. Çünkü \"Simurg\", otuz kuş anlamına gelir. Aradıkları gücün, rehberliğin ve liderliğin kendi içlerinde ve birlikte başardıkları yolculukta saklı olduğunu anlarlar.",
    "Simurg Finansal Danışmanlık A.Ş. için bu hikaye, yalnızca bir isim kaynağı değil; çalışma felsefesinin temelidir.",
    "Biz, şirketlerin potansiyelini dışarıdan hazır reçetelerle değil; doğru analiz, stratejik planlama, finansal disiplin ve sürdürülebilir yol haritalarıyla ortaya çıkarmayı hedefleriz.",
    "Her şirketin kendi içinde taşıdığı bir güç, büyüme kapasitesi ve dönüşüm potansiyeli olduğuna inanırız. Simurg olarak görevimiz, bu potansiyeli görünür kılmak, doğru stratejiyle yönlendirmek ve şirketlerin kendi başarı yolculuklarında güvenilir bir yol arkadaşı olmaktır.",
  ],
  en: [
    "The Simurg legend is an ancient wisdom story telling that true power lies not in an external savior to be sought outside, but in the journey itself and the inner potential discovered along that journey.",
    "According to the legend, the birds set out on an arduous journey to find the Simurg, which they believe will solve all their problems. Along the way they pass through the valleys of desire, love, knowledge, detachment, unity, bewilderment and nothingness. Each valley confronts them with their own limits, fears, desires and egos.",
    "At the end of the journey, only thirty birds reach Mount Qaf. While searching for the Simurg, they realize they have actually completed their own transformation. Because \"Simurg\" means thirty birds. They understand that the power, guidance and leadership they sought lie within themselves and in the journey they accomplished together.",
    "For Simurg Financial Consulting Inc., this story is not merely a source of name; it is the foundation of its working philosophy.",
    "We aim to reveal companies' potential not with ready-made external prescriptions, but through accurate analysis, strategic planning, financial discipline and sustainable roadmaps.",
    "We believe every company carries within itself a power, a growth capacity and a transformation potential. As Simurg, our mission is to make this potential visible, guide it with the right strategy, and be a trusted companion on companies' own journeys to success.",
  ],
};

const storyHighlightsData: L<string[]> = {
  tr: [
    "Aranan güç dışarıda değil, doğru stratejiyle keşfedilen potansiyelin içindedir.",
    "Simurg, şirketlerin kendi gücünü keşfetme ve geleceğe daha sağlam adımlarla ilerleme yolculuğunda stratejik rehberdir.",
    "Her dönüşüm, doğru analizle başlar. Her başarı, potansiyelin keşfiyle büyür.",
  ],
  en: [
    "The power you seek is not outside, but within the potential discovered through the right strategy.",
    "Simurg is a strategic guide on companies' journey to discover their own strength and move toward the future with firmer steps.",
    "Every transformation begins with the right analysis. Every success grows with the discovery of potential.",
  ],
};

const valleysData: L<string[]> = {
  tr: ["İstek", "Aşk", "Marifet", "İstiğna", "Tevhid", "Hayret", "Yokluk"],
  en: ["Desire", "Love", "Knowledge", "Detachment", "Unity", "Bewilderment", "Nothingness"],
};

const missionData: L<string> = {
  tr: "Şirketlerin finansal, mali, hukuki ve stratejik süreçlerinde ihtiyaç duydukları güvenilir danışmanlık desteğini tek çatı altında sunmak; doğru analiz, şeffaf süreç yönetimi ve sürdürülebilir yol haritalarıyla kurumların kendi potansiyellerini keşfetmelerine ve büyüme hedeflerine ulaşmalarına rehberlik etmek.",
  en: "To provide, under one roof, the trusted advisory support companies need in their financial, fiscal, legal and strategic processes; and to guide institutions, through accurate analysis, transparent process management and sustainable roadmaps, in discovering their own potential and reaching their growth goals.",
};

const visionData: L<string> = {
  tr: "Türkiye'de ve uluslararası pazarlarda faaliyet gösteren şirketler için güvenilir, stratejik ve bütünleşik danışmanlık çözümleri sunan; finansal disiplin, kurumsal dönüşüm ve sürdürülebilir büyüme alanlarında referans gösterilen bir danışmanlık markası olmak.",
  en: "To be an advisory brand that offers reliable, strategic and integrated advisory solutions for companies operating in Türkiye and international markets, and that is referenced in the fields of financial discipline, corporate transformation and sustainable growth.",
};

const philosophyData: L<string> = {
  tr: "Simurg'un hikayesinde olduğu gibi, gerçek başarı dışarıdan gelen geçici çözümlerde değil; kurumun kendi potansiyelini doğru analiz etmesinde, kaynaklarını etkin yönetmesinde ve stratejik kararlarını bilinçli biçimde uygulamasında saklıdır. Simurg Finansal Danışmanlık A.Ş., bu yolculukta şirketlere rehberlik eden stratejik bir yol arkadaşıdır.",
  en: "As in the story of Simurg, true success lies not in temporary external solutions, but in the institution accurately analyzing its own potential, managing its resources effectively and implementing its strategic decisions consciously. Simurg Financial Consulting Inc. is a strategic companion guiding companies on this journey.",
};

export const getStoryParagraphs = (l: string) => pick(storyParagraphsData, l);
export const getStoryHighlights = (l: string) => pick(storyHighlightsData, l);
export const getValleys = (l: string) => pick(valleysData, l);
export const getMission = (l: string) => pick(missionData, l);
export const getVision = (l: string) => pick(visionData, l);
export const getPhilosophy = (l: string) => pick(philosophyData, l);

// Geriye dönük (TR doğrudan kullanım)
export const philosophy = philosophyData.tr;
