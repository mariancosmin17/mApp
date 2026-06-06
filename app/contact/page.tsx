import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import WhatsAppButton from '@/components/layout/WhatsAppButton/WhatsAppButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact — MASERCOM Târgu Neamț',
  description:
    'Contactează MASERCOM Târgu Neamț pentru transport agregate, închiriere utilaje sau lucrări de excavații. Tel: 0756523427. Răspundem rapid!',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact MASERCOM Târgu Neamț',
    description: 'Contactați-ne pentru transport agregate, închiriere utilaje sau lucrări de excavații în județul Neamț.',
    images: [{ url: '/background.png', width: 1200, height: 630, alt: 'MASERCOM Târgu Neamț' }],
  },
};

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '40756523427';
const address = process.env.NEXT_PUBLIC_ADDRESS ?? 'Strada Independenței Nr. 29, Târgu Neamț, Neamț 615200';
const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}`;

const phoneDisplay = phone.replace(/\D/g, '').length === 10
  ? `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`
  : phone;

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <h1 className="sr-only">Contact MASERCOM — Transport Agregate și Închiriere Utilaje Târgu Neamț</h1>
          <div className="section-header">
            <span className="label">Contactați-ne</span>
            <h2>Hai să Lucrăm Împreună</h2>
            <p>
              Trimite-ne un mesaj sau sună direct. Răspundem rapid, de luni
              până sâmbătă, 7:00–18:00.
            </p>
          </div>

          <div className={styles.grid}>
            {/* 1. Cards */}
            <div className={styles.contactCards}>
              <a href={`tel:${phone}`} className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <PhoneIcon />
                </div>
                <div className={styles.contactBody}>
                  <span className={styles.contactLabel}>Telefon</span>
                  <span className={styles.contactValue}>{phoneDisplay}</span>
                  <span className={styles.contactHint}>Apelați direct</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsapp}?text=Bună ziua, sunt interesat de serviciile MASERCOM.`}
                className={styles.contactCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <ChatIcon />
                </div>
                <div className={styles.contactBody}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>{phoneDisplay}</span>
                  <span className={styles.contactHint}>Trimiteți un mesaj</span>
                </div>
              </a>

              <a
                href={mapsUrl}
                className={styles.contactCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contactIcon}>
                  <PinIcon />
                </div>
                <div className={styles.contactBody}>
                  <span className={styles.contactLabel}>Adresă</span>
                  <span className={styles.contactValue}>{address}</span>
                  <span className={styles.contactHint}>Deschide în Maps</span>
                </div>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <ClockIcon />
                </div>
                <div className={styles.contactBody}>
                  <span className={styles.contactLabel}>Program</span>
                  <span className={styles.contactValue}>Lun–Sâm: 7:00–18:00</span>
                  <span className={styles.contactHint}>Duminică: închis</span>
                </div>
              </div>
            </div>

            {/* 2. Form */}
            <div className={styles.formCol}>
              <ContactForm title="Solicită o ofertă gratuită" dark />
            </div>

            {/* 3. Map */}
            <div className={styles.mapWrapper}>
              <iframe
                title="Locație MASERCOM pe Google Maps"
                src="https://maps.google.com/maps?q=Strada+Independentei+29,+Targu+Neamt,+Romania&hl=ro&z=15&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
