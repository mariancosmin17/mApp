import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqSection from '@/components/ui/FaqSection/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import styles from './page.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://masercom.ro';

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Excavații și Terasamente Târgu Neamț',
    description: 'Săpături fundații, nivelări teren, demolări și terasamente în Târgu Neamț și județul Neamț.',
    provider: { '@type': 'LocalBusiness', name: 'MASERCOM', '@id': `${siteUrl}/#business` },
    areaServed: { '@type': 'City', name: 'Târgu Neamț' },
    serviceType: 'Excavații și Terasamente',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Excavații & Terasamente', item: `${siteUrl}/excavatii-terasamente` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Faceți deviz înainte de lucrările de excavații?', acceptedAnswer: { '@type': 'Answer', text: 'Da, oferim evaluare la fața locului și deviz estimativ gratuit.' } },
      { '@type': 'Question', name: 'Cât durează săpătura pentru o fundație de casă?', acceptedAnswer: { '@type': 'Answer', text: 'O casă medie (100-150m²) se sapă în 1-2 zile lucrătoare.' } },
      { '@type': 'Question', name: 'Executați lucrări de excavații și în afara Târgu Neamțului?', acceptedAnswer: { '@type': 'Answer', text: 'Da, acoperim județul Neamț în raza de ~30 km.' } },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Excavații & Terasamente Târgu Neamț — Săpături, Nivelări, Demolări',
  description:
    'Lucrări de excavații și terasamente în Târgu Neamț și județul Neamț: săpături fundații, nivelări teren, demolări, terasamente. Experiență, utilaje proprii. Sună: 0756523427.',
  alternates: { canonical: '/excavatii-terasamente' },
  openGraph: {
    title: 'Excavații & Terasamente Târgu Neamț | MASERCOM',
    description: 'Săpături fundații, nivelări teren, demolări și terasamente în județul Neamț.',
  },
};

const services = [
  {
    title: 'Săpături Fundații',
    desc: 'Săpături precise pentru fundații case, blocuri, hale industriale și alte construcții. Respectăm cotele proiectate și lucrăm rapid.',
    image: '/e1.jpg',
  },
  {
    title: 'Nivelări Teren',
    desc: 'Nivelarea și pregătirea terenului pentru construcții, parcări, terenuri sportive, grădini. Rezultat uniform, pregătit pentru etapa următoare.',
    image: '/e2.webp',
  },
  {
    title: 'Demolări',
    desc: 'Demolări parțiale sau totale ale construcțiilor vechi, ziduri, anexe. Evacuarea și transportul molozului incluse la cerere.',
    image: '/e3.jpg',
  },
  {
    title: 'Terasamente',
    desc: 'Lucrări complexe de modificare a reliefului: rambleuri, debleiuri, terase pentru construcții pe teren în pantă.',
    image: '/e4.jpg',
  },
  {
    title: 'Drenaje & Canalizări',
    desc: 'Săpături pentru rețele de drenaj, canalizare și conducte subterane. Lucrăm atent pentru a evita deteriorarea rețelelor existente.',
    image: '/e5.webp',
  },
  {
    title: 'Lucrări de Drum',
    desc: 'Amenajare alei de acces, parcări, drumuri de exploatare. De la pregătirea patului de fundație până la compactare.',
    image: '/e6.webp',
  },
];

const faqs = [
  {
    question: 'Faceți deviz înainte de lucrare?',
    answer: 'Da, pentru lucrări mai mari oferim o evaluare la fața locului și un deviz estimativ gratuit. Contactați-ne pentru a programa o vizită.',
  },
  {
    question: 'Cât durează o săpătură pentru o fundație de casă?',
    answer: 'Depinde de dimensiunile fundației și tipul terenului. O casă medie (100-150m²) se sapă în 1-2 zile lucrătoare.',
  },
  {
    question: 'Lucrați și pe teren pietros sau argilos?',
    answer: 'Da, utilajele noastre sunt pregătite pentru diverse tipuri de teren. Terenul pietros poate necesita timp suplimentar.',
  },
  {
    question: 'Includeți și evacuarea pământului excavat?',
    answer: 'Transportul pământului și materialelor rezultate din săpătură poate fi inclus la cerere, contra cost suplimentar.',
  },
  {
    question: 'Aveți experiență cu construcții în pantă?',
    answer: 'Da, avem experiență în lucrări de terasamente pe teren în pantă, inclusiv stabilizare și amenajare terase.',
  },
  {
    question: 'Lucrați și în localitățile din afara Târgu Neamțului?',
    answer: 'Da, acoperim județul Neamț în raza de ~30 km. Contactați-ne cu adresa exactă pentru a confirma disponibilitatea.',
  },
];

export default function ExcavatiiterasamentePage() {
  return (
    <>
      <JsonLd data={schemas} />

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Lucrări executate</span>
            <h2>Servicii de Excavații &amp; Terasamente</h2>
            <p>
              Echipă cu experiență, utilaje proprii, lucrări la cheie. Operăm în
              Târgu Neamț și împrejurimi.
            </p>
            <p className={styles.ctaInline}>
              Ai nevoie de o ofertă personalizată?{' '}
              <Link href="/contact" className={styles.ctaInlineLink}>
                Solicită ofertă →
              </Link>
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.cardBgWrapper}>
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw"
                  />
                </div>
                <div className={styles.cardOverlay} />
                <span className={styles.serviceNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.faqWrapper}>
        <FaqSection items={faqs} title="Întrebări despre Excavații & Terasamente" />
      </div>
    </>
  );
}
