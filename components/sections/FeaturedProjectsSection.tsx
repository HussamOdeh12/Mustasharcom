import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, PROJECTS_RECORD } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import BlurLetterReveal from '../motion/BlurLetterReveal';
import HeadingH3 from '../ui/HeadingH3';
import ScrollToNextButton from '../ui/ScrollToNextButton';

interface FeaturedProjectsSectionProps {
  locale: Locale;
}

export default function FeaturedProjectsSection({ locale }: FeaturedProjectsSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  // 2 Flagship Large-Scale Editorial Case Studies
  const flagshipCases = [
    {
      index: '01',
      id: PROJECTS_RECORD[3].id,
      category: locale === 'ar' ? 'المراكز الذكية وإدارة علاقات المتعاملين' : 'Smart Hub Operations & CRM Engineering',
      client: PROJECTS_RECORD[3].client[locale],
      title:
        locale === 'ar'
          ? 'الدعم الفني والتشغيلي للمركز الذكي (Smart Hub) ومنظومة CRM ومراكز الاتصال'
          : 'Technical & Operational Backing for the Municipal Smart Hub, CRM & Contact Center Ecosystem',
      summary:
        locale === 'ar'
          ? 'قيادة التشغيل والدعم الفني متعدد السنوات لمنظومة المركز الذكي في بلدية مدينة أبوظبي، بما يشمل تكامل قنوات خدمة المتعاملين، أتمتة مسارات الاستجابة، والالتزام الصارم بمؤشرات اتفاقيات مستوى الخدمة (SLA).'
          : 'Multi-year technical and operational stewardship for Abu Dhabi City Municipality’s Smart Hub and enterprise CRM — uniting omnichannel citizen service routing, real-time SLA telemetry, and continuous service availability.',
      value: 'AED 14,522,880',
      period: PROJECTS_RECORD[3].period,
      status: PROJECTS_RECORD[3].status[locale],
      image: '/images/project_municipal_digital_hub_1794979012536.jpg',
      imageAlt:
        locale === 'ar'
          ? 'المركز الذكي وعمليات التحول الرقمي في بلدية مدينة أبوظبي'
          : 'Abu Dhabi City Municipality Smart Hub and digital citizen service operations',
      additionalMandate:
        locale === 'ar'
          ? '+ عقد إضافي لدعم المركز الذكي بقيمة 4,849,179 درهم (2023–2025)'
          : '+ Consecutive AED 4,849,179 Smart Hub renewal mandate (2023–2025)',
    },
    {
      index: '02',
      id: PROJECTS_RECORD[8].id,
      category: locale === 'ar' ? 'التطبيقات المؤسسية وأتمتة الذكاء الاصطناعي' : 'Enterprise Applications, Power BI & AI Automation',
      client: PROJECTS_RECORD[8].client[locale],
      title:
        locale === 'ar'
          ? 'تطوير التطبيقات البلدية، وأتمتة الشبكات بالذكاء الاصطناعي (RPA)، ولوحات Power BI'
          : 'Enterprise Application Modernization, AI/RPA Network Automation & Executive Power BI Suites',
      summary:
        locale === 'ar'
          ? 'حزمة مشاريع استراتيجية مع دائرة البلديات والنقل تشمل تطوير وصيانة الأنظمة المؤسسية، وأتمتة إجراءات برمجة الشبكات بالذكاء الاصطناعي، وبناء لوحات Power BI التنفيذية لصناعة القرار.'
          : 'Strategic engineering portfolio for the Department of Municipalities and Transport (DMT) spanning mission-critical application modernization, AI-assisted RPA network programming, and executive Power BI analytics.',
      value: 'AED 11,692,713',
      period: PROJECTS_RECORD[8].period,
      status: PROJECTS_RECORD[8].status[locale],
      image: '/images/hero_abu_dhabi_advisory_1794979008017.jpg',
      imageAlt:
        locale === 'ar'
          ? 'مشاريع تطوير التطبيقات والذكاء الاصطناعي لدائرة البلديات والنقل في أبوظبي'
          : 'Department of Municipalities and Transport enterprise applications and AI engineering in Abu Dhabi',
      additionalMandate:
        locale === 'ar'
          ? '+ عقد أتمتة الشبكات بالذكاء الاصطناعي بقيمة 10,000,000 درهم وعقد استشارات Power BI'
          : '+ Paired with AED 10,000,000 AI/RPA Network Mandate & Power BI Advisory',
    },
  ];

  // Compact Architectural Ledger of 4 Additional Verified Mandates
  const ledgerHighlights = [
    PROJECTS_RECORD[7],  // AED 9,000,000 Municipal Presence Centre
    PROJECTS_RECORD[0],  // AED 3,599,984 Data Analysis & Digital Usage
    PROJECTS_RECORD[9],  // AED 3,477,181 Estates Management System
    PROJECTS_RECORD[16], // Data Analytics & Power BI Consultancy (NEW)
  ];

  return (
    <section
      id="engagements"
      className="py-24 md:py-36 bg-[#F7F5F0] dark:bg-[#071C17] border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="reveal-item reveal-delay-1 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-20 border-b border-[#DCE3DF] dark:border-[#174B3E] relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
              04 / {t.selectedEngagements}
            </span>
            <h2
              className="font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <BlurLetterReveal
                text={
                  locale === 'ar'
                    ? 'نتائج حقيقية من شراكات استراتيجية مع القطاع الحكومي'
                    : 'Real Results From Strategic Public-Sector Partnerships'
                }
                staggerMs={16}
                maxStaggerSpanMs={560}
              />
            </h2>
            <p className="text-base sm:text-lg text-[#3E544C] dark:text-[#A3B8B0] leading-relaxed max-w-2xl">
              {locale === 'ar'
                ? 'سجل عقود حكومية موثق يتجاوز 69 مليون درهم عبر 17 مشروعاً استراتيجياً مع بلدية مدينة أبوظبي، دائرة البلديات والنقل، وهيئة أبوظبي الرقمية.'
                : 'Over AED 69M+ in verified contract value delivered across 17 public-sector mandates with Abu Dhabi municipal, transport, and digital authorities.'}
            </p>
          </div>

          <Link
            href={projectsHref}
            className="btn-slide-trigger btn-press inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#071C17] hover:bg-[#174B3E] dark:bg-[#18C6A0] dark:hover:bg-[#12A989] text-[#F4F7F5] dark:text-[#071C17] text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] whitespace-nowrap shrink-0"
          >
            <span>
              {locale === 'ar'
                ? `استعراض سجل المشاريع الكامل (${PROJECTS_RECORD.length})`
                : `Inspect All ${PROJECTS_RECORD.length} Verified Mandates`}
            </span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>

          <div className="scroll-accent-progress absolute bottom-0 inset-x-0 h-[2px] bg-[#174B3E] dark:bg-[#18C6A0]" aria-hidden="true" />
        </div>

        {/* 2 Large-Scale Alternating Editorial Case Study Showcases */}
        <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
          {flagshipCases.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            const delayClass = idx === 0 ? 'reveal-delay-2' : 'reveal-delay-3';
            return (
              <article
                key={item.id}
                className={`reveal-item ${delayClass} group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch`}
              >
                {/* Large Image Frame (7 Columns) */}
                <div
                  className={`lg:col-span-7 flex flex-col ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Link
                    href={projectsHref}
                    className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-[#DCE3DF] dark:border-[#174B3E] bg-[#0B2922] block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
                  >
                    <div className="absolute inset-0 scroll-parallax-media">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        referrerPolicy="no-referrer"
                        className="object-cover object-center img-zoom-transition"
                      />
                    </div>
                    <div
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(7,28,23,0.12) 0%, rgba(7,28,23,0.34) 58%, rgba(7,28,23,0.92) 100%)',
                      }}
                    />

                    {/* Top Category & Period Tag */}
                    <div className="absolute top-0 inset-x-0 p-5 sm:p-6 flex items-center justify-between gap-4">
                      <span className="px-3 py-1 rounded bg-[#071C17]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#18C6A0] transition-colors group-hover:border-[#18C6A0]/50">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded bg-[#071C17]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F4F7F5]">
                        {item.period}
                      </span>
                    </div>

                    {/* Bottom Contract Value Callout */}
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-[#A3B8B0] uppercase">
                          {locale === 'ar' ? 'قيمة العقد الموثقة' : 'Verified Contract Value'}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#F4F7F5] mt-0.5">
                          {item.value}
                        </div>
                      </div>

                      <span className="w-11 h-11 rounded-full bg-[#18C6A0] text-[#071C17] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#12A989]">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Editorial Case Narrative (5 Columns) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between py-2 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-5">
                    <div className="reveal-line flex items-center justify-between border-b border-[#DCE3DF] dark:border-[#174B3E] pb-4">
                      <span className="font-mono text-sm font-bold text-[#174B3E] dark:text-[#18C6A0]">
                        CASE STUDY {item.index}
                      </span>
                      <span className="font-mono text-xs text-[#697671] dark:text-[#A3B8B0]">
                        {item.status}
                      </span>
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-[#3E544C] dark:text-[#A3B8B0]">
                      {item.client}
                    </div>

                    <HeadingH3 size="lg" interactive>
                      <Link
                        href={projectsHref}
                        className="focus:outline-none focus-visible:underline"
                      >
                        {item.title}
                      </Link>
                    </HeadingH3>

                    <p className="text-sm sm:text-base text-[#3E544C] dark:text-[#A3B8B0] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#DCE3DF] dark:border-[#174B3E] space-y-4">
                    <div className="text-xs font-mono text-[#174B3E] dark:text-[#18C6A0]">
                      {item.additionalMandate}
                    </div>

                    <Link
                      href={projectsHref}
                      className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#17211D] dark:text-[#F4F7F5] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors focus:outline-none focus-visible:underline"
                    >
                      <span>
                        {locale === 'ar' ? 'عرض تفاصيل العقد في السجل' : 'View Full Mandate Specification'}
                      </span>
                      <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Architectural Index Table for 4 Additional Verified Mandates */}
        <div className="reveal-item reveal-delay-4 mt-20 md:mt-24 pt-12 border-t border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#697671] dark:text-[#A3B8B0] block mb-1">
                {locale === 'ar' ? 'مختارات إضافية من السجل الرسمي' : 'Additional Verified Public-Sector Mandates'}
              </span>
              <HeadingH3 size="md">
                {locale === 'ar'
                  ? 'عقود حكومية إضافية ضمن محفظة الـ 17 مشروعاً'
                  : 'Selected Highlights from Our 17-Contract Government Portfolio'}
              </HeadingH3>
            </div>
            <Link
              href={projectsHref}
              className="text-xs font-mono font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline"
            >
              {locale === 'ar' ? 'عرض جميع العقود الـ 17 ←' : 'VIEW COMPLETE 17-CONTRACT LEDGER →'}
            </Link>
          </div>

          <div className="divide-y divide-[#DCE3DF] dark:divide-[#174B3E] border-y border-[#DCE3DF] dark:border-[#174B3E]">
            {ledgerHighlights.map((proj) => {
              const isMonetary =
                !proj.valueAED.startsWith('As per') &&
                !proj.valueAED.startsWith('Per') &&
                !proj.valueAED.startsWith('To be');

              return (
                <Link
                  key={proj.id}
                  href={projectsHref}
                  className="group py-5 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#ECE9E2]/60 dark:hover:bg-[#0B2922] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
                >
                  <div className="flex items-baseline gap-4 md:max-w-xl">
                    <span className="font-mono text-xs font-semibold text-[#174B3E] dark:text-[#18C6A0] shrink-0">
                      #{String(proj.id).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-base font-bold text-[#17211D] dark:text-[#F4F7F5] group-hover:text-[#174B3E] dark:group-hover:text-[#18C6A0] transition-colors">
                        {proj.project[locale]}
                      </div>
                      <div className="text-xs text-[#697671] dark:text-[#A3B8B0] mt-0.5">
                        {proj.client[locale]}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 ps-8 md:ps-0 shrink-0">
                    <span className="font-mono text-xs text-[#697671] dark:text-[#A3B8B0]">
                      {proj.period}
                    </span>
                    <span className="font-mono text-sm font-bold tabular-nums text-[#17211D] dark:text-[#F4F7F5] min-w-[140px] text-end">
                      {isMonetary
                        ? `AED ${proj.valueAED}`
                        : locale === 'ar'
                        ? 'عقد استشاري جديد'
                        : proj.valueAED}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#697671] group-hover:text-[#174B3E] dark:group-hover:text-[#18C6A0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <ScrollToNextButton
          targetId="experience"
          sectionIndex="05"
          variant="light"
          label={
            locale === 'ar'
              ? 'تعرف على منهجية العمل الاستشاري'
              : 'Continue to Consultancy Approach'
          }
          className="pt-14 md:pt-16"
        />
      </div>
    </section>
  );
}
