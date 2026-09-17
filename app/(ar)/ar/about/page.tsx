import AboutPageView from '@/components/pages/AboutPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عن مستشاركم | استشارات تقنية المعلومات والتحول الرقمي',
  description:
    'تعرف على شركة مستشاركم للحلول المعلوماتية، تأسست عام 2019 في أبوظبي. شركة وطنية إماراتية بنسبة 100% تقدم حلولاً معلوماتية متكاملة للجهات الحكومية والمؤسسات.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/about',
    languages: {
      'en': 'https://mustasharcom.ae/about',
      'ar': 'https://mustasharcom.ae/ar/about',
    },
  },
};

export default function ArabicAboutPage() {
  return <AboutPageView locale="ar" />;
}
