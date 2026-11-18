import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
      id="services-directory"
      className="py-24 md:py-32 bg-[#F5F7F7] dark:bg-[#000D0E] border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
              01 — 06 / {locale === 'ar' ? 'دليل الممارسات الاستشارية والتقنية' : 'Complete Practice Directory'}
            </span>
            <h2
              className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3.25rem)' }}
            >
              {locale === 'ar'
                ? 'ست ممارسات تخصصية متكاملة للقطاع الحكومي والمؤسسات'
                : 'Six Specialized Practice Areas Engineered for Institutional Impact'}
            </h2>
          </div>

          <Link
            href={locale === 'ar' ? '/ar/contact' : '/contact'}
            className="btn-slide-trigger inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t.requestRfp}</span>
            <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
          </Link>
        </div>

        {/* Full-Width Editorial Practice Chapters (Replacing the 3x2 Small Card Grid) */}
        <div className="divide-y divide-[#D8E2E2] dark:divide-[#0E2F33]">
          {SERVICES_CATALOG.map((svc) => {
            const serviceHref = locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`;
            const isDataAi = svc.slug === 'data-ai';

            return (
              <article
                key={svc.slug}
                className={`py-12 md:py-16 transition-colors ${
                  isDataAi
                    ? 'my-6 px-6 sm:px-10 rounded-xl bg-[#001517] text-[#F2F6F6] border border-[#123A3F]'
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left 2 Columns: Oversized Numeral */}
                  <div className="lg:col-span-2 flex lg:flex-col justify-between items-baseline gap-2">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums leading-none ${
                        isDataAi ? 'text-[#2DD4A4]' : 'text-[#6B1426] dark:text-[#2DD4A4]'
                      }`}
                    >
                      {svc.number}
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider ${
                        isDataAi ? 'text-[#2DD4A4]' : 'text-[#647A7C] dark:text-[#6C8587]'
                      }`}
                    >
                      {isDataAi
                        ? locale === 'ar'
                          ? 'ممارسة محورية'
                          : 'Flagship Practice'
                        : `PRACTICE ${svc.number}`}
                    </span>
                  </div>

                  {/* Center 5 Columns: Practice Title & Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-tight leading-snug ${
                        isDataAi ? 'text-[#F2F6F6]' : 'text-[#001517] dark:text-[#F2F6F6]'
                      }`}
                    >
                      <Link
                        href={serviceHref}
                        className="hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors"
                      >
                        {svc.title[locale]}
                      </Link>
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDataAi ? 'text-[#B4C8CA]' : 'text-[#3E5456] dark:text-[#9CB2B4]'
                      }`}
                    >
                      {svc.overview[locale]}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={serviceHref}
                        prefetch={true}
                        className={`btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold ${
                          isDataAi
                            ? 'text-[#2DD4A4] hover:text-white'
                            : 'text-[#6B1426] dark:text-[#2DD4A4] hover:underline'
                        }`}
                      >
                        <span>
                          {locale === 'ar' ? 'استعراض تفاصيل الممارسة والمخرجات' : 'Inspect Practice Capabilities & Deliverables'}
                        </span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </div>
                  </div>

                  {/* Right 5 Columns: Core Capabilities Checklist */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-7 rounded-xl border ${
                      isDataAi
                        ? 'bg-[#04191B] border-[#123A3F]'
                        : 'bg-white dark:bg-[#04191B] border-[#D8E2E2] dark:border-[#0E2F33]'
                    }`}
                  >
                    <div
                      className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                        isDataAi ? 'text-[#2DD4A4]' : 'text-[#647A7C] dark:text-[#6C8587]'
                      }`}
                    >
                      {t.coreCapabilities}
                    </div>
                    <ul className="space-y-3">
                      {svc.capabilities.slice(0, 4).map((cap, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            isDataAi ? 'text-[#D8E6E7]' : 'text-[#001517] dark:text-[#D8E6E7]'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDataAi ? 'text-[#2DD4A4]' : 'text-[#6B1426] dark:text-[#2DD4A4]'
                            }`}
                          />
                          <span>{cap[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
