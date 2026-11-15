import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'latar-belakang', label: 'Latar belakang' },
  { id: 'metode', label: 'Metode' },
  { id: 'temuan', label: 'Temuan' },
  { id: 'pancasila', label: 'Pancasila' },
  { id: 'solusi', label: 'Solusi' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
  { id: 'pustaka', label: 'Pustaka' },
];

const SECTION_IDS = ['beranda', ...NAV_ITEMS.map((item) => item.id), 'tim'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS, 140);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#utama"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-[#EE1C25] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Lewati ke isi utama
      </a>

      <header
        className={`fixed top-0 right-0 left-0 z-40 h-[72px] transition-colors duration-200 ${
          scrolled
            ? 'bg-[#121212] border-b border-white/[0.14]'
            : 'bg-transparent'
        }`}
      >
        {/* Reading progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-[#EE1C25] transition-[width] duration-75"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />

        <div className="site-container flex h-full items-center justify-between gap-8">
          <a
            href="#beranda"
            className="text-base font-bold tracking-tight text-white hover:text-white/85 whitespace-nowrap"
          >
            Riset Kelompok 5
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#EE1C25]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden cursor-pointer"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              aria-hidden="true"
            >
              <line x1="0" y1="2" x2="24" y2="2" stroke="currentColor" strokeWidth="1.75" />
              <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.75" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu (--bg-dark) */}
      {mobileOpen && (
        <div
          id="mobile-menu-panel"
          className="fixed inset-0 z-50 flex flex-col bg-[#121212] text-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div className="site-container flex h-[72px] items-center justify-between border-b border-white/[0.14]">
            <a
              href="#beranda"
              onClick={() => setMobileOpen(false)}
              className="text-base font-bold tracking-tight text-white"
            >
              Riset Kelompok 5
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center text-white cursor-pointer"
              aria-label="Tutup menu navigasi"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav
            aria-label="Navigasi seluler"
            className="site-container flex flex-1 flex-col justify-center gap-2 py-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.1] py-3.5 text-2xl font-bold tracking-tight text-white"
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#EE1C25]" aria-hidden="true" />
                  )}
                </a>
              );
            })}
            <a
              href="#tim"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-white/[0.1] py-3.5 text-2xl font-bold tracking-tight text-white/80"
            >
              <span>Tim penyusun artikel</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
