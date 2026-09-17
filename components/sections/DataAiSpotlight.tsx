import React from 'react';
import Link from 'next/link';
import { BarChart3, Cpu, LineChart, Sparkles, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface DataAiSpotlightProps {
  locale: Locale;
}

export default function DataAiSpotlight({ locale }: DataAiSpotlightProps) {
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const dataAiHref = locale === 'ar' ? '/ar/services/data-ai' : '/services/data-ai';

  const capabilities = [
    {
      icon: <LineChart className="w-5 h-5 text-[#008751] dark:text-[#34D399]" />,
      title: locale === 'ar' ? 'استشارات تحليل وتصنيف البيانات' : 'Data Analysis & Classification',
      desc:
        locale === 'ar'
          ? 'استشارات متخصصة في تصنيف مجموعات البيانات الضخمة، وهيكلة قواعد البيانات، وتحويل السجلات التشغيلية إلى رؤى استراتيجية تدعم اتخاذ القرار.'
          : 'Consultancy on large-scale dataset classification, database structuring, and transforming operational records into actionable strategic intelligence.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#6B1426] dark:text-[#F38C9C]" />,
      title: locale === 'ar' ? 'لوحات وتقارير Power BI التفاعلية' : 'Power BI Dashboards & Reporting',
      desc:
        locale === 'ar'
          ? 'تصميم وبناء لوحات مؤشرات الأداء وتقارير Power BI للجهات الحكومية لمتابعة المشاريع والخدمات التشغيلية بدقة وموثوقية عالية.'
          : 'Interactive Power BI dashboards and KPI reporting built for municipal leadership to monitor service delivery, budgets, and project timelines in real time.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: locale === 'ar' ? 'الأتمتة الروبوتية للعمليات (RPA) والذكاء الاصطناعي' : 'Robotic Process Automation (RPA) & AI',
      desc:
        locale === 'ar'
          ? 'تطبيق خوارزميات أتمتة الإجراءات الروبوتية والشبكات لتقليل العمل اليدوي، تسريع إنجاز المعاملات، وتقليص التكاليف التشغيلية بنسب قياسية.'
          : 'Deploying RPA and automated network scripting to streamline repetitive workflows, accelerate transaction throughput, and eliminate operational bottlenecks.',
    },
  ];

  return (
    <section
      id="data-ai"
      className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#008751]/10 text-[#008751] dark:bg-[#008751]/20 dark:text-[#34D399]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{locale === 'ar' ? 'البيانات والذكاء الاصطناعي' : 'Data & AI Practice'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
              {locale === 'ar'
                ? 'تحويل البيانات المؤسسية إلى قرارات ذكية وأتمتة فعالة'
                : 'Transforming Enterprise Data into Strategic Clarity & Automated Value'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {locale === 'ar'
                ? 'نمكن دوائر حكومة أبوظبي من الاستفادة القصوى من بياناتها وأصولها الرقمية عبر حلول استشارية تجمع بين التحليلات المتقدمة وأتمتة العمليات.'
                : 'Empowering Abu Dhabi government entities to leverage their data assets through integrated consultancy, modern telemetry, and proven automation architectures.'}
            </p>
          </div>

          <Link
            href={dataAiHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008751] dark:text-[#34D399] hover:underline whitespace-nowrap"
          >
            <span>{locale === 'ar' ? 'استكشف حلول البيانات وذكاء الأعمال' : 'Explore Data & AI Practice'}</span>
            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* 3 Main Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FDFCFB] dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center mb-5 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008751]" />
                  <span>{locale === 'ar' ? 'تنفيذ ميداني موثق' : 'Proven Field Implementation'}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF9F5] dark:bg-[#0E1322] border border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-mono font-bold text-[#6B1426] dark:text-[#F38C9C] uppercase">
                {locale === 'ar' ? 'مشروع مرجعي معتمد' : 'Verified Engagement Highlight'}
              </span>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {locale === 'ar'
                  ? 'مشروع أتمتة الشبكات بالذكاء الاصطناعي (RPA) بقيمة 10,000,000 درهم'
                  : 'AED 10,000,000 AI & RPA Network Automation Engagement'}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {locale === 'ar'
                  ? 'نفذته مستشاركم بنجاح لصالح دائرة البلديات والنقل بأبوظبي لأتمتة العمليات التشغيلية وتطوير أدوات القياس والمتابعة الذكية.'
                  : 'Executed by Mustasharcom for the Department of Municipalities and Transport (DMT) to streamline operational workflows and deploy automated monitoring tools.'}
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href={locale === 'ar' ? '/ar/projects' : '/projects'}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors"
              >
                <span>{locale === 'ar' ? 'عرض تفاصيل المشروع بالسجل' : 'View Project in Registry'}</span>
                <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
