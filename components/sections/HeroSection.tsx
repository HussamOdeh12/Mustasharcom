import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Shield, Award } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';
  const servicesHref = locale === 'ar' ? '/ar/services' : '/services';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  return (
    <section
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle architectural background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#6B1426_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-zinc-800/90 text-[#6B1426] dark:text-[#F38C9C] border border-zinc-200 dark:border-zinc-700/80 shadow-xs whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#008751]" />
            <span>{COMPANY_PROFILE.ownership[locale]}</span>
          </span>

          <Link
            href={complianceHref}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 shadow-xs hover:border-[#6B1426] transition-colors whitespace-nowrap"
          >
            <Award className="w-3.5 h-3.5 text-[#008751]" />
            <span>ICV {COMPANY_PROFILE.certifications.icv.score}</span>
          </Link>

          <Link
            href={complianceHref}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 shadow-xs hover:border-[#6B1426] transition-colors whitespace-nowrap"
          >
            <Shield className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#F38C9C]" />
            <span>{COMPANY_PROFILE.certifications.iso.standard}</span>
          </Link>
        </div>

        {/* Primary Hero Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
              {locale === 'ar' ? (
                <>
                  استشارات تقنية المعلومات، حلول البيانات، و
                  <span className="text-[#6B1426] dark:text-[#F38C9C]"> التحول الرقمي للقطاع الحكومي</span>
                </>
              ) : (
                <>
                  IT Consultancy, Data & AI Solutions, and{' '}
                  <span className="text-[#6B1426] dark:text-[#F38C9C]">
                    Digital Transformation for Government
                  </span>
                </>
              )}
            </h1>

            {/* Official Profile Quote */}
            <div className="relative pl-4 border-l-2 border-[#6B1426] dark:border-[#8B1E3F] rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 py-1 my-1">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium italic leading-relaxed">
                &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {locale === 'ar'
                ? 'شريك استشاري وتقني موثوق لدوائر وهيئات حكومة أبوظبي منذ عام 2019. نقدم حلولاً متكاملة تشمل تحليل البيانات المتقدم، لوحات Power BI، أتمتة الإجراءات بالذكاء الاصطناعي (RPA)، دعم الأنظمة المؤسسية، وتشغيل مراكز الاتصال الذكية.'
                : 'A trusted strategic IT partner to Abu Dhabi government authorities since 2019. Delivering end-to-end capabilities spanning advanced data analytics, executive Power BI telemetry, AI-driven RPA workflow automation, enterprise application support, and smart contact center operations.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-sm font-semibold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{t.requestRfp}</span>
                <ArrowIcon className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href={projectsHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold hover:border-[#6B1426] dark:hover:border-zinc-500 shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{t.viewProjects}</span>
              </Link>

              <Link
                href={servicesHref}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:text-[#6B1426] dark:hover:text-zinc-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{t.exploreServices}</span>
                <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Right Highlight Box: Verified Sovereign Telemetry */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] whitespace-nowrap">
                  {locale === 'ar' ? 'سجل الإنجاز المعتمد' : 'Verified Engagement Record'}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">2019 – 2026</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.metrics.quantifiableValue}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-tight">
                    {t.statValue}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <div className="text-2xl font-bold font-mono text-[#6B1426] dark:text-[#F38C9C]">
                    {COMPANY_PROFILE.metrics.engagements}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-tight">
                    {t.statEngagements}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <div className="text-2xl font-bold font-mono text-[#008751] dark:text-[#34D399]">
                    {COMPANY_PROFILE.metrics.govPercentage}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-tight">
                    {t.statGov}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.metrics.activeProjects}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-tight">
                    {t.statActive}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                <span>ADRA Lic. {COMPANY_PROFILE.licence.number}</span>
                <span className="text-[#008751] font-semibold">ICV 55.03%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
