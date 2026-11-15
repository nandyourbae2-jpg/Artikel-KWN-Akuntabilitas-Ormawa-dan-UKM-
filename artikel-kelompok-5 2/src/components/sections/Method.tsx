import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { content } from '../../data';
import { Lightbox } from '../ui/Lightbox';

export function Method() {
  const { metode, dokumentasi } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="metode"
      className="section-pad bg-[#121212] text-white"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-h2 text-white">Metode</h2>
              <p className="mt-4 text-sm text-white/64">
                Identitas responden disamarkan
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="prose-col space-y-5 text-base leading-[1.7] text-white/90 sm:text-lg">
              <p className="text-xl font-bold text-white sm:text-2xl">
                {metode.pendekatan}
              </p>
              <p className="text-white/80">{metode.data_primer}</p>
              <p className="text-white/64">{metode.teknis}</p>
            </div>

            {/* Accordion: 7 interview questions with hairline dividers (not cards) */}
            <div className="mt-16">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Panduan wawancara
              </h3>
              <p className="mt-2 text-sm text-white/64 sm:text-base">
                {metode.pengantar_panduan}
              </p>

              <div className="mt-6 border-t border-white/[0.14]">
                {metode.panduan_wawancara.map((q, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-white/[0.14]"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`wawancara-panel-${idx}`}
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-white cursor-pointer"
                      >
                        <div className="flex items-baseline gap-5">
                          <span className="text-sm font-bold text-white/50 tabular-nums">
                            {idx + 1}
                          </span>
                          <span className="text-base font-medium text-white sm:text-lg">
                            Pertanyaan {idx + 1}
                          </span>
                        </div>
                        <span
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#EE1C25]"
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <Minus className="h-5 w-5" />
                          ) : (
                            <Plus className="h-5 w-5" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`wawancara-panel-${idx}`}
                          className="pb-6 pl-8 pr-10 text-base leading-[1.7] text-white/85 sm:text-lg"
                        >
                          {q}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Galeri 2 foto dokumentasi tanpa teks di dalam area dokumentasi */}
            <div className="mt-20">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {dokumentasi.judul}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {dokumentasi.foto.map((foto, idx) => {
                  const failed = failedImages[foto.file];
                  return (
                    <button
                      key={foto.file}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="group block w-full overflow-hidden rounded-[12px] border border-white/[0.14] bg-[#1B1B1B] text-left transition-colors hover:border-white/40 cursor-pointer"
                      aria-label={foto.alt}
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        {!failed && (
                          <img
                            src={`/images/${foto.file}`}
                            alt={foto.alt}
                            width={1024}
                            height={576}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            onError={() =>
                              setFailedImages((prev) => ({
                                ...prev,
                                [foto.file]: true,
                              }))
                            }
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        photos={dokumentasi.foto}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelect={(i) => setLightboxIndex(i)}
      />
    </section>
  );
}
