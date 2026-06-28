export type L<T> = { tr: T; en: T };

/** Dil-bilincli içerik seçici. EN yoksa TR'ye düşer. */
export function pick<T>(v: L<T>, locale: string): T {
  return locale === "en" ? (v.en ?? v.tr) : v.tr;
}
