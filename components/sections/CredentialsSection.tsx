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
      className="py-24 md:py-36 bg-[#F5F7F7] dark:bg-[#000D0E] border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-20 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
              07 / {t.qualityCompliance}
            </span>
            <h2
              className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'منظومة التراخيص وشهادات الجودة السيادية المعتمدة'
                : 'Verified Licensing, Quality Management & In-Country Value'}
            </h2>
          </div>

          <Link
            href={complianceHref}
            className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'عرض سجل الجودة والامتثال الكامل' : 'View Full Compliance Ledger'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>
        </div>

        {/* Full-Width Architectural Credential Rows (Eliminating Repetitive 3-Card Layout) */}
        <div className="divide-y divide-[#D8E2E2] dark:divide-[#0E2F33] border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          {sovereignLedgers.map((item) => (
            <div
              key={item.index}
              className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline"
            >
              {/* Col 1: Index & Domain */}
              <div className="lg:col-span-3 space-y-1">
                <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] block">
                  /{item.index} · {item.domain}
                </span>
              </div>

              {/* Col 2: Large Monospace Identifier & Scope */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-3xl sm:text-4xl font-bold font-mono tabular-nums text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                  {item.primaryCode}
                </div>
                <p className="text-sm sm:text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                  {item.title}
                </p>
              </div>

              {/* Col 3: Verification Metadata Table */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D8E2E2] dark:border-[#0E2F33] text-xs">
                <div>
                  <div className="text-[#647A7C] dark:text-[#6C8587]">{item.metaLabel1}</div>
                  <div className="font-mono font-bold text-[#001517] dark:text-[#F2F6F6] mt-1">
                    {item.metaValue1}
                  </div>
                </div>

                <div>
                  <div className="text-[#647A7C] dark:text-[#6C8587]">{item.validityLabel}</div>
                  <div className="font-mono font-bold text-[#008559] dark:text-[#2DD4A4] mt-1">
                    {item.validityValue}
                  </div>
                </div>

                <div className="col-span-2 pt-2 border-t border-[#D8E2E2]/60 dark:border-[#0E2F33]/60 flex items-center justify-between">
                  <span className="text-[#647A7C] dark:text-[#6C8587]">{item.metaLabel2}</span>
                  <span className="font-medium text-[#001517] dark:text-[#F2F6F6]">{item.metaValue2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7 Licensed Economic Activities Ledger */}
        <div className="mt-14 p-8 sm:p-10 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
            <div>
              <span className="text-xs font-mono text-[#6B1426] dark:text-[#2DD4A4] uppercase tracking-wider block">
                ADRA COMMERCIAL LICENCE CN-2769971
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#001517] dark:text-[#F2F6F6] mt-1">
                {locale === 'ar'
                  ? 'الأنشطة الاقتصادية والتقنية السبعة المرخصة رسمياً في إمارة أبوظبي'
                  : 'Seven Formally Licensed Economic & Informatics Activities'}
              </h3>
            </div>
            <Link
              href={complianceHref}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline shrink-0"
            >
              <span>{locale === 'ar' ? 'التفاصيل القانونية' : 'VERIFY LICENCE'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {COMPANY_PROFILE.licence.activities[locale].map((act, index) => (
              <div key={index} className="flex items-baseline gap-3 text-xs sm:text-sm text-[#001517] dark:text-[#D8E6E7]">
                <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
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
