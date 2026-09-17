import React from 'react';
import { Phone, UserCheck, Mail } from 'lucide-react';
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
      className="py-16 bg-white dark:bg-[#0B0F19] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
            {t.directLeadership}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mt-1">
            {locale === 'ar' ? 'فريق القيادة والاستشارات المباشر' : 'Direct Executive & Technical Advisory'}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
            {locale === 'ar'
              ? 'تواصل مباشرة مع قيادات ومستشاري مستشاركم في أبوظبي لمناقشة استراتيجيات المشاريع والتعاقدات.'
              : 'Direct points of contact for executive sponsorship, technical governance, and business engagements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.leadership.map((leader, idx) => {
            const cleanPhone = leader.phone.replace(/\s+/g, '');

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center mb-4">
                    <UserCheck className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {leader.name[locale]}
                  </h3>
                  <p className="text-xs font-medium text-[#6B1426] dark:text-[#F38C9C] mt-0.5">
                    {leader.title[locale]}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="inline-flex items-center gap-1.5 font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#6B1426] dark:hover:text-white transition-colors dir-ltr"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#008751]" />
                    <span>{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_PROFILE.office.email}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-[#6B1426] transition-colors"
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
