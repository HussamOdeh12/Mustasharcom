import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import HeroTechLayer from '../motion/HeroTechLayer';

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
      className="relative bg-[#071C17] text-[#F4F7F5] border-b border-[#174B3E] overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Consilio-inspired Atmospheric Radial Depth & Luminous Contour Waves (Pure Forest & Teal) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 75% 20%, rgba(24, 198, 160, 0.16) 0%, rgba(11, 41, 34, 0.35) 45%, rgba(7, 28, 23, 0) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 15% 85%, rgba(23, 75, 62, 0.32) 0%, rgba(7, 28, 23, 0) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Server-rendered crisp static architectural contour SVG (visible immediately at FCP/LCP) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1440 960"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-120 340 C 360 140, 880 540, 1560 220"
          stroke="#18C6A0"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
        <path
          d="M-120 420 C 420 220, 940 620, 1560 300"
          stroke="#174B3E"
          strokeWidth="1"
          strokeOpacity="0.65"
        />
        <path
          d="M-120 740 C 340 560, 860 860, 1560 580"
          stroke="#12A989"
          strokeWidth="0.9"
          strokeOpacity="0.28"
        />
      </svg>

      {/* Idle-deferred Canvas 2D architectural node & signal field */}
      <HeroTechLayer />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
        {/* Stage 1: Editorial Sovereign Kicker */}
        <div className="hero-stagger-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#A3B8B0] mb-8 md:mb-12">
          <span className="text-[#18C6A0] font-semibold tracking-wide">
            {COMPANY_PROFILE.ownership[locale]}
          </span>
          <span aria-hidden="true" className="text-[#174B3E]">/</span>
          <span>
            {COMPANY_PROFILE.location.city[locale]}, {COMPANY_PROFILE.location.country[locale]} · Est. {COMPANY_PROFILE.established}
          </span>
          <span aria-hidden="true" className="text-[#174B3E]">/</span>
          <Link href={complianceHref} className="hover:text-[#18C6A0] transition-colors font-mono focus:outline-none focus-visible:underline">
            ICV {COMPANY_PROFILE.certifications.icv.score}
          </Link>
          <span aria-hidden="true" className="text-[#174B3E]">/</span>
          <Link href={complianceHref} className="hover:text-[#18C6A0] transition-colors font-mono focus:outline-none focus-visible:underline">
            {COMPANY_PROFILE.certifications.iso.standard}
          </Link>
        </div>

        {/* Stage 2: Full-Width Commanding Display Headline (Consilio Scale & Tracking) */}
        <div className="hero-stagger-2 max-w-6xl">
          <h1
            className="font-bold text-[#F4F7F5] tracking-[-0.035em] leading-[1.04] text-balance"
            style={{ fontSize: 'clamp(2.65rem, 5.8vw, 5.25rem)' }}
          >
            {locale === 'ar' ? (
              <>
                استشارات تقنية المعلومات،{' '}
                <span className="text-[#18C6A0]">البيانات والذكاء الاصطناعي</span>
                ، والتحول الرقمي للقطاع الحكومي.
              </>
            ) : (
              <>
                IT Consultancy,{' '}
                <span className="text-[#18C6A0]">Data &amp; AI Solutions</span>, and Digital
                Transformation for Government.
              </>
            )}
          </h1>
        </div>

        {/* Stage 3: Asymmetric Lead Narrative & High-Contrast Actions Row */}
        <div className="hero-stagger-3 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-[#174B3E] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-[22px] text-[#DCE6E2] leading-[1.55] font-normal max-w-3xl">
              {locale === 'ar'
                ? 'شريك استشاري وهندسي معتمد لدوائر وهيئات حكومة أبوظبي منذ عام 2019. نبسّط أعقد منظومات الأعمال عبر تحليلات البيانات ولوحات Power BI التنفيذية، وأتمتة العمليات بالذكاء الاصطناعي (RPA)، وتشغيل المراكز الذكية.'
                : 'Trusted advisory and engineering partner to Abu Dhabi government authorities since 2019. We simplify institutional complexity across executive Power BI intelligence, AI-driven RPA workflow automation, enterprise applications, and Smart Hub operations.'}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4">
            <Link
              href={contactHref}
              className="btn-slide-trigger btn-press group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-[#18C6A0] hover:bg-[#12A989] text-[#071C17] text-sm sm:text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071C17] cursor-pointer whitespace-nowrap"
            >
              <span>{t.requestRfp}</span>
              <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
            </Link>

            <Link
              href={projectsHref}
              className="btn-press group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#0B2922] hover:bg-[#10352C] text-[#F4F7F5] border border-[#174B3E] hover:border-[#18C6A0] text-sm sm:text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] cursor-pointer whitespace-nowrap"
            >
              <span>{t.viewProjects}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Stage 4: Expansive Cinematic Architectural Stage with Integrated Sovereign Credentials */}
        <div className="hero-media-reveal mt-12 md:mt-16">
          <div className="group relative rounded-xl overflow-hidden border border-[#174B3E] bg-[#0B2922]">
            <div className="relative h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] w-full overflow-hidden">
              <Image
                src="/images/hero_abu_dhabi_advisory_1794979008017.jpg"
                alt={
                  locale === 'ar'
                    ? 'المقر الاستشاري والتقني لشركة مستشاركم للحلول المعلوماتية في أبوظبي'
                    : 'Mustasharcom for Informatics Solutions corporate advisory architecture in Abu Dhabi'
                }
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                referrerPolicy="no-referrer"
                className="object-cover object-center img-zoom-transition"
              />
              {/* Cinematic Multi-Stop Atmospheric Scrim */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(7,28,23,0.18) 0%, rgba(7,28,23,0.48) 55%, rgba(7,28,23,0.95) 100%)',
                }}
              />

              {/* Top Floating Architectural Coordinate Header inside Frame */}
              <div className="absolute top-0 inset-x-0 p-5 sm:p-8 flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#071C17]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F4F7F5]">
                  <span>
                    {locale === 'ar'
                      ? 'أبوظبي · رخصة اقتصادية CN-2769971'
                      : 'ABU DHABI HQ · ADRA LICENCE CN-2769971'}
                  </span>
                </div>

                <Link
                  href={servicesHref}
                  className="btn-slide-trigger inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#071C17]/80 hover:bg-[#071C17] backdrop-blur-md border border-white/15 hover:border-[#18C6A0] text-xs font-medium text-[#F4F7F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
                >
                  <span>{t.exploreServices} (01 — 06)</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-[#18C6A0] btn-slide-arrow" />
                </Link>
              </div>

              {/* Bottom Integrated Editorial Quote & Sovereign Figures inside Cinema Frame */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/15">
                  <div className="lg:col-span-5 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#18C6A0]">
                      {locale === 'ar' ? 'الفلسفة الاستشارية' : 'Advisory Mandate'}
                    </div>
                    <p className="text-sm sm:text-base text-[#F4F7F5] font-medium leading-relaxed">
                      &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
                    </p>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-mono tabular-nums text-[#F4F7F5] tracking-tight">
                        {COMPANY_PROFILE.metrics.quantifiableValue}
                      </div>
                      <div className="text-xs text-[#A3B8B0] mt-1">
                        {t.statValue}
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-mono tabular-nums text-[#18C6A0] tracking-tight">
                        {COMPANY_PROFILE.metrics.engagements}
                      </div>
                      <div className="text-xs text-[#A3B8B0] mt-1">
                        {t.statEngagements}
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-mono tabular-nums text-[#18C6A0] tracking-tight">
                        {COMPANY_PROFILE.metrics.govPercentage}
                      </div>
                      <div className="text-xs text-[#A3B8B0] mt-1">
                        {t.statGov}
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-mono tabular-nums text-[#F4F7F5] tracking-tight">
                        {COMPANY_PROFILE.certifications.icv.score}
                      </div>
                      <div className="text-xs text-[#A3B8B0] mt-1">
                        {t.statIcv}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
