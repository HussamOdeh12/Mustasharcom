import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../ui/Breadcrumbs';
import ContactForm from '../forms/ContactForm';
import { Locale, SERVICES_CATALOG, ServiceDetail } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import {
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  BarChart3,
  Layers,
  ShieldCheck,
  Wrench,
  Headset,
  TrendingUp,
} from 'lucide-react';

interface ServiceDetailViewProps {
  locale: Locale;
  slug: string;
}

const iconsMap: Record<string, React.ReactNode> = {
  'it-consulting': <Briefcase className="w-6 h-6 text-[#6B1426] dark:text-[#F38C9C]" />,
  'data-ai': <BarChart3 className="w-6 h-6 text-[#008751] dark:text-[#34D399]" />,
  'systems-applications': <Layers className="w-6 h-6 text-[#6B1426] dark:text-[#F38C9C]" />,
  'infrastructure-security': <ShieldCheck className="w-6 h-6 text-[#008751] dark:text-[#34D399]" />,
  'technical-support': <Wrench className="w-6 h-6 text-[#6B1426] dark:text-[#F38C9C]" />,
  'contact-center': <Headset className="w-6 h-6 text-[#008751] dark:text-[#34D399]" />,
};

export default function ServiceDetailView({ locale, slug }: ServiceDetailViewProps) {
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const servicesIndexHref = locale === 'ar' ? '/ar/services' : '/services';
  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';

  const relatedServicesList = SERVICES_CATALOG.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[
                { label: t.breadcrumbsServices, href: servicesIndexHref },
                { label: service.title[locale] },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 md:py-18 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-zinc-400 dark:text-zinc-500">
                  {service.number}
                </span>
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 shadow-xs border border-zinc-200 dark:border-zinc-700">
                  {iconsMap[service.slug]}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
                  {locale === 'ar' ? 'ممارسة استشارية متخصصة' : 'Specialized Consulting Practice'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-5 leading-tight">
                {service.title[locale]}
              </h1>

              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal max-w-3xl">
                {service.shortDesc[locale]}
              </p>
            </div>
          </div>
        </section>

        {/* Practice Body */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Main Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Practice Overview */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    {locale === 'ar' ? 'نظرة عامة على الممارسة' : 'Practice Overview'}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.overview[locale]}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-5 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#008751]" />
                    <span>{t.coreCapabilities}</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.capabilities.map((cap, idx) => {
                      const text = cap[locale];
                      const parts = text.split(':');
                      const title = parts[0];
                      const detail = parts.slice(1).join(':');

                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/70"
                        >
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block mb-1">
                            {title}
                          </span>
                          {detail && (
                            <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {detail}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-5 flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />
                    <span>{t.deliverables}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111726] text-xs font-medium text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B1426] dark:bg-[#F38C9C] shrink-0 mt-1.5" />
                        <span>{deliv[locale]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Sector Impact */}
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#008751]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                      {t.strategicImpact}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.strategicValue[locale]}
                    </p>
                  </div>
                </div>

                {/* Related Practices */}
                {relatedServicesList.length > 0 && (
                  <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                      {t.relatedPractices}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedServicesList.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={locale === 'ar' ? `/ar/services/${rel.slug}` : `/services/${rel.slug}`}
                          className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111726] hover:border-[#6B1426] dark:hover:border-zinc-700 transition-colors group flex items-center justify-between gap-3"
                        >
                          <div>
                            <span className="font-mono text-[10px] text-zinc-400 block">
                              {rel.number}
                            </span>
                            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#6B1426] dark:group-hover:text-[#F38C9C] transition-colors">
                              {rel.title[locale]}
                            </span>
                          </div>
                          <ArrowIcon className="w-4 h-4 text-zinc-400 group-hover:text-[#6B1426] shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sticky Sidebar: Direct RFP Inquiry */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] block mb-2">
                      {locale === 'ar' ? 'طلب استشارة أو كراسة شروط' : 'Direct Practice Consultation'}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      {locale === 'ar'
                        ? 'ناقش متطلبات هذا المشروع مع استشاريينا'
                        : 'Discuss Your Requirements With Our Practice Leads'}
                    </h3>
                  </div>

                  <ContactForm locale={locale} preselectedService={service.slug} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
