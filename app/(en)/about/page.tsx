import AboutPageView from '@/components/pages/AboutPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Mustasharcom | IT Consultancy & Digital Transformation',
  description:
    'Learn about Mustasharcom for Informatics Solutions, established in 2019 in Abu Dhabi. 100% UAE National-Owned IT consultancy delivering enterprise informatics to public sector entities.',
  alternates: {
    canonical: 'https://mustasharcom.ae/about',
    languages: {
      'en': 'https://mustasharcom.ae/about',
      'ar': 'https://mustasharcom.ae/ar/about',
    },
  },
};

export default function AboutPage() {
  return <AboutPageView locale="en" />;
}
