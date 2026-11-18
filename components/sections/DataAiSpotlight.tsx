'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/lib/company-data';
import { useViewportObserver } from '@/lib/motion';

// Dynamically load the Data & AI Network Canvas only once the section approaches the viewport
const DataAiNetworkCanvas = dynamic(() => import('../motion/DataAiNetworkCanvas'), {
  ssr: false,
});

interface DataAiSpotlightProps {
  locale: Locale;
}

function StaticNetworkFallback() {
  return (
    <div
      className="relative w-full h-[260px] sm:h-[310px] rounded-lg border border-white/10 bg-[#071C17]/75 overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      <svg className="w-full h-full opacity-55" viewBox="0 0 560 310" fill="none">
        <path d="M106 86 Q 198 48 291 56" stroke="#18C6A0" strokeWidth="1.2" strokeOpacity="0.45" />
        <path d="M291 56 Q 370 46 448 93" stroke="#18C6A0" strokeWidth="1.2" strokeOpacity="0.45" />
        <path d="M106 86 Q 112 162 128 224" stroke="#174B3E" strokeWidth="1.2" />
        <path d="M128 224 Q 220 220 313 192" stroke="#18C6A0" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M313 192 Q 392 225 464 235" stroke="#18C6A0" strokeWidth="1.2" strokeOpacity="0.45" />
        <path d="M448 93 Q 468 164 464 235" stroke="#174B3E" strokeWidth="1.2" />
        <circle cx="106" cy="86" r="5.5" fill="#18C6A0" />
        <circle cx="291" cy="56" r="6" fill="#18C6A0" />
        <circle cx="448" cy="93" r="6.5" fill="#18C6A0" />
        <circle cx="128" cy="224" r="5.5" fill="#12A989" />
        <circle cx="313" cy="192" r="6" fill="#18C6A0" />
        <circle cx="464" cy="235" r="6" fill="#18C6A0" />
      </svg>
    </div>
  );
}

