import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Basit IP bazlı hız sınırı (bellek içi — tek instance için yeterli).
const RATE_LIMIT = 5; // pencere başına izin verilen istek
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 dakika
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  // Ara sıra eski kayıtları temizle
  if (hits.size > 5000) {
    for (const [key, val] of hits) if (now > val.reset) hits.delete(key);
  }
  return entry.count > RATE_LIMIT;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Çok fazla deneme. Lütfen birazdan tekrar deneyin." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Form bilgileri geçersiz.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot doluysa sessizce başarı dön (bot)
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Gönderim adresleri ortam değişkeniyle özelleştirilebilir
  const from = process.env.CONTACT_FROM || "Simurg Web <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || site.email;

  // Anahtar yoksa: geliştirme ortamında akışı bozmadan logla
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[iletisim] RESEND_API_KEY tanımsız — gönderim atlandı:", {
        ...data,
        message: data.message.slice(0, 120),
      });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "E-posta servisi henüz yapılandırılmadı." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Yeni İletişim Formu: ${data.subject}`,
      text: [
        `Ad Soyad: ${data.name}`,
        `Firma: ${data.companyName || "-"}`,
        `Telefon: ${data.phone}`,
        `E-posta: ${data.email}`,
        `Konu: ${data.subject}`,
        "",
        "Mesaj:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#1a1a1a">
          <h2 style="color:#9c7a23">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Firma:</strong> ${escapeHtml(data.companyName || "-")}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>E-posta:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Konu:</strong> ${escapeHtml(data.subject)}</p>
          <hr/>
          <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[iletisim] Resend hatası:", error);
      return NextResponse.json(
        { error: "Mesaj gönderilemedi, lütfen tekrar deneyin." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[iletisim] Beklenmeyen hata:", err);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi, lütfen tekrar deneyin." },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
