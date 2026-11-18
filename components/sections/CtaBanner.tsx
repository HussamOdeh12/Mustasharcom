import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Phone, Mail, ArrowUpRight } from 'lucide-react';
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
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  return (
    <section
      className="relative py-24 md:py-36 bg-[#000D0E] text-[#F2F6F6] border-t border-[#0E2F33] overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Consilio-style Atmospheric Radial Glow & Contour Lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 100%, rgba(45, 212, 164, 0.16) 0%, rgba(1, 43, 48, 0.25) 45%, rgba(0, 13, 14, 0) 100%)',
        }}
        aria-hidden="true"
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100 440 C 420 240, 960 520, 1540 260"
          stroke="#2DD4A4"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        <path
          d="M-100 510 C 480 310, 1020 580, 1540 330"
          stroke="#C6A355"
          strokeWidth="0.9"
          strokeOpacity="0.3"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end justify-between pb-16 border-b border-[#0E2F33]">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2DD4A4]">
              <span className="w-2 h-2 rounded-full bg-[#2DD4A4]" />
              <span>
                {COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]} · ADRA {COMPANY_PROFILE.licence.number}
              </span>
            </div>

            <h2
              className="font-bold tracking-[-0.035em] text-[#F2F6F6] leading-[1.06] text-balance"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar' ? (
                <>
                  نبني الوضوح المؤسسي.{' '}
                  <span className="text-[#2DD4A4]">ونسرّع التحول الرقمي.</span>
                </>
              ) : (
                <>
                  Build institutional clarity.{' '}
                  <span className="text-[#2DD4A4]">Unlock digital transformation.</span>
                </>
              )}
            </h2>

            <p className="text-lg sm:text-xl text-[#9CB2B4] leading-relaxed max-w-2xl">
              {t.ctaDesc}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4">
            <Link
              href={contactHref}
              className="btn-slide-trigger inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-md bg-[#2DD4A4] hover:bg-[#24B88D] text-[#001517] text-base font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4] cursor-pointer whitespace-nowrap"
            >
              <span>{t.requestRfp}</span>
              <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
            </Link>

            <Link
              href={projectsHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#04191B] hover:bg-[#072528] text-[#F2F6F6] border border-[#123A3F] hover:border-[#2DD4A4]/60 text-sm font-medium transition-colors whitespace-nowrap"
            >
              <span>{t.viewProjects} (17)</span>
              <ArrowUpRight className="w-4 h-4 text-[#2DD4A4]" />
            </Link>
          </div>
        </div>

        {/* Bottom Direct Executive Contact & Trust Strip */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs sm:text-sm text-[#9CB2B4]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono font-bold text-[#F2F6F6]">
              100% {locale === 'ar' ? 'سجل مشاريع حكومية' : 'Government Track Record'}
            </span>
            <span className="text-[#123A3F]">|</span>
            <span className="font-mono text-[#2DD4A4]">
              ICV {COMPANY_PROFILE.certifications.icv.score} · ISO 9001:2015
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-[#F2F6F6] transition-colors font-mono dir-ltr"
            >
              <Phone className="w-4 h-4 text-[#2DD4A4]" />
              <span>{COMPANY_PROFILE.office.tel1}</span>
            </a>
            <a
              href={`mailto:${COMPANY_PROFILE.office.email}`}
              className="inline-flex items-center gap-2 hover:text-[#F2F6F6] transition-colors font-mono"
            >
              <Mail className="w-4 h-4 text-[#2DD4A4]" />
              <span>{COMPANY_PROFILE.office.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
