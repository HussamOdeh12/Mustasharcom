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
      <div className="border-b border-[#DCE2DE] dark:border-[#18382F] bg-[#EFECE5] dark:bg-[#051410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsQuality }]}
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
              {t.qualityCompliance}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F4F7F5] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'منظومة الجودة، الامتثال والاعتماديات السيادية'
                : 'Sovereign Quality, Procurement & Governance Standards'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B8C7C2] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'تلتزم مستشاركم بأعلى المعايير التنظيمية الصادرة عن حكومة أبوظبي والمواصفات الدولية، مما يمنح شركاءنا الثقة التامة في أمن المعلومات وحوكمة المشاريع.'
                : 'Mustasharcom operates under rigorous governance guidelines recognized by Abu Dhabi public authorities and international standardization bodies, providing government entities with certified delivery assurance.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Architectural Compliance Dossiers */}
      <SectionReveal>
        <section className="py-24 bg-[#F7F5F0] dark:bg-[#071C17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Dossier 1: ISO 9001:2015 */}
            <div className="reveal-item reveal-delay-1 p-8 sm:p-12 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover-card-lift">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                  01 / INTERNATIONAL QUALITY MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#17211D] dark:text-[#F4F7F5] font-mono tracking-tight">
                  {COMPANY_PROFILE.certifications.iso.standard}
                </h2>
                <p className="text-base text-[#43524C] dark:text-[#A5B8B1] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة نظام إدارة الجودة المعترف بها دولياً لضمان اتساق الخدمات، والتحسين المستمر، وإدارة المخاطر في مشاريع البرمجيات والاستشارات.'
                    : 'Internationally recognized Quality Management System (QMS) ensuring procedural rigor, continuous operational review, and systematic risk management across all IT projects.'}
                </p>
                <div className="pt-2 text-xs font-mono text-[#697671] dark:text-[#7E968E]">
                  {locale === 'ar'
                    ? 'إجراءات تدقيق موثقة · متابعة مؤشرات الأداء SLA · مراجعة دورية للجودة'
                    : 'Standardized Delivery Frameworks · Contractual SLA Telemetry · Continuous Quality Audits'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F7F5F0] dark:bg-[#071C17] border border-[#DCE2DE] dark:border-[#18382F] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#17211D] dark:text-[#F4F7F5]">
                    {COMPANY_PROFILE.certifications.iso.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'النظام المعتمد' : 'System Standard'}</span>
                  <span className="font-mono font-medium text-[#17211D] dark:text-[#F4F7F5]">
                    {COMPANY_PROFILE.certifications.iso.standard}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#174B3E] dark:text-[#18C6A0]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.iso.validityAr : COMPANY_PROFILE.certifications.iso.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 2: In-Country Value (ICV) */}
            <div className="reveal-item reveal-delay-2 p-8 sm:p-12 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover-card-lift">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                  02 / NATIONAL PROCUREMENT VALUE
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#17211D] dark:text-[#F4F7F5] font-mono tracking-tight">
                  In-Country Value (ICV) {COMPANY_PROFILE.certifications.icv.score}
                </h2>
                <p className="text-base text-[#43524C] dark:text-[#A5B8B1] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة برنامج القيمة المحلية المضافة الوطنية بنسبة 55.03%، مما يمنح شركاءنا ميزة تنافسية وأولوية في المناقصات الحكومية وشبه الحكومية في دولة الإمارات.'
                    : 'Certified under the UAE National In-Country Value (ICV) program with a verified score of 55.03%, empowering public sector clients with procurement compliance and domestic economic contribution.'}
                </p>
                <div className="pt-2 text-xs font-mono text-[#697671] dark:text-[#7E968E]">
                  {COMPANY_PROFILE.certifications.icv.category[locale]} · {locale === 'ar' ? 'أولوية في المناقصات الاتحادية والمحلية' : 'Preferred Public Procurement Priority'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F7F5F0] dark:bg-[#071C17] border border-[#DCE2DE] dark:border-[#18382F] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'نسبة القيمة المضافة' : 'ICV Score'}</span>
                  <span className="font-mono font-bold text-[#174B3E] dark:text-[#18C6A0] text-sm">
                    {COMPANY_PROFILE.certifications.icv.score}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#17211D] dark:text-[#F4F7F5]">
                    {COMPANY_PROFILE.certifications.icv.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#17211D] dark:text-[#F4F7F5]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.icv.validityAr : COMPANY_PROFILE.certifications.icv.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 3: ADRA Commercial Licence */}
            <div className="reveal-item reveal-delay-3 p-8 sm:p-12 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover-card-lift">
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                    03 / REGULATORY COMMERCIAL LICENCE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#17211D] dark:text-[#F4F7F5] font-mono tracking-tight">
                    Abu Dhabi Licence {COMPANY_PROFILE.licence.number}
                  </h2>
                  <p className="text-base text-[#43524C] dark:text-[#A5B8B1] leading-relaxed">
                    {locale === 'ar'
                      ? 'رخصة تجارية صادرة عن دائرة التنمية الاقتصادية في أبوظبي (ADRA) سارية المفعول حتى 17 أبريل 2031، مملوكة بنسبة 100% لمواطني الدولة.'
                      : 'Commercial licence issued by the Abu Dhabi Department of Economic Development (ADRA), valid until 17 April 2031, with 100% UAE National ownership.'}
                  </p>
                </div>

                {/* 7 Licensed Activities */}
                <div className="pt-5 border-t border-[#DCE2DE] dark:border-[#18382F]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#17211D] dark:text-[#F4F7F5] mb-4">
                    {locale === 'ar' ? 'الأنشطة المرخصة قانونياً (01 — 07):' : 'Authorized Economic Activities (01 — 07):'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    {COMPANY_PROFILE.licence.activities[locale].map((act, i) => (
                      <div key={i} className="flex items-baseline gap-2.5 text-[#17211D] dark:text-[#D8E6E2]">
                        <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0] shrink-0">
                          0{i + 1}.
                        </span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F7F5F0] dark:bg-[#071C17] border border-[#DCE2DE] dark:border-[#18382F] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'رقم الرخصة' : 'Licence No.'}</span>
                  <span className="font-mono font-bold text-[#17211D] dark:text-[#F4F7F5]">
                    {COMPANY_PROFILE.licence.number}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#DCE2DE] dark:border-[#18382F]">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'الملكية' : 'Ownership'}</span>
                  <span className="font-semibold text-[#174B3E] dark:text-[#18C6A0]">
                    {COMPANY_PROFILE.ownership[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#697671] dark:text-[#7E968E]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#17211D] dark:text-[#F4F7F5]">
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
