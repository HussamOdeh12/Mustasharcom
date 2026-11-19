'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import BlurLetterReveal from '../motion/BlurLetterReveal';
import HeadingH3 from '../ui/HeadingH3';
import ScrollToNextButton from '../ui/ScrollToNextButton';

interface ExperienceSectionProps {
  locale: Locale;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const aboutHref = locale === 'ar' ? '/ar/about' : '/about';

  const [activePhase, setActivePhase] = useState(0);

  const approachPhases = [
    {
      step: '01',
      tabLabel: locale === 'ar' ? '01. الاستكشاف والتشخيص' : '01. Discover & Assess',
      title:
        locale === 'ar'
          ? 'تشخيص بيئة الأعمال وتقييم البنية التقنية والبيانات'
          : 'Institutional Discovery & Architecture Assessment',
      summary:
        locale === 'ar'
          ? 'نبدأ كل مشروع بدراسة دقيقة لمتطلبات الجهة الحكومية، وتحديد الاختناقات التشغيلية، وتقييم جاهزية قواعد البيانات والأنظمة القائمة لتحديد الأولويات ذات الأثر الأعلى.'
          : 'We assess your existing systems, identify operational bottlenecks, audit data repositories, and uncover the highest-impact priorities for sustainable transformation.',
      deliverables:
        locale === 'ar'
          ? [
              'تحليل الفجوات التقنية وتدقيق جودة وتصنيف البيانات',
              'مواءمة المتطلبات مع معايير هيئة أبوظبي الرقمية والأمن السيبراني',
              'تحديد مؤشرات الأداء الرئيسية (KPIs) المستهدفة للإدارة العليا',
            ]
          : [
              'Technical gap analysis and enterprise dataset classification audit',
              'Alignment with Abu Dhabi sovereign digital and security standards',
              'Definition of measurable executive KPIs and target SLA benchmarks',
            ],
    },
    {
      step: '02',
      tabLabel: locale === 'ar' ? '02. الهندسة المبسطة' : '02. Architect & Simplify',
      title:
        locale === 'ar'
          ? 'تصميم الحلول المعقدة بأبسط صورة تشغيلية ممكنة'
          : 'Simplified Architecture for Complex Enterprise Systems',
      summary:
        locale === 'ar'
          ? 'ترتكز فلسفتنا الاستشارية على تبسيط أعقد منظومات تخطيط الموارد (ERP) وتحليلات البيانات والذكاء الاصطناعي ضمن خارطة طريق واضحة تقلل التكلفة وتسرّع التبني المؤسسي.'
          : 'Guided by our core philosophy—"implementing complex business solutions in the simplest way"—we design clear technical roadmaps, Power BI models, and RPA workflows.',
      deliverables:
        locale === 'ar'
          ? [
              'تصميم معمارية الأنظمة ومسارات تكامل البيانات (ETL) ولوحات Power BI',
              'نمذجة الروبوتات البرمجية (RPA) لأتمتة الإجراءات المتكررة',
              'خطط تنفيذية مرحلية مع ضوابط حوكمة وإدارة مخاطر واضحة',
            ]
          : [
              'System architecture blueprints, ETL data pipelines, and Power BI models',
              'AI/RPA automation workflow design to eliminate manual bottlenecks',
              'Phased implementation roadmaps with audited risk and cost controls',
            ],
    },
    {
      step: '03',
      tabLabel: locale === 'ar' ? '03. التنفيذ والتشغيل المستدام' : '03. Execute & Optimize',
      title:
        locale === 'ar'
          ? 'التنفيذ المحكوم بمعايير ISO 9001:2015 والدعم التشغيلي المستمر'
          : 'ISO 9001-Governed Delivery, SLA Operations & Optimization',
      summary:
        locale === 'ar'
          ? 'لا ينتهي دورنا عند تسليم التوصيات؛ بل نشارك فرق العمل ميدانياً في التنفيذ، وتشغيل المراكز الذكية (Smart Hub)، وتقديم الدعم الفني المستمر ونقل المعرفة للكوادر الوطنية.'
          : 'Our commitment extends beyond project delivery—providing embedded engineering teams, 24/7 Smart Hub and ERP operational backing, and continuous optimization.',
      deliverables:
        locale === 'ar'
          ? [
              'إدارة مشاريع معتمدة بشهادة الجودة العالمية ISO 9001:2015',
              'تشغيل ودعم فني مستمر وفق اتفاقيات مستوى الخدمة (SLA)',
              'تدريب وتمكين فرق العمل الحكومية لضمان استدامة الأثر',
            ]
          : [
              'Project execution audited under ISO 9001:2015 Quality Management',
              'Ongoing SLA-backed technical support and Smart Hub operations',
              'Structured knowledge transfer and capability building for client teams',
            ],
    },
  ];

