import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label = 'Salin' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#58595B] transition-colors hover:text-[#121212] cursor-pointer"
      aria-label={copied ? 'Tersalin' : `${label} sitasi`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#B01116]" aria-hidden="true" />
          <span className="text-[#B01116]">Tersalin</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
