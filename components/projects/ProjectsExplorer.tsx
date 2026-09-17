'use client';

import React, { useState, useMemo } from 'react';
import { Search, Building2, Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Locale, PROJECTS_RECORD, ProjectRecord } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ProjectsExplorerProps {
  locale: Locale;
}

export default function ProjectsExplorer({ locale }: ProjectsExplorerProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: t.filterAll },
    { key: 'analytics', label: t.filterAnalytics },
    { key: 'support', label: t.filterSupport },
    { key: 'automation', label: t.filterAutomation },
    { key: 'infra', label: t.filterInfra },
    { key: 'manpower', label: t.filterManpower },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_RECORD.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.project[locale].toLowerCase().includes(query) ||
        item.client[locale].toLowerCase().includes(query) ||
        item.period.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, locale]);

  return (
    <div className="space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#6B1426] text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Text Filter */}
        <div className="relative min-w-[240px]">
          <Search className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 text-zinc-400 ${isRtl ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            id="projects-search-input"
            aria-label={locale === 'ar' ? 'بحث في المشاريع أو الجهات' : 'Search projects or clients'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={locale === 'ar' ? 'بحث في المشاريع أو الجهات...' : 'Search projects or clients...'}
            className={`w-full py-2 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all ${
              isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
            }`}
          />
        </div>
      </div>

      {/* Result Count & Historical Record Framing */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 px-1">
        <span>
          {locale === 'ar'
            ? `عرض ${filteredProjects.length} من أصل ${PROJECTS_RECORD.length} عقداً ومشروعاً موثقاً`
            : `Showing ${filteredProjects.length} of ${PROJECTS_RECORD.length} verified engagements`}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            {locale === 'ar'
              ? 'سجل تعاقدي معتمد وفق الملف التعريفي للشركة 2026'
              : 'Verified figures recorded in Mustasharcom Corporate Profile 2026'}
          </span>
        </span>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111726] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/60 border-b border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 text-start w-12">#</th>
                <th className="py-3.5 px-4 text-start min-w-[280px]">{locale === 'ar' ? 'المشروع / نطاق العمل' : 'Project / Scope'}</th>
                <th className="py-3.5 px-4 text-start min-w-[200px]">{t.client}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{t.value}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{t.period}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{locale === 'ar' ? 'حالة السجل' : 'Profile Status'}</th>
                <th className="py-3.5 px-4 text-end whitespace-nowrap">{locale === 'ar' ? 'نسبة الإنجاز الموثقة' : 'Profile Progress'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {filteredProjects.map((item) => {
                const isCompleted = item.status.en === 'Completed';

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors ${
                      item.isNew ? 'bg-amber-50/40 dark:bg-amber-950/20' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-mono text-zinc-400 text-[11px] align-top">
                      {String(item.id).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug">
                            {item.project[locale]}
                          </span>
                          {item.isNew && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6B1426] text-white">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>{t.newBadge}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top text-zinc-700 dark:text-zinc-300">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{item.client[locale]}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top font-mono font-medium text-zinc-900 dark:text-zinc-200 whitespace-nowrap">
                      {item.valueAED.startsWith('As per') || item.valueAED.startsWith('Per') || item.valueAED.startsWith('To be') ? (
                        <span className="text-zinc-500 font-sans text-xs italic">
                          {locale === 'ar'
                            ? item.valueAED === 'As per usage'
                              ? 'حسب الاستخدام الفعلي'
                              : item.valueAED === 'Per agreement'
                              ? 'وفق الاتفاقية المعتمدة'
                              : 'يحدد لاحقاً'
                            : item.valueAED}
                        </span>
                      ) : (
                        <span>
                          AED <span className="font-bold">{item.valueAED}</span>
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 align-top text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{item.period}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ${
                          isCompleted
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                        )}
                        <span>{item.status[locale]}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 align-top text-end font-mono font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                      {item.progress}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-3">
        {filteredProjects.map((item) => {
          const isCompleted = item.status.en === 'Completed';

          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111726] shadow-sm flex flex-col gap-3 hover-card-lift ${
                item.isNew ? 'border-[#6B1426]/40 dark:border-[#6B1426]/60' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-xs text-zinc-400 font-semibold">
                  #{String(item.id).padStart(2, '0')}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                  }`}
                >
                  {item.status[locale]} ({item.progress})
                </span>
              </div>

              <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
                {item.project[locale]}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <Building2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{item.client[locale]}</span>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                  {item.valueAED.startsWith('As per') || item.valueAED.startsWith('Per') || item.valueAED.startsWith('To be')
                    ? item.valueAED
                    : `AED ${item.valueAED}`}
                </span>
                <span className="text-zinc-500 text-[11px]">{item.period}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
