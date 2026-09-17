import ServiceDetailView from '@/components/pages/ServiceDetailView';
import { SERVICES_CATALOG } from '@/lib/company-data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ArabicServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES_CATALOG.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: ArabicServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title.ar} | مستشاركم للحلول المعلوماتية`,
    description: service.shortDesc.ar,
    alternates: {
      canonical: `https://mustasharcom.ae/ar/services/${slug}`,
      languages: {
        'en': `https://mustasharcom.ae/services/${slug}`,
        'ar': `https://mustasharcom.ae/ar/services/${slug}`,
      },
    },
  };
}

export default async function ArabicServiceDetailPage({ params }: ArabicServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return <ServiceDetailView locale="ar" slug={slug} />;
}
