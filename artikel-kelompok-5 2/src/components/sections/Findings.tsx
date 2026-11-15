import { useState } from 'react';
import { Minus, Plus, Info } from 'lucide-react';
import { content } from '../../data';
import { MatrixTable } from '../ui/MatrixTable';

export function Findings() {
  const {
    alur_pengajuan,
    dasar_penentuan,
    strategi_kekurangan,
    akuntabilitas,
    praktik_baik,
    titik_rawan,
  } = content.analisis;

  const [activeStep, setActiveStep] = useState<number>(0);
  const [openRawanIndex, setOpenRawanIndex] = useState<number | null>(0);
  const [showSafeMoneyInfo, setShowSafeMoneyInfo] = useState<boolean>(false);

  return (
    <section id="temuan">
      {/* Sub 1: Alur Pengajuan (Light-2) */}
      <div className="section-pad bg-[#F3F3F3] text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="display-h2 text-[#121212]">{alur_pengajuan.judul}</h2>
                <p className="mt-4 text-sm font-medium text-[#58595B]">
                  RAB dan persetujuan anggaran
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-[#58595B]">
                {alur_pengajuan.pembuka}
              </p>

              {/* Stepper horizontal dengan garis penghubung tipis */}
              <div className="mt-10 relative">
                <div
                  className="hidden md:block absolute top-[18px] left-4 right-4 h-px bg-[rgba(18,18,18,0.18)]"
                  aria-hidden="true"
                />
                <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5 relative">
                  {alur_pengajuan.langkah.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => setActiveStep(idx)}
                          aria-current={isActive ? 'step' : undefined}
                          className="group flex md:flex-col items-start gap-4 text-left w-full cursor-pointer"
                        >
                          <span
                            className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums transition-colors ${
                              isActive
                                ? 'bg-[#EE1C25] text-white'
                                : 'border border-[rgba(18,18,18,0.22)] bg-[#F3F3F3] text-[#58595B] group-hover:border-[#121212] group-hover:text-[#121212]'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span
                            className={`text-sm sm:text-base leading-relaxed transition-colors ${
                              isActive
                                ? 'font-bold text-[#121212]'
                                : 'font-medium text-[#58595B] group-hover:text-[#121212]'
                            }`}
                          >
                            {step}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Tambahan catatan alur */}
              <div className="mt-12 border-t border-[rgba(18,18,18,0.14)] pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {alur_pengajuan.tambahan.map((catatan, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base leading-[1.7] text-[#58595B]"
                  >
                    {catatan}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub 2: Matriks Evaluasi 5 Responden (Light) */}
      <div className="section-pad bg-white text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
        <div className="site-container">
          <div className="max-w-3xl mb-12">
            <h3 className="display-h2 text-[#121212]">
              {content.analisis.matriks.judul}
            </h3>
            <p className="mt-3 text-base text-[#58595B] sm:text-lg">
              Perbandingan hasil wawancara semi-terstruktur pada lima bendahara dan pengurus keuangan ormawa/UKM.
            </p>
          </div>

          <MatrixTable />
        </div>
      </div>

      {/* Sub 3: Dasar Penentuan & Mark-up Baterai (Dark) */}
      <div className="section-pad bg-[#121212] text-white border-b border-white/[0.14]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h3 className="display-h2 text-white">{dasar_penentuan.judul}</h3>
                <p className="mt-4 text-sm text-white/64">Efisiensi dan pengendalian</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-10">
              <p className="prose-col text-base sm:text-lg leading-[1.7] text-white/90">
                {dasar_penentuan.paragraf}
              </p>

              {/* Satu-satunya panel contoh mark-up baterai: dua angka besar berdampingan */}
              <div className="rounded-[24px] border border-white/[0.14] bg-[#1B1B1B] p-8 sm:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.14] pb-6">
                  <span className="text-sm font-medium text-white/64">
                    Contoh harga · {dasar_penentuan.contoh_harga.barang}
                  </span>
                  <span className="inline-block rounded-full bg-[#B01116] px-5 py-1.5 text-xs sm:text-sm font-bold text-white">
                    {dasar_penentuan.contoh_harga.hasil}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 border-b border-white/[0.14] pb-8 sm:grid-cols-2 sm:gap-10">
                  <div>
                    <span className="text-sm text-white/64 block">Harga asli</span>
                    <span className="mt-2 block text-4xl sm:text-5xl font-extrabold tracking-tight text-white tabular-nums">
                      {dasar_penentuan.contoh_harga.harga_asli}
                    </span>
                  </div>
                  <div className="sm:border-l sm:border-white/[0.14] sm:pl-10">
                    <span className="text-sm text-white/64 block">Diajukan</span>
                    <span className="mt-2 block text-4xl sm:text-5xl font-extrabold tracking-tight text-white/75 line-through decoration-[#EE1C25] decoration-2 tabular-nums">
                      {dasar_penentuan.contoh_harga.diajukan}
                    </span>
                  </div>
                </div>

                <p className="mt-8 text-sm sm:text-base leading-[1.7] text-white/75">
                  {dasar_penentuan.persetujuan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub 4: Strategi Kekurangan & Akuntabilitas (Light-2) */}
      <div className="section-pad bg-[#F3F3F3] text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h3 className="display-h2 text-[#121212]">{strategi_kekurangan.judul}</h3>
                <p className="mt-4 text-sm font-medium text-[#58595B]">
                  Safe money dan sponsorship
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="prose-col text-base sm:text-lg leading-[1.7] text-[#121212]">
                {strategi_kekurangan.paragraf}
              </p>

              {/* 5 Chips strategi */}
              <div>
                <p className="text-sm font-bold text-[#58595B] mb-4">
                  Strategi menghadapi kekurangan:
                </p>
                <div className="flex flex-wrap gap-3">
                  {strategi_kekurangan.daftar.map((item) => {
                    const isSafeMoney = item.toLowerCase().includes('safe money');
                    return (
                      <button
                        key={item}
                        type="button"
                        aria-expanded={isSafeMoney ? showSafeMoneyInfo : undefined}
                        onClick={() => {
                          if (isSafeMoney) setShowSafeMoneyInfo(!showSafeMoneyInfo);
                        }}
                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                          isSafeMoney
                            ? 'border-[#EE1C25] bg-white text-[#B01116] hover:bg-[#EE1C25]/[0.04] cursor-pointer'
                            : 'border-[rgba(18,18,18,0.18)] bg-white text-[#121212] cursor-default'
                        }`}
                      >
                        <span>{item}</span>
                        {isSafeMoney && <Info className="h-4 w-4 text-[#EE1C25]" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>

                {/* Popover definisi safe money (tanpa shadow, pakai garis tipis) */}
                {showSafeMoneyInfo && (
                  <div
                    role="region"
                    aria-label="Definisi Safe money"
                    className="mt-4 rounded-[12px] border border-[#EE1C25]/40 bg-white p-6 text-sm leading-relaxed text-[#121212]"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[rgba(18,18,18,0.12)]">
                      <span className="font-bold text-[#121212]">Safe money</span>
                      <button
                        type="button"
                        onClick={() => setShowSafeMoneyInfo(false)}
                        className="text-xs font-medium text-[#58595B] hover:text-[#121212] cursor-pointer"
                      >
                        Tutup
                      </button>
                    </div>
                    <p className="mt-3 text-[#58595B] text-base leading-relaxed">
                      {strategi_kekurangan.definisi_safe_money}
                    </p>
                  </div>
                )}
              </div>

              {/* Akuntabilitas sebagai pengendali utama: split 2 kolom bergaris */}
              <div className="pt-10 border-t border-[rgba(18,18,18,0.14)]">
                <h4 className="text-xl font-bold text-[#121212] sm:text-2xl mb-4">
                  {akuntabilitas.judul}
                </h4>
                <p className="prose-col text-base sm:text-lg leading-[1.7] text-[#58595B] mb-8">
                  {akuntabilitas.paragraf}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b border-[rgba(18,18,18,0.14)]">
                  {akuntabilitas.peran.map((p, idx) => (
                    <div
                      key={p.pihak}
                      className={`py-6 ${
                        idx === 1
                          ? 'border-t border-[rgba(18,18,18,0.14)] sm:border-t-0 sm:border-l sm:pl-8'
                          : 'sm:pr-8'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#58595B]">
                        {p.pihak}
                      </span>
                      <p className="mt-2 text-lg sm:text-xl font-bold text-[#121212]">
                        {p.kewenangan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub 5: Praktik Baik (Light) */}
      <div className="section-pad bg-white text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h3 className="display-h2 text-[#121212]">{praktik_baik.judul}</h3>
                <p className="mt-4 text-sm font-medium text-[#58595B]">
                  Integritas keuangan
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-[#58595B] mb-6">
                {praktik_baik.pembuka}
              </p>

              <ul className="border-t border-[rgba(18,18,18,0.14)] divide-y divide-[rgba(18,18,18,0.14)]">
                {praktik_baik.daftar.map((item, idx) => (
                  <li key={idx} className="py-5 flex items-center justify-between text-base sm:text-lg font-medium text-[#121212]">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* 4 Nilai antikorupsi */}
              <div className="mt-10 rounded-[24px] bg-[#F3F3F3] p-8 border border-[rgba(18,18,18,0.14)]">
                <p className="text-sm font-bold text-[#121212] mb-4">
                  Nilai antikorupsi terkait
                </p>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {praktik_baik.nilai_antikorupsi_terkait.map((val) => (
                    <span
                      key={val}
                      className="rounded-full bg-white border border-[rgba(18,18,18,0.14)] px-4 py-1.5 text-xs font-bold text-[#121212]"
                    >
                      {val}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#58595B]">
                  {praktik_baik.penutup}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub 6: Tiga Titik Rawan (Dark) */}
      <div className="section-pad bg-[#121212] text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h3 className="display-h2 text-white">{titik_rawan.judul}</h3>
                <p className="mt-4 text-sm text-white/64">
                  Celah transparansi anggaran
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/[0.14]">
                {titik_rawan.daftar.map((item, idx) => {
                  const isOpen = openRawanIndex === idx;
                  return (
                    <div key={item.nama} className="border-b border-white/[0.14]">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenRawanIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-6 py-7 text-left cursor-pointer transition-colors hover:text-white"
                      >
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {item.nama}
                        </span>
                        <span
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#EE1C25]"
                          aria-hidden="true"
                        >
                          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pb-8 pr-12 text-base sm:text-lg leading-[1.7] text-white/80">
                          {item.isi}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Callout catatan penyusun */}
              <div className="mt-12 rounded-[12px] border border-white/[0.14] bg-[#1B1B1B] p-6 sm:p-8">
                <span className="text-sm font-bold text-white/64 block mb-2">
                  Catatan penyusun
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  {titik_rawan.catatan_penyusun}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
