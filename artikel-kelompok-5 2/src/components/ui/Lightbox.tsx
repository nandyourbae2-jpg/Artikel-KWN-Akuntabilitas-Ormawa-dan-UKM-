import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { FotoDokumentasi } from '../../types/content';

interface LightboxProps {
  photos: FotoDokumentasi[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function Lightbox({ photos, activeIndex, onClose, onSelect }: LightboxProps) {
  const [failedFiles, setFailedFiles] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelect((activeIndex + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        onSelect((activeIndex - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, photos.length, onClose, onSelect]);

  if (activeIndex === null) return null;

  const photo = photos[activeIndex];
  const src = `/images/${photo.file}`;
  const hasFailed = failedFiles[photo.file];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/95 p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau foto dokumentasi ${activeIndex + 1}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between text-sm text-white/70">
          <span>
            Dokumentasi {activeIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#EE1C25] hover:text-[#EE1C25] cursor-pointer"
            aria-label="Tutup pratinjau foto"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-hidden rounded-[12px] border border-white/15 bg-[#1B1B1B]">
          {hasFailed ? (
            <div className="aspect-[16/10] w-full" />
          ) : (
            <img
              src={src}
              alt={photo.alt}
              className="max-h-[70vh] w-full object-contain"
              onError={() =>
                setFailedFiles((prev) => ({ ...prev, [photo.file]: true }))
              }
            />
          )}
        </div>

        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() =>
              onSelect((activeIndex - 1 + photos.length) % photos.length)
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white cursor-pointer"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onSelect((activeIndex + 1) % photos.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white cursor-pointer"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
