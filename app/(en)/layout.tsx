import type { Metadata, Viewport } from 'next';
import '../globals.css';
import ThemeScript from '@/components/ui/ThemeScript';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFCFB' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F19' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mustasharcom.ae'),
  title: {
    default: 'Mustasharcom for Informatics Solutions | مستشاركم للحلول المعلوماتية',
    template: '%s | Mustasharcom',
  },
  description:
    'Official corporate website of Mustasharcom for Informatics Solutions (مستشاركم للحلول المعلوماتية). Premier UAE IT Consultancy, Data & AI Solutions, and Digital Transformation for Government & Enterprise in Abu Dhabi.',
  keywords: [
    'Mustasharcom',
    'مستشاركم للحلول المعلوماتية',
    'Mustasharcom for Informatics Solutions',
    'Abu Dhabi IT Consultancy',
    'استشارات تقنية المعلومات أبوظبي',
    'Data Analytics UAE',
    'Power BI Dashboards',
    'RPA AI Automation',
    'Government Digital Transformation',
    'Smart Hub Call Centre',
    'ISO 9001:2015 UAE',
    'ICV Certified IT Company',
  ],
  authors: [{ name: 'Mustasharcom for Informatics Solutions' }],
  creator: 'Mustasharcom for Informatics Solutions',
  publisher: 'Mustasharcom for Informatics Solutions',
  alternates: {
    canonical: 'https://mustasharcom.ae',
    languages: {
      'en': 'https://mustasharcom.ae',
      'ar': 'https://mustasharcom.ae/ar',
    },
  },
  openGraph: {
    title: 'Mustasharcom for Informatics Solutions | مستشاركم للحلول المعلوماتية',
    description:
      'Premier UAE IT Consultancy, Data & AI Solutions, and Digital Transformation for Government & Enterprise in Abu Dhabi.',
    url: 'https://mustasharcom.ae',
    siteName: 'Mustasharcom',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustasharcom for Informatics Solutions',
    description:
      'Premier UAE IT Consultancy, Data & AI Solutions, and Digital Transformation for Government & Enterprise in Abu Dhabi.',
  },
  icons: {
    icon: [
      { url: '/mustasharcom-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/mustasharcom-icon.svg',
    apple: '/mustasharcom-icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Mustasharcom for Informatics Solutions',
  alternateName: 'مستشاركم للحلول المعلوماتية',
  url: 'https://mustasharcom.ae',
  logo: 'https://mustasharcom.ae/mustasharcom-logo.svg',
  telephone: '+97126588099',
  email: 'info@mustasharcom.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 02, 3rd Floor, East 22_2 Building, Al Jazira Sports & Cultural Club, Al Nahyan',
    addressLocality: 'Abu Dhabi',
    postalCode: '58571',
    addressCountry: 'AE',
  },
  foundingDate: '2019',
  knowsAbout: [
    'IT Consultancy & Project Management',
    'Data Analytics & Power BI Dashboards',
    'Artificial Intelligence & RPA Automation',
    'Enterprise ERP & Systems Applications',
    'IT Infrastructure & Cyber Security',
    'Contact Centre & Smart Hub CRM Solutions',
  ],
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#FDFCFB] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-[#6B1426] selection:text-white transition-colors duration-200"
      >
        <Header locale="en" />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer locale="en" />
      </body>
    </html>
  );
}
