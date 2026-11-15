import { useState } from 'react';
import { content } from '../../data';
import { CountUpNumber } from '../ui/CountUpNumber';

type TabKey = 'responden' | 'instrumen' | 'temuan';

export function KeyNumbers() {
  const [activeTab, setActiveTab] = useState<TabKey>('responden');
  const { angka_kunci, kesimpulan } = content;

  const tabs: {
    key: TabKey;
    label: string;
    primary: { nilai: number | string; label: string };
    secondary: { nilai: number | string; label: string };
  }[] = [
    {
      key: 'responden',
      label: 'Responden',
      primary: angka_kunci[0],
      secondary: angka_kunci[1],
    },
    {
      key: 'instrumen',
      label: 'Instrumen',
      primary: angka_kunci[2],
      secondary: {
        nilai: 4,
        label: 'wawancara lisan yang direkam dan ditranskrip',
      },
    },
    {
      key: 'temuan',
      label: 'Temuan',
      primary: angka_kunci[3],
      secondary: angka_kunci[4],
    },
  ];

  const current = tabs.find((t) => t.key === activeTab) ?? tabs[0];

  return (
    <section
      id="angka"
      className="section-pad bg-white text-[#121212] border-b border-[rgba(18,18,18,0.14)]"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="display-h2 text-[#121212]">Dalam angka</h2>
            <p className="mt-3 text-base text-[#58595B] sm:text-lg">
              Studi kualitatif deskriptif dengan lima responden.
            </p>
          </div>

          {/* GoTo-style large text tabs with 2px red underline on active */}
          <div
            role="tablist"
            aria-label="Kelompok angka kunci penelitian"
            className="lg:col-span-6 flex flex-wrap gap-6 sm:gap-10 lg:justify-end border-b border-[rgba(18,18,18,0.14)]"
          >
            {tabs.map((tab) => {
              const isSelected = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`tab-${tab.key}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.key}`}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative pb-3 text-lg sm:text-xl font-bold tracking-tight transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-[#121212]'
                      : 'text-[#808285] hover:text-[#121212]'
                  }`}
                >
                  {tab.label}
                  {isSelected && (
                    <span
                      className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#EE1C25]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Numbers display: asymmetric hierarchy (huge primary on left, smaller secondary on right) */}
        <div
          role="tabpanel"
          id={`panel-${current.key}`}
          aria-labelledby={`tab-${current.key}`}
          className="mt-14 grid grid-cols-1 gap-12 border-b border-[rgba(18,18,18,0.14)] pb-14 lg:mt-20 lg:grid-cols-12 lg:items-end lg:pb-20"
        >
          <div className="lg:col-span-7">
            <div className="display-number text-[#121212]">
              <CountUpNumber key={`${current.key}-p`} value={current.primary.nilai} />
            </div>
            <p className="mt-4 max-w-md text-lg font-medium text-[#121212] sm:text-xl">
              {current.primary.label}
              <sup className="ml-0.5 text-xs font-bold text-[#58595B]">1</sup>
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-[rgba(18,18,18,0.14)] lg:pl-12">
            <div className="display-number-sm text-[#58595B]">
              <CountUpNumber key={`${current.key}-s`} value={current.secondary.nilai} />
            </div>
            <p className="mt-3 max-w-sm text-base text-[#58595B] sm:text-lg">
              {current.secondary.label}
              <sup className="ml-0.5 text-xs font-bold text-[#58595B]">2</sup>
            </p>
          </div>
        </div>

        {/* GoTo-style numbered footnotes */}
        <div className="mt-8 space-y-1.5 text-xs text-[#58595B] sm:text-sm">
          <p>
            <sup>1</sup> Data primer: wawancara semi-terstruktur oleh tim penyusun. Identitas responden disamarkan.
          </p>
          <p>
            <sup>2</sup> {kesimpulan.keterbatasan}
          </p>
        </div>
      </div>
    </section>
  );
}
