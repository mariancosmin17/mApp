import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/ui/GalleryGrid/GalleryGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Galerie Foto — Utilaje și Lucrări MASERCOM Târgu Neamț',
  description:
    'Galerie foto cu utilajele și lucrările MASERCOM din Târgu Neamț: transport agregate, nacelă, buldoexcavator, excavații și terasamente în județul Neamț.',
  alternates: { canonical: '/galerie' },
};

// Placeholder — înlocuiți src cu calea reală când adăugați poze în public/images/
const galleryImages = [
  { alt: 'Basculantă cu macară MASERCOM', caption: 'Basculantă cu macară', placeholderIcon: '🏗️' },
  { alt: 'Nacelă articulată închiriere Neamț', caption: 'Nacelă articulată', placeholderIcon: '🦺' },
  { alt: 'Buldoexcavator lucrări Târgu Neamț', caption: 'Buldoexcavator', placeholderIcon: '🚜' },
  { alt: 'Miniexcavator săpături fundație', caption: 'Miniexcavator', placeholderIcon: '⚙️' },
  { alt: 'Transport nisip balast Neamț', caption: 'Transport agregate', placeholderIcon: '🚛' },
  { alt: 'Lucrări excavații terasamente', caption: 'Lucrări excavații', placeholderIcon: '⛏️' },
  { alt: 'Nivelare teren județul Neamț', caption: 'Nivelare teren', placeholderIcon: '📐' },
  { alt: 'Săpături fundație casă Târgu Neamț', caption: 'Săpături fundație', placeholderIcon: '🏚️' },
  { alt: 'Piatră spartă balast livrare', caption: 'Livrare agregate', placeholderIcon: '🪨' },
];

export default function GaleriePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Acasă</Link>
            <span>/</span>
            <span>Galerie</span>
          </div>
          <h1>Galerie Foto</h1>
          <p className={styles.heroSubtitle}>
            Imagini cu utilajele noastre și lucrările executate în Târgu Neamț
            și județul Neamț.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.notice}>
            <span>📸</span>
            <p>
              Galeria este în curs de completare. Adaugă pozele reale în{' '}
              <code>public/images/</code> și actualizează array-ul din{' '}
              <code>app/galerie/page.tsx</code>.
            </p>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Vrei să lucrăm împreună?</h2>
              <p>Contactează-ne pentru o ofertă personalizată.</p>
            </div>
            <div className={styles.ctaActions}>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE ?? '0756523427'}`}
                className="btn btn--accent"
              >
                📞 Sună acum
              </a>
              <Link href="/contact" className="btn btn--outline">
                Trimite mesaj
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
