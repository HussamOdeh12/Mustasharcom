import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ServicesGridProps {
  locale: Locale;
  showAll?: boolean;
}

export default function ServicesGrid({ locale }: ServicesGridProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F3EFEA]/60 dark:bg-[#0A1612] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consilio-inspired Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide block">
              02 · {locale === 'ar' ? 'الممارسات الاستشارية والحلول التقنية' : 'Consulting Practices & Capabilities'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-tight text-balance">
              {locale === 'ar'
                ? 'ست ممارسات تخصصية متكاملة للقطاع الحكومي والمؤسسات'
                : 'Six Specialized Practice Areas Engineered for Institutional Impact'}
            </h2>
          </div>

          <Link
            href={locale === 'ar' ? '/ar/services' : '/services'}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t.viewAllServices}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Practice Cards in Refined Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {SERVICES_CATALOG.map((svc) => {
            const serviceHref = locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`;
            const isDataAi = svc.slug === 'data-ai';

            return (
              <Link
                key={svc.slug}
                href={serviceHref}
                prefetch={true}
                className={`group flex flex-col justify-between p-7 sm:p-8 rounded-lg border transition-all duration-200 hover-card-lift ${
                  isDataAi
                    ? 'bg-[#07130F] text-[#F4F6F5] border-[#1E362D] hover:border-[#2DD4A4]'
                    : 'bg-[#FAF8F5] dark:bg-[#0C1A15] text-[#0B1713] dark:text-[#F4F6F5] border-[#E3DFD7] dark:border-[#1A2E26] hover:border-[#6B1426] dark:hover:border-[#2DD4A4]'
                }`}
              >
                <div>
                  {/* Top Editorial Index & Arrow */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`font-mono text-sm font-semibold ${
                        isDataAi
                          ? 'text-[#2DD4A4]'
                          : 'text-[#6B1426] dark:text-[#2DD4A4]'
                      }`}
                    >
                      {svc.number}.
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                        isDataAi
                          ? 'text-[#2DD4A4]'
                          : 'text-[#687670] dark:text-[#8FA19A] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4]'
                      } transition-colors`}
                    >
                      {isDataAi && (
                        <span>{locale === 'ar' ? 'ممارسة محورية' : 'Core Focus'}</span>
                      )}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Large Practice Heading */}
                  <h3
                    className={`text-xl font-bold mb-3 leading-snug ${
                      isDataAi
                        ? 'text-[#F4F6F5] group-hover:text-[#2DD4A4]'
                        : 'text-[#0B1713] dark:text-[#F4F6F5] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4]'
                    } transition-colors`}
                  >
                    {svc.title[locale]}
                  </h3>

                  {/* Meaningful Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isDataAi
                        ? 'text-[#B8C7C0]'
                        : 'text-[#485650] dark:text-[#A6B5AF]'
                    }`}
                  >
                    {svc.shortDesc[locale]}
                  </p>
                </div>

                {/* Unboxed Key Capabilities List */}
                <div
                  className={`pt-5 border-t ${
                    isDataAi
                      ? 'border-[#1E362D]'
                      : 'border-[#E3DFD7] dark:border-[#1A2E26]'
                  }`}
                >
                  <div
                    className={`text-xs leading-relaxed ${
                      isDataAi
                        ? 'text-[#8FA19A]'
                        : 'text-[#687670] dark:text-[#8FA19A]'
                    }`}
                  >
                    {svc.capabilities
                      .slice(0, 3)
                      .map((cap) => cap[locale].split(':')[0])
                      .join(' · ')}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
