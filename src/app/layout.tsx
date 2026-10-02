import type { Metadata } from 'next';
import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/next';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prismwebstudio.mintx.online'),
  applicationName: 'Prism Web Studio',
  title: {
    default: 'Best Web Development & SEO Company in Gorakhpur | Prism Web Studio',
    template: '%s | Prism Web Studio',
  },
  description:
    'Prism Web Studio is the #1 web design agency in Gorakhpur. We build fast, high-converting websites, e-commerce stores & AI solutions for local businesses.',
  keywords: [
    'Web Development Company in Gorakhpur',
    'Website Designer in Gorakhpur',
    'Best SEO Agency Gorakhpur',
    'Web Design Services Gorakhpur',
    'E-commerce Website Developer Gorakhpur',
    'Best Digital Marketing & SEO Company Gorakhpur',
    'Next.js Web Developer in Gorakhpur',
    'Software Development Company Gorakhpur Uttar Pradesh',
    'Prism Web Studio Gorakhpur',
    'Satyarth Maurya',
    'Web Development Kushinagar UP',
    'Local SEO Agency Gorakhpur',
  ],
  authors: [{ name: 'Satyarth Maurya', url: 'https://prismwebstudio.mintx.online/about' }],
  creator: 'Prism Web Studio',
  publisher: 'Prism Web Studio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prismwebstudio.mintx.online',
    siteName: 'Prism Web Studio',
    title: 'Best Web Development & SEO Company in Gorakhpur | Prism Web Studio',
    description:
      'Prism Web Studio is the #1 web design agency in Gorakhpur. We build fast, high-converting websites, e-commerce stores & AI solutions for local businesses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Web Development Team in Gorakhpur - Prism Web Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Web Development & SEO Company in Gorakhpur | Prism Web Studio',
    description:
      'Prism Web Studio is the #1 web design agency in Gorakhpur. High-performance Next.js websites, e-commerce, and AI automation for local businesses.',
    images: ['/og-image.png'],
    creator: '@prismwebstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://prismwebstudio.mintx.online',
  },
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Prism Web Studio',
  alternateName: 'Prism Studio Gorakhpur',
  url: 'https://prismwebstudio.mintx.online',
  logo: 'https://prismwebstudio.mintx.online/favicon.ico',
  image: 'https://prismwebstudio.mintx.online/og-image.png',
  description:
    'Prism Web Studio is the #1 web design and SEO agency in Gorakhpur, UP. We specialize in custom high-speed websites, local business SEO, and AI workflow automation.',
  founder: {
    '@type': 'Person',
    name: 'Satyarth Maurya',
    jobTitle: 'Founder & Lead Systems Architect',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Civil Lines / Golghar Commercial Hub',
    addressLocality: 'Gorakhpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '273001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.7606',
    longitude: '83.3732',
  },
  telephone: '+91 86018 25502',
  email: 'business@mintx.online',
  priceRange: '₹₹ - ₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Gorakhpur',
    },
    {
      '@type': 'State',
      name: 'Uttar Pradesh',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gorakhpur Web & SEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development Company in Gorakhpur',
          description: 'High-speed custom Next.js and React websites built for Gorakhpur businesses.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Designer in Gorakhpur',
          description: 'Modern, mobile-friendly, and conversion-optimized UI/UX website design in Gorakhpur.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Best SEO Agency Gorakhpur',
          description: 'Local Google Maps SEO, On-Page SEO, and top organic search ranking services in Gorakhpur.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce & AI Automation Solutions',
          description: 'Automated online stores, WhatsApp order alerts, and 24/7 AI customer support bots.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
