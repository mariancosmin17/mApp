import Image from 'next/image';
import styles from './GalleryGrid.module.css';

export interface GalleryImage {
  src?: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className={styles.grid}>
      {images.map((img, i) => (
        <div key={i} className={styles.item}>
          {img.src ? (
            <Image
              className={styles.img}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className={styles.placeholder} aria-label={img.alt}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>{img.alt}</span>
            </div>
          )}
          {img.caption && (
            <div className={styles.overlay}>
              <span className={styles.caption}>{img.caption}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
