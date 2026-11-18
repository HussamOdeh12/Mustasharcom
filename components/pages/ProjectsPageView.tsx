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
      <div className="border-b border-[#DCE2DE] dark:border-[#18382F] bg-[#EFECE5] dark:bg-[#051410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsProjects }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero with Full-Width 4-Column Metric Ledger */}
      <section className="py-20 md:py-28 bg-[#071C17] text-[#F4F7F5] border-b border-[#18382F] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 60% at 75% 20%, rgba(24, 198, 160, 0.14) 0%, rgba(7, 28, 23, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#18C6A0] block hero-stagger-1">
              {locale === 'ar' ? 'سجل الأعمال والخبرات المعتمدة (2019 – 2026)' : 'Verified Engagement Track Record (2019 – 2026)'}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F4F7F5] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'مشاريع واستشارات القطاع الحكومي وشبه الحكومي'
                : 'Public Sector Engagements & Client Mandates'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B8C7C2] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'قائمة شاملة وموثقة تضم 17 عقداً ومشروعاً نفذتها أو تديرها مستشاركم لصالح دوائر وهيئات حكومية في إمارة أبوظبي بقيمة تعاقدية تتجاوز 69 مليون درهم.'
                : 'An authentic registry of 17 IT consultancy, application engineering, data analytics, and technical support contracts executed for Abu Dhabi government and semi-government entities.'}
            </p>
          </div>

          {/* 4-Column Sovereign Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-12 border-t border-[#18382F] hero-stagger-4">
            <div>
              <span className="text-3xl sm:text-4xl md:text-[42px] font-bold font-mono tabular-nums text-[#F4F7F5] tracking-tight block">
                {COMPANY_PROFILE.metrics.quantifiableValue}
              </span>
              <span className="text-xs text-[#A5B8B1] mt-2 block">
                {t.statValue}
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-[42px] font-bold font-mono tabular-nums text-[#18C6A0] tracking-tight block">
                {COMPANY_PROFILE.metrics.engagements}
              </span>
              <span className="text-xs text-[#A5B8B1] mt-2 block">
                {t.statEngagements}
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-[42px] font-bold font-mono tabular-nums text-[#18C6A0] tracking-tight block">
                {COMPANY_PROFILE.metrics.govPercentage}
              </span>
              <span className="text-xs text-[#A5B8B1] mt-2 block">
                {t.statGov}
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl md:text-[42px] font-bold font-mono tabular-nums text-[#F4F7F5] tracking-tight block">
                {COMPANY_PROFILE.metrics.activeProjects}
              </span>
              <span className="text-xs text-[#A5B8B1] mt-2 block">
                {t.statActive}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Explorer Table */}
      <SectionReveal>
        <section className="py-20 md:py-28 bg-[#F7F5F0] dark:bg-[#071C17]" aria-labelledby="projects-registry-heading">
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
