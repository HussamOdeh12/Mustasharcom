import ProjectsPageView from '@/components/pages/ProjectsPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المشاريع وسجل الأعمال المعتمد | مستشاركم للحلول المعلوماتية',
  description:
    'سجل موثق يضم 17 عقداً ومشروعاً حكومياً وشبه حكومي نفذتها مستشاركم لصالح بلدية أبوظبي ودائرة البلديات والنقل وهيئة أبوظبي الرقمية بقيمة تتجاوز 69 مليون درهم.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/projects',
    languages: {
      'en': 'https://mustasharcom.ae/projects',
      'ar': 'https://mustasharcom.ae/ar/projects',
    },
  },
};

export default function ArabicProjectsPage() {
  return <ProjectsPageView locale="ar" />;
}
