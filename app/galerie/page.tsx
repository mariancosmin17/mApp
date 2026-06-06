import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/ui/Marquee/Marquee';
import JsonLd from '@/components/seo/JsonLd';
import styles from './page.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://masercom.com';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Galerie', item: `${siteUrl}/galerie` },
  ],
};

export const metadata: Metadata = {
  title: 'Galerie Foto — Lucrări Executate MASERCOM Târgu Neamț',
  description:
    'Galerie foto cu lucrările executate de MASERCOM: nacelă, buldoexcavator, miniexcavator, transport, excavații și terasamente în Târgu Neamț și județul Neamț.',
  alternates: { canonical: '/galerie' },
  openGraph: {
    title: 'Galerie Lucrări — MASERCOM Târgu Neamț',
    description: 'Galerie foto cu lucrările reale executate de MASERCOM în județul Neamț.',
    images: [{ url: '/g1.jpeg', width: 1200, height: 630, alt: 'MASERCOM — Lucrări executate' }],
  },
};

const galleryItems = [
  {
    src: '/g1.jpeg',
    alt: 'Lucrare la judecătoria Târgu Neamț cu Nacelă',
    desc: 'Lucrare la judecătoria Târgu Neamț cu Nacelă',
  },
  {
    src: '/g2.jpeg',
    alt: 'Demolare la un bloc cu Miniexcavator',
    desc: 'Demolare la un bloc cu Miniexcavator',
  },
  {
    src: '/g3.jpeg',
    alt: 'Nivelare teren cu Buldoexcavator',
    desc: 'Nivelare teren cu Buldoexcavator',
  },
  {
    src: '/g4.jpeg',
    alt: 'Transport pavele',
    desc: 'Transport pavele',
  },
  {
    src: '/g5.jpeg',
    alt: 'Săpare canal cu Buldoexcavator',
    desc: 'Săpare canal cu Buldoexcavator',
  },
  {
    src: '/g6.jpeg',
    alt: 'Încărcare pavele cu macaraua',
    desc: 'Încărcare pavele cu macaraua',
  },
  {
    src: '/g7.jpeg',
    alt: 'Lucrare cu Nacelă',
    desc: 'Lucrare cu Nacelă',
  },
  {
    src: '/g8.jpeg',
    alt: 'Nivelare și curățare cu Buldoexcavator',
    desc: 'Nivelare și curățare cu Buldoexcavator',
  },
  {
    src: '/g9.jpeg',
    alt: 'Transport la judecătoria Târgu Neamț cu basculantă',
    desc: 'Transport la judecătoria Târgu Neamț cu basculantă',
  },
];

function GalleryCard({ src, alt, desc }: { src: string; alt: string; desc: string }) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={90}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="420px"
      />
      <div className={styles.cardOverlay}>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  return (
    <>
      <JsonLd data={schema} />

      <h1 className="sr-only">Galerie Foto Lucrări Executate — MASERCOM Târgu Neamț</h1>

      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <span className={styles.label}>Lucrări reale</span>
          <h2 className={styles.title}>Galerie</h2>
          <p className={styles.subtitle}>Descoperă o parte din lucrările executate de noi</p>
        </div>
      </section>

      {/* Marquee gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.row}>
          <Marquee duration={38} gap="1.25rem">
            {galleryItems.map((item) => (
              <GalleryCard key={item.src} {...item} />
            ))}
          </Marquee>
        </div>

        <div className={styles.row} style={{ marginTop: '1.25rem' }}>
          <Marquee duration={50} gap="1.25rem" reverse>
            {galleryItems.map((item) => (
              <GalleryCard key={item.src + '-r'} {...item} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h3 className={styles.ctaTitle}>Vrei să lucrăm împreună?</h3>
              <p className={styles.ctaText}>Contactează-ne pentru o ofertă personalizată.</p>
            </div>
            <Link href="/contact" className="btn btn--primary">
              Solicită ofertă
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
