import LegalPageView from '@/components/pages/LegalPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice | Mustasharcom for Informatics Solutions',
  description:
    'Information governance and privacy notice aligned with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.',
  alternates: {
    canonical: 'https://mustasharcom.ae/privacy',
    languages: {
      'en': 'https://mustasharcom.ae/privacy',
      'ar': 'https://mustasharcom.ae/ar/privacy',
    },
  },
};

export default function PrivacyPage() {
  return <LegalPageView locale="en" type="privacy" />;
}
