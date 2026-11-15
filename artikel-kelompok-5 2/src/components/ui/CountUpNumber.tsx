import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CountUpNumberProps {
  value: number | string;
  durationMs?: number;
}

export function CountUpNumber({ value, durationMs = 700 }: CountUpNumberProps) {
  const reduced = useReducedMotion();
  const isNumeric = typeof value === 'number';
  const [display, setDisplay] = useState<number>(isNumeric ? value : 0);

  useEffect(() => {
    if (!isNumeric) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    setDisplay(0);
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value, durationMs, reduced, isNumeric]);

  if (!isNumeric) {
    return <span>{value}</span>;
  }

  return <span>{display}</span>;
}
