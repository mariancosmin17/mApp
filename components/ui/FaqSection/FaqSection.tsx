'use client';

import { useState } from 'react';
import styles from './FaqSection.module.css';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqSection({
  items,
  title = 'Întrebări Frecvente',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="label">FAQ</span>
          <h2>{title}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={`${styles.question} ${openIndex === i ? styles.open : ''}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.chevron} ${openIndex === i ? styles.open : ''}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              <div className={`${styles.answer} ${openIndex === i ? styles.open : ''}`}>
                <p className={styles.answerInner}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
