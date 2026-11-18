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

  // Select 6 prominent public sector engagements from the verified register
  const featuredEngagements = [
    PROJECTS_RECORD[3], // AED 14,522,880 Smart Hub & CRM
    PROJECTS_RECORD[8], // AED 11,692,713 DMT Applications
    PROJECTS_RECORD[6], // AED 10,000,000 DMT RPA AI
    PROJECTS_RECORD[7], // AED 9,000,000 Municipal Presence Centre
    PROJECTS_RECORD[0], // AED 3,599,984 Data Analysis & Digital Usage
    PROJECTS_RECORD[16], // Data Analytics & Power BI Consultancy (NEW)
  ];

  return (
    <section
      id="engagements"
      className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#07110E] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide block">
              04 · {t.selectedEngagements}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-tight text-balance">
              {locale === 'ar'
                ? 'نماذج من المشاريع والعقود الحكومية الموثقة'
                : 'Selected Public Sector Mandates & Delivered Engagements'}
            </h2>
            <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
              {locale === 'ar'
                ? 'سجل أعمال موثق يتجاوز 69 مليون درهم عبر 17 عقداً مع بلدية مدينة أبوظبي، دائرة البلديات والنقل، وهيئة أبوظبي الرقمية.'
                : 'Over AED 69M+ in verified contract value across 17 public-sector engagements with Abu Dhabi municipal and digital authorities.'}
            </p>
          </div>

          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t.viewProjects} ({PROJECTS_RECORD.length})</span>
            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* Consilio-style Featured Case Study Banner */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 rounded-lg overflow-hidden border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA] dark:bg-[#0C1A15]">
          <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[300px] bg-[#07110E]">
            <Image
              src="/images/project_municipal_digital_hub_1794979012536.jpg"
              alt={
                locale === 'ar'
                  ? 'مشاريع التحول الرقمي والمراكز الذكية للقطاع الحكومي في أبوظبي'
                  : 'Abu Dhabi municipal smart service center and digital transformation operations'
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A]/75 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#6B1426] dark:text-[#2DD4A4]">
                {locale === 'ar' ? 'بلدية مدينة أبوظبي · دائرة البلديات والنقل' : 'Abu Dhabi City Municipality · DMT'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5] leading-snug">
                {locale === 'ar'
                  ? 'تشغيل ودعم منظومات المراكز الذكية (Smart Hub)، التطبيقات المؤسسية، ولوحات قياس الأداء'
                  : 'Multi-Year Smart Hub Operations, Enterprise Application Engineering & Executive Analytics'}
              </h3>
              <p className="text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                {locale === 'ar'
                  ? 'عقود استراتيجية متتالية تشمل الدعم الفني والتشغيلي لمراكز الاتصال الذكية ونظام CRM، تطوير التطبيقات البلدية، وأتمتة إجراءات الشبكات.'
                  : 'Consecutive multi-million AED mandates spanning Smart Hub CRM call center engineering, municipal presence center backing, and AI/RPA automation.'}
              </p>
            </div>

            <div className="pt-5 border-t border-[#E3DFD7] dark:border-[#1A2E26] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#687670] dark:text-[#8FA19A] font-mono">
                100% {locale === 'ar' ? 'جهات حكومية وشبه حكومية' : 'Government & Semi-Government Portfolio'}
              </div>
              <Link
                href={projectsHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline"
              >
                <span>{locale === 'ar' ? 'استعراض السجل الكامل (17 مشروعاً)' : 'Inspect Full 17-Project Register'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Curated Engagements Architectural Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEngagements.map((item) => {
            const isMonetary =
              !item.valueAED.startsWith('As per') &&
              !item.valueAED.startsWith('Per') &&
              !item.valueAED.startsWith('To be');

            return (
              <Link
                key={item.id}
                href={projectsHref}
                className="group p-6 sm:p-7 rounded-lg border border-[#E3DFD7] dark:border-[#1A2E26] bg-white dark:bg-[#0C1A15] hover:border-[#6B1426] dark:hover:border-[#2DD4A4] transition-colors flex flex-col justify-between gap-6 hover-card-lift"
              >
                <div className="space-y-3">
                  {/* Unboxed Metadata Row */}
                  <div className="flex items-center justify-between gap-2 text-xs text-[#687670] dark:text-[#8FA19A]">
                    <span className="font-mono font-semibold text-[#6B1426] dark:text-[#2DD4A4]">
                      #{String(item.id).padStart(2, '0')}
                    </span>
                    <span>
                      {item.status[locale]} · {item.period}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base font-bold text-[#0B1713] dark:text-[#F4F6F5] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-colors leading-snug">
                    {item.project[locale]}
                  </h3>

                  {/* Client Entity */}
                  <p className="text-xs text-[#485650] dark:text-[#A6B5AF]">
                    {item.client[locale]}
                  </p>
                </div>

                {/* Bottom Value & Link */}
                <div className="pt-4 border-t border-[#E3DFD7] dark:border-[#1A2E26] flex items-center justify-between text-xs">
                  <span className="font-mono font-bold tabular-nums text-[#0B1713] dark:text-[#F4F6F5]">
                    {isMonetary
                      ? `AED ${item.valueAED}`
                      : locale === 'ar'
                      ? 'عقد إطاري / استشاري'
                      : item.valueAED}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#687670] dark:text-[#8FA19A] group-hover:text-[#6B1426] dark:group-hover:text-[#2DD4A4] transition-colors">
                    <span>{locale === 'ar' ? 'التفاصيل' : 'Reference'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