  const traditionalChallenges =
    locale === 'ar'
      ? [
          'توصيات نظرية مطولة دون مشاركة فعلية في التنفيذ التقني',
          'بناء أنظمة مفرطة التعقيد تزيد من تكاليف التشغيل والصيانة',
          'انتهاء العلاقة الاستشارية فور تسليم المشروع دون دعم مستدام',
          'حلول عامة غير مهيأة لمتطلبات المشتريات والحوكمة الحكومية في أبوظبي',
        ]
      : [
          'Theoretical reports that fall short during actual technical implementation',
          'Over-engineered architectures that inflate maintenance and licensing costs',
          'Limited involvement after initial deployment with fragmented SLA support',
          'Generic frameworks unaligned with Abu Dhabi public procurement & ICV mandates',
        ];

  const mustasharcomAdvantages =
    locale === 'ar'
      ? [
          'تنفيذ الحلول المعقدة بأبسط صورة تشغيلية تضمن أقصى كفاءة وتوفير',
          'شركة وطنية إماراتية 100% حاصلة على شهادة القيمة المحلية (ICV 55.03%)',
          'حوكمة جودة معتمدة دولياً (ISO 9001:2015) وسجل 100% مع القطاع الحكومي',
          'شراكة تشغيلية ممتدة تشمل الدعم الفني وإسناد الكوادر وتشغيل المراكز الذكية',
        ]
      : [
          'Pragmatic execution that implements complex systems in the simplest way',
          '100% UAE National-Owned enterprise with verified 55.03% ICV certification',
          'Audited ISO 9001:2015 quality governance across 17 public-sector contracts',
          'Long-term operational partnership spanning advisory, AI build, and SLA support',
        ];

  const clientEntities = [
    {
      idx: '01',
      name: locale === 'ar' ? 'بلدية مدينة أبوظبي' : 'Abu Dhabi City Municipality',
      scope: locale === 'ar' ? 'تحليل البيانات · المراكز الذكية CRM · مراكز التواجد البلدي' : 'Data Analytics · Smart Hub CRM · Municipal Presence Centres',
    },
    {
      idx: '02',
      name: locale === 'ar' ? 'دائرة البلديات والنقل (DMT)' : 'Department of Municipalities & Transport (DMT)',
      scope: locale === 'ar' ? 'أتمتة الشبكات RPA · تطوير التطبيقات · لوحات Power BI' : 'AI/RPA Network Automation · Applications · Power BI Dashboards',
    },
    {
      idx: '03',
      name: locale === 'ar' ? 'هيئة أبوظبي الرقمية (ADDA)' : 'Abu Dhabi Digital Authority (ADDA)',
      scope: locale === 'ar' ? 'تحديث الخدمات الرقمية · الكوادر التقنية المتخصصة' : 'Services Modernization Resources · ICT Specialist Outsourcing',
    },
    {
      idx: '04',
      name: locale === 'ar' ? 'مركز النقل المتكامل (ITC)' : 'Integrated Transport Centre (ITC)',
      scope: locale === 'ar' ? 'الدعم الفني المتخصص لخدمات SAP Ariba' : 'Enterprise SAP Ariba Procurement Technical Support',
    },
    {
      idx: '05',
      name: locale === 'ar' ? 'مؤسسة الرعاية الاجتماعية وشؤون القصر' : 'Social, Minors & Care Affairs Foundation',
      scope: locale === 'ar' ? 'دعم منصة تم (Tamm) · نظام إدارة التركات الموروثة' : 'Tamm Platform Support · Estates Management System',
    },
    {
      idx: '06',
      name: locale === 'ar' ? 'المؤسسة العامة لحديقة الحيوان بالعين' : 'Zoo & Aquarium Public Institution, Al Ain',
      scope: locale === 'ar' ? 'إسناد الموارد والكوادر التقنية المتخصصة' : 'Dedicated ICT Manpower & Technical Resources Agreement',
    },
  ];

