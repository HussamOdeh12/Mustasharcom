import React from 'react';
import { Building2, ShieldCheck, Award, Clock } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';

interface ExperienceSectionProps {
  locale: Locale;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const isRtl = locale === 'ar';

  const clientEntities = [
    {
      name: locale === 'ar' ? 'بلدية مدينة أبوظبي' : 'Abu Dhabi City Municipality',
      desc:
        locale === 'ar'
          ? 'دعم الأنظمة التشغيلية، إدارة مراكز الاتصال، استشارات تقنية المعلومات، والأنظمة المؤسسية.'
          : 'Operational systems support, contact center management, and enterprise IT consulting.',
      badge: locale === 'ar' ? 'عقود متعددة' : 'Multiple Mandates',
    },
    {
      name: locale === 'ar' ? 'دائرة البلديات والنقل' : 'Department of Municipalities & Transport',
      desc:
        locale === 'ar'
          ? 'مشاريع أتمتة الشبكات الذكية (RPA)، استشارات النظم، وخدمات الدعم الفني المؤسسي.'
          : 'AI & RPA network automation, enterprise systems consulting, and technical SLA support.',
      badge: locale === 'ar' ? 'عقود استراتيجية' : 'Strategic Contracts',
    },
    {
      name: locale === 'ar' ? 'هيئة أبوظبي الرقمية' : 'Abu Dhabi Digital Authority (ADDA)',
      desc:
        locale === 'ar'
          ? 'استشارات تحليل وتصنيف البيانات، لوحات مؤشرات الأداء، وتطوير التطبيقات الحكومية.'
          : 'Data analytics consulting, Power BI KPI reporting, and public digital applications.',
      badge: locale === 'ar' ? 'حلول البيانات' : 'Data Solutions',
    },
    {
      name: locale === 'ar' ? 'مركز النقل المتكامل' : 'Integrated Transport Centre (ITC)',
      desc:
        locale === 'ar'
          ? 'دعم البنية التحتية، وتوفير الكوادر والاستشارات التخصصية لقطاع النقل الذكي.'
          : 'Infrastructure support, specialized IT manpower, and smart mobility consulting.',
      badge: locale === 'ar' ? 'بنية تحتية وكوادر' : 'Infra & Advisory',
    },
    {
      name: locale === 'ar' ? 'مؤسسة الرعاية الاجتماعية وشؤون القصر' : 'Social Care & Minors Affairs Foundation',
      desc:
        locale === 'ar'
          ? 'إدارة وصيانة الأنظمة وقواعد البيانات لضمان استمرارية الخدمات المجتمعية الحيوية.'
          : 'Database management and systems maintenance ensuring vital social service continuity.',
      badge: locale === 'ar' ? 'إدارة الأنظمة' : 'Systems Management',
    },
    {
      name: locale === 'ar' ? 'المؤسسة العامة لحديقة الحيوان بالعين' : 'Zoo & Aquarium Public Institution, Al Ain',
      desc:
        locale === 'ar'
          ? 'توفير الكوادر الاستشارية المتخصصة لتطوير ودعم البنية الرقمية للمؤسسة.'
          : 'Deployment of specialized IT consultants and engineers for digital operations.',
      badge: locale === 'ar' ? 'استشارات وكوادر' : 'Outsourced Advisory',
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-[#FBF9F5] dark:bg-[#090D16] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] block">
            {locale === 'ar' ? 'الخبرة وسجل الأعمال الحكومي' : 'Public Sector Experience & Heritage'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            {locale === 'ar'
              ? 'ثقة معتمدة من أبرز الهيئات والدوائر الحكومية في أبوظبي'
              : 'Enduring Partnerships with Abu Dhabi Government Authorities'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {locale === 'ar'
              ? 'تتحدث نتائجنا في الميدان عن نفسها. عملت مستشاركم مع كبرى الهيئات والدوائر الحكومية في إمارة أبوظبي لتقديم حلول استشارية وتقنية حيوية تلبي أعلى معايير الحوكمة والاستمرارية.'
              : 'Our track record speaks through delivery. Mustasharcom has executed critical IT advisory, systems integration, and technical support contracts for leading public entities across the Emirate of Abu Dhabi.'}
          </p>
        </div>

        {/* 6 Public Sector Client Entity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clientEntities.map((entity, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {entity.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {entity.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {entity.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1 text-[#008751] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{locale === 'ar' ? 'جهة حكومية معتمدة' : 'Verified Public Mandate'}</span>
                </span>
                <span>{COMPANY_PROFILE.location.city[locale]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Metrics Band */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x sm:divide-x-0 rtl:divide-x-reverse divide-zinc-100 dark:divide-zinc-800">
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100 block">
                {COMPANY_PROFILE.metrics.quantifiableValue}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 block">
                {locale === 'ar' ? 'قيمة العقود الموثقة' : 'Verified Mandate Value'}
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#6B1426] dark:text-[#F38C9C] block">
                {COMPANY_PROFILE.metrics.engagements}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 block">
                {locale === 'ar' ? 'عقداً ومشروعاً معتمداً' : 'Delivered Engagements'}
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#008751] dark:text-[#34D399] block">
                {COMPANY_PROFILE.metrics.govPercentage}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 block">
                {locale === 'ar' ? 'جهات حكومية وشبه حكومية' : 'Public Sector Focus'}
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100 block">
                {COMPANY_PROFILE.certifications.icv.score}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 block">
                {locale === 'ar' ? 'القيمة المحلية المضافة ICV' : 'In-Country Value (ICV)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
