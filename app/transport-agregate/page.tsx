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
    name: 'Transport Agregate Târgu Neamț',
    description: 'Transport nisip, balast, piatră spartă, pietriș și pământ în Târgu Neamț și județul Neamț.',
    provider: { '@type': 'LocalBusiness', name: 'MASERCOM', '@id': `${siteUrl}/#business` },
    areaServed: { '@type': 'City', name: 'Târgu Neamț' },
    serviceType: 'Transport Agregate',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Transport Agregate', item: `${siteUrl}/transport-agregate` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Care este cantitatea minimă pentru o comandă de agregate?', acceptedAnswer: { '@type': 'Answer', text: 'Cantitatea minimă este de 1 tonă.' } },
      { '@type': 'Question', name: 'Livrați agregate și în afara Târgu Neamțului?', acceptedAnswer: { '@type': 'Answer', text: 'Da, acoperim o rază de aproximativ 30 km în jurul Târgu Neamțului.' } },
      { '@type': 'Question', name: 'Care este timpul de livrare agregate?', acceptedAnswer: { '@type': 'Answer', text: 'De obicei livrăm în aceeași zi sau a doua zi lucrătoare.' } },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Transport Agregate Târgu Neamț — Nisip, Balast, Piatră Spartă',
  description:
    'Transport agregate în Târgu Neamț și județul Neamț: nisip, balast, piatră spartă, pietriș, pământ. Livrare rapidă la șantier cu basculanta. Sună: 0756523427.',
  alternates: { canonical: '/transport-agregate' },
  openGraph: {
    title: 'Transport Agregate Târgu Neamț | MASERCOM',
    description: 'Nisip, balast, piatră spartă, pietriș și pământ. Livrare rapidă în județul Neamț.',
  },
};

const products = [
  {
    name: 'Nisip',
    desc: 'Nisip de construcție pentru zidărie, tencuieli, betonare și amenajări. Calitate constantă, livrat direct la șantier.',
    image: '/a1.webp',
  },
  {
    name: 'Balast',
    desc: 'Balast sortat pentru fundații, umplutură și lucrări de drumuri. Disponibil în cantități mari.',
    image: '/a2.jpg',
  },
  {
    name: 'Piatră Spartă',
    desc: 'Piatră spartă (criblură) pentru betoane, drumuri, trotuare și fundații. Diverse granulații disponibile.',
    image: '/a3.jpg',
  },
  {
    name: 'Pietriș',
    desc: 'Pietriș sortat pentru drenaje, alei, parcări și lucrări de amenajare exterioară.',
    image: '/a4.jpg',
  },
  {
    name: 'Pământ',
    desc: 'Pământ pentru umplutură, nivelare teren sau amenajare grădini. Disponibil în cantități variabile.',
    image: '/a5.webp',
  },
];

const faqs = [
  {
    question: 'Care este cantitatea minimă pentru o comandă?',
    answer: 'Cantitatea minimă este de 1 tonă. Putem livra atât cantități mici pentru persoane fizice, cât și cantități mari pentru șantiere.',
  },
  {
    question: 'Livrați și în afara Târgu Neamțului?',
    answer: 'Da, acoperim o rază de aproximativ 30 km în jurul Târgu Neamțului. Contactați-ne pentru detalii despre localitățile specifice.',
  },
  {
    question: 'Care este timpul de livrare?',
    answer: 'De obicei livrăm în aceeași zi sau a doua zi lucrătoare, în funcție de disponibilitate și cantitate.',
  },
  {
    question: 'Cum se face plata?',
    answer: 'Acceptăm atât plata în numerar la livrare, cât și virament bancar. Emitem factură pentru toate comenzile.',
  },
  {
    question: 'Puteți livra pe șantiere cu acces dificil?',
    answer: 'Basculanta noastră poate accesa majoritatea șantierelor. Ne puteți descrie situația și găsim împreună o soluție.',
  },
  {
    question: 'Oferiți reduceri pentru comenzi mari?',
    answer: 'Da, pentru cantități mari sau comenzi recurente oferim prețuri preferențiale. Contactați-ne pentru o ofertă personalizată.',
  },
];

export default function TransportAgregatePage() {
  return (
    <>
      <JsonLd data={schemas} />

      {/* Products */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="label">Ce livrăm</span>
            <h2>Tipuri de Agregate Disponibile</h2>
            <p>
              Toate agregatele sunt de calitate, livrate cu basculanta direct la
              adresa indicată.
            </p>
            <p className={styles.ctaInline}>
              Ai nevoie de o ofertă personalizată?{' '}
              <Link href="/contact" className={styles.ctaInlineLink}>
                Solicită ofertă →
              </Link>
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <div key={p.name} className={styles.productCard}>
                <div className={styles.cardBgWrapper}>
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw"
                  />
                </div>
                <div className={styles.cardOverlay} />
                <span className={styles.productNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className={styles.faqWrapper}>
        <FaqSection items={faqs} title="Întrebări despre Transport Agregate" />
      </div>
    </>
  );
}
