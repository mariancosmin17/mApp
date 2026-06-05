import type { Metadata } from 'next';
import GalleryGrid from '@/components/ui/GalleryGrid/GalleryGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Galerie Foto — Utilaje și Lucrări MASERCOM Târgu Neamț',
  description:
    'Galerie foto cu utilajele și lucrările MASERCOM din Târgu Neamț: transport agregate, nacelă, buldoexcavator, excavații și terasamente în județul Neamț.',
  alternates: { canonical: '/galerie' },
  openGraph: {
    title: 'Galerie Foto Utilaje și Lucrări — MASERCOM Târgu Neamț',
    description: 'Galerie foto cu utilajele și lucrările MASERCOM: nacelă, buldoexcavator, transport agregate, excavații în județul Neamț.',
    images: [{ url: '/background.png', width: 1200, height: 630, alt: 'MASERCOM Târgu Neamț — Galerie Utilaje' }],
  },
};

// Placeholder — înlocuiți src cu calea reală când adăugați poze în public/images/
const galleryImages = [
  { alt: 'Basculantă cu macară MASERCOM', caption: 'Basculantă cu macară' },
  { alt: 'Nacelă articulată închiriere Neamț', caption: 'Nacelă articulată' },
  { alt: 'Buldoexcavator lucrări Târgu Neamț', caption: 'Buldoexcavator' },
  { alt: 'Miniexcavator săpături fundație', caption: 'Miniexcavator' },
  { alt: 'Transport nisip balast Neamț', caption: 'Transport agregate' },
  { alt: 'Lucrări excavații terasamente', caption: 'Lucrări excavații' },
  { alt: 'Nivelare teren județul Neamț', caption: 'Nivelare teren' },
  { alt: 'Săpături fundație casă Târgu Neamț', caption: 'Săpături fundație' },
  { alt: 'Piatră spartă balast livrare', caption: 'Livrare agregate' },
];

export default function GaleriePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sr-only">Galerie Foto Utilaje și Lucrări — MASERCOM Târgu Neamț</h1>
        <div className={styles.notice}>
          <span className={styles.noticeIcon} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </span>
          <p>
            Galeria este în curs de completare. Adaugă pozele reale în{' '}
            <code>public/images/</code> și actualizează array-ul din{' '}
            <code>app/galerie/page.tsx</code>.
          </p>
        </div>
        <GalleryGrid images={galleryImages} />
      </div>
    </section>
  );
}
