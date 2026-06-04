import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ChatIcon } from '@/components/ui/icons';
import PhoneDisperse from '@/components/ui/phone-disperse';
import styles from './Footer.module.css';

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '40756523427';
const address = process.env.NEXT_PUBLIC_ADDRESS ?? 'Strada Independenței Nr. 29, Târgu Neamț, Neamț 615200';
const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}`;

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
                <span className={styles.contactIcon}><MapPinIcon size={17} /></span>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {address}
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><PhoneIcon size={17} /></span>
                <PhoneDisperse
                  phone={phone}
                  className="text-[0.9rem] font-normal tracking-normal text-white/75"
                />
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><ChatIcon size={17} /></span>
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
