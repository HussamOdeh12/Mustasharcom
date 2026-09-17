import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  BarChart3,
  Layers,
  ShieldCheck,
  Wrench,
  Headset,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { Locale, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ServicesGridProps {
  locale: Locale;
  showAll?: boolean;
}

const iconsMap: Record<string, React.ReactNode> = {
  'it-consulting': <Briefcase className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />,
  'data-ai': <BarChart3 className="w-5 h-5 text-[#008751] dark:text-[#34D399]" />,
  'systems-applications': <Layers className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />,
  'infrastructure-security': <ShieldCheck className="w-5 h-5 text-[#008751] dark:text-[#34D399]" />,
  'technical-support': <Wrench className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />,
  'contact-center': <Headset className="w-5 h-5 text-[#008751] dark:text-[#34D399]" />,
};

export default function ServicesGrid({ locale, showAll = true }: ServicesGridProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
              {locale === 'ar' ? 'الخدمات الاستشارية والممارسات التخصصية' : 'Consulting Practices & Solutions'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {locale === 'ar'
                ? 'حلول تقنية متكاملة مصممة للقطاع الحكومي والشركات'
                : 'Integrated Informatics Solutions Tailored for Government & Enterprise'}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {locale === 'ar'
                ? 'نجمع بين الاستشارات الاستراتيجية والهندسة التطبيقية عبر 6 ممارسات رئيسية مدعومة بخبرات ميدانية معتمدة في إمارة أبوظبي.'
                : 'Bridging strategic advisory and operational engineering across 6 core practice areas, backed by verified track records in Abu Dhabi.'}
            </p>
          </div>

          <Link
            href={locale === 'ar' ? '/ar/services' : '/services'}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] hover:underline"
          >
            <span>{t.viewAllServices}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_CATALOG.map((svc) => {
            const serviceHref = locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`;
            const isDataAi = svc.slug === 'data-ai';

            return (
              <div
                key={svc.slug}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-200 bg-[#FDFCFB] dark:bg-[#111726] hover-card-lift ${
                  isDataAi
                    ? 'border-[#008751]/40 dark:border-[#008751]/60 shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                } hover:shadow-md`}
              >
                <div>
                  {/* Top Bar: Number + Icon + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
                        {svc.number}
                      </span>
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform">
                        {iconsMap[svc.slug]}
                      </div>
                    </div>

                    {isDataAi && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#008751]/10 text-[#008751] dark:bg-[#008751]/20 dark:text-[#34D399]">
                        <Sparkles className="w-3 h-3" />
                        <span>{locale === 'ar' ? 'تركيز استراتيجي' : 'Strategic Focus'}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2.5 group-hover:text-[#6B1426] dark:group-hover:text-[#F38C9C] transition-colors leading-snug">
                    <Link href={serviceHref} className="focus:outline-none">
                      {svc.title[locale]}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {svc.shortDesc[locale]}
                  </p>

                  {/* Highlight Capabilities */}
                  <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mb-6">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                      {t.coreCapabilities}
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {svc.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#6B1426] dark:text-[#F38C9C] mt-1 shrink-0 font-bold">•</span>
                          <span className="line-clamp-2">{cap[locale].split(':')[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="pt-2">
                  <Link
                    href={serviceHref}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1426] dark:text-[#F38C9C] group-hover:underline"
                  >
                    <span>{locale === 'ar' ? 'تفاصيل الممارسة ونطاق العمل' : 'Practice Details & Scope'}</span>
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
