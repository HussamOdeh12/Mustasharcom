import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Phone, Mail, FileText } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface CtaBannerProps {
  locale: Locale;
}

export default function CtaBanner({ locale }: CtaBannerProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';

  return (
    <section
      className="py-16 bg-[#FBF9F5] dark:bg-[#090D16] border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#6B1426] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-1/3 -top-20 w-60 h-60 rounded-full bg-[#008751]/10 pointer-events-none" />

          <div className="relative max-w-3xl flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 backdrop-blur-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#008751]" />
              <span>{COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]}</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              {t.letsBuild}
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              {t.ctaDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#6B1426] text-sm font-bold shadow-md hover:bg-zinc-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>{t.requestRfp}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer dir-ltr font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_PROFILE.office.tel1}</span>
              </a>

              <a
                href={`mailto:${COMPANY_PROFILE.office.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-white/90 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{COMPANY_PROFILE.office.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
