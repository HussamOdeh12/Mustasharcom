import ServiceDetailView from '@/components/pages/ServiceDetailView';
import { SERVICES_CATALOG } from '@/lib/company-data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES_CATALOG.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title.en} | Mustasharcom Practice Area`,
    description: service.shortDesc.en,
    alternates: {
      canonical: `https://mustasharcom.ae/services/${slug}`,
      languages: {
        'en': `https://mustasharcom.ae/services/${slug}`,
        'ar': `https://mustasharcom.ae/ar/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return <ServiceDetailView locale="en" slug={slug} />;
}
