import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../ui/Breadcrumbs';
import ContactForm from '../forms/ContactForm';
import { Locale, SERVICES_CATALOG, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ServiceDetailViewProps {
  locale: Locale;
  slug: string;
}

export default function ServiceDetailView({ locale, slug }: ServiceDetailViewProps) {
  const service = SERVICES_CATALOG.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const servicesIndexHref = locale === 'ar' ? '/ar/services' : '/services';

  const relatedServicesList = SERVICES_CATALOG.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs */}
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[
              { label: t.breadcrumbsServices, href: servicesIndexHref },
              { label: service.title[locale] },
            ]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Practice Hero */}
      <section className="py-16 md:py-22 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3 text-xs font-mono text-[#2DD4A4]">
              <span>PRACTICE {service.number} / 06</span>
              <span aria-hidden="true" className="text-[#3A4F46]">·</span>
              <span>{locale === 'ar' ? 'ممارسة استشارية معتمدة' : 'Verified Consulting Practice'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {service.title[locale]}
            </h1>

            <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed max-w-3xl">
              {service.shortDesc[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Body */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#07110E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Main Content */}
            <div className="lg:col-span-7 space-y-14">
              {/* Practice Overview */}
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                  01 · {locale === 'ar' ? 'نظرة عامة على الممارسة' : 'PRACTICE OVERVIEW'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                  {locale === 'ar' ? 'المنهجية الاستشارية والتنفيذية' : 'Institutional Mandate & Execution Scope'}
                </h2>
                <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {service.overview[locale]}
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="pt-10 border-t border-[#E3DFD7] dark:border-[#1A2E26] space-y-6">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block mb-1">
                    02 · {t.coreCapabilities.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {t.coreCapabilities}
                  </h3>
                </div>

                <div className="divide-y divide-[#E3DFD7] dark:divide-[#1A2E26] border-y border-[#E3DFD7] dark:border-[#1A2E26]">
                  {service.capabilities.map((cap, idx) => {
                    const text = cap[locale];
                    const parts = text.split(':');
                    const title = parts[0];
                    const detail = parts.slice(1).join(':');

                    return (
                      <div key={idx} className="py-5 flex items-baseline gap-4">
                        <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                          0{idx + 1}.
                        </span>
                        <div className="space-y-1">
                          <div className="font-bold text-sm sm:text-base text-[#0B1713] dark:text-[#F4F6F5]">
                            {title}
                          </div>
                          {detail && (
                            <p className="text-xs sm:text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                              {detail}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block mb-1">
                    03 · {t.deliverables.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {t.deliverables}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/60 dark:bg-[#0C1A15] flex items-baseline gap-3"
                    >
                      <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#0B1713] dark:text-[#F4F6F5] leading-relaxed">
                        {deliv[locale]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Sector Impact */}
              <div className="p-7 rounded-lg bg-[#060E0B] text-[#F4F6F5] border border-[#1A2E26] space-y-2">
                <span className="font-mono text-xs text-[#2DD4A4] block">
                  04 · {t.strategicImpact.toUpperCase()}
                </span>
                <h3 className="text-base font-bold text-[#F4F6F5]">
                  {t.strategicImpact}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8C7C0] leading-relaxed">
                  {service.strategicValue[locale]}
                </p>
                <div className="pt-3 text-[11px] font-mono text-[#768780]">
                  ADRA Lic. {COMPANY_PROFILE.licence.number} · {COMPANY_PROFILE.certifications.iso.standard}
                </div>
              </div>

              {/* Related Practices */}
              {relatedServicesList.length > 0 && (
                <div className="pt-8 border-t border-[#E3DFD7] dark:border-[#1A2E26]">
                  <h3 className="text-xs font-semibold text-[#687670] dark:text-[#8FA19A] mb-4">
                    {t.relatedPractices}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServicesList.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={locale === 'ar' ? `/ar/services/${rel.slug}` : `/services/${rel.slug}`}
                        className="p-4 rounded-lg border border-[#E3DFD7] dark:border-[#1A2E26] bg-white dark:bg-[#0C1A15] hover:border-[#6B1426] dark:hover:border-[#2DD4A4] transition-colors group flex flex-col justify-between gap-3"
                      >
                        <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4]">
                          {rel.number}.
                        </span>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#0B1713] dark:text-[#F4F6F5] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-colors line-clamp-2">
                            {rel.title[locale]}
                          </span>
                          <ArrowIcon className="w-3.5 h-3.5 text-[#687670] shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Direct RFP Inquiry */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-5">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    {locale === 'ar' ? 'طلب استشارة أو كراسة شروط' : 'Direct Practice Consultation'}
                  </span>
                  <h2 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {locale === 'ar'
                      ? 'ناقش متطلبات هذا المشروع مع استشاريينا'
                      : 'Discuss Your Requirements With Our Practice Leads'}
                  </h2>
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
