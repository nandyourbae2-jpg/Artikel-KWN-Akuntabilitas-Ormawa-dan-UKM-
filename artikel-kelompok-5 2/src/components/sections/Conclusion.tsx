import { content } from '../../data';

export function Conclusion() {
  const { kesimpulan } = content;

  return (
    <section id="kesimpulan" className="section-pad bg-[#121212] text-white border-b border-white/[0.14]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-white">Kesimpulan</h2>
              <p className="mt-4 text-sm text-white/64">
                Refleksi dan rekomendasi
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <p className="prose-col text-lg sm:text-xl leading-[1.7] text-white/90">
              {kesimpulan.paragraf}
            </p>

            {/* Rekomendasi: 4 item sebagai daftar bernomor besar */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                {kesimpulan.pengantar_rekomendasi}
              </h3>

              <ol className="border-t border-white/[0.14] divide-y divide-white/[0.14]">
                {kesimpulan.rekomendasi.map((rek, idx) => (
                  <li key={idx} className="grid grid-cols-12 gap-4 py-8 items-start">
                    <span className="col-span-2 sm:col-span-1 display-number-sm text-white/40 tabular-nums">
                      {idx + 1}
                    </span>
                    <p className="col-span-10 sm:col-span-11 text-base sm:text-lg leading-[1.7] text-white/90 pt-1">
                      {rek}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Keterbatasan Callout */}
            <div className="rounded-[12px] border border-white/[0.14] bg-[#1B1B1B] p-6 sm:p-8">
              <span className="text-sm font-bold text-white/64 block mb-2">
                Keterbatasan penelitian
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                {kesimpulan.keterbatasan}
              </p>
            </div>

            {/* Kalimat penutup berukuran H2 */}
            <div className="pt-8 border-t border-white/[0.14]">
              <p className="display-h2 text-white text-left font-bold leading-tight">
                “{kesimpulan.penutup}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
