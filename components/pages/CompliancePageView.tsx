import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface CompliancePageViewProps {
  locale: Locale;
}

export default function CompliancePageView({ locale }: CompliancePageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs */}
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsQuality }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-16 md:py-24 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-semibold text-[#2DD4A4] tracking-wide block">
              {t.qualityCompliance}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {locale === 'ar'
                ? 'منظومة الجودة، الامتثال والاعتماديات السيادية'
                : 'Sovereign Quality, Procurement & Governance Standards'}
            </h1>
            <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed">
              {locale === 'ar'
                ? 'تلتزم مستشاركم بأعلى المعايير التنظيمية الصادرة عن حكومة أبوظبي والمواصفات الدولية، مما يمنح شركاءنا الثقة التامة في أمن المعلومات وحوكمة المشاريع.'
                : 'Mustasharcom operates under rigorous governance guidelines recognized by Abu Dhabi public authorities and international standardization bodies, providing government entities with certified delivery assurance.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Architectural Compliance Dossiers */}
      <SectionReveal>
        <section className="py-20 bg-[#FAF8F5] dark:bg-[#07110E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Dossier 1: ISO 9001:2015 */}
            <div className="p-8 sm:p-10 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                  01 · INTERNATIONAL QUALITY MANAGEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                  {COMPANY_PROFILE.certifications.iso.standard}
                </h2>
                <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة نظام إدارة الجودة المعترف بها دولياً لضمان اتساق الخدمات، والتحسين المستمر، وإدارة المخاطر في مشاريع البرمجيات والاستشارات.'
                    : 'Internationally recognized Quality Management System (QMS) ensuring procedural rigor, continuous operational review, and systematic risk management across all IT projects.'}
                </p>
                <div className="pt-2 text-xs text-[#687670] dark:text-[#8FA19A]">
                  {locale === 'ar'
                    ? 'إجراءات تدقيق موثقة · متابعة مؤشرات الأداء SLA · مراجعة دورية للجودة'
                    : 'Standardized Delivery Frameworks · Contractual SLA Telemetry · Continuous Quality Audits'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-lg bg-white dark:bg-[#07110E] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-3 text-xs">
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {COMPANY_PROFILE.certifications.iso.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'النظام المعتمد' : 'System Standard'}</span>
                  <span className="font-mono font-medium text-[#0B1713] dark:text-[#F4F6F5]">
                    {COMPANY_PROFILE.certifications.iso.standard}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#007A4D] dark:text-[#2DD4A4]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.iso.validityAr : COMPANY_PROFILE.certifications.iso.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 2: In-Country Value (ICV) */}
            <div className="p-8 sm:p-10 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                  02 · NATIONAL PROCUREMENT VALUE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                  In-Country Value (ICV) {COMPANY_PROFILE.certifications.icv.score}
                </h2>
                <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة برنامج القيمة المحلية المضافة الوطنية بنسبة 55.03%، مما يمنح شركاءنا ميزة تنافسية وأولوية في المناقصات الحكومية وشبه الحكومية في دولة الإمارات.'
                    : 'Certified under the UAE National In-Country Value (ICV) program with a verified score of 55.03%, empowering public sector clients with procurement compliance and domestic economic contribution.'}
                </p>
                <div className="pt-2 text-xs text-[#687670] dark:text-[#8FA19A]">
                  {COMPANY_PROFILE.certifications.icv.category[locale]} · {locale === 'ar' ? 'أولوية في المناقصات الاتحادية والمحلية' : 'Preferred Public Procurement Priority'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-lg bg-white dark:bg-[#07110E] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-3 text-xs">
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'نسبة القيمة المضافة' : 'ICV Score'}</span>
                  <span className="font-mono font-bold text-[#007A4D] dark:text-[#2DD4A4] text-sm">
                    {COMPANY_PROFILE.certifications.icv.score}
                  </span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {COMPANY_PROFILE.certifications.icv.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#0B1713] dark:text-[#F4F6F5]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.icv.validityAr : COMPANY_PROFILE.certifications.icv.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 3: ADRA Commercial Licence */}
            <div className="p-8 sm:p-10 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    03 · REGULATORY COMMERCIAL LICENCE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                    Abu Dhabi Licence {COMPANY_PROFILE.licence.number}
                  </h2>
                  <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                    {locale === 'ar'
                      ? 'رخصة تجارية صادرة عن دائرة التنمية الاقتصادية في أبوظبي (ADRA) سارية المفعول حتى 17 أبريل 2031، مملوكة بنسبة 100% لمواطني الدولة.'
                      : 'Commercial licence issued by the Abu Dhabi Department of Economic Development (ADRA), valid until 17 April 2031, with 100% UAE National ownership.'}
                  </p>
                </div>

                {/* 7 Licensed Activities */}
                <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26]">
                  <h3 className="text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-3">
                    {locale === 'ar' ? 'الأنشطة المرخصة قانونياً (01 — 07):' : 'Authorized Economic Activities (01 — 07):'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {COMPANY_PROFILE.licence.activities[locale].map((act, i) => (
                      <div key={i} className="flex items-baseline gap-2.5 text-[#2C3A34] dark:text-[#C8D4CE]">
                        <span className="font-mono text-[11px] text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                          0{i + 1}.
                        </span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-lg bg-white dark:bg-[#07110E] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-3 text-xs">
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'رقم الرخصة' : 'Licence No.'}</span>
                  <span className="font-mono font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {COMPANY_PROFILE.licence.number}
                  </span>
                </div>
                <div className="flex justify-between pb-2.5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'الملكية' : 'Ownership'}</span>
                  <span className="font-semibold text-[#007A4D] dark:text-[#2DD4A4]">
                    {COMPANY_PROFILE.ownership[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#687670] dark:text-[#8FA19A]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#0B1713] dark:text-[#F4F6F5]">
                    {locale === 'ar' ? COMPANY_PROFILE.licence.validityAr : COMPANY_PROFILE.licence.validity}
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
