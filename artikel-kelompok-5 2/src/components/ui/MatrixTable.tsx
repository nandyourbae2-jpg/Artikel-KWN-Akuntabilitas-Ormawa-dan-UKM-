import { useState } from 'react';
import { content } from '../../data';

type ViewMode = 'dimensi' | 'responden';

function AdequacyTag({ value }: { value: string }) {
  const normalized = value.toLowerCase();
  let toneClass = 'border-[rgba(18,18,18,0.2)] text-[#121212] bg-white';
  if (normalized === 'belum cukup') {
    toneClass = 'border-[#B01116]/40 text-[#B01116] bg-[#EE1C25]/[0.06]';
  } else if (normalized === 'kadang cukup') {
    toneClass = 'border-[rgba(18,18,18,0.25)] text-[#58595B] bg-white';
  } else if (normalized === 'cukup') {
    toneClass = 'border-[#121212] text-[#121212] bg-white';
  }

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${toneClass}`}
    >
      {value}
    </span>
  );
}

export function MatrixTable() {
  const { matriks } = content.analisis;
  const [viewMode, setViewMode] = useState<ViewMode>('dimensi');
  const [selectedRespondent, setSelectedRespondent] = useState<number>(0);
  const [hoveredRespondent, setHoveredRespondent] = useState<number | null>(null);
  const [activeDimensi, setActiveDimensi] = useState<string>('Semua');

  const highlightedCol = hoveredRespondent ?? selectedRespondent;

  const filteredDimensi =
    activeDimensi === 'Semua'
      ? matriks.dimensi
      : matriks.dimensi.filter((d) => d.nama === activeDimensi);

  return (
    <div className="space-y-8">
      {/* Controls bar */}
      <div className="flex flex-col gap-4 border-b border-[rgba(18,18,18,0.14)] pb-6 lg:flex-row lg:items-center lg:justify-between">
        {/* View mode toggle */}
        <div
          className="inline-flex rounded-full border border-[rgba(18,18,18,0.18)] bg-white p-1 self-start"
          role="group"
          aria-label="Mode tampilan matriks"
        >
          <button
            type="button"
            onClick={() => setViewMode('dimensi')}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer sm:text-sm ${
              viewMode === 'dimensi'
                ? 'bg-[#121212] text-white'
                : 'text-[#58595B] hover:text-[#121212]'
            }`}
          >
            Lihat per dimensi
          </button>
          <button
            type="button"
            onClick={() => setViewMode('responden')}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer sm:text-sm ${
              viewMode === 'responden'
                ? 'bg-[#121212] text-white'
                : 'text-[#58595B] hover:text-[#121212]'
            }`}
          >
            Lihat per responden
          </button>
        </div>

        {/* Dimension filter chips */}
        {viewMode === 'dimensi' && (
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter dimensi evaluasi"
          >
            {['Semua', ...matriks.dimensi.map((d) => d.nama)].map((nama) => {
              const active = activeDimensi === nama;
              return (
                <button
                  key={nama}
                  type="button"
                  onClick={() => setActiveDimensi(nama)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'border-[#121212] bg-[#121212] text-white'
                      : 'border-[rgba(18,18,18,0.18)] bg-white text-[#58595B] hover:border-[#121212] hover:text-[#121212]'
                  }`}
                >
                  {nama}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {viewMode === 'dimensi' ? (
        <>
          {/* Desktop clean hairline table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[rgba(18,18,18,0.14)]">
                  <th
                    scope="col"
                    className="sticky top-0 z-10 w-[20%] bg-[#F3F3F3] py-4 pr-4 text-xs font-bold text-[#58595B]"
                  >
                    Dimensi evaluasi
                  </th>
                  {matriks.responden.map((resp, colIdx) => {
                    const isHighlighted = highlightedCol === colIdx;
                    return (
                      <th
                        key={resp}
                        scope="col"
                        className={`sticky top-0 z-10 w-[16%] bg-[#F3F3F3] px-4 py-4 text-sm font-bold text-[#121212] transition-colors ${
                          isHighlighted
                            ? 'border-t-2 border-t-[#EE1C25]'
                            : 'border-t-2 border-t-transparent'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedRespondent(colIdx)}
                          onMouseEnter={() => setHoveredRespondent(colIdx)}
                          onMouseLeave={() => setHoveredRespondent(null)}
                          className="w-full text-left cursor-pointer"
                        >
                          {resp}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {filteredDimensi.map((dim) => (
                  <tr
                    key={dim.nama}
                    className="border-b border-[rgba(18,18,18,0.14)] align-top"
                  >
                    <th
                      scope="row"
                      className="py-5 pr-4 text-sm font-bold text-[#121212]"
                    >
                      {dim.nama}
                    </th>
                    {dim.nilai.map((val, colIdx) => {
                      const isHighlighted = highlightedCol === colIdx;
                      const isAdequacy = dim.nama === 'Kecukupan dana';
                      return (
                        <td
                          key={colIdx}
                          onClick={() => setSelectedRespondent(colIdx)}
                          onMouseEnter={() => setHoveredRespondent(colIdx)}
                          onMouseLeave={() => setHoveredRespondent(null)}
                          className={`px-4 py-5 text-sm leading-relaxed transition-colors cursor-pointer ${
                            isHighlighted
                              ? 'bg-white text-[#121212]'
                              : 'text-[#58595B]'
                          }`}
                        >
                          {isAdequacy ? <AdequacyTag value={val} /> : val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile dimension view (no horizontal overflow) */}
          <div className="space-y-6 md:hidden">
            {filteredDimensi.map((dim) => (
              <div
                key={dim.nama}
                className="rounded-[12px] border border-[rgba(18,18,18,0.14)] bg-white p-5"
              >
                <h4 className="text-base font-bold text-[#121212] pb-3 border-b border-[rgba(18,18,18,0.14)]">
                  {dim.nama}
                </h4>
                <dl className="divide-y divide-[rgba(18,18,18,0.1)]">
                  {matriks.responden.map((resp, idx) => (
                    <div key={resp} className="py-3 flex flex-col gap-1">
                      <dt className="text-xs font-bold text-[#58595B]">{resp}</dt>
                      <dd className="text-sm text-[#121212]">
                        {dim.nama === 'Kecukupan dana' ? (
                          <AdequacyTag value={dim.nilai[idx]} />
                        ) : (
                          dim.nilai[idx]
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Per-respondent view (clean tab + card) */
        <div>
          <div
            role="tablist"
            aria-label="Pilih responden"
            className="flex flex-wrap gap-2 pb-6"
          >
            {matriks.responden.map((resp, idx) => {
              const active = selectedRespondent === idx;
              return (
                <button
                  key={resp}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedRespondent(idx)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? 'border-[#EE1C25] bg-white text-[#121212]'
                      : 'border-[rgba(18,18,18,0.18)] bg-transparent text-[#58595B] hover:text-[#121212]'
                  }`}
                >
                  {resp}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="rounded-[24px] border border-[rgba(18,18,18,0.14)] bg-white p-6 sm:p-10"
          >
            <div className="flex items-center justify-between border-b border-[rgba(18,18,18,0.14)] pb-4">
              <h4 className="text-xl font-bold text-[#121212] sm:text-2xl">
                {matriks.responden[selectedRespondent]}
              </h4>
              <span className="h-[2px] w-10 bg-[#EE1C25]" aria-hidden="true" />
            </div>

            <dl className="divide-y divide-[rgba(18,18,18,0.14)]">
              {matriks.dimensi.map((dim) => (
                <div
                  key={dim.nama}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="sm:col-span-4 text-sm font-bold text-[#58595B]">
                    {dim.nama}
                  </dt>
                  <dd className="sm:col-span-8 text-base text-[#121212]">
                    {dim.nama === 'Kecukupan dana' ? (
                      <AdequacyTag value={dim.nilai[selectedRespondent]} />
                    ) : (
                      dim.nilai[selectedRespondent]
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
