'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Menu, Truck, Forklift, Shovel, ChevronDown, Phone } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import PhoneDisperse from '@/components/ui/phone-disperse';

interface SubItem {
  title: string;
  url: string;
  description: string;
  icon: ReactNode;
}
interface MenuEntry {
  title: string;
  url: string;
  items?: SubItem[];
}

const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';

const services: SubItem[] = [
  {
    title: 'Transport Agregate',
    url: '/transport-agregate',
    description: 'Nisip, balast, piatră spartă și pietriș, livrate la punct de lucru.',
    icon: <Truck className="size-5 shrink-0" />,
  },
  {
    title: 'Închiriere Utilaje',
    url: '/utilaje',
    description: 'Nacelă, buldoexcavator, miniexcavator și basculantă cu macara.',
    icon: <Forklift className="size-5 shrink-0" />,
  },
  {
    title: 'Excavații & Terasamente',
    url: '/excavatii-terasamente',
    description: 'Săpături, nivelări și lucrări de terasament pentru orice șantier.',
    icon: <Shovel className="size-5 shrink-0" />,
  },
];

const menu: MenuEntry[] = [
  { title: 'Acasă', url: '/' },
  { title: 'Servicii', url: '#', items: services },
  { title: 'Galerie', url: '/galerie' },
  { title: 'Contact', url: '/contact' },
];

const linkBase =
  'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-[0.95rem] font-medium text-white/85 transition-colors hover:text-white focus:outline-none';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderMobileItem = (item: MenuEntry) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-1 h-auto text-[1.05rem] font-semibold text-white hover:no-underline [&>svg]:text-white/50">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((sub) => (
              <Link
                key={sub.title}
                href={sub.url}
                onClick={() => setMobileOpen(false)}
                className="flex select-none gap-4 rounded-md p-3 leading-none transition-colors hover:bg-white/10"
              >
                <span className="mt-0.5 text-white">{sub.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{sub.title}</div>
                  <p className="mt-1 text-sm leading-snug text-white/55">
                    {sub.description}
                  </p>
                </div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }
    return (
      <Link
        key={item.title}
        href={item.url}
        onClick={() => setMobileOpen(false)}
        className="block py-1 text-[1.05rem] font-semibold text-white/90 transition-colors hover:text-white"
      >
        {item.title}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1220] shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="container py-5">
        {/* Desktop */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-9">
            <Link href="/" className="flex items-center gap-2" aria-label="MASERCOM — Acasă">
              <span className="text-xl font-extrabold tracking-tight text-white">
                MASER<span className="logo-shimmer">COM</span>
              </span>
            </Link>

            <div className="flex items-center gap-6">
              {menu.map((item) => {
                if (item.items) {
                  return (
                    <div key={item.title} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen((v) => !v)}
                        className={`${linkBase} gap-1`}
                      >
                        {item.title}
                        <ChevronDown
                          className={`size-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute left-0 top-full mt-2 z-50 w-[24rem] rounded-lg border border-white/10 bg-[#0c1220] p-2 shadow-xl shadow-black/40">
                          <ul>
                            {item.items.map((sub) => (
                              <li key={sub.title}>
                                <Link
                                  href={sub.url}
                                  onClick={() => setDropdownOpen(false)}
                                  className="flex select-none items-start gap-3 rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-white/10"
                                >
                                  <span className="mt-0.5 shrink-0 text-white">{sub.icon}</span>
                                  <div>
                                    <div className="text-sm font-semibold text-white">
                                      {sub.title}
                                    </div>
                                    <p className="mt-1 text-sm leading-snug text-white/55">
                                      {sub.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                const active = pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`${linkBase} ${active ? 'text-white' : ''}`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone style={{ width: '1rem', height: '1rem', color: 'rgba(255,255,255,0.7)', flexShrink: 0 }} />
            <PhoneDisperse phone={phone} className="text-lg text-white" />
          </div>
        </nav>

        {/* Mobile */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="MASERCOM — Acasă">
              <span className="text-xl font-extrabold tracking-tight text-white">
                MASER<span className="logo-shimmer">COM</span>
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
                aria-label={`Sună la ${phone}`}
              >
                <Phone className="size-3.5" />
                <span>{phone}</span>
              </a>
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10"
                    aria-label="Deschide meniu"
                  >
                    <Menu className="size-5" />
                  </button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto border-white/10 bg-[#0c1220] text-white">
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-extrabold tracking-tight text-white"
                      >
                        MASER<span className="logo-shimmer">COM</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-6">
                      {menu.map(renderMobileItem)}
                    </Accordion>
                    <div className="border-t border-white/10 pt-6">
                      <PhoneDisperse phone={phone} className="text-xl text-white" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
