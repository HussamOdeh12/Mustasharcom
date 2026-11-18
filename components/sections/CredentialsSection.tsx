import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface CredentialsSectionProps {
  locale: Locale;
}

export default function CredentialsSection({ locale }: CredentialsSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  const sovereignLedgers = [
    {
      index: '01',
      domain: locale === 'ar' ? 'نظام إدارة الجودة العالمي' : 'QUALITY MANAGEMENT SYSTEM',
      primaryCode: COMPANY_PROFILE.certifications.iso.standard,
      title: COMPANY_PROFILE.certifications.iso.system[locale],
      metaLabel1: locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.',
      metaValue1: COMPANY_PROFILE.certifications.iso.certificateNumber,
      metaLabel2: locale === 'ar' ? 'النطاق المعتمد' : 'Certified System',
      metaValue2: COMPANY_PROFILE.certifications.iso.system[locale],
      validityLabel: locale === 'ar' ? 'صالحة حتى' : 'Valid Until',
      validityValue:
        locale === 'ar'
          ? COMPANY_PROFILE.certifications.iso.validityAr
          : COMPANY_PROFILE.certifications.iso.validity,
    },
    {
      index: '02',
      domain: locale === 'ar' ? 'برنامج القيمة المحلية المضافة' : 'NATIONAL IN-COUNTRY VALUE (ICV)',
      primaryCode: `ICV ${COMPANY_PROFILE.certifications.icv.score}`,
      title: COMPANY_PROFILE.certifications.icv.category[locale],
      metaLabel1: locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.',
      metaValue1: COMPANY_PROFILE.certifications.icv.certificateNumber,
      metaLabel2: locale === 'ar' ? 'التصنيف' : 'Classification',
      metaValue2: COMPANY_PROFILE.certifications.icv.category[locale],
      validityLabel: locale === 'ar' ? 'صالحة حتى' : 'Valid Until',
      validityValue:
        locale === 'ar'
          ? COMPANY_PROFILE.certifications.icv.validityAr
          : COMPANY_PROFILE.certifications.icv.validity,
    },
    {
      index: '03',
      domain: locale === 'ar' ? 'الترخيص التجاري الرسمي — أبوظبي' : 'ABU DHABI COMMERCIAL LICENCE',
      primaryCode: COMPANY_PROFILE.licence.number,
      title: locale === 'ar' ? COMPANY_PROFILE.licence.authorityAr : COMPANY_PROFILE.licence.authority,
      metaLabel1: locale === 'ar' ? 'الملكية السيادية' : 'Sovereign Ownership',
      metaValue1: COMPANY_PROFILE.ownership[locale],
      metaLabel2: locale === 'ar' ? 'المقر الرئيسي' : 'Jurisdiction',
      metaValue2: `${COMPANY_PROFILE.location.city[locale]}, ${COMPANY_PROFILE.location.country[locale]}`,
      validityLabel: locale === 'ar' ? 'صالحة حتى' : 'Valid Until',
      validityValue:
        locale === 'ar'
          ? COMPANY_PROFILE.licence.validityAr
          : COMPANY_PROFILE.licence.validity,
    },
  ];

  return (
    <section
      className="py-24 md:py-36 bg-[#F7F5F0] dark:bg-[#071C17] border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="reveal-item reveal-delay-1 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-20 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
              07 / {t.qualityCompliance}
            </span>
            <h2
              className="font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'منظومة التراخيص وشهادات الجودة السيادية المعتمدة'
                : 'Verified Licensing, Quality Management & In-Country Value'}
            </h2>
          </div>

          <Link
            href={complianceHref}
            className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
          >
            <span>{locale === 'ar' ? 'عرض سجل الجودة والامتثال الكامل' : 'View Full Compliance Ledger'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>
        </div>

        {/* Full-Width Architectural Credential Rows */}
        <div className="reveal-item reveal-delay-2 divide-y divide-[#DCE3DF] dark:divide-[#174B3E] border-b border-[#DCE3DF] dark:border-[#174B3E]">
          {sovereignLedgers.map((item) => (
            <div
              key={item.index}
              className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline"
            >
              {/* Col 1: Index & Domain */}
              <div className="lg:col-span-3 space-y-1">
                <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0] block">
                  /{item.index} · {item.domain}
                </span>
              </div>

              {/* Col 2: Large Monospace Identifier & Scope */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-3xl sm:text-4xl font-bold font-mono tabular-nums text-[#17211D] dark:text-[#F4F7F5] tracking-tight">
                  {item.primaryCode}
                </div>
                <p className="text-sm sm:text-base text-[#3E544C] dark:text-[#A3B8B0] leading-relaxed">
                  {item.title}
                </p>
              </div>

              {/* Col 3: Verification Metadata Table */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#DCE3DF] dark:border-[#174B3E] text-xs">
                <div>
                  <div className="text-[#697671] dark:text-[#A3B8B0]">{item.metaLabel1}</div>
                  <div className="font-mono font-bold text-[#17211D] dark:text-[#F4F7F5] mt-1">
                    {item.metaValue1}
                  </div>
                </div>

                <div>
                  <div className="text-[#697671] dark:text-[#A3B8B0]">{item.validityLabel}</div>
                  <div className="font-mono font-bold text-[#174B3E] dark:text-[#18C6A0] mt-1">
                    {item.validityValue}
                  </div>
                </div>

                <div className="col-span-2 pt-2 border-t border-[#DCE3DF]/60 dark:border-[#174B3E]/60 flex items-center justify-between">
                  <span className="text-[#697671] dark:text-[#A3B8B0]">{item.metaLabel2}</span>
                  <span className="font-medium text-[#17211D] dark:text-[#F4F7F5]">{item.metaValue2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7 Licensed Economic Activities Ledger */}
        <div className="reveal-item reveal-delay-3 mt-14 p-8 sm:p-10 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DCE3DF] dark:border-[#174B3E]">
            <div>
              <span className="text-xs font-mono text-[#174B3E] dark:text-[#18C6A0] uppercase tracking-wider block">
                ADRA COMMERCIAL LICENCE CN-2769971
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#17211D] dark:text-[#F4F7F5] mt-1">
                {locale === 'ar'
                  ? 'الأنشطة الاقتصادية والتقنية السبعة المرخصة رسمياً في إمارة أبوظبي'
                  : 'Seven Formally Licensed Economic & Informatics Activities'}
              </h3>
            </div>
            <Link
              href={complianceHref}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline shrink-0"
            >
              <span>{locale === 'ar' ? 'التفاصيل القانونية' : 'VERIFY LICENCE'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {COMPANY_PROFILE.licence.activities[locale].map((act, index) => (
              <div key={index} className="flex items-baseline gap-3 text-xs sm:text-sm text-[#17211D] dark:text-[#DCE6E2]">
                <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0] shrink-0">
                  0{index + 1}.
                </span>
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
