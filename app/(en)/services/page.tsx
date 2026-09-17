import ServicesPageView from '@/components/pages/ServicesPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Practices & Services | Mustasharcom',
  description:
    'Explore Mustasharcom’s 6 specialized consulting practices: IT Consulting, Data & AI Solutions, Systems & Applications, Infrastructure & Security, Technical Support, and Contact Centre Operations.',
  alternates: {
    canonical: 'https://mustasharcom.ae/services',
    languages: {
      'en': 'https://mustasharcom.ae/services',
      'ar': 'https://mustasharcom.ae/ar/services',
    },
  },
};

export default function ServicesPage() {
  return <ServicesPageView locale="en" />;
}
