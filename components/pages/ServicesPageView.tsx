import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ServicesCarousel from '../sections/ServicesCarousel';
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
      <div className="border-b border-[#DCE2DE] dark:border-[#18382F] bg-[#EFECE5] dark:bg-[#051410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsServices }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-20 md:py-28 bg-[#071C17] text-[#F4F7F5] border-b border-[#18382F] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 25%, rgba(24, 198, 160, 0.14) 0%, rgba(7, 28, 23, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#18C6A0] block hero-stagger-1">
              {locale === 'ar' ? 'الممارسات الاستشارية والتقنية (01 — 06)' : 'Consulting & Engineering Practices (01 — 06)'}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F4F7F5] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'خدمات استشارية وهندسية متكاملة لمؤسسات أبوظبي'
                : 'Comprehensive Consulting & Informatics Engineering Practices'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B8C7C2] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'تقدم مستشاركم منظومة خدمات تخصصية تغطي كامل دورة حياة التكنولوجيا في المؤسسات: من الاستشارات الاستراتيجية وتحليل البيانات، إلى تطوير الأنظمة، وحلول البنية التحتية، والدعم الفني، وتشغيل مراكز الاتصال.'
                : 'Mustasharcom delivers an integrated practice ecosystem spanning the complete institutional technology lifecycle — from strategic IT advisory and executive data analytics to ERP platforms, sovereign infrastructure, SLA technical support, and Smart Hub contact center operations.'}
            </p>
            <div className="pt-4 text-xs font-mono text-[#7E968E] hero-stagger-4">
              ADRA LICENCE {COMPANY_PROFILE.licence.number} · {COMPANY_PROFILE.certifications.iso.standard} · ICV {COMPANY_PROFILE.certifications.icv.score}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Carousel */}
      <SectionReveal>
        <ServicesCarousel locale={locale} />
      </SectionReveal>

      {/* Full-Width Editorial Practice Chapter Index */}
      <SectionReveal>
        <ServicesGrid locale={locale} />
      </SectionReveal>

      {/* Interactive Data & AI Spotlight */}
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
