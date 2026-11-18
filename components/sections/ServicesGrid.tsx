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
      className="py-24 md:py-32 bg-[#F7F5F0] dark:bg-[#071C17] border-b border-[#DCE2DE] dark:border-[#18382F] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#DCE2DE] dark:border-[#18382F]">
          <div className="max-w-3xl space-y-4">
            <span className="reveal-item reveal-delay-1 text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
              01 — 06 / {locale === 'ar' ? 'دليل الممارسات الاستشارية والتقنية' : 'Complete Practice Directory'}
            </span>
            <h2
              className="reveal-item reveal-delay-2 font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3.25rem)' }}
            >
              {locale === 'ar'
                ? 'ست ممارسات تخصصية متكاملة للقطاع الحكومي والمؤسسات'
                : 'Six Specialized Practice Areas Engineered for Institutional Impact'}
            </h2>
          </div>

          <Link
            href={locale === 'ar' ? '/ar/contact' : '/contact'}
            className="reveal-item reveal-delay-3 btn-slide-trigger inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
          >
            <span>{t.requestRfp}</span>
            <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
          </Link>
        </div>

        {/* Full-Width Editorial Practice Chapters */}
        <div className="divide-y divide-[#DCE2DE] dark:divide-[#18382F]">
          {SERVICES_CATALOG.map((svc, idx) => {
            const serviceHref = locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`;
            const isDataAi = svc.slug === 'data-ai';
            const delayClass = `reveal-delay-${Math.min(idx + 1, 4)}`;

            return (
              <article
                key={svc.slug}
                className={`reveal-item ${delayClass} py-12 md:py-16 transition-colors ${
                  isDataAi
                    ? 'my-6 px-6 sm:px-10 rounded-xl bg-[#071C17] dark:bg-[#0B2922] text-[#F4F7F5] border border-[#174B3E]'
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left 2 Columns: Oversized Numeral */}
                  <div className="lg:col-span-2 flex lg:flex-col justify-between items-baseline gap-2">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums leading-none ${
                        isDataAi ? 'text-[#18C6A0]' : 'text-[#174B3E] dark:text-[#18C6A0]'
                      }`}
                    >
                      {svc.number}
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider ${
                        isDataAi ? 'text-[#18C6A0]' : 'text-[#697671] dark:text-[#7E968E]'
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
                        isDataAi ? 'text-[#F4F7F5]' : 'text-[#17211D] dark:text-[#F4F7F5]'
                      }`}
                    >
                      <Link
                        href={serviceHref}
                        className="hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                      >
                        {svc.title[locale]}
                      </Link>
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isDataAi ? 'text-[#B8C7C2]' : 'text-[#43524C] dark:text-[#A5B8B1]'
                      }`}
                    >
                      {svc.overview[locale]}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={serviceHref}
                        prefetch={true}
                        className={`btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm ${
                          isDataAi
                            ? 'text-[#18C6A0] hover:text-white'
                            : 'text-[#174B3E] dark:text-[#18C6A0] hover:underline'
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
                        ? 'bg-[#0B2922] dark:bg-[#071C17] border-[#174B3E]'
                        : 'bg-white dark:bg-[#0B2922] border-[#DCE2DE] dark:border-[#18382F]'
                    }`}
                  >
                    <div
                      className={`text-xs font-mono uppercase tracking-wider mb-4 ${
                        isDataAi ? 'text-[#18C6A0]' : 'text-[#697671] dark:text-[#7E968E]'
                      }`}
                    >
                      {t.coreCapabilities}
                    </div>
                    <ul className="space-y-3">
                      {svc.capabilities.slice(0, 4).map((cap, capIdx) => (
                        <li
                          key={capIdx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            isDataAi ? 'text-[#D8E6E2]' : 'text-[#17211D] dark:text-[#D8E6E2]'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDataAi ? 'text-[#18C6A0]' : 'text-[#174B3E] dark:text-[#18C6A0]'
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
