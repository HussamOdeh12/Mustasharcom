import CompliancePageView from '@/components/pages/CompliancePageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Management & Regulatory Compliance | Mustasharcom',
  description:
    'Sovereign quality assurance: ISO 9001:2015 certified (UAF140791497), UAE In-Country Value (ICV) 55.03% (153777), and Abu Dhabi commercial licence CN-2769971.',
  alternates: {
    canonical: 'https://mustasharcom.ae/quality-compliance',
    languages: {
      'en': 'https://mustasharcom.ae/quality-compliance',
      'ar': 'https://mustasharcom.ae/ar/quality-compliance',
    },
  },
};

export default function QualityCompliancePage() {
  return <CompliancePageView locale="en" />;
}
