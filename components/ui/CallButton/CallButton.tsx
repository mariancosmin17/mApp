import { PhoneIcon } from '@/components/ui/icons';
import styles from './CallButton.module.css';

interface CallButtonProps {
  phone: string;
  /** Visible label; defaults to the phone number. */
  label?: string;
  /** "solid" (filled blue) | "ghost" (outlined, for dark heroes). */
  variant?: 'solid' | 'ghost';
}

/** Elegant, icon-led call-to-action linking to a phone number. */
export default function CallButton({ phone, label, variant = 'solid' }: CallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      className={`${styles.btn} ${variant === 'ghost' ? styles.ghost : styles.solid}`}
      aria-label={`Sună la ${phone}`}
    >
      <span className={styles.iconWrap}>
        <PhoneIcon size={15} />
      </span>
      <span className={styles.text}>{label ?? phone}</span>
    </a>
  );
}
