import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface LeadershipSectionProps {
  locale: Locale;
}

export default function LeadershipSection({ locale }: LeadershipSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <section
      className="py-20 md:py-24 bg-[#F3EFEA]/60 dark:bg-[#0A1612] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pb-12 space-y-3">
          <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide block">
            {t.directLeadership}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-tight">
            {locale === 'ar' ? 'فريق القيادة والاستشارات المباشر' : 'Executive & Technical Leadership'}
          </h2>
          <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
            {locale === 'ar'
              ? 'تواصل مباشرة مع قيادات ومستشاري مستشاركم في أبوظبي لمناقشة استراتيجيات المشاريع والتعاقدات الحكومية.'
              : 'Direct executive sponsorship, technical architecture oversight, and client engagement leadership in Abu Dhabi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.leadership.map((leader, idx) => {
            const cleanPhone = leader.phone.replace(/\s+/g, '');

            return (
              <div
                key={idx}
                className="p-7 rounded-lg bg-[#FAF8F5] dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col justify-between gap-6"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {leader.name[locale]}
                  </h3>
                  <p className="text-xs font-medium text-[#485650] dark:text-[#A6B5AF]">
                    {leader.title[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26] flex items-center justify-between text-xs">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="inline-flex items-center gap-2 font-mono tabular-nums font-medium text-[#0B1713] dark:text-[#F4F6F5] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors dir-ltr"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#2DD4A4]" />
                    <span>{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_PROFILE.office.email}`}
                    className="text-[#687670] dark:text-[#8FA19A] hover:text-[#0B1713] dark:hover:text-white transition-colors"
                    aria-label={`Email ${leader.name[locale]}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
