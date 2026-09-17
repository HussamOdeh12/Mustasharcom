import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ServicesGrid from '../sections/ServicesGrid';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ServicesPageViewProps {
  locale: Locale;
}

export default function ServicesPageView({ locale }: ServicesPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: t.breadcrumbsServices }]}
            />
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-14 md:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] mb-2 block">
                {locale === 'ar' ? 'الممارسات الاستشارية والتقنية' : 'Consulting & Technical Practices'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                {locale === 'ar'
                  ? 'خدمات استشارية وهندسية شاملة لمؤسسات أبوظبي'
                  : 'Comprehensive Consulting & Engineering Practices'}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {locale === 'ar'
                  ? 'تقدم مستشاركم منظومة خدمات تخصصية تغطي كامل دورة حياة التكنولوجيا في المؤسسات: من الاستشارات الاستراتيجية وتحليل البيانات، إلى تطوير الأنظمة، وحلول البنية التحتية، والدعم الفني، وتشغيل مراكز الاتصال.'
                  : 'Mustasharcom delivers a structured practice ecosystem covering the entire institutional technology lifecycle: from strategic advisory and data intelligence to enterprise system development, resilient infrastructure, SLA support, and smart contact center operations.'}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <SectionReveal>
          <ServicesGrid locale={locale} />
        </SectionReveal>

        {/* CTA Banner */}
        <SectionReveal>
          <CtaBanner locale={locale} />
        </SectionReveal>
      </main>
  );
}
