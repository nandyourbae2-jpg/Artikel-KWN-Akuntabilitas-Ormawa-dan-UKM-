import { motion } from 'framer-motion';
import { HERO_MEDIA, HERO_PHOTO_SRC } from '../../config';
import { content } from '../../data';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const reduced = useReducedMotion();
  const { meta, ringkasan } = content;

  const lineVariants = {
    hidden: reduced ? { y: 0, opacity: 1 } : { y: '105%', opacity: 0 },
    visible: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#121212] pt-[72px] text-white"
    >
      {/* Background media: photo or abstract geometric SVG */}
      {HERO_MEDIA === 'photo' ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img
            src={HERO_PHOTO_SRC}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#121212]/70" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Subtle architectural grid lines echoing GoTo */}
          <div className="site-container relative h-full">
            <div className="absolute top-0 bottom-0 left-[33.33%] hidden w-px bg-white/[0.05] lg:block" />
            <div className="absolute top-0 bottom-0 left-[66.66%] hidden w-px bg-white/[0.05] lg:block" />
          </div>
        </div>
      )}

      {/* Spacer for vertical alignment */}
      <div className="flex-1" />

      {/* Main Hero Content */}
      <div className="site-container relative z-10 pb-12 pt-16 lg:pb-16 lg:pt-20">
        <div className="max-w-4xl">
          <h1 className="display-h1 text-white">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={lineVariants}
              >
                Akuntabilitas
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                initial="hidden"
                animate="visible"
                custom={0.1}
                variants={lineVariants}
              >
                Anggaran
              </motion.span>
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-snug text-white/90 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.3]">
            {meta.judul}
          </p>

          <p className="mt-5 max-w-[640px] text-base leading-relaxed text-white/64 sm:text-lg">
            {ringkasan}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#temuan"
              className="inline-flex items-center justify-center rounded-full bg-[#B01116] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#EE1C25]"
            >
              Baca temuan
            </a>
            <a
              href="#tim"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Lihat tim penyusun
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Hero Metadata Bar */}
      <div className="site-container relative z-10 border-t border-white/[0.14] py-5">
        <div className="flex flex-col gap-2 text-xs text-white/64 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            {meta.mata_kuliah} · {meta.universitas} · {meta.tahun} · Disusun oleh {meta.kelompok}
          </p>
          <a
            href="#angka"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors self-start sm:self-auto"
          >
            <span>scroll</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
