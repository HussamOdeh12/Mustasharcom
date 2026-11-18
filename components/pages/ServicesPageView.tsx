import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ServicesGrid from '../sections/ServicesGrid';
import DataAiSpotlight from '../sections/DataAiSpotlight';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ServicesPageViewProps {
  locale: Locale;
}

export default function ServicesPageView({ locale }: ServicesPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs */}
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsServices }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-16 md:py-24 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-semibold text-[#2DD4A4] tracking-wide block">
              {locale === 'ar' ? 'الممارسات الاستشارية والتقنية (01 — 06)' : 'Consulting & Engineering Practices (01 — 06)'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {locale === 'ar'
                ? 'خدمات استشارية وهندسية متكاملة لمؤسسات أبوظبي'
                : 'Comprehensive Consulting & Informatics Engineering Practices'}
            </h1>
            <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed">
              {locale === 'ar'
                ? 'تقدم مستشاركم منظومة خدمات تخصصية تغطي كامل دورة حياة التكنولوجيا في المؤسسات: من الاستشارات الاستراتيجية وتحليل البيانات، إلى تطوير الأنظمة، وحلول البنية التحتية، والدعم الفني، وتشغيل مراكز الاتصال.'
                : 'Mustasharcom delivers an integrated practice ecosystem spanning the complete institutional technology lifecycle — from strategic IT advisory and executive data analytics to ERP platforms, sovereign infrastructure, SLA technical support, and Smart Hub contact center operations.'}
            </p>
            <div className="pt-2 text-xs font-mono text-[#8FA19A]">
              ADRA Licence {COMPANY_PROFILE.licence.number} · {COMPANY_PROFILE.certifications.iso.standard} · ICV {COMPANY_PROFILE.certifications.icv.score}
            </div>
          </div>
        </div>
      </section>

      {/* Services 6-Practice Grid */}
      <SectionReveal>
        <ServicesGrid locale={locale} />
      </SectionReveal>

      {/* Data & AI Spotlight */}
      <SectionReveal>
        <DataAiSpotlight locale={locale} />
      </SectionReveal>

      {/* CTA Banner */}
      <SectionReveal>
        <CtaBanner locale={locale} />
      </SectionReveal>
    </main>
  );
}
