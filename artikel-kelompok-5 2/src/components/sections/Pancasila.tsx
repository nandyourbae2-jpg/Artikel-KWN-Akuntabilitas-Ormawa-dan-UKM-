import { useState } from 'react';
import { content } from '../../data';

export function Pancasila() {
  const { pancasila, hukum_dan_sdgs } = content.analisis;
  const [activeSila, setActiveSila] = useState<number>(0);

  return (
    <section id="pancasila" className="section-pad bg-white text-[#121212] border-b border-[rgba(18,18,18,0.14)]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-[#121212]">{pancasila.judul}</h2>
              <p className="mt-4 text-sm font-medium text-[#58595B]">
                Ideologi dan etika bangsa
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="prose-col text-base sm:text-lg leading-[1.7] text-[#121212] mb-12">
              {pancasila.pengantar}
            </p>

            {/* Vertical tabs on left, sila detail on right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[rgba(18,18,18,0.14)] pt-8">
              <div
                role="tablist"
                aria-label="Pilihan sila Pancasila"
                className="md:col-span-5 flex flex-col divide-y divide-[rgba(18,18,18,0.14)]"
              >
                {pancasila.sila.map((s, idx) => {
                  const isActive = activeSila === idx;
                  return (
                    <button
                      key={s.no}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveSila(idx)}
                      className={`py-4 pl-4 text-left transition-colors flex items-baseline gap-3 border-l-2 cursor-pointer ${
                        isActive
                          ? 'border-[#EE1C25] text-[#121212] font-bold'
                          : 'border-transparent text-[#58595B] hover:text-[#121212]'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#58595B] tabular-nums shrink-0">
                        {s.no}.
                      </span>
                      <span className="text-base sm:text-lg">{s.nama}</span>
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                className="md:col-span-7 rounded-[24px] bg-[#F3F3F3] p-8 sm:p-10 border border-[rgba(18,18,18,0.14)] flex flex-col justify-center"
              >
                <span className="text-sm font-bold text-[#B01116]">
                  Sila {pancasila.sila[activeSila].no}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#121212] mt-2 mb-5">
                  {pancasila.sila[activeSila].nama}
                </h3>
                <p className="text-base sm:text-lg leading-[1.7] text-[#58595B]">
                  {pancasila.sila[activeSila].isi}
                </p>
              </div>
            </div>

            {/* Skala kenegaraan & SDGs */}
            <div className="mt-16 rounded-[24px] bg-[#121212] p-8 sm:p-12 text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {hukum_dan_sdgs.judul}
              </h3>
              <p className="text-base sm:text-lg leading-[1.7] text-white/85">
                {hukum_dan_sdgs.paragraf}
              </p>
              <div className="mt-6 pt-6 border-t border-white/[0.14] flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white">
                  {hukum_dan_sdgs.uu}
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white">
                  SDGs Tujuan 16
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
