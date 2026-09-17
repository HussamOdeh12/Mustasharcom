import React from 'react';
import Link from 'next/link';
import { Shield, Award, FileCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
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
      className="py-16 md:py-20 bg-[#FBF9F5] dark:bg-[#090D16] border-y border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
              {t.qualityCompliance}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {locale === 'ar'
                ? 'معايير امتثال وجودة سيادية معتمدة'
                : 'Sovereign Quality, Procurement & Regulatory Compliance'}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {locale === 'ar'
                ? 'نعمل وفق أعلى معايير الجودة والمشتريات الحكومية المعتمدة في دولة الإمارات العربية المتحدة.'
                : 'Fully qualified under federal procurement frameworks, international ISO standards, and Abu Dhabi commercial mandates.'}
            </p>
          </div>

          <Link
            href={complianceHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] hover:underline"
          >
            <span>{locale === 'ar' ? 'عرض وثائق الامتثال الكاملة' : 'View Full Compliance Details'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Pillar 1: ISO 9001:2015 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#6B1426]/10 text-[#6B1426] dark:bg-[#6B1426]/20 dark:text-[#F38C9C] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400">QUALITY MANAGEMENT</span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1 mb-2">
                {COMPANY_PROFILE.certifications.iso.standard}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {COMPANY_PROFILE.certifications.iso.system[locale]}
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs space-y-1 text-zinc-500 dark:text-zinc-400">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'رقم الشهادة' : 'Certificate'}:</span>
                <span className="font-mono font-medium text-zinc-900 dark:text-zinc-200">
                  {COMPANY_PROFILE.certifications.iso.certificateNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'الصلاحية' : 'Valid Until'}:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {locale === 'ar' ? COMPANY_PROFILE.certifications.iso.validityAr : COMPANY_PROFILE.certifications.iso.validity}
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 2: In-Country Value (ICV) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008751] dark:bg-emerald-950/60 dark:text-[#34D399] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400">PROCUREMENT PRIORITY</span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1 mb-2">
                ICV {COMPANY_PROFILE.certifications.icv.score} Score
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {COMPANY_PROFILE.certifications.icv.category[locale]}
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs space-y-1 text-zinc-500 dark:text-zinc-400">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'رقم الشهادة' : 'Certificate'}:</span>
                <span className="font-mono font-medium text-zinc-900 dark:text-zinc-200">
                  {COMPANY_PROFILE.certifications.icv.certificateNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'الصلاحية' : 'Valid Until'}:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {locale === 'ar' ? COMPANY_PROFILE.certifications.icv.validityAr : COMPANY_PROFILE.certifications.icv.validity}
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: ADRA Commercial Licence */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400">COMMERCIAL LICENCE</span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1 mb-2">
                ADRA {COMPANY_PROFILE.licence.number}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {locale === 'ar' ? COMPANY_PROFILE.licence.authorityAr : COMPANY_PROFILE.licence.authority}
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs space-y-1 text-zinc-500 dark:text-zinc-400">
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'الملكية' : 'Ownership'}:</span>
                <span className="font-semibold text-[#008751] dark:text-[#34D399]">
                  {COMPANY_PROFILE.ownership[locale]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'ar' ? 'صلاحية الرخصة' : 'Validity'}:</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {locale === 'ar' ? COMPANY_PROFILE.licence.validityAr : COMPANY_PROFILE.licence.validity}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Registered Activities Under ADRA Licence */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
            {locale === 'ar'
              ? 'الأنشطة الاقتصادية والتقنية المسجلة رسمياً برخصة أبوظبي (CN-2769971)'
              : 'Formally Authorized Economic Activities under Abu Dhabi Licence CN-2769971'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COMPANY_PROFILE.licence.activities[locale].map((act, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#008751] dark:text-[#34D399] shrink-0 mt-0.5" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
