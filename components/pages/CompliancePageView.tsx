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
      <div className="border-b border-[#D8E2E2] dark:border-[#0E2F33] bg-[#EAEFEF] dark:bg-[#021214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsQuality }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-20 md:py-28 bg-[#000D0E] text-[#F2F6F6] border-b border-[#0E2F33] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 25%, rgba(45, 212, 164, 0.13) 0%, rgba(0, 13, 14, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2DD4A4] block hero-stagger-1">
              {t.qualityCompliance}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F2F6F6] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'منظومة الجودة، الامتثال والاعتماديات السيادية'
                : 'Sovereign Quality, Procurement & Governance Standards'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B4C8CA] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'تلتزم مستشاركم بأعلى المعايير التنظيمية الصادرة عن حكومة أبوظبي والمواصفات الدولية، مما يمنح شركاءنا الثقة التامة في أمن المعلومات وحوكمة المشاريع.'
                : 'Mustasharcom operates under rigorous governance guidelines recognized by Abu Dhabi public authorities and international standardization bodies, providing government entities with certified delivery assurance.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Architectural Compliance Dossiers */}
      <SectionReveal>
        <section className="py-24 bg-[#F5F7F7] dark:bg-[#000D0E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Dossier 1: ISO 9001:2015 */}
            <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                  01 / INTERNATIONAL QUALITY MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#001517] dark:text-[#F2F6F6] font-mono tracking-tight">
                  {COMPANY_PROFILE.certifications.iso.standard}
                </h2>
                <p className="text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة نظام إدارة الجودة المعترف بها دولياً لضمان اتساق الخدمات، والتحسين المستمر، وإدارة المخاطر في مشاريع البرمجيات والاستشارات.'
                    : 'Internationally recognized Quality Management System (QMS) ensuring procedural rigor, continuous operational review, and systematic risk management across all IT projects.'}
                </p>
                <div className="pt-2 text-xs font-mono text-[#647A7C] dark:text-[#6C8587]">
                  {locale === 'ar'
                    ? 'إجراءات تدقيق موثقة · متابعة مؤشرات الأداء SLA · مراجعة دورية للجودة'
                    : 'Standardized Delivery Frameworks · Contractual SLA Telemetry · Continuous Quality Audits'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F5F7F7] dark:bg-[#000D0E] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#001517] dark:text-[#F2F6F6]">
                    {COMPANY_PROFILE.certifications.iso.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'النظام المعتمد' : 'System Standard'}</span>
                  <span className="font-mono font-medium text-[#001517] dark:text-[#F2F6F6]">
                    {COMPANY_PROFILE.certifications.iso.standard}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#008559] dark:text-[#2DD4A4]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.iso.validityAr : COMPANY_PROFILE.certifications.iso.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 2: In-Country Value (ICV) */}
            <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                  02 / NATIONAL PROCUREMENT VALUE
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#001517] dark:text-[#F2F6F6] font-mono tracking-tight">
                  In-Country Value (ICV) {COMPANY_PROFILE.certifications.icv.score}
                </h2>
                <p className="text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                  {locale === 'ar'
                    ? 'شهادة برنامج القيمة المحلية المضافة الوطنية بنسبة 55.03%، مما يمنح شركاءنا ميزة تنافسية وأولوية في المناقصات الحكومية وشبه الحكومية في دولة الإمارات.'
                    : 'Certified under the UAE National In-Country Value (ICV) program with a verified score of 55.03%, empowering public sector clients with procurement compliance and domestic economic contribution.'}
                </p>
                <div className="pt-2 text-xs font-mono text-[#647A7C] dark:text-[#6C8587]">
                  {COMPANY_PROFILE.certifications.icv.category[locale]} · {locale === 'ar' ? 'أولوية في المناقصات الاتحادية والمحلية' : 'Preferred Public Procurement Priority'}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F5F7F7] dark:bg-[#000D0E] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'نسبة القيمة المضافة' : 'ICV Score'}</span>
                  <span className="font-mono font-bold text-[#008559] dark:text-[#2DD4A4] text-sm">
                    {COMPANY_PROFILE.certifications.icv.score}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                  <span className="font-mono font-bold text-[#001517] dark:text-[#F2F6F6]">
                    {COMPANY_PROFILE.certifications.icv.certificateNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#001517] dark:text-[#F2F6F6]">
                    {locale === 'ar' ? COMPANY_PROFILE.certifications.icv.validityAr : COMPANY_PROFILE.certifications.icv.validity}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier 3: ADRA Commercial Licence */}
            <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                    03 / REGULATORY COMMERCIAL LICENCE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#001517] dark:text-[#F2F6F6] font-mono tracking-tight">
                    Abu Dhabi Licence {COMPANY_PROFILE.licence.number}
                  </h2>
                  <p className="text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                    {locale === 'ar'
                      ? 'رخصة تجارية صادرة عن دائرة التنمية الاقتصادية في أبوظبي (ADRA) سارية المفعول حتى 17 أبريل 2031، مملوكة بنسبة 100% لمواطني الدولة.'
                      : 'Commercial licence issued by the Abu Dhabi Department of Economic Development (ADRA), valid until 17 April 2031, with 100% UAE National ownership.'}
                  </p>
                </div>

                {/* 7 Licensed Activities */}
                <div className="pt-5 border-t border-[#D8E2E2] dark:border-[#0E2F33]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#001517] dark:text-[#F2F6F6] mb-4">
                    {locale === 'ar' ? 'الأنشطة المرخصة قانونياً (01 — 07):' : 'Authorized Economic Activities (01 — 07):'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    {COMPANY_PROFILE.licence.activities[locale].map((act, i) => (
                      <div key={i} className="flex items-baseline gap-2.5 text-[#001517] dark:text-[#D8E6E7]">
                        <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                          0{i + 1}.
                        </span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#F5F7F7] dark:bg-[#000D0E] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-3.5 text-xs">
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'رقم الرخصة' : 'Licence No.'}</span>
                  <span className="font-mono font-bold text-[#001517] dark:text-[#F2F6F6]">
                    {COMPANY_PROFILE.licence.number}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'الملكية' : 'Ownership'}</span>
                  <span className="font-semibold text-[#008559] dark:text-[#2DD4A4]">
                    {COMPANY_PROFILE.ownership[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{locale === 'ar' ? 'تاريخ الصلاحية' : 'Valid Until'}</span>
                  <span className="font-mono font-semibold text-[#001517] dark:text-[#F2F6F6]">
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
