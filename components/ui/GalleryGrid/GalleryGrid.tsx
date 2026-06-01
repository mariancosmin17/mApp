import Image from 'next/image';
import styles from './GalleryGrid.module.css';

export interface GalleryImage {
  src?: string;
  alt: string;
  caption?: string;
  placeholderIcon?: string;
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
              <span>{img.placeholderIcon ?? '🏗️'}</span>
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
