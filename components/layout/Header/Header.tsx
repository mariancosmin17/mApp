'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/transport-agregate', label: 'Transport Agregate' },
  { href: '/utilaje', label: 'Utilaje' },
  { href: '/excavatii-terasamente', label: 'Excavații & Terasamente' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)} aria-label="MASERCOM — Acasă">
          <span className={styles.logoMark}>
            M<span className={styles.logoAccent}>C</span>
            <span className={styles.logoDot} aria-hidden="true" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Navigație principală">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA — desktop */}
        <a
          href={`tel:${phone}`}
          className={styles.phoneBtn}
          aria-label={`Sună la ${phone}`}
        >
          <span className={styles.phoneIconWrap} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </span>
          <span className={styles.phoneText}>
            <span className={styles.phoneLabel}>Sună acum</span>
            <span className={styles.phoneNumber}>{phone}</span>
          </span>
        </a>

        {/* Hamburger — mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-label="Navigație mobilă"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileDivider} />
        <a
          href={`tel:${phone}`}
          className={styles.mobilePhone}
          onClick={() => setMenuOpen(false)}
        >
          {phone}
        </a>
      </nav>
    </header>
  );
}
