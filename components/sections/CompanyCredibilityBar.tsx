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
      secondary: locale === 'ar' ? 'شركة وطنية — أبوظبي' : 'Sovereign UAE Enterprise',
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
      secondary: locale === 'ar' ? 'إدارة الجودة (UAF140791497)' : 'Quality System (UAF140791497)',
      href: complianceHref,
    },
    {
      index: '04',
      primary: `ADRA ${COMPANY_PROFILE.licence.number}`,
      secondary: locale === 'ar' ? 'رخصة أبوظبي (حتى 2031)' : 'Abu Dhabi DED (Valid to 2031)',
      href: complianceHref,
    },
    {
      index: '05',
      primary: COMPANY_PROFILE.metrics.quantifiableValue,
      secondary: locale === 'ar' ? '17 عقداً حكومياً موثقاً' : '17 Public Sector Mandates',
      href: projectsHref,
    },
  ];

  return (
    <section
      className="border-b border-[#D8E2E2] dark:border-[#0E2F33] bg-[#EAEFEF] dark:bg-[#021214] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label={locale === 'ar' ? 'الاعتمادات والمؤشرات السيادية' : 'Sovereign Credentials & Accreditations'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => {
            const inner = (
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#6B1426] dark:text-[#2DD4A4]">
                    /{item.index}
                  </span>
                  <span className="text-sm font-bold text-[#001517] dark:text-[#F2F6F6] font-mono tabular-nums truncate">
                    {item.primary}
                  </span>
                </div>
                <div className="text-xs text-[#3E5456] dark:text-[#9CB2B4] truncate">
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
