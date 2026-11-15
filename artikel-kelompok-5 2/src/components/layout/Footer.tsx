import { content } from '../../data';

export function Footer() {
  const { meta, kesimpulan } = content;

  return (
    <footer className="bg-[#121212] text-white border-t border-white/[0.14]">
      <div className="site-container py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end pb-12 border-b border-white/[0.14]">
          <div className="lg:col-span-8">
            <p className="text-sm text-white/64 max-w-2xl leading-relaxed">
              {kesimpulan.keterbatasan}
            </p>
            <p className="mt-3 text-sm text-white/80">
              Disusun oleh tim {meta.kelompok}, {meta.mata_kuliah}, {meta.universitas}, {meta.tahun}.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs font-medium text-white/50">
              {meta.jenis_publikasi} · {meta.program_studi}
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-white/64">
          <p>
            {meta.universitas} · {meta.tahun}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#beranda"
              className="text-white/80 hover:text-white transition-colors"
            >
              Kembali ke atas
            </a>
            <a
              href="#pustaka"
              className="text-white/80 hover:text-white transition-colors"
            >
              Daftar pustaka
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
