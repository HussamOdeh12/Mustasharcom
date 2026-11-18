import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
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

  const pillars = [
    {
      num: '01',
      title: t.ourMission,
      body: COMPANY_PROFILE.mission[locale],
    },
    {
      num: '02',
      title: t.ourApproach,
      body: COMPANY_PROFILE.consultancyApproach[locale],
    },
    {
      num: '03',
      title: locale === 'ar' ? 'فريق كفاءات متعدد التخصصات' : 'Multi-Disciplinary Delivery Team',
      body:
        locale === 'ar'
          ? 'فريق متمرس يضم مدراء مشاريع، ومبرمجين، وخبراء جودة يعملون جنباً إلى جنب مع عملائنا في أبوظبي لضمان استدامة الحلول والالتزام بأعلى معايير الحوكمة.'
          : 'A seasoned team of project managers, software engineers, and quality assurance specialists working alongside Abu Dhabi institutions to guarantee durable technical execution.',
    },
  ];

  return (
    <section
      id="who-we-are"
      className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#07110E] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consilio-style Editorial Statement Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide">
              01 · {t.whoWeAre}
            </span>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-[1.18] text-balance">
              &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-sm sm:text-base text-[#485650] dark:text-[#A6B5AF] max-w-2xl leading-relaxed">
                {locale === 'ar'
                  ? 'تأسست شركة مستشاركم للحلول المعلوماتية ذ.م.م في العاصمة أبوظبي عام 2019 كشركة وطنية إماراتية بنسبة 100%، لتكون شريكاً استشارياً وتقنياً للجهات الحكومية والمؤسسات الكبرى.'
                  : 'Established in Abu Dhabi in 2019 as a 100% UAE national-owned consultancy, Mustasharcom for Informatics Solutions bridges institutional strategy with disciplined software and data engineering.'}
              </p>

              <Link
                href={aboutHref}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
              >
                <span>{locale === 'ar' ? 'تعرف على الشركة والقيادة' : 'About Mustasharcom & Leadership'}</span>
                <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Split: Documentary Editorial Photography + 3 Numbered Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-14 items-stretch">
          {/* Documentary Boardroom Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] rounded-lg overflow-hidden border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#0C1A15]">
              <Image
                src="/images/about_executive_boardroom_1794979011521.jpg"
                alt={
                  locale === 'ar'
                    ? 'اجتماع استشاري تنفيذي لشركة مستشاركم في أبوظبي'
                    : 'Mustasharcom executive consulting advisory session in Abu Dhabi'
                }
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-[#F4F6F5]">
                <div className="text-xs font-mono text-[#2DD4A4]">
                  {COMPANY_PROFILE.ownership[locale]}
                </div>
                <div className="text-sm font-semibold mt-0.5">
                  {locale === 'ar'
                    ? 'مكتب 02، مبنى شرق 22_2، آل نهيان، أبوظبي'
                    : 'Al Nahyan, Abu Dhabi · Corporate Advisory Practice'}
                </div>
              </div>
            </div>
          </div>

          {/* 3 Editorial Pillars (Separated by Hairlines, No Nested Card-in-Card Clutter) */}
          <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-[#E3DFD7] dark:divide-[#1A2E26]">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-sm font-semibold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                  {pillar.num}.
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
