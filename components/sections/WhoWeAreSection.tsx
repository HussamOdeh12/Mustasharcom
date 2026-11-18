import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface WhoWeAreSectionProps {
  locale: Locale;
}

export default function WhoWeAreSection({ locale }: WhoWeAreSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const aboutHref = locale === 'ar' ? '/ar/about' : '/about';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  const pillars = [
    {
      num: '01',
      title: locale === 'ar' ? 'الرؤية الاستراتيجية والرسالة' : 'Strategic Mandate & Mission',
      body: COMPANY_PROFILE.mission[locale],
    },
    {
      num: '02',
      title: locale === 'ar' ? 'النهج الاستشاري المبسط' : 'Pragmatic Engineering Execution',
      body: COMPANY_PROFILE.consultancyApproach[locale],
    },
    {
      num: '03',
      title: locale === 'ar' ? 'كفاءات متعددة التخصصات في أبوظبي' : 'Embedded Multi-Disciplinary Teams',
      body:
        locale === 'ar'
          ? 'فريق متمرس يضم مدراء مشاريع، ومهندسي برمجيات وبيانات، وخبراء جودة يعملون جنباً إلى جنب مع فرق العمل الحكومية لضمان استدامة الحلول ونقل المعرفة.'
          : 'Seasoned project managers, software architects, data scientists, and ISO quality specialists operating alongside Abu Dhabi government teams to ensure lasting operational capability.',
    },
  ];

  return (
    <section
      id="who-we-are"
      className="py-24 md:py-36 bg-[#F7F5F0] dark:bg-[#071C17] border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stage 1: Consilio-style Oversized Editorial Statement Reveal */}
        <div className="reveal-item reveal-delay-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20 md:pb-24 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                01 / {t.whoWeAre}
              </span>
              <div className="h-[2px] w-20 bg-[#174B3E]/30 dark:bg-[#18C6A0]/30 overflow-hidden rounded-full" aria-hidden="true">
                <div className="scroll-accent-progress h-full w-full bg-[#174B3E] dark:bg-[#18C6A0]" />
              </div>
              <div className="text-xs text-[#697671] dark:text-[#A3B8B0]">
                {locale === 'ar' ? 'تأسست في أبوظبي · 2019' : 'Abu Dhabi Sovereign Practice · Est. 2019'}
              </div>
            </div>

            <div className="hidden lg:block pt-12">
              <Link
                href={aboutHref}
                className="btn-slide-trigger btn-press inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#071C17] dark:bg-[#0B2922] text-[#F4F7F5] border border-[#071C17] dark:border-[#174B3E] hover:bg-[#174B3E] dark:hover:border-[#18C6A0] text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
              >
                <span>{locale === 'ar' ? 'تعرف على الشركة والقيادة' : 'More About Mustasharcom'}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#18C6A0] btn-slide-arrow" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <h2
              className="font-bold tracking-[-0.03em] leading-[1.14] text-balance text-[#17211D] dark:text-[#F4F7F5]"
              style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3.35rem)' }}
            >
              {locale === 'ar' ? (
                <>
                  تتشارك <span className="text-[#174B3E] dark:text-[#18C6A0]">مستشاركم</span> مع
                  الجهات الحكومية والمؤسسات الطموحة لتبسيط الأنظمة المعقدة،{' '}
                  <span className="text-[#697671] dark:text-[#A3B8B0]">
                    وتعزيز صناعة القرار بالبيانات والذكاء الاصطناعي، وتحقيق كفاءة تشغيلية مستدامة بأعلى معايير الجودة.
                  </span>
                </>
              ) : (
                <>
                  Mustasharcom partners with ambitious government authorities to{' '}
                  <span className="text-[#174B3E] dark:text-[#18C6A0]">
                    implement complex systems in the simplest way
                  </span>
                  ,{' '}
                  <span className="text-[#697671] dark:text-[#A3B8B0]">
                    strengthen executive decision-making through data &amp; AI, and deliver lasting operational efficiency.
                  </span>
                </>
              )}
            </h2>

            <div className="lg:hidden pt-2">
              <Link
                href={aboutHref}
                className="btn-slide-trigger inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#071C17] dark:bg-[#0B2922] text-[#F4F7F5] text-xs font-semibold"
              >
                <span>{locale === 'ar' ? 'تعرف على الشركة والقيادة' : 'More About Mustasharcom'}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#18C6A0] btn-slide-arrow" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stage 2: Asymmetric Editorial Split — Large Photography + Architectural Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 md:pt-20 items-stretch">
          {/* Left 7 Columns: Large-Scale Editorial Visual Carrier */}
          <div className="reveal-item reveal-delay-2 lg:col-span-7 flex flex-col">
            <div className="group relative flex-1 min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] rounded-xl overflow-hidden border border-[#DCE3DF] dark:border-[#174B3E] bg-[#0B2922]">
              <div className="absolute inset-0 scroll-parallax-media">
                <Image
                  src="/images/about_executive_boardroom_1794979011521.jpg"
                  alt={
                    locale === 'ar'
                      ? 'اجتماع استشاري تنفيذي لشركة مستشاركم في أبوظبي'
                      : 'Mustasharcom executive consulting advisory session in Abu Dhabi'
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center img-zoom-transition"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(7,28,23,0.08) 0%, rgba(7,28,23,0.38) 55%, rgba(7,28,23,0.92) 100%)',
                }}
              />

              {/* Bottom Architectural Ledger Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#F4F7F5]">
                <div className="space-y-1.5">
                  <div className="text-xs font-mono text-[#18C6A0] uppercase tracking-wider">
                    {COMPANY_PROFILE.ownership[locale]}
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    {locale === 'ar'
                      ? 'المقر الرئيسي: آل نهيان، أبوظبي — دولة الإمارات'
                      : 'Headquarters: Al Nahyan, Abu Dhabi — UAE'}
                  </div>
                </div>

                <Link
                  href={complianceHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#071C17]/85 backdrop-blur-md border border-white/15 hover:border-[#18C6A0] text-xs font-mono text-[#18C6A0] transition-colors shrink-0"
                >
                  <span>ICV {COMPANY_PROFILE.certifications.icv.score} · ISO 9001</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: 3 Editorial Pillars Separated by Clean Hairlines */}
          <div className="reveal-item reveal-delay-3 lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-[#DCE3DF] dark:divide-[#174B3E]">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="py-7 first:pt-0 last:pb-0 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#174B3E] dark:text-[#18C6A0]">
                      {pillar.num} / 03
                    </span>
                    <span className="w-6 h-[1px] bg-[#DCE3DF] dark:bg-[#174B3E]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#3E544C] dark:text-[#A3B8B0] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Quiet Sovereign Verification Footer */}
            <div className="mt-8 pt-6 border-t border-[#DCE3DF] dark:border-[#174B3E] flex items-center justify-between text-xs text-[#697671] dark:text-[#A3B8B0] font-mono">
              <span>ADRA LICENCE {COMPANY_PROFILE.licence.number}</span>
              <span>EST. {COMPANY_PROFILE.established}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
