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
    default: 'مستشاركم للحلول المعلوماتية | استشارات تقنية المعلومات والتحول الرقمي',
    template: '%s | مستشاركم للحلول المعلوماتية',
  },
  description:
    'الموقع الرسمي لمستشاركم للحلول المعلوماتية في أبوظبي. شريك استشاري وتقني رائد يقدم حلول البيانات، الذكاء الاصطناعي، أتمتة الإجراءات والتحول الرقمي للقطاع الحكومي.',
  keywords: [
    'مستشاركم للحلول المعلوماتية',
    'Mustasharcom',
    'استشارات تقنية المعلومات أبوظبي',
    'تحليل البيانات الإمارات',
    'لوحات Power BI',
    'أتمتة العمليات RPA',
    'التحول الرقمي الحكومي',
    'مراكز الاتصال الذكية',
    'آيزو 9001:2015',
    'شهادة القيمة المحلية المضافة ICV',
  ],
  authors: [{ name: 'مستشاركم للحلول المعلوماتية' }],
  creator: 'مستشاركم للحلول المعلوماتية',
  publisher: 'مستشاركم للحلول المعلوماتية',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar',
    languages: {
      'en': 'https://mustasharcom.ae',
      'ar': 'https://mustasharcom.ae/ar',
    },
  },
  openGraph: {
    title: 'مستشاركم للحلول المعلوماتية | استشارات تقنية المعلومات والتحول الرقمي',
    description:
      'الموقع الرسمي لمستشاركم للحلول المعلوماتية في أبوظبي. شريك استشاري وتقني رائد يقدم حلول البيانات، الذكاء الاصطناعي، أتمتة الإجراءات والتحول الرقمي للقطاع الحكومي.',
    url: 'https://mustasharcom.ae/ar',
    siteName: 'مستشاركم للحلول المعلوماتية',
    locale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مستشاركم للحلول المعلوماتية',
    description:
      'شريك استشاري وتقني رائد يقدم حلول البيانات والذكاء الاصطناعي والتحول الرقمي للقطاع الحكومي في أبوظبي.',
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

const arabicOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'مستشاركم للحلول المعلوماتية',
  alternateName: 'Mustasharcom for Informatics Solutions',
  url: 'https://mustasharcom.ae/ar',
  logo: 'https://mustasharcom.ae/mustasharcom-logo.svg',
  telephone: '+97126588099',
  email: 'info@mustasharcom.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'مكتب 02، الطابق الثالث، مبنى شرق 22_2، نادي الجزيرة الرياضي الثقافي، آل نهيان',
    addressLocality: 'أبوظبي',
    postalCode: '58571',
    addressCountry: 'AE',
  },
  foundingDate: '2019',
  knowsAbout: [
    'استشارات تقنية المعلومات وإدارة المشاريع',
    'تحليل البيانات وتطوير لوحات Power BI',
    'حلول الذكاء الاصطناعي وأتمتة الإجراءات RPA',
    'الأنظمة والبرمجيات المؤسسية ERP',
    'البنية التحتية والأمن السيبراني',
    'حلول مراكز الاتصال الذكية CRM',
  ],
};

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(arabicOrganizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#FDFCFB] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-[#6B1426] selection:text-white transition-colors duration-200"
        dir="rtl"
      >
        <Header locale="ar" />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer locale="ar" />
      </body>
    </html>
  );
}
