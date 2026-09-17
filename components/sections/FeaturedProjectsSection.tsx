import React from 'react';
import Link from 'next/link';
import { Building2, Calendar, CheckCircle2, Clock, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
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

  // Curated major highlights from the 17 verified engagements for instant server rendering
  const featuredEngagements = PROJECTS_RECORD.slice(0, 6);

  return (
    <section
      id="engagements"
      className="py-16 md:py-24 bg-zinc-50/70 dark:bg-[#0E131F] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
              {t.selectedEngagements}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
              {locale === 'ar'
                ? '17 عقداً ومشروعاً معتمداً للقطاع الحكومي'
                : '17 Verified Public Sector Mandates & Contracts'}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {locale === 'ar'
                ? 'سجل أعمال موثق يتجاوز 69 مليون درهم تم تنفيذه مع بلدية مدينة أبوظبي، دائرة البلديات والنقل، وهيئة أبوظبي الرقمية.'
                : 'Over AED 69M+ in delivered and ongoing contract value with Abu Dhabi City Municipality, DMT, and ADDA.'}
            </p>
          </div>

          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] hover:underline whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">{t.viewProjects} ({PROJECTS_RECORD.length})</span>
            <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

        {/* Server-Rendered Grid of Key Featured Contracts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredEngagements.map((item) => {
            const isCompleted = item.status.en === 'Completed';

            return (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111726] shadow-xs flex flex-col justify-between gap-4 hover:border-[#6B1426]/40 dark:hover:border-[#6B1426]/60 transition-colors"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      #{String(item.id).padStart(2, '0')}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                        isCompleted
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      )}
                      <span>{item.status[locale]}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
                      {item.project[locale]}
                    </h3>
                    {item.isNew && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#6B1426] text-white shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{t.newBadge}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0" />
                    <span>{item.client[locale]}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{item.period}</span>
                  </div>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                    {item.valueAED.startsWith('As per') || item.valueAED.startsWith('Per') || item.valueAED.startsWith('To be')
                      ? (locale === 'ar' ? 'حسب الاستخدام' : item.valueAED)
                      : `AED ${item.valueAED}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Register Callout */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0" />
            <span>
              {locale === 'ar'
                ? 'سجل تعاقدي رسمي موثق ومطابق لملف الشركة التعريفي 2026.'
                : '17 verified public sector contracts documented in Mustasharcom Corporate Profile 2026.'}
            </span>
          </div>

          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-xs font-semibold shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            <span>{locale === 'ar' ? 'استعراض السجل التعاقدي الكامل' : 'Explore All 17 Verified Projects'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
