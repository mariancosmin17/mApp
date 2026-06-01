'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

const COOKIE_KEY = 'masercom_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it slides in after page load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  return (
    <div
      className={`${styles.banner} ${visible ? styles.visible : ''}`}
      role="dialog"
      aria-label="Consimțământ cookie-uri"
      aria-live="polite"
    >
      <div className={styles.inner}>
        <p className={styles.text}>
          Folosim cookie-uri tehnice necesare funcționării site-ului. Prin
          continuarea navigării ești de acord cu utilizarea lor. Află mai mult în{' '}
          <Link href="/politica-confidentialitate">
            Politica de Confidențialitate
          </Link>
          .
        </p>
        <div className={styles.actions}>
          <button className={styles.declineBtn} onClick={decline}>
            Refuz
          </button>
          <button className={styles.acceptBtn} onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
