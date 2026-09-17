import LegalPageView from '@/components/pages/LegalPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية وحماية البيانات | مستشاركم للحلول المعلوماتية',
  description:
    'سياسة الخصوصية وحوكمة البيانات لشركة مستشاركم وفق المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية في دولة الإمارات العربية المتحدة.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/privacy',
    languages: {
      'en': 'https://mustasharcom.ae/privacy',
      'ar': 'https://mustasharcom.ae/ar/privacy',
    },
  },
};

export default function ArabicPrivacyPage() {
  return <LegalPageView locale="ar" type="privacy" />;
}
