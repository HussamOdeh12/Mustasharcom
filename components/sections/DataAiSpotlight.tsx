import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Locale } from '@/lib/company-data';

interface DataAiSpotlightProps {
  locale: Locale;
}

export default function DataAiSpotlight({ locale }: DataAiSpotlightProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const dataAiHref = locale === 'ar' ? '/ar/services/data-ai' : '/services/data-ai';
  const projectsHref = locale === 'ar' ? '/ar/projects' : '/projects';

  const capabilities = [
    {
      num: '01',
      title: locale === 'ar' ? 'تحليلات وتصنيف البيانات المؤسسية' : 'Data Analytics & Classification',
      desc:
        locale === 'ar'
          ? 'استشارات متخصصة في تصنيف مجموعات البيانات الحكومية الضخمة، والتدقيق الإحصائي، وتحليل معدلات تبني واستخدام الخدمات الرقمية.'
          : 'Comprehensive classification, statistical auditing, and digital service adoption analysis across large-scale municipal data repositories.',
    },
    {
      num: '02',
      title: locale === 'ar' ? 'لوحات وتقارير Power BI التنفيذية' : 'Power BI Dashboards & Reporting',
      desc:
        locale === 'ar'
          ? 'تصميم وبناء منظومات تقارير ولوحات Power BI تفاعلية للقيادات لمتابعة مؤشرات الأداء الاستراتيجية والتشغيلية بدقة.'
          : 'Executive Power BI dashboard suites and scheduled KPI telemetry built for leadership visibility across operations and budgets.',
    },
    {
      num: '03',
      title: locale === 'ar' ? 'هندسة وتكامل البيانات (Data Engineering)' : 'Data Engineering & Governance',
      desc:
        locale === 'ar'
          ? 'مواءمة تدفقات البيانات (ETL) وتوحيد نماذج البيانات عبر الإدارات والأنظمة المركزية وفق ضوابط أمن المعلومات المعتمدة.'
          : 'Data pipeline harmonization, ETL modeling, and cross-departmental repository integration under strict security compliance.',
    },
    {
      num: '04',
      title: locale === 'ar' ? 'أتمتة العمليات بالذكاء الاصطناعي (RPA)' : 'Automation / RPA & AI Solutions',
      desc:
        locale === 'ar'
          ? 'نشر الروبوتات البرمجية الذكية لأتمتة إجراءات برمجة الشبكات والمعاملات المتكررة لتقليص زمن الإنجاز والتكلفة التشغيلية.'
          : 'Bot-driven workflow automation, AI-assisted network programming procedures, and rule engines that eliminate manual bottlenecks.',
    },
  ];

  return (
    <section
      id="data-ai"
      className="py-20 md:py-28 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26] relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#1A2E26]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-[#2DD4A4] tracking-wide block">
              03 · {locale === 'ar' ? 'البيانات، التحليلات والذكاء الاصطناعي' : 'Data, Analytics & AI Spotlight'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4F6F5] tracking-tight leading-tight text-balance">
              {locale === 'ar'
                ? 'تحويل أصول البيانات الحكومية إلى مؤشرات قيادية وأتمتة ذكية'
                : 'Turning Complex Institutional Data into Executive Intelligence & Automation'}
            </h2>
          </div>

          <Link
            href={dataAiHref}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'استكشف ممارسة البيانات والذكاء الاصطناعي' : 'Explore Data & AI Practice'}</span>
            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* Asymmetric 2-Column Split: Architectural Visualization + 4 Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-12 items-stretch">
          {/* Left Visual Showcase + Verified Mandate Proof */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] rounded-lg overflow-hidden border border-[#1E362D] bg-[#0C1A15]">
              <Image
                src="/images/data_ai_telemetry_architecture_1794979011520.jpg"
                alt={
                  locale === 'ar'
                    ? 'البنية التحتية لتحليلات البيانات وأتمتة الشبكات بالذكاء الاصطناعي'
                    : 'Enterprise data analytics and intelligent network automation architecture'
                }
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C0A]/90 via-[#050C0A]/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 border-t border-white/10 bg-[#050C0A]/70 backdrop-blur-xs">
                <div className="text-xs font-mono text-[#2DD4A4]">
                  {locale === 'ar' ? 'مرجع حكومي موثق · DMT' : 'Verified Mandate Reference · DMT'}
                </div>
                <div className="text-sm font-bold text-[#F4F6F5] mt-1">
                  {locale === 'ar'
                    ? 'أتمتة إجراءات برمجة الشبكات بالذكاء الاصطناعي (RPA)'
                    : 'AI & RPA Network Programming Automation'}
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-[#A6B5AF]">
                  <span className="font-mono text-[#C6A355] font-semibold">AED 10,000,000</span>
                  <Link href={projectsHref} className="inline-flex items-center gap-1 text-[#2DD4A4] hover:underline">
                    <span>{locale === 'ar' ? 'عرض بالسجل' : 'View in Register'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right 2x2 Capability Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="p-6 sm:p-7 rounded-lg bg-[#0B1914] border border-[#1A2E26] flex flex-col justify-between gap-4 hover:border-[#2DD4A4]/50 transition-colors"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-semibold text-[#2DD4A4] block">
                    {cap.num}.
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F4F6F5] leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6B5AF] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A2E26] text-[11px] font-mono text-[#768780]">
                  {locale === 'ar' ? 'ممارسة معتمدة · أبوظبي' : 'Verified Capability · Abu Dhabi'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
