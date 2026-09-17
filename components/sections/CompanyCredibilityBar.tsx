import React from 'react';
import Link from 'next/link';
import { Shield, Award, Building2, CheckCircle2, FileCheck } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';

interface CompanyCredibilityBarProps {
  locale: Locale;
}

export default function CompanyCredibilityBar({ locale }: CompanyCredibilityBarProps) {
  const isRtl = locale === 'ar';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  const items = [
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />,
      primary: COMPANY_PROFILE.ownership[locale],
      secondary: locale === 'ar' ? 'أبوظبي، دولة الإمارات' : 'Abu Dhabi, UAE',
      href: null,
    },
    {
      icon: <Award className="w-4 h-4 text-[#008751] shrink-0" />,
      primary: `ICV ${COMPANY_PROFILE.certifications.icv.score}`,
      secondary: locale === 'ar' ? 'شهادة القيمة المحلية المضافة' : 'In-Country Value Certified',
      href: complianceHref,
    },
    {
      icon: <Shield className="w-4 h-4 text-[#6B1426] dark:text-[#F38C9C] shrink-0" />,
      primary: COMPANY_PROFILE.certifications.iso.standard,
      secondary: locale === 'ar' ? 'نظام إدارة الجودة المعتمد' : 'Quality Management System',
      href: complianceHref,
    },
    {
      icon: <FileCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />,
      primary: `ADRA Lic. ${COMPANY_PROFILE.licence.number}`,
      secondary: locale === 'ar' ? 'اقتصادية أبوظبي (سارية حتى 2031)' : 'Abu Dhabi DED (Valid to 2031)',
      href: complianceHref,
    },
    {
      icon: <Building2 className="w-4 h-4 text-[#6B1426] dark:text-[#F38C9C] shrink-0" />,
      primary: COMPANY_PROFILE.metrics.quantifiableValue,
      secondary: locale === 'ar' ? 'قيمة عقود حكومية منفذة ومعتمدة' : 'Verified Gov. Contract Value',
      href: locale === 'ar' ? '/ar/projects' : '/projects',
    },
  ];

  return (
    <section
      className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#0E1322] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label={locale === 'ar' ? 'الاعتمادات والمؤشرات السيادية' : 'Sovereign Credentials & Accreditations'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-zinc-100 dark:divide-zinc-800">
          {items.map((item, index) => {
            const content = (
              <div className="flex items-center gap-3 py-1">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/60 shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                    {item.primary}
                  </div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 truncate">
                    {item.secondary}
                  </div>
                </div>
              </div>
            );

            return item.href ? (
              <Link
                key={index}
                href={item.href}
                className="group block hover:opacity-85 transition-opacity"
              >
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
