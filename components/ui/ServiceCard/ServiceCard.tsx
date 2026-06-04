import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  number: number;
}

export default function ServiceCard({ image, title, description, href, number }: ServiceCardProps) {
  const num = String(number).padStart(2, '0');
  return (
    <Link href={href} className={styles.row}>
      <div className={styles.bgWrapper}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      </div>
      <div className={styles.overlay} />
      <span className={styles.num} aria-hidden="true">{num}</span>
      <span className={styles.vline} aria-hidden="true" />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <span className={styles.arrow} aria-hidden="true">→</span>
    </Link>
  );
}