  const currentPhase = approachPhases[activePhase];

  return (
    <section
      id="experience"
      className="py-24 md:py-36 bg-[#ECE9E2] dark:bg-[#051410] border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PART 1: Consilio Interactive Approach / Methodology Framework */}
        <div className="reveal-item reveal-delay-1 pb-24 md:pb-28 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-6 border-b border-[#DCE3DF] dark:border-[#174B3E] relative">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                05 / {locale === 'ar' ? 'منهجية العمل الاستشاري' : 'Our Consultancy Approach'}
              </span>
              <h2
                className="font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                <BlurLetterReveal
                  text={
                    locale === 'ar'
                      ? 'إطار عمل منهجي لتبسيط التعقيد وتحقيق نتائج مستدامة'
                      : 'A Proven Framework For Sustainable Institutional Transformation'
                  }
                  staggerMs={15}
                  maxStaggerSpanMs={560}
                />
              </h2>
            </div>

            <Link
              href={aboutHref}
              className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
            >
              <span>{locale === 'ar' ? 'المزيد عن فلسفتنا الاستشارية' : 'More About Our Methodology'}</span>
              <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
            </Link>

            <div className="scroll-accent-progress absolute bottom-0 inset-x-0 h-[2px] bg-[#174B3E] dark:bg-[#18C6A0]" aria-hidden="true" />
          </div>

          {/* Interactive 3-Stage Process Selector Tabs */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 border border-[#DCE3DF] dark:border-[#174B3E] rounded-t-xl overflow-hidden bg-white/60 dark:bg-[#0B2922]/60"
            role="tablist"
            aria-label={locale === 'ar' ? 'مراحل المنهجية الاستشارية' : 'Consultancy methodology stages'}
          >
            {approachPhases.map((phase, idx) => {
              const isSelected = idx === activePhase;
              return (
                <button
                  key={phase.step}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActivePhase(idx)}
                  className={`btn-press p-6 sm:p-7 text-start transition-all duration-200 cursor-pointer border-b md:border-b-0 md:border-e last:border-0 border-[#DCE3DF] dark:border-[#174B3E] flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#18C6A0] ${
                    isSelected
                      ? 'bg-[#071C17] text-[#F4F7F5] dark:bg-[#18C6A0] dark:text-[#071C17]'
                      : 'hover:bg-white dark:hover:bg-[#10352C] text-[#3E544C] dark:text-[#A3B8B0]'
                  }`}
                >
                  <span className="text-base sm:text-lg font-bold tracking-tight">
                    {phase.tabLabel}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      isSelected
                        ? 'text-[#18C6A0] dark:text-[#071C17]'
                        : 'text-[#697671] dark:text-[#6E857D]'
                    }`}
                    aria-hidden="true"
                  >
                    {phase.step}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Large Editorial Showcase Panel */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-b-xl border-x border-b border-[#DCE3DF] dark:border-[#174B3E] bg-white dark:bg-[#0B2922] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 page-transition-enter" key={currentPhase.step}>
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0]">
                <span>STAGE {currentPhase.step} OF 03</span>
                <span>·</span>
                <span>ISO 9001:2015 GOVERNED</span>
              </div>

              <HeadingH3 size="display">
                {currentPhase.title}
              </HeadingH3>

              <p className="text-base sm:text-lg text-[#3E544C] dark:text-[#A3B8B0] leading-relaxed">
                {currentPhase.summary}
              </p>
            </div>

            <div
              key={`${currentPhase.step}-deliverables`}
              className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#F7F5F0] dark:bg-[#071C17] border border-[#DCE3DF] dark:border-[#174B3E] space-y-4 page-transition-enter"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#697671] dark:text-[#A3B8B0]">
                {locale === 'ar' ? 'المخرجات الرئيسية لهذه المرحلة' : 'Key Stage Deliverables'}
              </div>
              <ul className="space-y-3">
                {currentPhase.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#17211D] dark:text-[#F4F7F5] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#174B3E] dark:text-[#18C6A0] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PART 2: Consilio "The Difference — Why Organizations Choose Mustasharcom" */}
        <div className="reveal-item reveal-delay-2 py-24 md:py-28 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
              06 / {locale === 'ar' ? 'الفارق الاستراتيجي' : 'The Mustasharcom Difference'}
            </span>
            <h2
              className="font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3.25rem)' }}
            >
              {locale === 'ar'
                ? 'لماذا تختار الهيئات الحكومية في أبوظبي شراكة مستشاركم'
                : 'Why Public-Sector Authorities Choose Mustasharcom'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Conventional Consultancy Pitfalls */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-xl border border-[#DCE3DF] dark:border-[#174B3E] bg-[#F7F5F0]/80 dark:bg-[#0B2922]/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697671] dark:text-[#A3B8B0]">
                  {locale === 'ar' ? 'النماذج الاستشارية التقليدية' : 'Conventional Vendors'}
                </div>
                <HeadingH3 size="md" tone="muted">
                  {locale === 'ar'
                    ? 'العديد من المشاريع الاستشارية تتعثر عند الانتقال من التخطيط إلى التشغيل الفعلي.'
                    : 'Many consulting engagements deliver lengthy reports, but fall short during technical execution.'}
                </HeadingH3>
                <ul className="space-y-3.5 pt-2">
                  {traditionalChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#697671] dark:text-[#A3B8B0]">
                      <span className="font-mono text-xs text-[#697671] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* With Mustasharcom (High-Contrast Dark Editorial Panel) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-xl border border-[#174B3E] bg-[#071C17] text-[#F4F7F5] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#18C6A0]">
                  <span>{locale === 'ar' ? 'مع مستشاركم للحلول المعلوماتية' : 'With Mustasharcom'}</span>
                </div>
                <HeadingH3 size="lg" tone="inverted">
                  {locale === 'ar'
                    ? 'ندمج الخبرة الاستشارية مع التنفيذ الهندسي الميداني لتحقيق كفاءة ملموسة ومستدامة.'
                    : 'We combine senior advisory expertise with hands-on software & AI execution to deliver measurable institutional results.'}
                </HeadingH3>
                <ul className="space-y-4 pt-2">
                  {mustasharcomAdvantages.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#DCE6E2]">
                      <CheckCircle2 className="w-5 h-5 text-[#18C6A0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Verified Abu Dhabi Government Partner Roster (Architectural Hairline Matrix) */}
        <div className="reveal-item reveal-delay-3 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#174B3E] dark:text-[#18C6A0] block mb-1">
                {locale === 'ar' ? 'الجهات الحكومية المتعاقد معها' : 'Verified Government Partner Roster'}
              </span>
              <HeadingH3 size="lg">
                {locale === 'ar'
                  ? 'شراكات راسخة مع هيئات ودوائر حكومة أبوظبي'
                  : 'Trusted by Leading Authorities Across the Emirate of Abu Dhabi'}
              </HeadingH3>
            </div>
            <span className="font-mono text-xs text-[#697671] dark:text-[#A3B8B0]">
              {COMPANY_PROFILE.location.city[locale]} · 100% PUBLIC SECTOR HERITAGE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-s border-[#DCE3DF] dark:border-[#174B3E]">
            {clientEntities.map((entity) => (
              <div
                key={entity.idx}
                className="group p-7 sm:p-8 border-e border-b border-[#DCE3DF] dark:border-[#174B3E] bg-white/80 dark:bg-[#0B2922]/80 hover:bg-white dark:hover:bg-[#0B2922] transition-colors flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0]">
                    /{entity.idx}
                  </span>
                  <h4 className="text-lg font-bold text-[#17211D] dark:text-[#F4F7F5] leading-snug">
                    {entity.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E544C] dark:text-[#A3B8B0] pt-4 border-t border-[#DCE3DF] dark:border-[#174B3E]">
                  {entity.scope}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ScrollToNextButton
          targetId="credentials"
          sectionIndex="07"
          variant="light"
          label={
            locale === 'ar'
              ? 'الاطلاع على التراخيص وشهادات الجودة'
              : 'Continue to Licensing & Quality'
          }
          className="pt-14 md:pt-16"
        />
      </div>
    </section>
  );
}
