import ServicesPageView from '@/components/pages/ServicesPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الممارسات الاستشارية والخدمات التقنية | مستشاركم',
  description:
    'استكشف ممارسات مستشاركم الست التخصصية: استشارات تقنية المعلومات، حلول البيانات والذكاء الاصطناعي، الأنظمة المؤسسية ERP، البنية التحتية، الدعم الفني ومراكز الاتصال.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/services',
    languages: {
      'en': 'https://mustasharcom.ae/services',
      'ar': 'https://mustasharcom.ae/ar/services',
    },
  },
};

export default function ArabicServicesPage() {
  return <ServicesPageView locale="ar" />;
}
