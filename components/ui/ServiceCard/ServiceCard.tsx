import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.link}>
        Află mai mult <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
