import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote:
      'Am comandat 10 tone de balast și livrarea a fost făcută a doua zi. Prețuri corecte, șofer punctual. Recomand cu încredere!',
    name: 'Alexandru M.',
    role: 'Client — Construcție casă, Târgu Neamț',
  },
  {
    quote:
      'Am închiriat nacela pentru lucrări la acoperiș. Utilajul era în stare perfectă și operatorul știa ce face. Colaborare excelentă.',
    name: 'Gheorghe P.',
    role: 'Client — Lucrări la înălțime, Bicaz',
  },
  {
    quote:
      'Au efectuat săpăturile pentru fundația casei în 2 zile. Rapid, curat, fără probleme. Îi voi contacta și la viitoarele proiecte.',
    name: 'Maria D.',
    role: 'Client — Terasament fundație, Piatra Neamț',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="label">Ce spun clienții</span>
          <h2 style={{ color: 'white' }}>Recenzii &amp; Testimoniale</h2>
          <p>Sute de clienți mulțumiți din Târgu Neamț și județul Neamț.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars} aria-label="5 stele">
                ★★★★★
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
