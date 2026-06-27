import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Lütfen adınızı ve soyadınızı girin.")
    .max(80, "İsim çok uzun."),
  phone: z
    .string()
    .min(7, "Geçerli bir telefon numarası girin.")
    .max(20, "Telefon numarası çok uzun.")
    .regex(/^[0-9+()\s-]+$/, "Telefon yalnızca rakam ve +()- içerebilir."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  subject: z.string().min(2, "Lütfen bir konu seçin."),
  message: z
    .string()
    .min(10, "Mesajınız en az 10 karakter olmalı.")
    .max(2000, "Mesaj çok uzun."),
  consent: z.literal(true, {
    message: "Devam etmek için KVKK aydınlatma metnini onaylamalısınız.",
  }),
  // Bot tuzağı (honeypot) — boş kalmalı
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const subjects = [
  "Mali Müşavirlik & Muhasebe",
  "Finans Danışmanlığı",
  "Hukuk Danışmanlığı",
  "İnsan Kaynakları",
  "Genel Bilgi / Diğer",
] as const;
