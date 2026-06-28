import { z } from "zod";

// Mesajlar çeviri anahtarı olarak tutulur; formda "ferr" namespace'iyle çevrilir.
export const contactSchema = z.object({
  name: z.string().min(2, "nameReq").max(80, "nameMax"),
  companyName: z.string().max(120, "companyMax").optional(),
  phone: z
    .string()
    .min(7, "phoneReq")
    .max(20, "phoneMax")
    .regex(/^[0-9+()\s-]+$/, "phoneInvalid"),
  email: z.string().email("emailInvalid"),
  subject: z.string().min(2, "subjectReq"),
  message: z.string().min(10, "messageReq").max(2000, "messageMax"),
  consent: z.literal(true, { message: "consentReq" }),
  // Bot tuzağı (honeypot) — boş kalmalı; doluysa route sessizce başarı döner
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const subjects = [
  "Mali müşavirlik ve muhasebe",
  "Finansal danışmanlık",
  "Şirket kuruluşu",
  "Teşvik ve hibe danışmanlığı",
  "Yatırım danışmanlığı",
  "Uluslararası iş geliştirme",
  "Hukuki koordinasyon",
  "Diğer",
] as const;
