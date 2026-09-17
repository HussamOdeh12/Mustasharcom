import HomePageView from '@/components/pages/HomePageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mustasharcom for Informatics Solutions | مستشاركم للحلول المعلوماتية',
  description:
    'Official corporate website of Mustasharcom for Informatics Solutions. Premier UAE IT Consultancy, Data & AI Solutions, and Digital Transformation for Government & Enterprise.',
  alternates: {
    canonical: 'https://mustasharcom.ae',
    languages: {
      'en': 'https://mustasharcom.ae',
      'ar': 'https://mustasharcom.ae/ar',
    },
  },
};

export default function HomePage() {
  return <HomePageView locale="en" />;
}
