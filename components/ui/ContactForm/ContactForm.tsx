'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const services = [
  'Transport agregate',
  'Închiriere nacelă',
  'Închiriere basculantă cu macară',
  'Închiriere buldoexcavator',
  'Închiriere miniexcavator',
  'Excavații & terasamente',
  'Altele',
];

interface ContactFormProps {
  defaultService?: string;
  title?: string;
  dark?: boolean;
}

export default function ContactForm({
  defaultService = '',
  title = 'Solicită o ofertă gratuită',
  dark = false,
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Câmp obligatoriu';
    if (!form.phone.trim()) errs.phone = 'Câmp obligatoriu';
    else if (!/^[0-9\s\+\-]{8,15}$/.test(form.phone.trim()))
      errs.phone = 'Număr invalid';
    if (!form.message.trim()) errs.message = 'Câmp obligatoriu';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Eroare server');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('A apărut o eroare. Te rugăm să ne contactezi telefonic.');
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  if (status === 'success') {
    return (
      <div className={`${styles.wrapper} ${dark ? styles.wrapperDark : ''}`}>
        <div className={styles.successMsg}>
          <div className={styles.successIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Mesaj trimis cu succes!</h3>
          <p>Te vom contacta în cel mai scurt timp. Mulțumim!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${dark ? styles.wrapperDark : ''}`}>
      <span className={styles.formTag}>{title}</span>
      <h2 className={styles.formHeading}>Hai să vorbim.</h2>
      <p className={styles.formSubtitle}>
        Completează formularul și revenim cu o ofertă personalizată în cel mai scurt timp.
      </p>

      {status === 'error' && (
        <div className={styles.errorBanner}>{errorMsg}</div>
      )}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Nume complet <span className={styles.required}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              placeholder="Ion Popescu"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Telefon <span className={styles.required}>*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="07XX XXX XXX"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.optional}>(opțional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="ion@exemplu.ro"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="service" className={styles.label}>Serviciu dorit</label>
          <select
            id="service"
            name="service"
            className={styles.select}
            value={form.service}
            onChange={handleChange}
          >
            <option value="">— Selectează serviciul —</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Mesaj <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            placeholder="Descrie pe scurt ce ai nevoie (cantitate, localitate, perioadă, etc.)"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={styles.submitBtn}
        >
          {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
          {status !== 'loading' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
