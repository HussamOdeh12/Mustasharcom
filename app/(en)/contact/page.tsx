import ContactPageView from '@/components/pages/ContactPageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Request RFP | Mustasharcom Abu Dhabi',
  description:
    'Connect with Mustasharcom for Informatics Solutions in Abu Dhabi. Contact our executive leadership, submit project RFPs, or visit our office at Al Jazira Club, Al Nahyan, Abu Dhabi.',
  alternates: {
    canonical: 'https://mustasharcom.ae/contact',
    languages: {
      'en': 'https://mustasharcom.ae/contact',
      'ar': 'https://mustasharcom.ae/ar/contact',
    },
  },
};

export default function ContactPage() {
  return <ContactPageView locale="en" />;
}
