'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  ArrowRight,
  ArrowLeft,
  CornerDownLeft,
  Sparkles,
  Building2,
  ShieldCheck,
  FileText,
  Layers,
  Briefcase,
} from 'lucide-react';
import { Locale } from '@/lib/company-data';
import { searchSite, SearchResultItem, SearchCategory } from '@/lib/search-data';

interface GlobalSearchModalProps {
  locale: Locale;
  onClose: () => void;
}

const categoryIcons: Record<SearchCategory, React.ReactNode> = {
  services: <Briefcase className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />,
  pages: <Layers className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />,
  projects: <Building2 className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />,
  compliance: <ShieldCheck className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />,
  contact: <Sparkles className="w-3.5 h-3.5 text-[#C6A355] dark:text-[#D4B46A]" />,
  legal: <FileText className="w-3.5 h-3.5 text-[#697671] dark:text-[#A3B8B0]" />,
};

export default function GlobalSearchModal({ locale, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const isRtl = locale === 'ar';
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();

  const rawResults = searchSite(query, locale);
  const results = activeCategory === 'all'
    ? rawResults
    : rawResults.filter((r) => r.category === activeCategory);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 30);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'input, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    setQuery('');
    router.push(item.href);
  };

  const categories = [
    { key: 'all', label: isRtl ? 'الكل' : 'All' },
    { key: 'services', label: isRtl ? 'الخدمات' : 'Services' },
    { key: 'projects', label: isRtl ? 'المشاريع' : 'Projects' },
    { key: 'compliance', label: isRtl ? 'الشهادات' : 'Compliance' },
    { key: 'pages', label: isRtl ? 'الصفحات' : 'Pages' },
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${dialogId}-title`}
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 p-4 bg-[#071C17]/75 backdrop-blur-xs transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={handleDialogKeyDown}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl bg-[#F7F5F0] dark:bg-[#0B2922] border border-[#DCE3DF] dark:border-[#174B3E] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
      >
        <h2 id={`${dialogId}-title`} className="sr-only">
          {isRtl ? 'البحث العام في موقع مستشاركم' : 'Global Website Search'}
        </h2>

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <Search className="w-4 h-4 text-[#174B3E] dark:text-[#18C6A0] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id={`${dialogId}-input`}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={
              isRtl
                ? 'ابحث في الخدمات، المشاريع، شهادات الجودة، أو الصفحات...'
                : 'Search services, projects, compliance, or pages...'
            }
            className="flex-1 bg-transparent text-sm text-[#17211D] dark:text-[#F4F7F5] placeholder:text-[#697671] dark:placeholder:text-[#6E857D] focus:outline-none"
            aria-label={isRtl ? 'خانة البحث العام' : 'Global search query input'}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="p-1 rounded text-[#697671] dark:text-[#A3B8B0] hover:text-[#17211D] dark:hover:text-white"
              aria-label={isRtl ? 'مسح البحث' : 'Clear search'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded text-xs font-mono text-[#697671] dark:text-[#A3B8B0] hover:bg-[#ECE9E2] dark:hover:bg-[#10352C] transition-colors"
          >
            {isRtl ? 'إلغاء' : 'Esc'}
          </button>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#ECE9E2]/70 dark:bg-[#071C17] border-b border-[#DCE3DF] dark:border-[#174B3E] overflow-x-auto no-scrollbar text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#174B3E] dark:bg-[#18C6A0] text-white dark:text-[#071C17]'
                  : 'text-[#3E544C] dark:text-[#A3B8B0] hover:bg-[#DCE3DF]/60 dark:hover:bg-[#10352C]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-[#DCE3DF]/60 dark:divide-[#174B3E]/60 max-h-[50vh]"
          role="listbox"
          id={`${dialogId}-results`}
        >
          {query.trim().length >= 2 && results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-start justify-between gap-3 p-3 rounded-md transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#ECE9E2] dark:bg-[#10352C] text-[#17211D] dark:text-[#F4F7F5]'
                      : 'hover:bg-[#ECE9E2]/60 dark:hover:bg-[#10352C]/60 text-[#17211D] dark:text-[#DCE6E2]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-white dark:bg-[#071C17] border border-[#DCE3DF] dark:border-[#174B3E] shrink-0 mt-0.5">
                      {categoryIcons[item.category] || <Layers className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-[#697671] dark:text-[#A3B8B0]">
                          · {item.categoryLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#3E544C] dark:text-[#A3B8B0] mt-1 line-clamp-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-center text-[#697671] dark:text-[#A3B8B0]">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px]">
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })
          ) : query.trim().length >= 2 ? (
            <div className="py-12 px-6 text-center text-[#3E544C] dark:text-[#A3B8B0]">
              <p className="text-xs font-medium">
                {isRtl ? 'لم نتمكن من العثور على نتائج مطابقة لـ' : 'No matching results found for'}{' '}
                <span className="font-semibold text-[#17211D] dark:text-white">&ldquo;{query}&rdquo;</span>
              </p>
              <p className="text-[11px] mt-2">
                {isRtl
                  ? 'جرّب البحث بكلمات عامة مثل: الذكاء الاصطناعي، الجودة، ERP، المشاريع، أو أبوظبي'
                  : 'Try general terms like: AI, Data, ISO 9001, ERP, Projects, or Abu Dhabi'}
              </p>
            </div>
          ) : (
            <div className="py-4 px-3">
              <span className="text-[11px] font-semibold text-[#697671] dark:text-[#A3B8B0] px-2 block mb-2">
                {isRtl ? 'عمليات بحث مقترحة' : 'Suggested Destinations'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                {[
                  {
                    idx: '01',
                    title: isRtl ? 'استشارات تقنية المعلومات' : 'IT Consulting & Management',
                    href: isRtl ? '/ar/services/it-consulting' : '/services/it-consulting',
                    cat: isRtl ? 'خدمة' : 'Practice',
                  },
                  {
                    idx: '02',
                    title: isRtl ? 'تحليل البيانات والذكاء الاصطناعي' : 'Data Analytics & AI',
                    href: isRtl ? '/ar/services/data-ai' : '/services/data-ai',
                    cat: isRtl ? 'خدمة' : 'Practice',
                  },
                  {
                    idx: '03',
                    title: isRtl ? 'شهادة الجودة ISO 9001:2015' : 'ISO 9001:2015 Compliance',
                    href: isRtl ? '/ar/quality-compliance' : '/quality-compliance',
                    cat: isRtl ? 'حوكمة' : 'Governance',
                  },
                  {
                    idx: '04',
                    title: isRtl ? 'القيمة المحلية المضافة 55.03%' : 'In-Country Value (ICV 55.03%)',
                    href: isRtl ? '/ar/quality-compliance' : '/quality-compliance',
                    cat: isRtl ? 'حوكمة' : 'Governance',
                  },
                  {
                    idx: '05',
                    title: isRtl ? 'سجل المشاريع والتعاقدات (17)' : '17 Verified Public Mandates',
                    href: isRtl ? '/ar/projects' : '/projects',
                    cat: isRtl ? 'مشاريع' : 'Projects',
                  },
                  {
                    idx: '06',
                    title: isRtl ? 'طلب عرض فني (RFP)' : 'Request Technical Proposal',
                    href: isRtl ? '/ar/contact' : '/contact',
                    cat: isRtl ? 'تواصل' : 'Contact',
                  },
                ].map((item) => (
                  <button
                    key={item.href + item.idx}
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push(item.href);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-md hover:bg-[#ECE9E2] dark:hover:bg-[#10352C] text-[#17211D] dark:text-[#F4F7F5] text-start transition-colors cursor-pointer"
                  >
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="font-mono text-[10px] font-bold text-[#174B3E] dark:text-[#18C6A0] shrink-0">
                        {item.idx}.
                      </span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span className="text-[10px] text-[#697671] dark:text-[#A3B8B0] shrink-0">{item.cat}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-4 py-2.5 bg-[#ECE9E2]/70 dark:bg-[#071C17] border-t border-[#DCE3DF] dark:border-[#174B3E] flex items-center justify-between text-[11px] text-[#697671] dark:text-[#A3B8B0]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white dark:bg-[#0B2922] rounded border border-[#DCE3DF] dark:border-[#174B3E] font-mono text-[9px]">
                ↑
              </kbd>
              <kbd className="px-1 py-0.5 bg-white dark:bg-[#0B2922] rounded border border-[#DCE3DF] dark:border-[#174B3E] font-mono text-[9px]">
                ↓
              </kbd>
              <span>{isRtl ? 'للتنقل' : 'Navigate'}</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white dark:bg-[#0B2922] rounded border border-[#DCE3DF] dark:border-[#174B3E] font-mono text-[9px]">
                ↵
              </kbd>
              <span>{isRtl ? 'للاختيار' : 'Select'}</span>
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[10px]">Mustasharcom Index</span>
        </div>
      </div>
    </div>
  );
}
