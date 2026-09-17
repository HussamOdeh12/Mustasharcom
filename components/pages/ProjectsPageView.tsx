import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ProjectsExplorer from '../projects/ProjectsExplorer';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ProjectsPageViewProps {
  locale: Locale;
}

export default function ProjectsPageView({ locale }: ProjectsPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: t.breadcrumbsProjects }]}
            />
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-14 md:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] mb-2 block">
                {locale === 'ar' ? 'سجل الأعمال والخبرات المعتمدة' : 'Verified Engagement Track Record'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                {locale === 'ar'
                  ? 'مشاريع واستشارات القطاع الحكومي وشبه الحكومي'
                  : 'Selected Public Sector Engagements & Client Mandates'}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {locale === 'ar'
                  ? 'قائمة شاملة وموثقة تضم 17 عقداً ومشروعاً نفذتها أو تديرها مستشاركم لصالح دوائر وهيئات حكومية في إمارة أبوظبي بقيمة تعاقدية تتجاوز 69 مليون درهم.'
                  : 'An authentic registry of 17 major IT consulting, application support, data analytics, and infrastructure contracts executed for Abu Dhabi government and semi-government entities.'}
              </p>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100 block">
                  {COMPANY_PROFILE.metrics.quantifiableValue}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                  {t.statValue}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#6B1426] dark:text-[#F38C9C] block">
                  {COMPANY_PROFILE.metrics.engagements}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                  {t.statEngagements}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#008751] dark:text-[#34D399] block">
                  {COMPANY_PROFILE.metrics.govPercentage}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                  {t.statGov}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100 block">
                  {COMPANY_PROFILE.metrics.activeProjects}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 block">
                  {t.statActive}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Explorer Table */}
        <SectionReveal>
          <section className="py-14 md:py-20" aria-labelledby="projects-registry-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="projects-registry-heading" className="sr-only">
                {locale === 'ar' ? 'سجل المشاريع والتعاقدات الموثقة' : 'Verified Engagement & Project Registry'}
              </h2>
              <ProjectsExplorer locale={locale} />
            </div>
          </section>
        </SectionReveal>

        {/* CTA Banner */}
        <SectionReveal>
          <CtaBanner locale={locale} />
        </SectionReveal>
      </main>
  );
}
