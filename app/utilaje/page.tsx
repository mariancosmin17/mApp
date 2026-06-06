import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqSection from '@/components/ui/FaqSection/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import styles from './page.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://masercom.com';

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Închiriere Utilaje Târgu Neamț',
    description: 'Închiriere nacelă, buldoexcavator, miniexcavator și basculantă cu macară în Târgu Neamț și județul Neamț.',
    provider: { '@type': 'LocalBusiness', name: 'MASERCOM', '@id': `${siteUrl}/#business` },
    areaServed: { '@type': 'City', name: 'Târgu Neamț' },
    serviceType: 'Închiriere Utilaje Construcții',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Utilaje', item: `${siteUrl}/utilaje` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Închiriați utilaje cu sau fără operator în Târgu Neamț?', acceptedAnswer: { '@type': 'Answer', text: 'Oferim ambele variante — cu și fără operator calificat.' } },
      { '@type': 'Question', name: 'Care este perioada minimă de închiriere utilaje?', acceptedAnswer: { '@type': 'Answer', text: 'Perioada minimă este de o zi lucrătoare.' } },
      { '@type': 'Question', name: 'Transportați utilajul la locul lucrării?', acceptedAnswer: { '@type': 'Answer', text: 'Da, transportul utilajului este inclus în prețul chiriei în raza de ~30km.' } },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Închiriere Utilaje Târgu Neamț — Nacelă, Buldoexcavator, Miniexcavator',
  description:
    'Închiriere utilaje în Târgu Neamț: nacelă articulată, basculantă cu macară, buldoexcavator, miniexcavator. Cu sau fără operator. Județul Neamț. Sună: 0756523427.',
  alternates: { canonical: '/utilaje' },
  openGraph: {
    title: 'Închiriere Utilaje Târgu Neamț | MASERCOM',
    description: 'Nacelă, buldoexcavator, miniexcavator, basculantă cu macară în județul Neamț.',
  },
};

const utilaje = [
  {
    id: 'nacela',
    name: 'Nacelă Articulată',
    image: '/u1_new.jpeg',
    description:
      'Nacelă autopropulsată pentru lucrări la înălțime — reparații acoperișuri, vopsit fațade, tăieri arbori, montaj panouri, instalații electrice. Sigură, eficientă, cu rază mare de acțiune.',
    uses: ['Reparații și vopsit fațade', 'Lucrări la acoperișuri', 'Montaj panouri și reclame', 'Tăieri și corecturi arbori', 'Instalații electrice la înălțime'],
    specs: 'Înălțime de lucru: până la 20m | Raza de acțiune orizontală: 10-12m',
  },
  {
    id: 'basculanta-macara',
    name: 'Basculantă cu Macară',
    image: '/u2_new.jpg',
    description:
      'Combinație unică: basculantă pentru transport agregate și macară pentru descărcare în locuri greu accesibile. Ideal pentru șantiere cu spațiu limitat sau materiale grele.',
    uses: ['Transport și descărcare agregate', 'Șantiere cu acces dificil', 'Transport materiale grele', 'Descărcare precisă în spații înguste'],
    specs: 'Capacitate bena: 8-12 tone | Capacitate macară: până la 3 tone',
  },
  {
    id: 'buldoexcavator',
    name: 'Buldoexcavator',
    image: '/u3_new.jpg',
    description:
      'Buldoexcavator polivalent pentru săpături, demolări ușoare, nivelare teren și încărcare materiale. Eficient pe orice tip de teren.',
    uses: ['Săpături fundații', 'Nivelare și amenajare teren', 'Demolări ușoare', 'Încărcare și transport pământ', 'Lucrări de drenaj'],
    specs: 'Adâncime săpătură: până la 5m | Capacitate cupă: 0.3m³',
  },
  {
    id: 'miniexcavator',
    name: 'Miniexcavator',
    image: '/u4_new.webp',
    description:
      'Miniexcavator compact — perfect pentru spații înguste unde utilajele mari nu pot accesa. Ideal pentru grădini, curți, fundații mici și lucrări urban.',
    uses: ['Săpături în spații înguste', 'Fundații case mici', 'Lucrări în grădini și curți', 'Instalații rețele (apă, gaz, curent)', 'Demolări parțiale'],
    specs: 'Lățime: 1.5-2m | Adâncime săpătură: până la 3m | Capacitate cupă: 0.1m³',
  },
];

const faqs = [
  {
    question: 'Închiriați utilajele cu sau fără operator?',
    answer: 'Oferim ambele variante. Recomandam inchirierea cu operator pentru eficiență maximă și siguranță, mai ales pentru lucrări complexe.',
  },
  {
    question: 'Care este perioada minimă de închiriere?',
    answer: 'Perioada minimă este de o zi lucrătoare. Putem discuta și despre ore pentru lucrări mici.',
  },
  {
    question: 'Transportați utilajul la locul lucrării?',
    answer: 'Da, transportul utilajului până la locul lucrării este inclus în prețul chiriei (în raza de ~30km).',
  },
  {
    question: 'Nacela necesită autorizație specială?',
    answer: 'Operatorul nostru autorizat se ocupă de toate aspectele tehnice. Nu aveți nevoie de autorizație suplimentară dacă folosiți operatorul nostru.',
  },
  {
    question: 'Puteți lucra pe teren accidentat sau umed?',
    answer: 'Da, utilajele noastre sunt echipate pentru teren dificil. Ne contactați și vă evaluăm situația specific.',
  },
  {
    question: 'Cum se stabilește prețul chiriei?',
    answer: 'Prețul depinde de tipul utilajului, durata chiriei și distanța față de Târgu Neamț. Contactați-ne pentru o ofertă exactă.',
  },
];

export default function UtilajePage() {
  return (
    <>
      <JsonLd data={schemas} />

      <h1 className="sr-only">Închiriere Utilaje Târgu Neamț — Nacelă, Buldoexcavator, Miniexcavator | MASERCOM</h1>

      {/* Utilaje cards */}
      <section className={`section ${styles.utilajeSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Parcul nostru</span>
            <h2>Utilaje Disponibile pentru Închiriere</h2>
            <p>
              Toate utilajele sunt întreținute și operate de personal calificat.
              Transport inclus în raza de acoperire.
            </p>
          </div>

          <div className={styles.utilajeList}>
            {utilaje.map((u, i) => (
              <div
                key={u.id}
                className={`${styles.utilajCard} ${i % 2 === 1 ? styles.reversed : ''}`}
              >
                <div className={styles.utilajVisual}>
                  <Image
                    src={u.image}
                    alt={u.name}
                    fill
                    quality={90}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className={styles.utilajContent}>
                  <h3 className={styles.utilajName}>{u.name}</h3>
                  <p className={styles.utilajDesc}>{u.description}</p>
                  <div className={styles.utilajUses}>
                    <strong>Utilizări tipice:</strong>
                    <ul>
                      {u.uses.map((use) => (
                        <li key={use}>
                          <span className={styles.bullet} aria-hidden="true" /> {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.utilajSpecs}>
                    <span className={styles.specsLabel}>Specificații:</span> {u.specs}
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <Link href="/contact" className={styles.ctaLink}>Solicită ofertă →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.faqWrapper}>
        <FaqSection items={faqs} title="Întrebări despre Închirierea Utilajelor" />
      </div>
    </>
  );
}
