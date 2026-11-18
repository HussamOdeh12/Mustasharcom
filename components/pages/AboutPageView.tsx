import React from 'react';
import Image from 'next/image';
import Breadcrumbs from '../ui/Breadcrumbs';
import LeadershipSection from '../sections/LeadershipSection';
import ExperienceSection from '../sections/ExperienceSection';
import CredentialsSection from '../sections/CredentialsSection';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface AboutPageViewProps {
  locale: Locale;
}

export default function AboutPageView({ locale }: AboutPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs Header Strip */}
      <div className="border-b border-[#D8E2E2] dark:border-[#0E2F33] bg-[#EAEFEF] dark:bg-[#021214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.aboutMustasharcom }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Editorial Hero */}
      <section className="py-20 md:py-28 bg-[#000D0E] text-[#F2F6F6] border-b border-[#0E2F33] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 60% at 80% 20%, rgba(45, 212, 164, 0.14) 0%, rgba(0, 13, 14, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2DD4A4] hero-stagger-1">
                {COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]} · Est. {COMPANY_PROFILE.established}
              </div>

              <h1
                className="font-bold tracking-[-0.035em] text-[#F2F6F6] leading-[1.06] text-balance hero-stagger-2"
                style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4.25rem)' }}
              >
                {locale === 'ar'
                  ? 'تمكين التحول الرقمي والتميز المؤسسي للقطاع الحكومي والشركات'
                  : 'Architecting Digital Transformation for Government & Enterprise'}
              </h1>

              <p className="text-lg sm:text-xl text-[#2DD4A4] font-medium leading-relaxed hero-stagger-3">
                &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
              </p>

              <p className="text-base sm:text-lg text-[#B4C8CA] leading-relaxed hero-stagger-4">
                {COMPANY_PROFILE.consultancyApproach[locale]}
              </p>
            </div>

            <div className="lg:col-span-5 hero-media-reveal">
              <div className="group relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[#123A3F] bg-[#04191B]">
                <Image
                  src="/images/about_executive_boardroom_1794979011521.jpg"
                  alt={
                    locale === 'ar'
                      ? 'اجتماع القيادة الاستشارية في شركة مستشاركم بأبوظبي'
                      : 'Mustasharcom executive consulting team in Abu Dhabi'
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center img-zoom-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000D0E]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between text-xs text-[#F2F6F6] border-t border-white/10 bg-[#000D0E]/70 backdrop-blur-md">
                  <span className="font-semibold">{COMPANY_PROFILE.name[locale]}</span>
                  <span className="font-mono text-[#2DD4A4]">ADRA {COMPANY_PROFILE.licence.number}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars: Mission & Philosophy */}
      <SectionReveal>
        <section
          className="py-24 bg-[#F5F7F7] dark:bg-[#000D0E] border-b border-[#D8E2E2] dark:border-[#0E2F33]"
          aria-labelledby="strategic-pillars-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="strategic-pillars-heading" className="sr-only">
              {locale === 'ar' ? 'الرسالة والرؤية الاستشارية' : 'Strategic Mission & Consultancy Approach'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] flex flex-col gap-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4]">
                  01 / MISSION MANDATE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                  {t.ourMission}
                </h3>
                <p className="text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                  {COMPANY_PROFILE.mission[locale]}
                </p>
              </div>

              <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] flex flex-col gap-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4]">
                  02 / ADVISORY METHODOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                  {t.ourApproach}
                </h3>
                <p className="text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                  {locale === 'ar'
                    ? 'نعمل كشريك استشاري يدمج الفهم العميق لبيئة العمل المؤسسية مع خبرة التنفيذ الميدانية. نركز على استدامة الأنظمة، تدريب الكوادر الوطنية، وضمان أعلى عائد على الاستثمارات التقنية.'
                    : 'We act as senior consultants who integrate institutional understanding with disciplined technical execution — prioritizing system maintainability, knowledge transfer, and measurable return on IT expenditure.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Interactive Consultancy Approach & Government Partner Roster */}
      <SectionReveal>
        <ExperienceSection locale={locale} />
      </SectionReveal>

      {/* Leadership Team */}
      <SectionReveal>
        <LeadershipSection locale={locale} />
      </SectionReveal>

      {/* Credentials & Compliance Details */}
      <SectionReveal>
        <CredentialsSection locale={locale} />
      </SectionReveal>

      {/* CTA Banner */}
      <SectionReveal>
        <CtaBanner locale={locale} />
      </SectionReveal>
    </main>
  );
}
