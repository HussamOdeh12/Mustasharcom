import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Phone, Mail } from 'lucide-react';
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
      className="relative py-20 md:py-28 bg-[#07130F] text-[#F4F6F5] border-t border-[#1A2E26] overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle Contour Wave Detail */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1440 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100 380 C 420 220, 960 460, 1540 240"
          stroke="#2DD4A4"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M-100 440 C 480 280, 1020 500, 1540 300"
          stroke="#C6A355"
          strokeWidth="0.75"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
          <div className="lg:col-span-8 space-y-5">
            <div className="text-xs font-medium text-[#2DD4A4]">
              {COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]} · Lic. {COMPANY_PROFILE.licence.number}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {t.letsBuild}
            </h2>

            <p className="text-base sm:text-lg text-[#A6B5AF] leading-relaxed max-w-2xl">
              {t.ctaDesc}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#2DD4A4] hover:bg-[#24B88D] text-[#05100C] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4] cursor-pointer whitespace-nowrap"
            >
              <span>{t.requestRfp}</span>
              <ArrowIcon className="w-4 h-4 shrink-0" />
            </Link>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#A6B5AF]">
              <a
                href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-[#F4F6F5] transition-colors font-mono dir-ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#2DD4A4]" />
                <span>{COMPANY_PROFILE.office.tel1}</span>
              </a>
              <span aria-hidden="true" className="text-[#3A4F46]">·</span>
              <a
                href={`mailto:${COMPANY_PROFILE.office.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#F4F6F5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2DD4A4]" />
                <span>{COMPANY_PROFILE.office.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
