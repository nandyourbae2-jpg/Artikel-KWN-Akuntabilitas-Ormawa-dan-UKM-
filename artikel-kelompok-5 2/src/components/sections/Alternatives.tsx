import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { content } from '../../data';

export function Alternatives() {
  const { alternatif } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showMapping, setShowMapping] = useState<boolean>(true);

  return (
    <section id="solusi" className="section-pad bg-[#F3F3F3] text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-[#121212]">Alternatif solusi</h2>
              <p className="mt-4 text-sm font-medium text-[#58595B]">
                Tata kelola dan pengawasan
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setShowMapping(!showMapping)}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,18,18,0.2)] bg-white px-4 py-2 text-xs font-medium text-[#121212] hover:border-[#121212] transition-colors cursor-pointer"
                >
                  <span>{showMapping ? 'Sembunyikan pemetaan indikatif' : 'Tampilkan pemetaan indikatif'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[rgba(18,18,18,0.14)]">
              {alternatif.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.judul} className="border-b border-[rgba(18,18,18,0.14)]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-6 py-8 text-left cursor-pointer transition-colors"
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#121212] tracking-tight">
                        {item.judul}
                      </h3>

                      <span
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#EE1C25]"
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-8 pr-6">
                        <p className="prose-col text-base sm:text-lg leading-[1.7] text-[#58595B]">
                          {item.isi}
                        </p>

                        {showMapping && item.menjawab_titik_rawan.length > 0 && (
                          <div className="mt-6 pt-4 border-t border-[rgba(18,18,18,0.08)] flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-[#58595B]">
                              Pemetaan indikatif:
                            </span>
                            {item.menjawab_titik_rawan.map((rawan) => (
                              <span
                                key={rawan}
                                className="rounded-full bg-white border border-[rgba(18,18,18,0.14)] px-3 py-1 text-xs font-medium text-[#121212]"
                              >
                                {rawan}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
