import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../ui/Breadcrumbs';
import ContactForm from '../forms/ContactForm';
import SectionReveal from '../ui/SectionReveal';
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
      <div className="border-b border-[#D8E2E2] dark:border-[#0E2F33] bg-[#EAEFEF] dark:bg-[#021214]">
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
      <section className="py-20 md:py-28 bg-[#000D0E] text-[#F2F6F6] border-b border-[#0E2F33] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 25%, rgba(45, 212, 164, 0.13) 0%, rgba(0, 13, 14, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#2DD4A4] hero-stagger-1">
              <span>PRACTICE {service.number} / 06</span>
              <span aria-hidden="true" className="text-[#1A4247]">·</span>
              <span>{locale === 'ar' ? 'ممارسة استشارية معتمدة' : 'Verified Consulting Practice'}</span>
            </div>

            <h1
              className="font-bold tracking-[-0.035em] text-[#F2F6F6] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.25rem, 4.8vw, 4.25rem)' }}
            >
              {service.title[locale]}
            </h1>

            <p className="text-lg sm:text-xl text-[#B4C8CA] leading-relaxed max-w-3xl hero-stagger-3">
              {service.shortDesc[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Body */}
      <SectionReveal>
        <section className="py-20 md:py-28 bg-[#F5F7F7] dark:bg-[#000D0E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Main Content */}
              <div className="lg:col-span-7 space-y-16">
                {/* Practice Overview */}
                <div className="space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                    01 / {locale === 'ar' ? 'نظرة عامة على الممارسة' : 'PRACTICE OVERVIEW'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                    {locale === 'ar' ? 'المنهجية الاستشارية والتنفيذية' : 'Institutional Mandate & Execution Scope'}
                  </h2>
                  <p className="text-base sm:text-lg text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                    {service.overview[locale]}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="pt-12 border-t border-[#D8E2E2] dark:border-[#0E2F33] space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block mb-1">
                      02 / {t.coreCapabilities.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                      {t.coreCapabilities}
                    </h3>
                  </div>

                  <div className="divide-y divide-[#D8E2E2] dark:divide-[#0E2F33] border-y border-[#D8E2E2] dark:border-[#0E2F33]">
                    {service.capabilities.map((cap, idx) => {
                      const text = cap[locale];
                      const parts = text.split(':');
                      const title = parts[0];
                      const detail = parts.slice(1).join(':');

                      return (
                        <div key={idx} className="py-6 flex items-baseline gap-4">
                          <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                            0{idx + 1}.
                          </span>
                          <div className="space-y-1.5">
                            <div className="font-bold text-base sm:text-lg text-[#001517] dark:text-[#F2F6F6]">
                              {title}
                            </div>
                            {detail && (
                              <p className="text-sm text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
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
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block mb-1">
                      03 / {t.deliverables.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                      {t.deliverables}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-xl border border-[#D8E2E2] dark:border-[#0E2F33] bg-white dark:bg-[#04191B] flex items-baseline gap-3"
                      >
                        <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className="text-sm font-medium text-[#001517] dark:text-[#F2F6F6] leading-relaxed">
                          {deliv[locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Sector Impact */}
                <div className="p-8 sm:p-10 rounded-xl bg-[#001517] text-[#F2F6F6] border border-[#123A3F] space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2DD4A4] block">
                    04 / {t.strategicImpact.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#F2F6F6]">
                    {t.strategicImpact}
                  </h3>
                  <p className="text-sm sm:text-base text-[#B4C8CA] leading-relaxed">
                    {service.strategicValue[locale]}
                  </p>
                  <div className="pt-4 text-xs font-mono text-[#6C8587]">
                    ADRA LICENCE {COMPANY_PROFILE.licence.number} · {COMPANY_PROFILE.certifications.iso.standard}
                  </div>
                </div>

                {/* Related Practices */}
                {relatedServicesList.length > 0 && (
                  <div className="pt-8 border-t border-[#D8E2E2] dark:border-[#0E2F33]">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#647A7C] dark:text-[#6C8587] mb-5">
                      {t.relatedPractices}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {relatedServicesList.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={locale === 'ar' ? `/ar/services/${rel.slug}` : `/services/${rel.slug}`}
                          className="p-5 rounded-xl border border-[#D8E2E2] dark:border-[#0E2F33] bg-white dark:bg-[#04191B] hover:border-[#6B1426] dark:hover:border-[#2DD4A4] transition-colors group flex flex-col justify-between gap-4 hover-card-lift"
                        >
                          <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4]">
                            /{rel.number}
                          </span>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-[#001517] dark:text-[#F2F6F6] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-colors line-clamp-2">
                              {rel.title[locale]}
                            </span>
                            <ArrowIcon className="w-4 h-4 text-[#647A7C] shrink-0" />
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
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                      {locale === 'ar' ? 'طلب استشارة أو كراسة شروط' : 'Direct Practice Consultation'}
                    </span>
                    <h2 className="text-2xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
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
      </SectionReveal>
    </main>
  );
}
