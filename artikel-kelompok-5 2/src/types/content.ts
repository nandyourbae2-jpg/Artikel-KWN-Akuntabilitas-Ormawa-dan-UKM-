export interface ArticleMeta {
  judul: string;
  judul_kapital: string;
  mata_kuliah: string;
  program_studi: string;
  direktorat: string;
  universitas: string;
  tahun: number;
  kelompok: string;
  jenis_publikasi: string;
}

export interface AnggotaPenyusun {
  nama: string;
  nim: string;
}

export interface TimPenyusun {
  judul: string;
  pengantar: string;
  anggota: AnggotaPenyusun[];
}

export interface AngkaKunciItem {
  nilai: number | string;
  label: string;
}

export interface SdgTarget {
  kode: string;
  isi: string;
}

export interface LatarBelakang {
  paragraf: string[];
  sdg_targets: SdgTarget[];
  pengantar_tujuan: string;
  tujuan: string[];
}

export interface Metode {
  pendekatan: string;
  data_primer: string;
  teknis: string;
  pengantar_panduan: string;
  panduan_wawancara: string[];
}

export interface FotoDokumentasi {
  file: string;
  alt: string;
}

export interface Dokumentasi {
  judul: string;
  catatan: string;
  foto: FotoDokumentasi[];
}

export interface AlurPengajuan {
  judul: string;
  pembuka: string;
  langkah: string[];
  tambahan: string[];
}

export interface MatriksDimensi {
  nama: string;
  nilai: string[];
}

export interface MatriksEvaluasi {
  judul: string;
  responden: string[];
  dimensi: MatriksDimensi[];
}

export interface ContohHarga {
  harga_asli: string;
  diajukan: string;
  hasil: string;
  barang: string;
}

export interface DasarPenentuan {
  judul: string;
  paragraf: string;
  contoh_harga: ContohHarga;
  persetujuan: string;
}

export interface StrategiKekurangan {
  judul: string;
  paragraf: string;
  definisi_safe_money: string;
  daftar: string[];
}

export interface PeranAkuntabilitas {
  pihak: string;
  kewenangan: string;
}

export interface Akuntabilitas {
  judul: string;
  paragraf: string;
  peran: PeranAkuntabilitas[];
}

export interface PraktikBaik {
  judul: string;
  pembuka: string;
  daftar: string[];
  penutup: string;
  nilai_antikorupsi_terkait: string[];
}

export interface TitikRawanItem {
  nama: string;
  isi: string;
}

export interface TitikRawan {
  judul: string;
  daftar: TitikRawanItem[];
  catatan_penyusun: string;
}

export interface SilaItem {
  no: number;
  nama: string;
  isi: string;
}

export interface Pancasila {
  judul: string;
  pengantar: string;
  sila: SilaItem[];
}

export interface HukumDanSdgs {
  judul: string;
  paragraf: string;
  uu: string;
}

export interface Analisis {
  alur_pengajuan: AlurPengajuan;
  matriks: MatriksEvaluasi;
  dasar_penentuan: DasarPenentuan;
  strategi_kekurangan: StrategiKekurangan;
  akuntabilitas: Akuntabilitas;
  praktik_baik: PraktikBaik;
  titik_rawan: TitikRawan;
  pancasila: Pancasila;
  hukum_dan_sdgs: HukumDanSdgs;
}

export interface AlternatifItem {
  judul: string;
  isi: string;
  menjawab_titik_rawan: string[];
}

export interface Kesimpulan {
  paragraf: string;
  pengantar_rekomendasi: string;
  rekomendasi: string[];
  keterbatasan: string;
  penutup: string;
}

export interface ArticleContent {
  _catatan: string;
  meta: ArticleMeta;
  tim_penyusun: TimPenyusun;
  ringkasan: string;
  angka_kunci: AngkaKunciItem[];
  latar_belakang: LatarBelakang;
  metode: Metode;
  dokumentasi: Dokumentasi;
  analisis: Analisis;
  alternatif: AlternatifItem[];
  _catatan_alternatif: string;
  kesimpulan: Kesimpulan;
  daftar_pustaka: string[];
}