export default function DataAiSpotlight({ locale }: DataAiSpotlightProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const dataAiHref = locale === 'ar' ? '/ar/services/data-ai' : '/services/data-ai';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  const sectionRef = useRef<HTMLElement>(null);
  const { hasEntered } = useViewportObserver(sectionRef, {
    rootMargin: '240px 0px',
    threshold: 0.01,
  });

  const [activeStage, setActiveStage] = useState(0);

  const capabilities = [
    {
      num: '01',
      code: 'DATA-ANALYTICS',
      title: locale === 'ar' ? 'تحليلات وتصنيف البيانات الحكومية' : 'Enterprise Data Analytics & Classification',
      metric: 'AED 3.60M+',
      metricLabel: locale === 'ar' ? 'عقود تحليل البيانات الموثقة' : 'Verified Data Analysis Mandates',
      desc:
        locale === 'ar'
          ? 'استشارات متخصصة في تصنيف مجموعات البيانات الحكومية الضخمة، والتدقيق الإحصائي، وتحليل معدلات تبني واستخدام الخدمات الرقمية عبر القنوات البلدية.'
          : 'Comprehensive data classification, statistical auditing, and digital service adoption analysis across large-scale municipal repositories in Abu Dhabi.',
      deliverables:
        locale === 'ar'
          ? [
              'تصنيف وهيكلة قواعد البيانات المؤسسية والبلدية',
              'قياس مؤشرات التحول الرقمي وتبني خدمات المتعاملين',
              'نماذج التنبؤ الإحصائي وتحليل كفاءة العمليات',
            ]
          : [
              'Municipal & institutional dataset taxonomy and classification',
              'Digital service adoption and citizen channel utilization analysis',
              'Statistical performance auditing and operational bottleneck modeling',
            ],
    },
    {
      num: '02',
      code: 'POWER-BI-SUITE',
      title: locale === 'ar' ? 'لوحات وتقارير Power BI التنفيذية' : 'Executive Power BI Dashboards & Reporting',
      metric: 'Executive KPI',
      metricLabel: locale === 'ar' ? 'منظومات قياس الأداء القيادية' : 'Executive Decision Intelligence',
      desc:
        locale === 'ar'
          ? 'تصميم وبناء منظومات تقارير ولوحات Power BI تفاعلية للقيادات العليا في دائرة البلديات والنقل لمتابعة مؤشرات الأداء الاستراتيجية والتشغيلية.'
          : 'Bespoke Power BI dashboard ecosystems engineered for senior leadership at DMT and municipal authorities to monitor strategic KPIs and SLA compliance.',
      deliverables:
        locale === 'ar'
          ? [
              'لوحات قيادة تنفيذية تفاعلية متعددة المستويات (Drill-down)',
              'أتمتة التقارير الدورية ومؤشرات الالتزام باتفاقيات مستوى الخدمة',
              'ربط مباشر مع قواعد بيانات Oracle و SQL و SAP',
            ]
          : [
              'Multi-tier executive drill-down Power BI workspace architectures',
              'Automated SLA compliance and budget utilization reporting',
              'Direct connectors to enterprise Oracle, SQL Server, and SAP repositories',
            ],
    },
    {
      num: '03',
      code: 'DATA-ENGINEERING',
      title: locale === 'ar' ? 'هندسة وحوكمة وتكامل البيانات' : 'Data Engineering, Pipelines & Governance',
      metric: 'ISO 9001',
      metricLabel: locale === 'ar' ? 'حوكمة وجودة البيانات' : 'Audited Quality & Data Controls',
      desc:
        locale === 'ar'
          ? 'مواءمة تدفقات البيانات (ETL) وتوحيد نماذج البيانات عبر الإدارات والأنظمة المركزية وفق ضوابط أمن المعلومات والحوكمة المعتمدة في حكومة أبوظبي.'
          : 'End-to-end data pipeline harmonization, ETL architecture, and cross-departmental repository unification under sovereign security compliance.',
      deliverables:
        locale === 'ar'
          ? [
              'تصميم وتشغيل مسارات استخراج وتحويل البيانات (ETL / ELT)',
              'توحيد معاجم البيانات وجودة السجلات بين الأنظمة المترابطة',
              'الامتثال لضوابط الخصوصية وأمن المعلومات الحكومية',
            ]
          : [
              'High-reliability ETL/ELT pipeline design and schema harmonization',
              'Master data quality validation across federated government systems',
              'Strict adherence to Abu Dhabi sovereign data security frameworks',
            ],
    },
    {
      num: '04',
      code: 'AI-RPA-AUTOMATION',
      title: locale === 'ar' ? 'أتمتة العمليات بالذكاء الاصطناعي (RPA)' : 'AI-Assisted RPA & Workflow Automation',
      metric: 'AED 10.00M',
      metricLabel: locale === 'ar' ? 'عقد أتمتة الشبكات (DMT)' : 'DMT AI/RPA Network Mandate',
      desc:
        locale === 'ar'
          ? 'نشر الروبوتات البرمجية الذكية وخوارزميات الذكاء الاصطناعي لأتمتة إجراءات برمجة الشبكات والمعاملات الهندسية المتكررة لتقليص زمن الإنجاز والتكلفة.'
          : 'Production deployment of intelligent software bots and AI-driven network programming procedures that eliminate manual processing bottlenecks.',
      deliverables:
        locale === 'ar'
          ? [
              'أتمتة إجراءات برمجة الشبكات بالذكاء الاصطناعي (عقد بقيمة 10 مليون درهم)',
              'روبوتات برمجية (RPA) لمعالجة الطلبات والتدقيق الآلي للبيانات',
              'تكامل الذكاء الاصطناعي مع أنظمة تخطيط الموارد وإدارة علاقات المتعاملين',
            ]
          : [
              'AI-assisted network programming automation (AED 10M DMT mandate)',
              'Unattended & attended RPA bots for high-volume transaction auditing',
              'Intelligent workflow orchestration across CRM and ERP platforms',
            ],
    },
  ];

  const current = capabilities[activeStage];

  return (
    <section
      ref={sectionRef}
      id="data-ai"
      className="py-24 md:py-36 bg-[#071C17] text-[#F4F7F5] border-b border-[#174B3E] relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle Atmospheric Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(24, 198, 160, 0.12) 0%, rgba(7, 28, 23, 0) 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Section Header */}
        <div className="reveal-item reveal-delay-1 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-18 border-b border-[#174B3E]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#18C6A0] block">
              03 / {locale === 'ar' ? 'البيانات، التحليلات والذكاء الاصطناعي' : 'Data, Analytics & AI Architecture'}
            </span>
            <h2
              className="font-bold text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'تحويل أصول البيانات الحكومية إلى مؤشرات قيادية وأتمتة ذكية'
                : 'Turning Complex Institutional Data into Executive Intelligence & Automation'}
            </h2>
          </div>

          <Link
            href={dataAiHref}
            className="btn-slide-trigger btn-press inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#0B2922] hover:bg-[#10352C] text-[#18C6A0] border border-[#174B3E] hover:border-[#18C6A0] text-xs sm:text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'استكشف ممارسة البيانات والذكاء الاصطناعي' : 'Explore Data & AI Practice'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>
        </div>

        {/* Asymmetric Interactive Split: Left Progressive Accordion/Selector + Right Animated Data Network Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-14 md:pt-18 items-stretch">
          {/* Left 6 Columns: Interactive Progressive Capability Selector */}
          <div className="reveal-item reveal-delay-2 lg:col-span-6 flex flex-col justify-between">
            <div className="divide-y divide-[#174B3E] border-y border-[#174B3E]">
              {capabilities.map((cap, idx) => {
                const isSelected = idx === activeStage;
                return (
                  <div key={cap.num} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      aria-expanded={isSelected}
                      className="w-full py-6 px-2 text-start flex items-baseline justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono text-sm font-bold transition-colors ${
                            isSelected ? 'text-[#18C6A0]' : 'text-[#6E857D] group-hover:text-[#A3B8B0]'
                          }`}
                        >
                          {cap.num}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                            isSelected ? 'text-[#F4F7F5]' : 'text-[#A3B8B0] group-hover:text-[#F4F7F5]'
                          }`}
                        >
                          {cap.title}
                        </h3>
                      </div>

                      <span
                        className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors shrink-0 ${
                          isSelected
                            ? 'border-[#18C6A0]/50 text-[#18C6A0] bg-[#18C6A0]/10'
                            : 'border-transparent text-[#6E857D]'
                        }`}
                      >
                        {cap.metric}
                      </span>
                    </button>

                    {/* Expandable Detail Drawer */}
                    {isSelected && (
                      <div className="pb-7 ps-9 pe-2 space-y-5 page-transition-enter">
                        <p className="text-sm sm:text-base text-[#A3B8B0] leading-relaxed">
                          {cap.desc}
                        </p>

                        <ul className="space-y-2">
                          {cap.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DCE6E2]">
                              <CheckCircle2 className="w-4 h-4 text-[#18C6A0] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Sovereign Proof Callout */}
            <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3B8B0]">
              <span>POWER BI · PYTHON · RPA · ENTERPRISE ETL</span>
              <Link href={projectsHref} className="text-[#18C6A0] hover:underline inline-flex items-center gap-1 focus:outline-none focus-visible:underline">
                <span>{locale === 'ar' ? 'سجل مشاريع البيانات (17)' : 'View Delivered Data Mandates'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 6 Columns: Lazy-Activated Architectural Data & AI Network Stage */}
          <div className="reveal-item reveal-delay-3 lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-xl overflow-hidden border border-[#174B3E] bg-[#0B2922] flex flex-col justify-between">
              <Image
                src="/images/data_ai_telemetry_architecture_1794979011520.jpg"
                alt={
                  locale === 'ar'
                    ? 'البنية التحتية لتحليلات البيانات وأتمتة الشبكات بالذكاء الاصطناعي'
                    : 'Enterprise data analytics and intelligent network automation architecture'
                }
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center opacity-35"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(7,28,23,0.72) 0%, rgba(7,28,23,0.82) 55%, rgba(7,28,23,0.96) 100%)',
                }}
              />

              {/* Top Stage Header */}
              <div className="relative z-10 p-6 sm:p-8 pb-4 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#18C6A0] tracking-wider">
                  {current.num} · {current.code}
                </span>
                <span className="font-mono text-xs text-[#A3B8B0]">
                  DMT · ADCM · ADDA
                </span>
              </div>

              {/* Center Interactive Domain Network Visualization (Lazy-loaded on viewport entry) */}
              <div className="relative z-10 px-5 sm:px-7">
                {hasEntered ? (
                  <DataAiNetworkCanvas
                    locale={locale}
                    activeStage={activeStage}
                    onSelectStage={setActiveStage}
                  />
                ) : (
                  <StaticNetworkFallback />
                )}
              </div>

              {/* Bottom Active Capability & AED 10M Flagship Contract Readout */}
              <div className="relative z-10 p-6 sm:p-8 pt-5 space-y-5">
                <div className="p-5 rounded-lg bg-[#071C17]/88 backdrop-blur-md border border-white/12 space-y-2.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xs font-mono text-[#A3B8B0] uppercase">
                      {current.metricLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#18C6A0] tabular-nums">
                      {current.metric}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#F4F7F5]">
                    {current.title}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-[#18C6A0]">
                      {locale === 'ar' ? 'مرجع عقد حكومي موثق · DMT' : 'Verified Flagship Mandate · DMT'}
                    </div>
                    <div className="text-sm font-semibold text-[#F4F7F5] mt-0.5">
                      {locale === 'ar'
                        ? 'أتمتة إجراءات برمجة الشبكات بالذكاء الاصطناعي (AED 10,000,000)'
                        : 'AI & RPA Network Programming Automation (AED 10,000,000)'}
                    </div>
                  </div>

                  <Link
                    href={projectsHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18C6A0] hover:underline shrink-0 focus:outline-none focus-visible:underline"
                  >
                    <span>{locale === 'ar' ? 'عرض بالسجل' : 'Inspect Mandate'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
