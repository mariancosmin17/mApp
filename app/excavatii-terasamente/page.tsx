import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
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
    icon: '⛏️',
    title: 'Săpături Fundații',
    desc: 'Săpături precise pentru fundații case, blocuri, hale industriale și alte construcții. Respectăm cotele proiectate și lucrăm rapid.',
  },
  {
    icon: '📐',
    title: 'Nivelări Teren',
    desc: 'Nivelarea și pregătirea terenului pentru construcții, parcări, terenuri sportive, grădini. Rezultat uniform, pregătit pentru etapa următoare.',
  },
  {
    icon: '🔨',
    title: 'Demolări',
    desc: 'Demolări parțiale sau totale ale construcțiilor vechi, ziduri, anexe. Evacuarea și transportul molozului incluse la cerere.',
  },
  {
    icon: '🏔️',
    title: 'Terasamente',
    desc: 'Lucrări complexe de modificare a reliefului: rambleuri, debleiuri, terase pentru construcții pe teren în pantă.',
  },
  {
    icon: '🌊',
    title: 'Drenaje & Canalizări',
    desc: 'Săpături pentru rețele de drenaj, canalizare și conducte subterane. Lucrăm atent pentru a evita deteriorarea rețelelor existente.',
  },
  {
    icon: '🚧',
    title: 'Lucrări de Drum',
    desc: 'Amenajare alei de acces, parcări, drumuri de exploatare. De la pregătirea patului de fundație până la compactare.',
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

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';

export default function ExcavatiiterasamentePage() {
  return (
    <>
      <JsonLd data={schemas} />
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Acasă</Link>
            <span>/</span>
            <span>Excavații & Terasamente</span>
          </div>
          <h1>Excavații &amp; Terasamente în Târgu Neamț</h1>
          <p className={styles.heroSubtitle}>
            Săpături fundații, nivelări teren, demolări și terasamente —
            executate profesional cu utilaje proprii în județul Neamț.
          </p>
          <a href={`tel:${phone}`} className="btn btn--primary">
            📞 Sună acum: {phone}
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Lucrări executate</span>
            <h2>Servicii de Excavații &amp; Terasamente</h2>
            <p>
              Echipă cu experiență, utilaje proprii, lucrări la cheie. Operăm în
              Târgu Neamț și împrejurimi.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + Form */}
      <section className="section section--gray">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <h2>Cum funcționează?</h2>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>1</div>
                  <div>
                    <strong>Ne contactezi</strong>
                    <p>Telefon sau formular — descrie lucrarea și adresa</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>2</div>
                  <div>
                    <strong>Evaluare la fața locului</strong>
                    <p>Venim să vedem terenul și îți dăm un deviz estimativ gratuit</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>3</div>
                  <div>
                    <strong>Programăm lucrarea</strong>
                    <p>Stabilim data de start și durata estimată</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>4</div>
                  <div>
                    <strong>Executăm profesional</strong>
                    <p>Lucrare curată, la timp, fără surprize neplăcute</p>
                  </div>
                </div>
              </div>
              <div className={styles.ctaPhone}>
                <a href={`tel:${phone}`} className="btn btn--primary">
                  📞 {phone}
                </a>
              </div>
            </div>
            <ContactForm
              defaultService="Excavații & terasamente"
              title="Solicită deviz gratuit"
            />
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Întrebări despre Excavații & Terasamente" />
    </>
  );
}
