import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate — MASERCOM',
  description: 'Politica de confidențialitate MASERCOM — cum colectăm și procesăm datele personale.',
  alternates: { canonical: '/politica-confidentialitate' },
  robots: { index: false, follow: false },
};

export default function PoliticaConfidentialitatiPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Acasă</Link>
            <span>/</span>
            <span>Politică Confidențialitate</span>
          </div>
          <h1>Politică de Confidențialitate</h1>
          <p className={styles.updated}>Ultima actualizare: Ianuarie 2025</p>
        </div>
      </section>

      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Introducere</h2>
            <p>
              MASERCOM ("noi", "compania") respectă confidențialitatea datelor
              personale ale utilizatorilor site-ului masercom.com. Această politică
              explică ce date colectăm, cum le folosim și drepturile dumneavoastră
              conform Regulamentului (UE) 2016/679 (GDPR).
            </p>

            <h2>2. Date Colectate</h2>
            <p>
              Colectăm date personale exclusiv prin formularul de contact:
            </p>
            <ul>
              <li>Nume și prenume</li>
              <li>Număr de telefon</li>
              <li>Adresă de email (opțional)</li>
              <li>Mesajul transmis</li>
            </ul>
            <p>
              De asemenea, site-ul poate colecta automat date tehnice (adresă IP,
              browser, pagini vizitate) prin servicii de analiză (Google Analytics —
              dacă este activat).
            </p>

            <h2>3. Scopul Prelucrării</h2>
            <p>Datele colectate sunt folosite exclusiv pentru:</p>
            <ul>
              <li>Răspunderea la solicitările de ofertă sau informații</li>
              <li>Contactarea dumneavoastră în legătură cu serviciile solicitate</li>
            </ul>
            <p>Nu folosim datele în scopuri de marketing fără consimțământul explicit.</p>

            <h2>4. Temeiul Legal</h2>
            <p>
              Prelucrarea se realizează pe baza consimțământului dumneavoastră
              (Art. 6 alin. 1 lit. a GDPR), exprimat prin completarea și trimiterea
              formularului de contact.
            </p>

            <h2>5. Păstrarea Datelor</h2>
            <p>
              Datele personale sunt păstrate pe durata necesară răspunderii la
              solicitare și maximum 12 luni ulterior, după care sunt șterse.
            </p>

            <h2>6. Drepturile Dumneavoastră</h2>
            <p>Conform GDPR, aveți dreptul de:</p>
            <ul>
              <li>Acces la datele personale prelucrate</li>
              <li>Rectificare a datelor inexacte</li>
              <li>Ștergere ("dreptul de a fi uitat")</li>
              <li>Restricționare a prelucrării</li>
              <li>Portabilitate a datelor</li>
              <li>Opoziție față de prelucrare</li>
            </ul>
            <p>
              Pentru exercitarea acestor drepturi, contactați-ne la numărul de
              telefon{' '}
              <a href={`tel:${'0756523427'}`}>
                {'0756523427'}
              </a>
              .
            </p>

            <h2>7. Cookie-uri</h2>
            <p>
              Site-ul poate folosi cookie-uri tehnice (necesare funcționării) și,
              opțional, cookie-uri de analiză. Prin continuarea navigării,
              acceptați utilizarea cookie-urilor tehnice esențiale.
            </p>

            <h2>8. Securitate</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice pentru protejarea
              datelor personale împotriva accesului neautorizat, pierderii sau
              divulgării.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pentru orice întrebare legată de această politică sau prelucrarea
              datelor personale:
            </p>
            <ul>
              <li>
                Telefon:{' '}
                <a href={`tel:${'0756523427'}`}>
                  {'0756523427'}
                </a>
              </li>
              <li>Adresă: Strada Independenței Nr. 29, Târgu Neamț, Neamț 615200</li>
            </ul>

            <div className={styles.backLink}>
              <Link href="/" className={`btn ${styles.backLinkBtn}`}>
                ← Înapoi la pagina principală
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
