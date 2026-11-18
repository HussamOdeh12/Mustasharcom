import React from 'react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';

interface ExperienceSectionProps {
  locale: Locale;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const isRtl = locale === 'ar';

  const differentiators = [
    {
      num: '01',
      title: locale === 'ar' ? 'ملكية وطنية إماراتية 100% وقيمة محلية مرتفعة' : '100% UAE National Ownership & High ICV (55.03%)',
      desc:
        locale === 'ar'
          ? 'شركة وطنية مرخصة في أبوظبي تسهم بفاعلية في برنامج القيمة المحلية المضافة وتلبي متطلبات المشتريات الحكومية ذات الأولوية.'
          : 'A sovereign Abu Dhabi enterprise certified with a 55.03% In-Country Value score, aligning directly with public procurement mandates.',
    },
    {
      num: '02',
      title: locale === 'ar' ? 'تبسيط الأنظمة المعقدة وقابلية التنفيذ' : 'Simplified Implementation of Complex Systems',
      desc:
        locale === 'ar'
          ? 'نصمم وننفذ حلول البرمجيات والبيانات المعقدة بأبسط صورة تشغيلية ممكنة لضمان سرعة التبني المؤسسي وتقليص التكاليف.'
          : 'We translate intricate ERP, data, and AI requirements into streamlined, maintainable operational systems that maximize cost efficiency.',
    },
    {
      num: '03',
      title: locale === 'ar' ? 'حوكمة جودة معتمدة دولياً (ISO 9001:2015)' : 'ISO 9001:2015 Certified Quality Governance',
      desc:
        locale === 'ar'
          ? 'تخضع كافة مراحل إدارة المشاريع والدعم الفني لنظام إدارة جودة معتمد يضمن الالتزام باتفاقيات مستوى الخدمة (SLA).'
          : 'Every engagement is governed by audited ISO 9001:2015 quality controls, rigorous SLA telemetry, and proactive risk management.',
    },
    {
      num: '04',
      title: locale === 'ar' ? 'سجل تسليم ميداني بنسبة 100% للقطاع الحكومي' : 'Proven 100% Public-Sector Delivery Heritage',
      desc:
        locale === 'ar'
          ? 'خبرة متراكمة عبر 17 عقداً مع أبرز الهيئات البلدية والرقمية والخدمية في إمارة أبوظبي والعين.'
          : 'Demonstrated operational continuity across 17 contracts serving municipal, transport, digital, and social care authorities in Abu Dhabi.',
    },
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

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-[#F3EFEA]/60 dark:bg-[#0A1612] border-b border-[#E3DFD7] dark:border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Why Mustasharcom (Consilio Editorial Values Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#E3DFD7] dark:border-[#1A2E26]">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] tracking-wide block">
              05 · {locale === 'ar' ? 'لماذا مستشاركم' : 'Why Mustasharcom'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1713] dark:text-[#F4F6F5] tracking-tight leading-tight text-balance">
              {locale === 'ar'
                ? 'ركائز التميز الاستشاري والتنفيذ المؤسسي'
                : 'Built for Sovereign Reliability & Measurable Efficiency'}
            </h2>
            <p className="text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
              {locale === 'ar'
                ? 'نجمع بين المرونة الاستشارية والانضباط الهندسي لتسليم مشاريع تقنية مستدامة في إمارة أبوظبي.'
                : 'Combining senior advisory insight with disciplined engineering to deliver resilient government systems in Abu Dhabi.'}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((diff) => (
              <div
                key={diff.num}
                className="p-6 sm:p-7 rounded-lg bg-[#FAF8F5] dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-2.5"
              >
                <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                  {diff.num}.
                </span>
                <h3 className="text-base font-bold text-[#0B1713] dark:text-[#F4F6F5] leading-snug">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Verified Government Partner Roster */}
        <div className="pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-[#687670] dark:text-[#8FA19A] block mb-1">
                {locale === 'ar' ? 'الجهات الحكومية المتعاقد معها' : 'Verified Government & Institutional Partners'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                {locale === 'ar'
                  ? 'شراكات راسخة مع هيئات ودوائر حكومة أبوظبي'
                  : 'Trusted by Leading Authorities Across the Emirate of Abu Dhabi'}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4]">
              {COMPANY_PROFILE.location.city[locale]} · 2019 – 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientEntities.map((entity) => (
              <div
                key={entity.idx}
                className="p-6 rounded-lg bg-[#FAF8F5] dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#687670] dark:text-[#8FA19A]">
                    {entity.idx}.
                  </span>
                  <h4 className="text-base font-bold text-[#0B1713] dark:text-[#F4F6F5]">
                    {entity.name}
                  </h4>
                </div>
                <p className="text-xs text-[#485650] dark:text-[#A6B5AF] pt-3 border-t border-[#E3DFD7] dark:border-[#1A2E26]">
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
