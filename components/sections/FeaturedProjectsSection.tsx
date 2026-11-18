import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale, PROJECTS_RECORD } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface FeaturedProjectsSectionProps {
  locale: Locale;
}

export default function FeaturedProjectsSection({ locale }: FeaturedProjectsSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  // 2 Flagship Large-Scale Editorial Case Studies (Consilio 1-2 large case studies pattern)
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

  // Compact Architectural Ledger of 4 Additional Verified Mandates (Not a card grid!)
  const ledgerHighlights = [
    PROJECTS_RECORD[7],  // AED 9,000,000 Municipal Presence Centre
    PROJECTS_RECORD[0],  // AED 3,599,984 Data Analysis & Digital Usage
    PROJECTS_RECORD[9],  // AED 3,477,181 Estates Management System
    PROJECTS_RECORD[16], // Data Analytics & Power BI Consultancy (NEW)
  ];

  return (
    <section
      id="engagements"
      className="py-24 md:py-36 bg-[#F5F7F7] dark:bg-[#000D0E] border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-20 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
              04 / {t.selectedEngagements}
            </span>
            <h2
              className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'نتائج حقيقية من شراكات استراتيجية مع القطاع الحكومي'
                : 'Real Results From Strategic Public-Sector Partnerships'}
            </h2>
            <p className="text-base sm:text-lg text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed max-w-2xl">
              {locale === 'ar'
                ? 'سجل عقود حكومية موثق يتجاوز 69 مليون درهم عبر 17 مشروعاً استراتيجياً مع بلدية مدينة أبوظبي، دائرة البلديات والنقل، وهيئة أبوظبي الرقمية.'
                : 'Over AED 69M+ in verified contract value delivered across 17 public-sector mandates with Abu Dhabi municipal, transport, and digital authorities.'}
            </p>
          </div>

          <Link
            href={projectsHref}
            className="btn-slide-trigger inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#001517] dark:bg-[#2DD4A4] text-[#F2F6F6] dark:text-[#001517] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span>
              {locale === 'ar'
                ? `استعراض سجل المشاريع الكامل (${PROJECTS_RECORD.length})`
                : `Inspect All ${PROJECTS_RECORD.length} Verified Mandates`}
            </span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>
        </div>

        {/* 2 Large-Scale Alternating Editorial Case Study Showcases */}
        <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
          {flagshipCases.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={item.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch"
              >
                {/* Large Image Frame (7 Columns) */}
                <div
                  className={`lg:col-span-7 flex flex-col ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Link
                    href={projectsHref}
                    className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-[#D8E2E2] dark:border-[#0E2F33] bg-[#04191B] block"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-center img-zoom-transition"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,13,14,0.1) 0%, rgba(0,13,14,0.3) 60%, rgba(0,13,14,0.88) 100%)',
                      }}
                    />

                    {/* Top Category & Period Tag */}
                    <div className="absolute top-0 inset-x-0 p-5 sm:p-6 flex items-center justify-between gap-4">
                      <span className="px-3 py-1 rounded bg-[#000D0E]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#2DD4A4]">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded bg-[#000D0E]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F2F6F6]">
                        {item.period}
                      </span>
                    </div>

                    {/* Bottom Contract Value Callout */}
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-[#9CB2B4] uppercase">
                          {locale === 'ar' ? 'قيمة العقد الموثقة' : 'Verified Contract Value'}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#F2F6F6] mt-0.5">
                          {item.value}
                        </div>
                      </div>

                      <span className="w-11 h-11 rounded-full bg-[#2DD4A4] text-[#001517] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <ArrowUpRight className="w-5 h-5" />
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
                    <div className="flex items-center justify-between border-b border-[#D8E2E2] dark:border-[#0E2F33] pb-4">
                      <span className="font-mono text-sm font-bold text-[#6B1426] dark:text-[#2DD4A4]">
                        CASE STUDY {item.index}
                      </span>
                      <span className="font-mono text-xs text-[#647A7C] dark:text-[#6C8587]">
                        {item.status}
                      </span>
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-[#3E5456] dark:text-[#9CB2B4]">
                      {item.client}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight leading-[1.18]">
                      <Link
                        href={projectsHref}
                        className="hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h3>

                    <p className="text-sm sm:text-base text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D8E2E2] dark:border-[#0E2F33] space-y-4">
                    <div className="text-xs font-mono text-[#6B1426] dark:text-[#2DD4A4]">
                      {item.additionalMandate}
                    </div>

                    <Link
                      href={projectsHref}
                      className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#001517] dark:text-[#F2F6F6] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors"
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

        {/* Clean Architectural Index Table for 4 Additional Verified Mandates (No Small Cards) */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#647A7C] dark:text-[#6C8587] block mb-1">
                {locale === 'ar' ? 'مختارات إضافية من السجل الرسمي' : 'Additional Verified Public-Sector Mandates'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#001517] dark:text-[#F2F6F6]">
                {locale === 'ar'
                  ? 'عقود حكومية إضافية ضمن محفظة الـ 17 مشروعاً'
                  : 'Selected Highlights from Our 17-Contract Government Portfolio'}
              </h3>
            </div>
            <Link
              href={projectsHref}
              className="text-xs font-mono font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline"
            >
              {locale === 'ar' ? 'عرض جميع العقود الـ 17 ←' : 'VIEW COMPLETE 17-CONTRACT LEDGER →'}
            </Link>
          </div>

          <div className="divide-y divide-[#D8E2E2] dark:divide-[#0E2F33] border-y border-[#D8E2E2] dark:border-[#0E2F33]">
            {ledgerHighlights.map((proj) => {
              const isMonetary =
                !proj.valueAED.startsWith('As per') &&
                !proj.valueAED.startsWith('Per') &&
                !proj.valueAED.startsWith('To be');

              return (
                <Link
                  key={proj.id}
                  href={projectsHref}
                  className="group py-5 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#EAEFEF]/60 dark:hover:bg-[#04191B] transition-colors"
                >
                  <div className="flex items-baseline gap-4 md:max-w-xl">
                    <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                      #{String(proj.id).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-base font-bold text-[#001517] dark:text-[#F2F6F6] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-colors">
                        {proj.project[locale]}
                      </div>
                      <div className="text-xs text-[#647A7C] dark:text-[#9CB2B4] mt-0.5">
                        {proj.client[locale]}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 ps-8 md:ps-0 shrink-0">
                    <span className="font-mono text-xs text-[#647A7C] dark:text-[#6C8587]">
                      {proj.period}
                    </span>
                    <span className="font-mono text-sm font-bold tabular-nums text-[#001517] dark:text-[#F2F6F6] min-w-[140px] text-end">
                      {isMonetary
                        ? `AED ${proj.valueAED}`
                        : locale === 'ar'
                        ? 'عقد استشاري جديد'
                        : proj.valueAED}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#647A7C] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
