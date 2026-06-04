'use client';
import { cn } from '@/lib/utils';
import { TextDisperse } from '@/components/ui/text-disperse';

interface PhoneDisperseProps {
  /** Raw digits used for the tel: link, e.g. "0756523427". */
  phone: string;
  /**
   * Visible text (max 13 chars for the disperse effect). Defaults to a
   * spaced format of `phone` (4-3-3 for a 10-digit RO mobile).
   */
  display?: string;
  /** Extra classes applied to the disperse text (size, color, tracking). */
  className?: string;
}

function formatPhone(phone: string): string {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  return phone;
}

/** Phone number rendered with the hover letter-disperse effect, as a tel: link. */
export default function PhoneDisperse({ phone, display, className }: PhoneDisperseProps) {
  const text = display ?? formatPhone(phone);
  return (
    <a
      href={`tel:${phone}`}
      aria-label={`Sună la ${phone}`}
      className="inline-flex w-max select-none"
    >
      <TextDisperse
        className={cn(
          'w-max justify-start text-[0.95rem] font-semibold tracking-tight',
          className,
        )}
      >
        {text}
      </TextDisperse>
    </a>
  );
}
