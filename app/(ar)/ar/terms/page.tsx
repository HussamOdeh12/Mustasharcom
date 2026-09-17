import LegalPageView from '@/components/pages/LegalPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شروط التعاقد والخدمة | مستشاركم للحلول المعلوماتية',
  description:
    'شروط الاستخدام، الملكية الفكرية، والضوابط التعاقدية المنظمة لخدمات واستشارات مستشاركم للحلول المعلوماتية في إمارة أبوظبي.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/terms',
    languages: {
      'en': 'https://mustasharcom.ae/terms',
      'ar': 'https://mustasharcom.ae/ar/terms',
    },
  },
};

export default function ArabicTermsPage() {
  return <LegalPageView locale="ar" type="terms" />;
}
