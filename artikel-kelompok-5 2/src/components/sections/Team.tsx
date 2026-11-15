import { content } from '../../data';

export function Team() {
  const { tim_penyusun } = content;

  return (
    <section id="tim" className="section-pad bg-white text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-[#121212]">{tim_penyusun.judul}</h2>
              <p className="mt-4 text-sm font-medium text-[#58595B]">
                Kelompok 5
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="prose-col text-base sm:text-lg leading-[1.7] text-[#58595B] mb-12">
              {tim_penyusun.pengantar}
            </p>

            {/* Daftar dua kolom nama dan NIM dengan garis pemisah, tanpa avatar warna-warni */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-[rgba(18,18,18,0.14)]">
              {tim_penyusun.anggota.map((m) => (
                <div
                  key={m.nim}
                  className="py-5 border-b border-[rgba(18,18,18,0.14)] flex items-baseline justify-between gap-4"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#121212]">
                    {m.nama}
                  </h3>
                  <span className="text-sm text-[#58595B] tabular-nums shrink-0">
                    {m.nim}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
