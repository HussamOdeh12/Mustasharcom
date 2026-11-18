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
      className="py-20 md:py-24 bg-[#EFECE5] dark:bg-[#051410] border-b border-[#DCE2DE] dark:border-[#18382F] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pb-12 space-y-3">
          <span className="reveal-item reveal-delay-1 text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
            {t.directLeadership}
          </span>
          <h2 className="reveal-item reveal-delay-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-tight leading-tight">
            {locale === 'ar' ? 'فريق القيادة والاستشارات المباشر' : 'Executive & Technical Leadership'}
          </h2>
          <p className="reveal-item reveal-delay-3 text-sm sm:text-base text-[#43524C] dark:text-[#A5B8B1] leading-relaxed">
            {locale === 'ar'
              ? 'تواصل مباشرة مع قيادات ومستشاري مستشاركم في أبوظبي لمناقشة استراتيجيات المشاريع والتعاقدات الحكومية.'
              : 'Direct executive sponsorship, technical architecture oversight, and client engagement leadership in Abu Dhabi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.leadership.map((leader, idx) => {
            const cleanPhone = leader.phone.replace(/\s+/g, '');
            const delayClass = `reveal-delay-${Math.min(idx + 1, 4)}`;

            return (
              <div
                key={idx}
                className={`reveal-item ${delayClass} p-7 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] hover:border-[#174B3E] dark:hover:border-[#18C6A0] transition-colors flex flex-col justify-between gap-6 hover-card-lift`}
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold text-[#174B3E] dark:text-[#18C6A0] block">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-[#17211D] dark:text-[#F4F7F5]">
                    {leader.name[locale]}
                  </h3>
                  <p className="text-xs font-medium text-[#43524C] dark:text-[#A5B8B1]">
                    {leader.title[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE2DE] dark:border-[#18382F] flex items-center justify-between text-xs">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="inline-flex items-center gap-2 font-mono tabular-nums font-medium text-[#17211D] dark:text-[#F4F7F5] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors dir-ltr focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />
                    <span>{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_PROFILE.office.email}`}
                    className="text-[#697671] dark:text-[#7E968E] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
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
