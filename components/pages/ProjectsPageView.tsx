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
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs */}
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsProjects }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero with Full-Width 4-Column Metric Ledger */}
      <section className="py-16 md:py-24 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#2DD4A4] tracking-wide block">
              {locale === 'ar' ? 'سجل الأعمال والخبرات المعتمدة (2019 – 2026)' : 'Verified Engagement Track Record (2019 – 2026)'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {locale === 'ar'
                ? 'مشاريع واستشارات القطاع الحكومي وشبه الحكومي'
                : 'Public Sector Engagements & Client Mandates'}
            </h1>
            <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed">
              {locale === 'ar'
                ? 'قائمة شاملة وموثقة تضم 17 عقداً ومشروعاً نفذتها أو تديرها مستشاركم لصالح دوائر وهيئات حكومية في إمارة أبوظبي بقيمة تعاقدية تتجاوز 69 مليون درهم.'
                : 'An authentic registry of 17 IT consultancy, application engineering, data analytics, and technical support contracts executed for Abu Dhabi government and semi-government entities.'}
            </p>
          </div>

          {/* 4-Column Sovereign Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[#1A2E26]">
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#F4F6F5] block">
                {COMPANY_PROFILE.metrics.quantifiableValue}
              </span>
              <span className="text-xs text-[#8FA19A] mt-1.5 block">
                {t.statValue}
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#2DD4A4] block">
                {COMPANY_PROFILE.metrics.engagements}
              </span>
              <span className="text-xs text-[#8FA19A] mt-1.5 block">
                {t.statEngagements}
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#C6A355] block">
                {COMPANY_PROFILE.metrics.govPercentage}
              </span>
              <span className="text-xs text-[#8FA19A] mt-1.5 block">
                {t.statGov}
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#F4F6F5] block">
                {COMPANY_PROFILE.metrics.activeProjects}
              </span>
              <span className="text-xs text-[#8FA19A] mt-1.5 block">
                {t.statActive}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Explorer Table */}
      <SectionReveal>
        <section className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#07110E]" aria-labelledby="projects-registry-heading">
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
