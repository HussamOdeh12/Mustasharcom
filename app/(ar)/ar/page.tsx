import HomePageView from '@/components/pages/HomePageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مستشاركم للحلول المعلوماتية | استشارات تقنية المعلومات والتحول الرقمي',
  description:
    'الموقع الرسمي لمستشاركم للحلول المعلوماتية في أبوظبي. شريك استشاري وتقني رائد يقدم حلول البيانات، الذكاء الاصطناعي، أتمتة الإجراءات والتحول الرقمي للقطاع الحكومي.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar',
    languages: {
      'en': 'https://mustasharcom.ae',
      'ar': 'https://mustasharcom.ae/ar',
    },
  },
};

export default function ArabicHomePage() {
  return <HomePageView locale="ar" />;
}
