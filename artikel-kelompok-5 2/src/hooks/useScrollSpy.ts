import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offsetPx = 140): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offsetPx;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offsetPx]);

  return activeId;
}
