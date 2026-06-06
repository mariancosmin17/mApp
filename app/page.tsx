import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/ui/HeroSection/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard';
import { Testimonials } from '@/components/ui/testimonials-columns-1';
import Reveal from '@/components/ui/Reveal/Reveal';
import ShimmerText from '@/components/ui/ShimmerText/ShimmerText';
import GalleryMarquee from '@/components/ui/GalleryMarquee/GalleryMarquee';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'MASERCOM — Transport Agregate & Închirieri Utilaje Târgu Neamț',
  description:
    'MASERCOM Târgu Neamț — transport agregate (nisip, balast, piatră spartă), închiriere nacelă, buldoexcavator, miniexcavator, basculantă cu macară. Lucrări excavații județul Neamț.',
  alternates: { canonical: '/' },
};

const services = [
  {
    image: '/s1.jpg',
    title: 'Transport Agregate',
    description: 'Livrare nisip, balast, piatră spartă, pietriș și pământ. Cantități mici sau mari, direct la șantierul tău.',
    href: '/transport-agregate',
  },
  {
    image: '/s2.webp',
    title: 'Basculantă cu Macară',
    description: 'Închiriere basculantă echipată cu macară — transport și descărcare în locuri greu accesibile.',
    href: '/utilaje',
  },
  {
    image: '/s3.jpg',
    title: 'Închiriere Nacelă',
    description: 'Nacelă articulată pentru lucrări la înălțime — reparații, montaj, vopsit, tăieri. Cu sau fără operator.',
    href: '/utilaje',
  },
  {
    image: '/s4.jpg',
    title: 'Buldoexcavator',
    description: 'Închiriere buldoexcavator pentru săpături, nivelare teren și lucrări de terasamente.',
    href: '/utilaje',
  },
  {
    image: '/s5.webp',
    title: 'Miniexcavator',
    description: 'Miniexcavator compact — ideal pentru spații înguste, grădini, săpături fundații mici.',
    href: '/utilaje',
  },
  {
    image: '/s6.jpg',
    title: 'Excavații & Terasamente',
    description: 'Săpături fundații, nivelări teren, demolări, terasamente. Echipă cu experiență în județul Neamț.',
    href: '/excavatii-terasamente',
  },
];

const galleryItems = [
  { src: '/g1.jpeg', alt: 'Lucrare la judecătoria Târgu Neamț cu Nacelă', desc: 'Lucrare la judecătoria Târgu Neamț cu Nacelă' },
  { src: '/g2.jpeg', alt: 'Demolare la un bloc cu Miniexcavator', desc: 'Demolare la un bloc cu Miniexcavator' },
  { src: '/g3.jpeg', alt: 'Nivelare teren cu Buldoexcavator', desc: 'Nivelare teren cu Buldoexcavator' },
  { src: '/g4.jpeg', alt: 'Transport pavele', desc: 'Transport pavele' },
  { src: '/g5.jpeg', alt: 'Săpare canal cu Buldoexcavator', desc: 'Săpare canal cu Buldoexcavator' },
  { src: '/g6.jpeg', alt: 'Încărcare pavele cu macaraua', desc: 'Încărcare pavele cu macaraua' },
  { src: '/g7.jpeg', alt: 'Lucrare cu Nacelă', desc: 'Lucrare cu Nacelă' },
  { src: '/g8.jpeg', alt: 'Nivelare și curățare cu Buldoexcavator', desc: 'Nivelare și curățare cu Buldoexcavator' },
  { src: '/g9.jpeg', alt: 'Transport la judecătoria Târgu Neamț cu basculantă', desc: 'Transport la judecătoria Târgu Neamț cu basculantă' },
];

const stats = [
  { number: '10+', label: 'Ani de experiență' },
  { number: '30km', label: 'Rază de acoperire' },
  { number: '6', label: 'Tipuri de servicii' },
  { number: '24h', label: 'Timp de răspuns' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Servicii — editorial list */}
      <section className={`section ${styles.servicesSection}`} style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="label">Ce oferim</span>
              <h2>Serviciile Noastre</h2>
              <p>
                De la transport agregate până la închirieri utilaje și lucrări de
                excavații — totul într-un singur loc, în Târgu Neamț.
              </p>
            </div>
          </Reveal>
          <div className={styles.servicesList}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard {...s} number={i + 1} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar — dark typographic */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08} className={styles.statItem}>
                <span className={styles.statNum}>{s.number}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </Reveal>
            ))}
          </div>
          <div className={styles.statsFooter}>
            <Link href="/contact" className={styles.galerieLink}>
              <ShimmerText>
                Solicită ofertă <span className={styles.arrow}>→</span>
              </ShimmerText>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <div className={styles.galleryInner}>
            <GalleryMarquee>
              {galleryItems.map((item) => (
                <div key={item.src} className={styles.galleryCard}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={85}
                    className={styles.galleryCardImg}
                    sizes="360px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className={styles.galleryCardOverlay}>
                    <p className={styles.galleryCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </GalleryMarquee>
          </div>
        </div>
      </section>

      <Testimonials dark />
    </>
  );
}
