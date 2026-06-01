import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection/HeroSection';
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard';
import { Testimonials } from '@/components/ui/testimonials-columns-1';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'MASERCOM — Transport Agregate & Închirieri Utilaje Târgu Neamț',
  description:
    'MASERCOM Târgu Neamț — transport agregate (nisip, balast, piatră spartă), închiriere nacelă, buldoexcavator, miniexcavator, basculantă cu macară. Lucrări excavații județul Neamț.',
  alternates: {
    canonical: '/',
  },
};

const services = [
  {
    icon: 'truck',
    title: 'Transport Agregate',
    description:
      'Livrare nisip, balast, piatră spartă, pietriș și pământ. Cantități mici sau mari, direct la șantierul tău.',
    href: '/transport-agregate',
  },
  {
    icon: 'crane',
    title: 'Basculantă cu Macară',
    description:
      'Închiriere basculantă echipată cu macară — transport și descărcare în locuri greu accesibile.',
    href: '/utilaje',
  },
  {
    icon: 'lift',
    title: 'Închiriere Nacelă',
    description:
      'Nacelă articulată pentru lucrări la înălțime — reparații, montaj, vopsit, tăieri. Cu sau fără operator.',
    href: '/utilaje',
  },
  {
    icon: 'excavator',
    title: 'Buldoexcavator',
    description:
      'Închiriere buldoexcavator pentru săpături, nivelare teren și lucrări de terasamente.',
    href: '/utilaje',
  },
  {
    icon: 'mini',
    title: 'Miniexcavator',
    description:
      'Miniexcavator compact — ideal pentru spații înguste, grădini, săpături fundații mici.',
    href: '/utilaje',
  },
  {
    icon: 'terrain',
    title: 'Excavații & Terasamente',
    description:
      'Săpături fundații, nivelări teren, demolări, terasamente. Echipă cu experiență în județul Neamț.',
    href: '/excavatii-terasamente',
  },
];

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Servicii */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Ce oferim</span>
            <h2>Serviciile Noastre</h2>
            <p>
              De la transport agregate până la închirieri utilaje și lucrări de
              excavații — totul într-un singur loc, în Târgu Neamț.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Despre noi */}
      <section className="section section--gray">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
                <span className="label">Despre noi</span>
                <h2>MASERCOM — Partenerul tău de încredere în construcții</h2>
              </div>
              <p style={{ marginTop: '1.5rem' }}>
                Cu peste 10 ani de experiență în județul Neamț, MASERCOM oferă
                servicii profesionale de transport agregate și închirieri utilaje.
                Acoperim Târgu Neamț și o rază de aproximativ 30 km — inclusiv
                localitățile din jur.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Parcul nostru de utilaje este întreținut permanent, iar echipa
                noastră este pregătită să răspundă rapid la solicitările tale.
                Indiferent că ai nevoie de câteva tone de nisip sau de un
                buldoexcavator pentru o săptămână — suntem alături de tine.
              </p>
              <div className={styles.aboutActions}>
                <a href={`tel:${phone}`} className="btn btn--primary">
                  Sună acum
                </a>
                <Link href="/contact" className="btn btn--accent">
                  Solicită ofertă
                </Link>
              </div>
            </div>

            <div className={styles.aboutStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Ani de experiență</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>30km</span>
                <span className={styles.statLabel}>Rază de acoperire</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>Categorii de servicii</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>24h</span>
                <span className={styles.statLabel}>Timp de răspuns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>
                Ai nevoie de agregate sau utilaje?
              </h2>
              <p className={styles.ctaSubtitle}>
                Contactează-ne acum — răspundem rapid și oferim prețuri corecte.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href={`tel:${phone}`} className="btn btn--accent">
                {phone}
              </a>
              <Link href="/contact" className="btn btn--outline">
                Trimite un mesaj
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
