import CompliancePageView from '@/components/pages/CompliancePageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الجودة والامتثال والاعتماديات | مستشاركم للحلول المعلوماتية',
  description:
    'الاعتماديات الرسمية: شهادة الآيزو ISO 9001:2015 لنظام إدارة الجودة، شهادة القيمة المحلية المضافة ICV بنسبة 55.03%، والرخصة التجارية لاقتصادية أبوظبي CN-2769971.',
  alternates: {
    canonical: 'https://mustasharcom.ae/ar/quality-compliance',
    languages: {
      'en': 'https://mustasharcom.ae/quality-compliance',
      'ar': 'https://mustasharcom.ae/ar/quality-compliance',
    },
  },
};

export default function ArabicQualityCompliancePage() {
  return <CompliancePageView locale="ar" />;
}
