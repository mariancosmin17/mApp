import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import CookieBanner from '@/components/ui/CookieBanner/CookieBanner';
import JsonLd from '@/components/seo/JsonLd';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://masercom.ro';
const phone = process.env.NEXT_PUBLIC_PHONE ?? '0756523427';
const address = process.env.NEXT_PUBLIC_ADDRESS ?? 'Strada Independenței Nr. 29, Târgu Neamț, Neamț 615200';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'MASERCOM',
  description:
    'Transport agregate (nisip, balast, piatră spartă), închirieri utilaje (nacelă, buldoexcavator, miniexcavator, basculantă cu macară) și lucrări de excavații în Târgu Neamț și județul Neamț.',
  url: siteUrl,
  telephone: phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Independenței Nr. 29',
    addressLocality: 'Târgu Neamț',
    addressRegion: 'Neamț',
    postalCode: '615200',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.2003,
    longitude: 26.3672,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 47.2003,
      longitude: 26.3672,
    },
    geoRadius: '30000',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii MASERCOM',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Agregate' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Închiriere Nacelă' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Închiriere Buldoexcavator' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Închiriere Miniexcavator' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basculantă cu Macară' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Excavații și Terasamente' } },
    ],
  },
  image: `${siteUrl}/background.png`,
  priceRange: '$$',
  sameAs: [`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? '40756523427'}`],
};

export const metadata: Metadata = {
  title: {
    default: 'MASERCOM — Transport Agregate & Închirieri Utilaje Târgu Neamț',
    template: '%s | MASERCOM Târgu Neamț',
  },
  description:
    'MASERCOM oferă transport agregate (nisip, balast, piatră spartă), închirieri utilaje (nacelă, buldoexcavator, miniexcavator, basculantă cu macară) și lucrări de excavații în Târgu Neamț și județul Neamț.',
  keywords: [
    'agregate neamt',
    'agregate targu neamt',
    'transport agregate neamt',
    'nisip balast targu neamt',
    'transport nisip neamt',
    'transport balast neamt',
    'inchiriere nacela neamt',
    'inchiriere buldoexcavator neamt',
    'inchiriere miniexcavator neamt',
    'basculanta cu macara neamt',
    'basculanta neamt',
    'lucrari excavatii neamt',
    'excavatii neamt',
    'terasamente neamt',
    'sapaturi neamt',
    'sapaturi fundatii neamt',
    'materiale constructii neamt',
    'constructii neamt',
    'inchiriere utilaje constructii neamt',
    'lucrari constructii targu neamt',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'MASERCOM',
    title: 'MASERCOM — Transport Agregate & Închirieri Utilaje Târgu Neamț',
    description:
      'MASERCOM oferă transport agregate (nisip, balast, piatră spartă), închirieri utilaje (nacelă, buldoexcavator, miniexcavator, basculantă cu macară) și lucrări de excavații în Târgu Neamț și județul Neamț.',
    url: siteUrl,
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'MASERCOM — Transport Agregate și Utilaje Construcții Târgu Neamț',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MASERCOM — Transport Agregate & Închirieri Utilaje Târgu Neamț',
    description:
      'Transport agregate, închirieri utilaje și lucrări de excavații în Târgu Neamț și județul Neamț.',
    images: ['/background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={GeistSans.variable}>
      <body>
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
