import LegalPageView from '@/components/pages/LegalPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Engagement | Mustasharcom for Informatics Solutions',
  description:
    'Terms of engagement, intellectual property rights, and commercial governance applicable to Mustasharcom corporate informatics solutions.',
  alternates: {
    canonical: 'https://mustasharcom.ae/terms',
    languages: {
      'en': 'https://mustasharcom.ae/terms',
      'ar': 'https://mustasharcom.ae/ar/terms',
    },
  },
};

export default function TermsPage() {
  return <LegalPageView locale="en" type="terms" />;
}
