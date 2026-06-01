'use client';

import { useState } from 'react';

interface ContactFormProps {
  defaultService?: string;
  title?: string;
}

const services = [
  'Transport agregate',
  'Închiriere nacelă',
  'Închiriere basculantă cu macară',
  'Închiriere buldoexcavator',
  'Închiriere miniexcavator',
  'Excavații & terasamente',
  'Altele',
];

export default function ContactForm({
  defaultService = '',
  title = 'Solicită o ofertă gratuită',
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
      <div className="flex flex-col items-center text-sm text-slate-800">
        <div className="flex flex-col items-center text-center gap-4 py-12">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800">Mesaj trimis cu succes!</h3>
          <p className="text-slate-500">Te vom contacta în cel mai scurt timp. Mulțumim!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-sm text-slate-800 w-full">
      <p className="text-xs bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full">
        {title}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold py-4 text-center text-slate-800">
        Hai să vorbim.
      </h2>
      <p className="text-sm text-gray-500 pb-8 text-center max-w-sm">
        Completează formularul și te contactăm în cel mai scurt timp cu o ofertă personalizată.
      </p>

      {status === 'error' && (
        <div className="w-full max-w-lg mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <form className="w-full max-w-lg px-4" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="name" className="font-medium text-slate-700">Nume complet</label>
            <div className={`flex items-center mt-2 h-11 pl-3 border rounded-full transition-all overflow-hidden ${errors.name ? 'border-red-400' : 'border-slate-300 focus-within:ring-2 focus-within:ring-blue-400'}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
              </svg>
              <input
                id="name"
                name="name"
                type="text"
                className="h-full px-2 w-full outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
                placeholder="Ion Popescu"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
          </div>

          <div className="w-full">
            <label htmlFor="phone" className="font-medium text-slate-700">Telefon</label>
            <div className={`flex items-center mt-2 h-11 pl-3 border rounded-full transition-all overflow-hidden ${errors.phone ? 'border-red-400' : 'border-slate-300 focus-within:ring-2 focus-within:ring-blue-400'}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
              </svg>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="h-full px-2 w-full outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
                placeholder="07XX XXX XXX"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>
            {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-medium text-slate-700">
            Email <span className="text-slate-400 font-normal">(opțional)</span>
          </label>
          <div className="flex items-center mt-2 h-11 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-blue-400 transition-all overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
            </svg>
            <input
              id="email"
              name="email"
              type="email"
              className="h-full px-2 w-full outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
              placeholder="ion@exemplu.ro"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="service" className="font-medium text-slate-700">Serviciu dorit</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full h-11 px-4 border border-slate-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition-all text-slate-700 bg-white appearance-none cursor-pointer"
          >
            <option value="">— Selectează serviciul —</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="font-medium text-slate-700">Mesaj</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full mt-2 p-3 bg-transparent border rounded-2xl resize-none outline-none focus:ring-2 focus:ring-blue-400 transition-all text-slate-800 placeholder:text-slate-400 ${errors.message ? 'border-red-400' : 'border-slate-300'}`}
            placeholder="Descrie pe scurt ce ai nevoie (cantitate, localitate, perioadă, etc.)"
            value={form.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-2 mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 w-full rounded-full transition-all font-semibold"
        >
          {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
          {status !== 'loading' && (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
