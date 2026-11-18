'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Locale, PROJECTS_RECORD } from '@/lib/company-data';
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
      {/* Search & Segmented Filter Controls */}
      <div className="reveal-item reveal-delay-1 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-[#EFECE5] dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F]">
        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] ${
                selectedCategory === cat.key
                  ? 'bg-[#174B3E] dark:bg-[#18C6A0] text-white dark:text-[#071C17]'
                  : 'text-[#43524C] dark:text-[#A5B8B1] hover:bg-[#DCE2DE]/70 dark:hover:bg-[#10382F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Text Filter */}
        <div className="relative min-w-[240px]">
          <Search
            className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#697671] dark:text-[#7E968E] ${
              isRtl ? 'right-3' : 'left-3'
            }`}
          />
          <input
            type="text"
            id="projects-search-input"
            aria-label={locale === 'ar' ? 'بحث في المشاريع أو الجهات' : 'Search projects or clients'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={locale === 'ar' ? 'بحث في المشاريع أو الجهات...' : 'Search projects or clients...'}
            className={`w-full py-2 text-xs rounded-md border border-[#DCE2DE] dark:border-[#18382F] bg-white dark:bg-[#071C17] text-[#17211D] dark:text-[#F4F7F5] placeholder:text-[#697671] dark:placeholder:text-[#7E968E] focus:outline-none focus:ring-2 focus:ring-[#174B3E] dark:focus:ring-[#18C6A0] transition-all ${
              isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
            }`}
          />
        </div>
      </div>

      {/* Result Count & Historical Record Framing */}
      <div className="reveal-item reveal-delay-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#697671] dark:text-[#7E968E] px-1">
        <span>
          {locale === 'ar'
            ? `عرض ${filteredProjects.length} من أصل ${PROJECTS_RECORD.length} عقداً ومشروعاً موثقاً`
            : `Showing ${filteredProjects.length} of ${PROJECTS_RECORD.length} verified engagements`}
        </span>
        <span className="font-mono text-[11px]">
          {locale === 'ar'
            ? 'سجل تعاقدي معتمد · الملف التعريفي 2026'
            : 'Mustasharcom Corporate Profile 2026 Register'}
        </span>
      </div>

      {/* Desktop Tabular Ledger View */}
      <div className="reveal-item reveal-delay-3 hidden md:block rounded-xl border border-[#DCE2DE] dark:border-[#18382F] bg-white dark:bg-[#0B2922] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs border-collapse">
            <thead>
              <tr className="bg-[#EFECE5] dark:bg-[#071C17] border-b border-[#DCE2DE] dark:border-[#18382F] text-[#43524C] dark:text-[#7E968E] font-semibold text-[11px]">
                <th className="py-3.5 px-4 text-start w-12 font-mono">#</th>
                <th className="py-3.5 px-4 text-start min-w-[280px]">{locale === 'ar' ? 'المشروع / نطاق العمل' : 'Project / Scope'}</th>
                <th className="py-3.5 px-4 text-start min-w-[200px]">{t.client}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{t.value}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{t.period}</th>
                <th className="py-3.5 px-4 text-start whitespace-nowrap">{locale === 'ar' ? 'حالة السجل' : 'Status'}</th>
                <th className="py-3.5 px-4 text-end whitespace-nowrap">{locale === 'ar' ? 'نسبة الإنجاز' : 'Progress'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCE2DE] dark:divide-[#18382F]">
              {filteredProjects.map((item) => {
                const isCompleted = item.status.en === 'Completed';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-[#F7F5F0] dark:hover:bg-[#10382F] transition-colors"
                  >
                    <td className="py-4 px-4 font-mono tabular-nums text-[#174B3E] dark:text-[#18C6A0] text-[11px] align-top">
                      {String(item.id).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-[#17211D] dark:text-[#F4F7F5] text-sm leading-snug">
                          {item.project[locale]}
                        </span>
                        {item.isNew && (
                          <span className="text-[11px] font-mono text-[#174B3E] dark:text-[#18C6A0]">
                            {t.newBadge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top text-[#2E3C37] dark:text-[#C8D8D3] font-medium">
                      {item.client[locale]}
                    </td>
                    <td className="py-4 px-4 align-top font-mono tabular-nums font-medium text-[#17211D] dark:text-[#F4F7F5] whitespace-nowrap">
                      {item.valueAED.startsWith('As per') || item.valueAED.startsWith('Per') || item.valueAED.startsWith('To be') ? (
                        <span className="text-[#697671] dark:text-[#7E968E] font-sans text-xs italic">
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
                    <td className="py-4 px-4 align-top font-mono tabular-nums text-[#43524C] dark:text-[#A5B8B1] whitespace-nowrap">
                      {item.period}
                    </td>
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <span
                        className={`text-xs font-medium ${
                          isCompleted
                            ? 'text-[#174B3E] dark:text-[#18C6A0]'
                            : 'text-[#0B2922] dark:text-[#18C6A0]'
                        }`}
                      >
                        {item.status[locale]}
                      </span>
                    </td>
                    <td className="py-4 px-4 align-top text-end font-mono tabular-nums font-semibold text-[#17211D] dark:text-[#F4F7F5] whitespace-nowrap">
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
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl border border-[#DCE2DE] dark:border-[#18382F] bg-white dark:bg-[#0B2922] flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-2 text-xs text-[#697671] dark:text-[#7E968E]">
              <span className="font-mono font-semibold text-[#174B3E] dark:text-[#18C6A0]">
                #{String(item.id).padStart(2, '0')}
              </span>
              <span className="font-mono">
                {item.status[locale]} · {item.progress}
              </span>
            </div>

            <h3 className="font-bold text-sm text-[#17211D] dark:text-[#F4F7F5] leading-snug">
              {item.project[locale]}
            </h3>

            <div className="text-xs text-[#43524C] dark:text-[#A5B8B1]">
              {item.client[locale]}
            </div>

            <div className="pt-3 border-t border-[#DCE2DE] dark:border-[#18382F] flex items-center justify-between text-xs">
              <span className="font-mono tabular-nums font-bold text-[#17211D] dark:text-[#F4F7F5]">
                {item.valueAED.startsWith('As per') || item.valueAED.startsWith('Per') || item.valueAED.startsWith('To be')
                  ? item.valueAED
                  : `AED ${item.valueAED}`}
              </span>
              <span className="font-mono text-[#697671] dark:text-[#7E968E] text-[11px]">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
