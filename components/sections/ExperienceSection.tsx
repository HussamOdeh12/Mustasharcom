'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';

interface ExperienceSectionProps {
  locale: Locale;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const aboutHref = locale === 'ar' ? '/ar/about' : '/about';

  const [activePhase, setActivePhase] = useState(0);

  // Consilio-inspired Interactive 3-Stage Process ("Our Approach: Proven Framework For Sustainable Growth")
  // Grounded 100% in Mustasharcom's verified Corporate Profile consultancy philosophy & ISO 9001 delivery
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

  // Consilio "The Difference: Why Organizations Choose Mustasharcom" Comparison
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
      className="py-24 md:py-36 bg-[#EAEFEF] dark:bg-[#021214] border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PART 1: Consilio Interactive Approach / Methodology Framework */}
        <div className="pb-24 md:pb-28 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                05 / {locale === 'ar' ? 'منهجية العمل الاستشاري' : 'Our Consultancy Approach'}
              </span>
              <h2
                className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {locale === 'ar'
                  ? 'إطار عمل منهجي لتبسيط التعقيد وتحقيق نتائج مستدامة'
                  : 'A Proven Framework For Sustainable Institutional Transformation'}
              </h2>
            </div>

            <Link
              href={aboutHref}
              className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{locale === 'ar' ? 'المزيد عن فلسفتنا الاستشارية' : 'More About Our Methodology'}</span>
              <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
            </Link>
          </div>

          {/* Interactive 3-Stage Process Selector Tabs */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 border border-[#C5D3D3] dark:border-[#0E2F33] rounded-t-xl overflow-hidden bg-white/60 dark:bg-[#04191B]/60"
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
                  className={`p-6 sm:p-7 text-start transition-all duration-200 cursor-pointer border-b md:border-b-0 md:border-e last:border-0 border-[#C5D3D3] dark:border-[#0E2F33] flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#001517] text-[#F2F6F6] dark:bg-[#2DD4A4] dark:text-[#001517]'
                      : 'hover:bg-white dark:hover:bg-[#072225] text-[#3E5456] dark:text-[#9CB2B4]'
                  }`}
                >
                  <span className="text-base sm:text-lg font-bold tracking-tight">
                    {phase.tabLabel}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected
                        ? 'bg-[#2DD4A4] dark:bg-[#001517]'
                        : 'bg-[#C5D3D3] dark:bg-[#153C40]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Stage Large Editorial Showcase Panel */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-b-xl border-x border-b border-[#C5D3D3] dark:border-[#0E2F33] bg-white dark:bg-[#04191B] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 page-transition-enter" key={currentPhase.step}>
              <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4]">
                <span>STAGE {currentPhase.step} OF 03</span>
                <span>·</span>
                <span>ISO 9001:2015 GOVERNED</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight leading-[1.15]">
                {currentPhase.title}
              </h3>

              <p className="text-base sm:text-lg text-[#3E5456] dark:text-[#9CB2B4] leading-relaxed">
                {currentPhase.summary}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#F5F7F7] dark:bg-[#000D0E] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#647A7C] dark:text-[#6C8587]">
                {locale === 'ar' ? 'المخرجات الرئيسية لهذه المرحلة' : 'Key Stage Deliverables'}
              </div>
              <ul className="space-y-3">
                {currentPhase.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#001517] dark:text-[#F2F6F6] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#6B1426] dark:text-[#2DD4A4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PART 2: Consilio "The Difference — Why Organizations Choose Mustasharcom" */}
        <div className="py-24 md:py-28 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
              06 / {locale === 'ar' ? 'الفارق الاستراتيجي' : 'The Mustasharcom Difference'}
            </span>
            <h2
              className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3.25rem)' }}
            >
              {locale === 'ar'
                ? 'لماذا تختار الهيئات الحكومية في أبوظبي شراكة مستشاركم'
                : 'Why Public-Sector Authorities Choose Mustasharcom'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Conventional Consultancy Pitfalls */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-xl border border-[#D8E2E2] dark:border-[#0E2F33] bg-[#F5F7F7]/70 dark:bg-[#04191B]/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#647A7C] dark:text-[#6C8587]">
                  {locale === 'ar' ? 'النماذج الاستشارية التقليدية' : 'Conventional Vendors'}
                </div>
                <h3 className="text-xl font-bold text-[#3E5456] dark:text-[#9CB2B4]">
                  {locale === 'ar'
                    ? 'العديد من المشاريع الاستشارية تتعثر عند الانتقال من التخطيط إلى التشغيل الفعلي.'
                    : 'Many consulting engagements deliver lengthy reports, but fall short during technical execution.'}
                </h3>
                <ul className="space-y-3.5 pt-2">
                  {traditionalChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#52686A] dark:text-[#8AA3A5]">
                      <span className="font-mono text-xs text-[#647A7C] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* With Mustasharcom (High-Contrast Dark Editorial Panel) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-xl border border-[#123A3F] bg-[#001517] text-[#F2F6F6] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2DD4A4]">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4A4]" />
                  <span>{locale === 'ar' ? 'مع مستشاركم للحلول المعلوماتية' : 'With Mustasharcom'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F6F6] tracking-tight leading-snug">
                  {locale === 'ar'
                    ? 'ندمج الخبرة الاستشارية مع التنفيذ الهندسي الميداني لتحقيق كفاءة ملموسة ومستدامة.'
                    : 'We combine senior advisory expertise with hands-on software & AI execution to deliver measurable institutional results.'}
                </h3>
                <ul className="space-y-4 pt-2">
                  {mustasharcomAdvantages.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#D8E6E7]">
                      <CheckCircle2 className="w-5 h-5 text-[#2DD4A4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Verified Abu Dhabi Government Partner Roster (Architectural Hairline Matrix) */}
        <div className="pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B1426] dark:text-[#2DD4A4] block mb-1">
                {locale === 'ar' ? 'الجهات الحكومية المتعاقد معها' : 'Verified Government Partner Roster'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                {locale === 'ar'
                  ? 'شراكات راسخة مع هيئات ودوائر حكومة أبوظبي'
                  : 'Trusted by Leading Authorities Across the Emirate of Abu Dhabi'}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#647A7C] dark:text-[#9CB2B4]">
              {COMPANY_PROFILE.location.city[locale]} · 100% PUBLIC SECTOR HERITAGE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-s border-[#C5D3D3] dark:border-[#0E2F33]">
            {clientEntities.map((entity) => (
              <div
                key={entity.idx}
                className="p-7 sm:p-8 border-e border-b border-[#C5D3D3] dark:border-[#0E2F33] bg-white/75 dark:bg-[#04191B]/75 hover:bg-white dark:hover:bg-[#04191B] transition-colors flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4]">
                    /{entity.idx}
                  </span>
                  <h4 className="text-lg font-bold text-[#001517] dark:text-[#F2F6F6] leading-snug">
                    {entity.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E5456] dark:text-[#9CB2B4] pt-4 border-t border-[#D8E2E2] dark:border-[#0E2F33]">
                  {entity.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
