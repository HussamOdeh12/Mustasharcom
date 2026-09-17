import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import LeadershipSection from '../sections/LeadershipSection';
import CredentialsSection from '../sections/CredentialsSection';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import { Target, Compass } from 'lucide-react';

interface AboutPageViewProps {
  locale: Locale;
}

export default function AboutPageView({ locale }: AboutPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs Header Strip */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: t.aboutMustasharcom }]}
            />
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-14 md:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-zinc-800 text-[#6B1426] dark:text-[#F38C9C] border border-zinc-200 dark:border-zinc-700 mb-4 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#008751]" />
                <span>{COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]}</span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
                {locale === 'ar'
                  ? 'تمكين التحول الرقمي للقطاع الحكومي والشركات'
                  : 'Empowering Digital Transformation for Government & Enterprise'}
              </h1>

              <div className="pl-4 border-l-2 border-[#6B1426] dark:border-[#8B1E3F] rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 py-1 mb-6">
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium italic leading-relaxed">
                  &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {COMPANY_PROFILE.consultancyApproach[locale]}
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Pillars: Mission & Philosophy */}
        <SectionReveal>
          <section className="py-16 bg-white dark:bg-[#0B0F19] border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Box */}
                <div className="p-8 rounded-2xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6B1426]/10 text-[#6B1426] dark:bg-[#6B1426]/20 dark:text-[#F38C9C] flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {t.ourMission}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {COMPANY_PROFILE.mission[locale]}
                  </p>
                </div>

                {/* Consultancy Philosophy Box */}
                <div className="p-8 rounded-2xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#008751] dark:bg-emerald-950/60 dark:text-[#34D399] flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {t.ourApproach}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {locale === 'ar'
                      ? 'نعمل كشريك استشاري يدمج الفهم العميق لبيئة العمل المؤسسية مع خبرة التنفيذ الميدانية. نركز على استدامة الأنظمة، تدريب الكوادر الوطنية، وضمان أعلى عائد على الاستثمارات التقنية.'
                      : 'We act as true consultants who integrate organizational understanding with on-the-ground technical execution. We emphasize system maintainability, knowledge transfer, and maximizing institutional return on IT investments.'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Credentials & Compliance Details */}
        <SectionReveal>
          <CredentialsSection locale={locale} />
        </SectionReveal>

        {/* Leadership Team */}
        <SectionReveal>
          <LeadershipSection locale={locale} />
        </SectionReveal>

        {/* CTA Banner */}
        <SectionReveal>
          <CtaBanner locale={locale} />
        </SectionReveal>
      </main>
  );
}
