export type HeroMediaMode = 'abstract' | 'photo';

/**
 * Konfigurasi tampilan hero sesuai DESIGN_SPEC.md:
 * - "abstract" (default): bentuk geometris SVG terinspirasi huruf U dan buku terbuka Telkom.
 * - "photo": foto dokumentasi dengan overlay gelap (hanya jika wajah sudah disamarkan/diizinkan).
 */
export const HERO_MEDIA: HeroMediaMode = 'abstract';
export const HERO_PHOTO_SRC = '/images/dokumentasi-1.jpg';
