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
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          MASER<span className={styles.logoAccent}>COM</span>
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
          <span className={styles.phoneIcon}>📞</span>
          {phone}
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
          📞 {phone}
        </a>
      </nav>
    </header>
  );
}
