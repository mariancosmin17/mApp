import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact — MASERCOM Târgu Neamț',
  description:
    'Contactează MASERCOM Târgu Neamț pentru transport agregate, închiriere utilaje sau lucrări de excavații. Tel: 0756523427. Răspundem rapid!',
  alternates: { canonical: '/contact' },
};

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '40756523427';
const address = process.env.NEXT_PUBLIC_ADDRESS ?? 'Târgu Neamț, Neamț';

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Acasă</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Contactează-ne</h1>
          <p className={styles.heroSubtitle}>
            Suntem disponibili pentru orice întrebare sau solicitare de ofertă.
            Răspundem rapid!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Left: info + map */}
            <div className={styles.infoCol}>
              <h2 className={styles.infoTitle}>Date de Contact</h2>

              <div className={styles.contactCards}>
                <a href={`tel:${phone}`} className={styles.contactCard}>
                  <div className={styles.contactIcon}>📞</div>
                  <div>
                    <span className={styles.contactLabel}>Telefon</span>
                    <span className={styles.contactValue}>{phone}</span>
                    <span className={styles.contactHint}>Apelați direct</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsapp}?text=Bună ziua, sunt interesat de serviciile MASERCOM.`}
                  className={styles.contactCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`${styles.contactIcon} ${styles.whatsappIcon}`}>💬</div>
                  <div>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <span className={styles.contactValue}>{phone}</span>
                    <span className={styles.contactHint}>Trimiteți un mesaj</span>
                  </div>
                </a>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <span className={styles.contactLabel}>Adresă</span>
                    <span className={styles.contactValue}>{address}</span>
                    <span className={styles.contactHint}>Județul Neamț, România</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>⏰</div>
                  <div>
                    <span className={styles.contactLabel}>Program</span>
                    <span className={styles.contactValue}>Lun–Sâm: 7:00–18:00</span>
                    <span className={styles.contactHint}>Duminică: închis</span>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className={styles.mapWrapper}>
                <iframe
                  title="Locație MASERCOM pe Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43538.!2d26.3672!3d47.2003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734cf9d4a20c249%3A0x30fc8a8d8a3e8f1!2sT%C3%A2rgu%20Neam%C8%9B!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className={styles.zoneInfo}>
                <h3>Zona de Acoperire</h3>
                <p>
                  Acoperim <strong>Târgu Neamț</strong> și o rază de aproximativ{' '}
                  <strong>30 km</strong> — inclusiv Piatra Neamț, Roman, Bicaz,
                  Roznov, Săvinești, Negrești, Bălțătești și localitățile din jur.
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  Pentru distanțe mai mari, contactați-ne — analizăm fiecare
                  solicitare individual.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.formCol}>
              <ContactForm title="Trimite un mesaj" />

              <div className={styles.quickContact}>
                <p>Preferi să vorbești direct?</p>
                <a href={`tel:${phone}`} className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 Sună la {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
