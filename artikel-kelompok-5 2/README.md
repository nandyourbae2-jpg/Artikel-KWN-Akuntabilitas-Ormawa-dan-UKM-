# Akuntabilitas Anggaran Organisasi Mahasiswa — Artikel Kelompok 5

Website publikasi artikel riset mata kuliah **Kewarganegaraan**, Program Studi S1 Teknik Logistik, Direktorat Kampus Purwokerto, **Universitas Telkom Purwokerto** (2026).

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
```

Output build berada di folder `dist/`.

## Deploy ke Vercel

1. Upload/push folder ini ke repositori GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repositori tersebut.
3. Framework Preset akan terdeteksi otomatis sebagai **Vite** (`npm run build`, output `dist`). Klik **Deploy**.
