import Link from 'next/link';
import styles from './Footer.module.css';

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '40756523427';
const address = process.env.NEXT_PUBLIC_ADDRESS ?? 'Târgu Neamț, Neamț';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand & Contact */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              MASER<span className={styles.logoAccent}>COM</span>
            </Link>
            <p className={styles.tagline}>
              Transport agregate, închirieri utilaje și lucrări de excavații în
              Târgu Neamț și județul Neamț.
            </p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{address}</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>💬</span>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Servicii</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/transport-agregate">Transport Agregate</Link>
              </li>
              <li>
                <Link href="/utilaje">Închiriere Utilaje</Link>
              </li>
              <li>
                <Link href="/excavatii-terasamente">
                  Excavații & Terasamente
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className={styles.column}>
            <h4>Pagini</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Acasă</Link>
              </li>
              <li>
                <Link href="/galerie">Galerie Foto</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} MASERCOM. Toate drepturile rezervate.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/politica-confidentialitate">
              Politică Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
