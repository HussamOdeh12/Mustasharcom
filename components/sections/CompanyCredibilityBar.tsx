import React from 'react';
import Link from 'next/link';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';

interface CompanyCredibilityBarProps {
  locale: Locale;
}

export default function CompanyCredibilityBar({ locale }: CompanyCredibilityBarProps) {
  const isRtl = locale === 'ar';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  const items = [
    {
      index: '01',
      primary: COMPANY_PROFILE.ownership[locale],
      secondary: locale === 'ar' ? 'أبوظبي، دولة الإمارات' : 'Sovereign UAE Enterprise',
      href: null,
    },
    {
      index: '02',
      primary: `ICV ${COMPANY_PROFILE.certifications.icv.score}`,
      secondary: locale === 'ar' ? 'شهادة القيمة المحلية (153777)' : 'In-Country Value (Cert. 153777)',
      href: complianceHref,
    },
    {
      index: '03',
      primary: COMPANY_PROFILE.certifications.iso.standard,
      secondary: locale === 'ar' ? 'نظام إدارة الجودة (UAF140791497)' : 'Quality Management (UAF140791497)',
      href: complianceHref,
    },
    {
      index: '04',
      primary: `ADRA ${COMPANY_PROFILE.licence.number}`,
      secondary: locale === 'ar' ? 'اقتصادية أبوظبي (حتى 2031)' : 'Abu Dhabi DED (Valid to 2031)',
      href: complianceHref,
    },
    {
      index: '05',
      primary: COMPANY_PROFILE.metrics.quantifiableValue,
      secondary: locale === 'ar' ? '17 عقداً حكومياً موثقاً' : '17 Public Sector Contracts',
      href: projectsHref,
    },
  ];

  return (
    <section
      className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA] dark:bg-[#0A1612] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label={locale === 'ar' ? 'الاعتمادات والمؤشرات السيادية' : 'Sovereign Credentials & Accreditations'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => {
            const inner = (
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] text-[#6B1426] dark:text-[#2DD4A4]">
                    {item.index}.
                  </span>
                  <span className="text-sm font-bold text-[#0B1713] dark:text-[#F4F6F5] font-mono tabular-nums truncate">
                    {item.primary}
                  </span>
                </div>
                <div className="text-xs text-[#485650] dark:text-[#8FA19A] truncate">
                  {item.secondary}
                </div>
              </div>
            );

            return item.href ? (
              <Link
                key={item.index}
                href={item.href}
                className="group block hover:opacity-80 transition-opacity"
              >
                {inner}
              </Link>
            ) : (
              <div key={item.index}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
