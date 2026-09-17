import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import { Shield, Award, FileCheck, CheckCircle2, Building, Calendar, Scale } from 'lucide-react';

interface CompliancePageViewProps {
  locale: Locale;
}

export default function CompliancePageView({ locale }: CompliancePageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: t.breadcrumbsQuality }]}
            />
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-14 md:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] mb-2 block">
                {t.qualityCompliance}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                {locale === 'ar'
                  ? 'منظومة الجودة، الامتثال والاعتماديات السيادية'
                  : 'Sovereign Quality, Procurement & Governance Standards'}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {locale === 'ar'
                  ? 'تلتزم مستشاركم بأعلى المعايير التنظيمية الصادرة عن حكومة أبوظبي والمواصفات الدولية، مما يمنح شركاءنا الثقة التامة في أمن المعلومات وحوكمة المشاريع.'
                  : 'Mustasharcom operates under rigorous governance guidelines recognized by Abu Dhabi public authorities and global standardization bodies, providing government entities with certified delivery assurance.'}
              </p>
            </div>
          </div>
        </section>

        {/* 3 Main Compliance Cards */}
        <SectionReveal>
          <section className="py-16 bg-white dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Card 1: ISO 9001:2015 */}
            <div className="p-8 rounded-3xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#6B1426]/10 text-[#6B1426] dark:bg-[#6B1426]/20 dark:text-[#F38C9C]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">INTERNATIONAL STANDARD</span>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {COMPANY_PROFILE.certifications.iso.standard}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة نظام إدارة الجودة المعترف بها دولياً لضمان اتساق الخدمات، والتحسين المستمر، وإدارة المخاطر في مشاريع البرمجيات والاستشارات.'
                    : 'Internationally recognized Quality Management System (QMS) ensuring procedural rigor, continuous operational review, and systematic risk management across all IT projects.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
                    <span>{locale === 'ar' ? 'إجراءات تدقيق موثقة' : 'Standardized Delivery Frameworks'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
                    <span>{locale === 'ar' ? 'متابعة مؤشرات الأداء SLA' : 'Contractual SLA Telemetry'}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-80 p-5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.certifications.iso.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'النظام المعتمد' : 'System Standard'}</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.certifications.iso.standard}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {COMPANY_PROFILE.certifications.iso.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: In-Country Value (ICV) */}
            <div className="p-8 rounded-3xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-100 text-[#008751] dark:bg-emerald-950/60 dark:text-[#34D399]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">NATIONAL PROCUREMENT VALUE</span>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      In-Country Value (ICV) {COMPANY_PROFILE.certifications.icv.score}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة برنامج القيمة المحلية المضافة الوطنية بنسبة 55.03%، مما يمنح شركاءنا ميزة تنافسية وأولوية في المناقصات الحكومية وشبه الحكومية في دولة الإمارات.'
                    : 'Certified under the UAE National In-Country Value (ICV) program with an exceptional score of 55.03%, empowering public sector clients with maximum procurement compliance and domestic economic contribution.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
                    <span>{COMPANY_PROFILE.certifications.icv.category[locale]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
                    <span>{locale === 'ar' ? 'أولوية في المناقصات الاتحادية والمحلية' : 'Preferred Procurement Priority'}</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-80 p-5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'نسبة القيمة المضافة' : 'ICV Score'}</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {COMPANY_PROFILE.certifications.icv.score}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.certifications.icv.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.certifications.icv.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: ADRA Commercial Licence */}
            <div className="p-8 rounded-3xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">REGULATORY LICENCE</span>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      Abu Dhabi Licence CN-2769971
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {locale === 'ar'
                    ? 'رخصة تجارية صادرة عن دائرة التنمية الاقتصادية في أبوظبي (ADRA) سارية المفعول حتى 17 أبريل 2031، مملوكة بنسبة 100% لمواطني الدولة.'
                    : 'Commercial licence issued by the Abu Dhabi Department of Economic Development (ADRA), valid until 17 April 2031, with 100% UAE National ownership.'}
                </p>

                {/* 7 Activities */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    {locale === 'ar' ? 'الأنشطة المرخصة قانونياً:' : 'Authorized Economic Activities:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {COMPANY_PROFILE.licence.activities[locale].map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#008751] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-80 p-5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'رقم الرخصة' : 'Licence No.'}</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.licence.number}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-100 dark:border-zinc-700">
                  <span className="text-zinc-500">{locale === 'ar' ? 'الملكية' : 'Ownership'}</span>
                  <span className="font-semibold text-[#008751] dark:text-[#34D399]">
                    {COMPANY_PROFILE.ownership[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {COMPANY_PROFILE.licence.validity}
                  </span>
                </div>
              </div>
            </div>
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
