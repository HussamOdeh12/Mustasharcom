import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
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

  return (
    <section
      className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#07110E] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide block">
              06 · {t.qualityCompliance}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-tight text-balance">
              {locale === 'ar'
                ? 'منظومة التراخيص وشهادات الجودة السيادية المعتمدة'
                : 'Verified Licensing, Quality Management & In-Country Value'}
            </h2>
          </div>

          <Link
            href={complianceHref}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'عرض وثائق الجودة والامتثال' : 'View Full Compliance Ledger'}</span>
            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* 3 Architectural Credential Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mb-10">
          {/* Pillar 1: ISO 9001:2015 */}
          <div className="p-7 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4] font-semibold">
                01 · QUALITY MANAGEMENT
              </span>
              <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                {COMPANY_PROFILE.certifications.iso.standard}
              </h3>
              <p className="text-xs sm:text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                {COMPANY_PROFILE.certifications.iso.system[locale]}
              </p>
            </div>
            <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26] text-xs space-y-1.5 text-[#485650] dark:text-[#A6B5AF]">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                <span className="font-mono font-semibold text-[#0B1713] dark:text-[#F4F6F5]">
                  {COMPANY_PROFILE.certifications.iso.certificateNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'صالحة حتى' : 'Valid Until'}</span>
                <span className="font-mono font-medium text-[#007A4D] dark:text-[#2DD4A4]">
                  {locale === 'ar' ? COMPANY_PROFILE.certifications.iso.validityAr : COMPANY_PROFILE.certifications.iso.validity}
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 2: ICV */}
          <div className="p-7 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4] font-semibold">
                02 · NATIONAL PROCUREMENT
              </span>
              <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                ICV {COMPANY_PROFILE.certifications.icv.score}
              </h3>
              <p className="text-xs sm:text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                {COMPANY_PROFILE.certifications.icv.category[locale]}
              </p>
            </div>
            <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26] text-xs space-y-1.5 text-[#485650] dark:text-[#A6B5AF]">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'رقم الشهادة' : 'Certificate No.'}</span>
                <span className="font-mono font-semibold text-[#0B1713] dark:text-[#F4F6F5]">
                  {COMPANY_PROFILE.certifications.icv.certificateNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'صالحة حتى' : 'Valid Until'}</span>
                <span className="font-mono font-medium text-[#007A4D] dark:text-[#2DD4A4]">
                  {locale === 'ar' ? COMPANY_PROFILE.certifications.icv.validityAr : COMPANY_PROFILE.certifications.icv.validity}
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: ADRA Commercial Licence */}
          <div className="p-7 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4] font-semibold">
                03 · COMMERCIAL LICENCE
              </span>
              <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono">
                {COMPANY_PROFILE.licence.number}
              </h3>
              <p className="text-xs sm:text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                {locale === 'ar' ? COMPANY_PROFILE.licence.authorityAr : COMPANY_PROFILE.licence.authority}
              </p>
            </div>
            <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26] text-xs space-y-1.5 text-[#485650] dark:text-[#A6B5AF]">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'الملكية' : 'Ownership'}</span>
                <span className="font-semibold text-[#007A4D] dark:text-[#2DD4A4]">
                  {COMPANY_PROFILE.ownership[locale]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'صالحة حتى' : 'Valid Until'}</span>
                <span className="font-mono font-medium text-[#0B1713] dark:text-[#F4F6F5]">
                  {locale === 'ar' ? COMPANY_PROFILE.licence.validityAr : COMPANY_PROFILE.licence.validity}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Licensed Economic Activities Ledger */}
        <div className="p-7 rounded-lg bg-white dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
            <h4 className="text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5]">
              {locale === 'ar'
                ? 'الأنشطة الاقتصادية والتقنية المرخصة رسمياً (رخصة أبوظبي CN-2769971)'
                : 'Formally Licensed Economic Activities under Abu Dhabi Licence CN-2769971'}
            </h4>
            <span className="font-mono text-xs text-[#687670] dark:text-[#8FA19A]">01 — 07</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
            {COMPANY_PROFILE.licence.activities[locale].map((act, index) => (
              <div key={index} className="flex items-baseline gap-2.5 text-xs text-[#2C3A34] dark:text-[#C8D4CE]">
                <span className="font-mono text-[11px] text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
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
