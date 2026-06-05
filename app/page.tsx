import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard';
import { Testimonials } from '@/components/ui/testimonials-columns-1';
import Reveal from '@/components/ui/Reveal/Reveal';
import ShimmerText from '@/components/ui/ShimmerText/ShimmerText';
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
      <section className="section" style={{ paddingTop: 'var(--spacing-xl)' }}>
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
                <ServiceCard {...s} number={i + 1} />
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
            <Link href="/galerie" className={styles.galerieLink}>
              <ShimmerText>
                Vezi lucrări reale realizate <span className={styles.arrow}>→</span>
              </ShimmerText>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
