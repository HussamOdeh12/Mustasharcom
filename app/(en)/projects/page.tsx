import ProjectsPageView from '@/components/pages/ProjectsPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Engagements & Public Sector Projects | Mustasharcom',
  description:
    'Comprehensive registry of 17 verified IT consulting and technical support engagements executed for Abu Dhabi government entities, representing over AED 69M+ in contract value.',
  alternates: {
    canonical: 'https://mustasharcom.ae/projects',
    languages: {
      'en': 'https://mustasharcom.ae/projects',
      'ar': 'https://mustasharcom.ae/ar/projects',
    },
  },
};

export default function ProjectsPage() {
  return <ProjectsPageView locale="en" />;
}
