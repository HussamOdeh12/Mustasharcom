import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';
  const servicesHref = locale === 'ar' ? '/ar/services' : '/services';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  return (
    <section
      className="relative bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26] overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Consilio-inspired Subtle Contour Wave & Grid Geometry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100 620 C 320 460, 780 740, 1540 480"
          stroke="#2DD4A4"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        <path
          d="M-100 680 C 380 520, 840 780, 1540 540"
          stroke="#C6A355"
          strokeWidth="1"
          strokeOpacity="0.22"
        />
        <path
          d="M-100 220 C 420 380, 920 80, 1540 280"
          stroke="#2DD4A4"
          strokeWidth="0.75"
          strokeOpacity="0.18"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        {/* Unboxed Editorial Kicker (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#A6B5AF] mb-8">
          <span className="text-[#2DD4A4] font-semibold">
            {COMPANY_PROFILE.ownership[locale]}
          </span>
          <span aria-hidden="true" className="text-[#3A4F46]">·</span>
          <span>{COMPANY_PROFILE.location.city[locale]}, {COMPANY_PROFILE.location.country[locale]}</span>
          <span aria-hidden="true" className="text-[#3A4F46]">·</span>
          <Link href={complianceHref} className="hover:text-[#F4F6F5] transition-colors font-mono">
            ICV {COMPANY_PROFILE.certifications.icv.score}
          </Link>
          <span aria-hidden="true" className="text-[#3A4F46]">·</span>
          <Link href={complianceHref} className="hover:text-[#F4F6F5] transition-colors font-mono">
            {COMPANY_PROFILE.certifications.iso.standard}
          </Link>
        </div>

        {/* Main 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: High-Impact Editorial Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h1
                className="font-bold tracking-tight text-[#F4F6F5] leading-[1.1] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                {locale === 'ar' ? (
                  <>
                    استشارات تقنية المعلومات،{' '}
                    <span className="text-[#2DD4A4]">حلول البيانات والذكاء الاصطناعي</span>
                    ، والتحول الرقمي للقطاع الحكومي
                  </>
                ) : (
                  <>
                    IT Consultancy,{' '}
                    <span className="text-[#2DD4A4]">Data &amp; AI Solutions</span>, and Digital
                    Transformation for Government
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#B8C7C0] max-w-2xl leading-relaxed font-normal">
                {locale === 'ar'
                  ? 'شريك استشاري وتقني معتمد لدوائر وهيئات حكومة أبوظبي منذ عام 2019. نطوّر وننفذ حلول الأعمال المعقدة بأبسط الطرق الممكنة — من تحليلات البيانات ولوحات Power BI التنفيذية إلى أتمتة العمليات بالذكاء الاصطناعي (RPA) ودعم الأنظمة المؤسسية.'
                  : 'An established advisory and engineering partner to Abu Dhabi government authorities since 2019. We architect and deliver mission-critical informatics — spanning executive Power BI telemetry, AI-driven RPA workflow automation, enterprise applications, and smart contact center operations.'}
              </p>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#2DD4A4] hover:bg-[#24B88D] text-[#05100C] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{t.requestRfp}</span>
                  <ArrowIcon className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href={projectsHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-[#0C1A15] hover:bg-[#12261F] text-[#F4F6F5] border border-[#1E362D] hover:border-[#2DD4A4]/50 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{t.viewProjects}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-75 shrink-0" />
                </Link>

                <Link
                  href={servicesHref}
                  className="inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-medium text-[#A6B5AF] hover:text-[#2DD4A4] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{t.exploreServices}</span>
                  <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>

              {/* Unboxed Executive Quote */}
              <div className="pt-6 border-t border-[#1A2E26]">
                <p className="text-xs sm:text-sm text-[#8FA19A] italic leading-relaxed max-w-xl">
                  &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Media Carrier */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-full rounded-lg overflow-hidden border border-[#1E362D] bg-gradient-to-br from-[#0C1A15] to-[#07110E] flex flex-col justify-end">
              <Image
                src="/images/hero_abu_dhabi_advisory_1794979008017.jpg"
                alt={
                  locale === 'ar'
                    ? 'المقر الاستشاري والتقني لشركة مستشاركم للحلول المعلوماتية في أبوظبي'
                    : 'Mustasharcom for Informatics Solutions corporate advisory architecture in Abu Dhabi'
                }
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />
              {/* Measured Contrast Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A]/90 via-[#050C0A]/35 to-transparent" />

              {/* Quiet Bottom Caption Inside Media Frame */}
              <div className="relative z-10 p-5 sm:p-6 flex items-end justify-between gap-4 border-t border-white/10 bg-[#050C0A]/60 backdrop-blur-xs">
                <div>
                  <div className="text-xs font-medium text-[#2DD4A4]">
                    {locale === 'ar' ? 'أبوظبي · تأسست 2019' : 'Abu Dhabi Headquarters · Est. 2019'}
                  </div>
                  <div className="text-sm font-semibold text-[#F4F6F5] mt-0.5">
                    {COMPANY_PROFILE.name[locale]}
                  </div>
                </div>
                <span className="font-mono text-xs text-[#C6A355] shrink-0">
                  CN-2769971
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Sovereign Telemetry Row Below Hero Split */}
        <div className="mt-12 pt-10 border-t border-[#1A2E26] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#F4F6F5]">
              {COMPANY_PROFILE.metrics.quantifiableValue}
            </div>
            <div className="text-xs text-[#8FA19A] mt-1.5">
              {t.statValue} · {locale === 'ar' ? 'عقود موثقة' : 'Verified Mandates'}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#2DD4A4]">
              {COMPANY_PROFILE.metrics.engagements}
            </div>
            <div className="text-xs text-[#8FA19A] mt-1.5">
              {t.statEngagements} (2019 – 2026)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#C6A355]">
              {COMPANY_PROFILE.metrics.govPercentage}
            </div>
            <div className="text-xs text-[#8FA19A] mt-1.5">
              {t.statGov}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tabular-nums text-[#F4F6F5]">
              {COMPANY_PROFILE.certifications.icv.score}
            </div>
            <div className="text-xs text-[#8FA19A] mt-1.5">
              {t.statIcv} · Cert. 153777
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
