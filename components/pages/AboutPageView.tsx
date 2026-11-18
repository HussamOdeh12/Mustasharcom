import React from 'react';
import Image from 'next/image';
import Breadcrumbs from '../ui/Breadcrumbs';
import LeadershipSection from '../sections/LeadershipSection';
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
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.aboutMustasharcom }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Editorial Hero */}
      <section className="py-16 md:py-24 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-medium text-[#2DD4A4]">
                {COMPANY_PROFILE.ownership[locale]} · {COMPANY_PROFILE.location.city[locale]} · Est. {COMPANY_PROFILE.established}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
                {locale === 'ar'
                  ? 'تمكين التحول الرقمي والتميز المؤسسي للقطاع الحكومي والشركات'
                  : 'Architecting Digital Transformation for Government & Enterprise'}
              </h1>

              <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed">
                &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#8FA19A] leading-relaxed">
                {COMPANY_PROFILE.consultancyApproach[locale]}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[280px] sm:h-[340px] rounded-lg overflow-hidden border border-[#1E362D] bg-[#0C1A15]">
                <Image
                  src="/images/about_executive_boardroom_1794979011521.jpg"
                  alt={
                    locale === 'ar'
                      ? 'اجتماع القيادة الاستشارية في شركة مستشاركم بأبوظبي'
                      : 'Mustasharcom executive consulting team in Abu Dhabi'
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between text-xs text-[#F4F6F5]">
                  <span>{COMPANY_PROFILE.name[locale]}</span>
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
          className="py-20 bg-[#FAF8F5] dark:bg-[#07110E] border-b border-[#E3DFD7] dark:border-[#1A2E26]"
          aria-labelledby="strategic-pillars-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="strategic-pillars-heading" className="sr-only">
              {locale === 'ar' ? 'الرسالة والرؤية الاستشارية' : 'Strategic Mission & Consultancy Approach'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col gap-4">
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4]">
                  01 · MISSION MANDATE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                  {t.ourMission}
                </h3>
                <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {COMPANY_PROFILE.mission[locale]}
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col gap-4">
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4]">
                  02 · ADVISORY METHODOLOGY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                  {t.ourApproach}
                </h3>
                <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {locale === 'ar'
                    ? 'نعمل كشريك استشاري يدمج الفهم العميق لبيئة العمل المؤسسية مع خبرة التنفيذ الميدانية. نركز على استدامة الأنظمة، تدريب الكوادر الوطنية، وضمان أعلى عائد على الاستثمارات التقنية.'
                    : 'We act as senior consultants who integrate institutional understanding with disciplined technical execution — prioritizing system maintainability, knowledge transfer, and measurable return on IT expenditure.'}
                </p>
              </div>
            </div>
          </div>
        </section>
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
