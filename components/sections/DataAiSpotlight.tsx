'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/lib/company-data';

interface DataAiSpotlightProps {
  locale: Locale;
}

export default function DataAiSpotlight({ locale }: DataAiSpotlightProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const dataAiHref = locale === 'ar' ? '/ar/services/data-ai' : '/services/data-ai';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

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
              'Digital service adoption and citizen channel utilization telemetry',
              'Statistical performance auditing and operational bottleneck modeling',
            ],
    },
    {
      num: '02',
      code: 'POWER-BI-TELEMETRY',
      title: locale === 'ar' ? 'لوحات وتقارير Power BI التنفيذية' : 'Executive Power BI Dashboards & Reporting',
      metric: 'Real-Time KPI',
      metricLabel: locale === 'ar' ? 'منظومات قياس الأداء القيادية' : 'Executive Decision Telemetry',
      desc:
        locale === 'ar'
          ? 'تصميم وبناء منظومات تقارير ولوحات Power BI تفاعلية للقيادات العليا في دائرة البلديات والنقل لمتابعة مؤشرات الأداء الاستراتيجية والتشغيلية لحظياً.'
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
      id="data-ai"
      className="py-24 md:py-36 bg-[#000D0E] text-[#F2F6F6] border-b border-[#0E2F33] relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle Atmospheric Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(45, 212, 164, 0.1) 0%, rgba(0, 13, 14, 0) 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 md:pb-18 border-b border-[#0E2F33]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2DD4A4] block">
              03 / {locale === 'ar' ? 'البيانات، التحليلات والذكاء الاصطناعي' : 'Data, Analytics & AI Architecture'}
            </span>
            <h2
              className="font-bold text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'تحويل أصول البيانات الحكومية إلى مؤشرات قيادية وأتمتة ذكية'
                : 'Turning Complex Institutional Data into Executive Intelligence & Automation'}
            </h2>
          </div>

          <Link
            href={dataAiHref}
            className="btn-slide-trigger inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#04191B] hover:bg-[#072528] text-[#2DD4A4] border border-[#123A3F] hover:border-[#2DD4A4] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'استكشف ممارسة البيانات والذكاء الاصطناعي' : 'Explore Data & AI Practice'}</span>
            <ArrowIcon className="w-4 h-4 shrink-0 btn-slide-arrow" />
          </Link>
        </div>

        {/* Asymmetric Interactive Split: Left Progressive Accordion/Selector + Right Visual Telemetry Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-14 md:pt-18 items-stretch">
          {/* Left 6 Columns: Interactive Progressive Capability Selector */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="divide-y divide-[#0E2F33] border-y border-[#0E2F33]">
              {capabilities.map((cap, idx) => {
                const isSelected = idx === activeStage;
                return (
                  <div key={cap.num} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      aria-expanded={isSelected}
                      className="w-full py-6 px-2 text-start flex items-baseline justify-between gap-4 cursor-pointer group focus:outline-none"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono text-sm font-bold transition-colors ${
                            isSelected ? 'text-[#2DD4A4]' : 'text-[#6C8587] group-hover:text-[#9CB2B4]'
                          }`}
                        >
                          {cap.num}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                            isSelected ? 'text-[#F2F6F6]' : 'text-[#8AA3A5] group-hover:text-[#F2F6F6]'
                          }`}
                        >
                          {cap.title}
                        </h3>
                      </div>

                      <span
                        className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors shrink-0 ${
                          isSelected
                            ? 'border-[#2DD4A4]/50 text-[#2DD4A4] bg-[#2DD4A4]/10'
                            : 'border-transparent text-[#6C8587]'
                        }`}
                      >
                        {cap.metric}
                      </span>
                    </button>

                    {/* Expandable Detail Drawer */}
                    {isSelected && (
                      <div className="pb-7 ps-9 pe-2 space-y-5 page-transition-enter">
                        <p className="text-sm sm:text-base text-[#B4C8CA] leading-relaxed">
                          {cap.desc}
                        </p>

                        <ul className="space-y-2">
                          {cap.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D8E6E7]">
                              <CheckCircle2 className="w-4 h-4 text-[#2DD4A4] shrink-0 mt-0.5" />
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
            <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6C8587]">
              <span>POWER BI · PYTHON · RPA · ENTERPRISE ETL</span>
              <Link href={projectsHref} className="text-[#2DD4A4] hover:underline inline-flex items-center gap-1">
                <span>{locale === 'ar' ? 'سجل مشاريع البيانات (17)' : 'View Delivered Data Mandates'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 6 Columns: Large Architectural Telemetry Visual + Active Capability Readout */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="group relative flex-1 min-h-[380px] sm:min-h-[460px] rounded-xl overflow-hidden border border-[#123A3F] bg-[#04191B] flex flex-col justify-between">
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
                className="object-cover object-center img-zoom-transition"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,13,14,0.35) 0%, rgba(0,13,14,0.5) 45%, rgba(0,13,14,0.95) 100%)',
                }}
              />

              {/* Top Telemetry Header Overlay */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#000D0E]/80 backdrop-blur-md border border-white/10 font-mono text-xs text-[#2DD4A4]">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4A4] animate-pulse" />
                  <span>{current.num} · {current.code}</span>
                </div>

                <span className="font-mono text-xs text-[#C6A355] bg-[#000D0E]/80 px-3 py-1.5 rounded border border-white/10">
                  DMT · ADCM · ADDA
                </span>
              </div>

              {/* Bottom Active Capability & AED 10M Flagship Proof */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="p-5 sm:p-6 rounded-lg bg-[#000D0E]/85 backdrop-blur-md border border-white/15 space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xs font-mono text-[#9CB2B4] uppercase">
                      {current.metricLabel}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#2DD4A4] tabular-nums">
                      {current.metric}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#F2F6F6]">
                    {current.title}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-[#C6A355]">
                      {locale === 'ar' ? 'مرجع عقد حكومي موثق · DMT' : 'Verified Flagship Mandate · DMT'}
                    </div>
                    <div className="text-sm font-semibold text-[#F2F6F6] mt-0.5">
                      {locale === 'ar'
                        ? 'أتمتة إجراءات برمجة الشبكات بالذكاء الاصطناعي (AED 10,000,000)'
                        : 'AI & RPA Network Programming Automation (AED 10,000,000)'}
                    </div>
                  </div>

                  <Link
                    href={projectsHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2DD4A4] hover:underline shrink-0"
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
