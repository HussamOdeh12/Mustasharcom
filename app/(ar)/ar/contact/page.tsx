import ContactPageView from '@/components/pages/ContactPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تواصل معنا وطلب استشارة | مستشاركم للحلول المعلوماتية أبوظبي',
  description:
    'تواصل مع مستشاركم للحلول المعلوماتية في أبوظبي. تواصل مع القيادة التنفيذية، أرسل كراسات الشروط والمناقصات، أو تفضل بزيارة مكتبنا بنادي الجزيرة، آل نهيان، أبوظبي.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/contact',
    languages: {
      'en': 'https://mustasharcom.ae/contact',
      'ar': 'https://mustasharcom.ae/ar/contact',
    },
  },
};

export default function ArabicContactPage() {
  return <ContactPageView locale="ar" />;
}
