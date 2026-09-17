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
  services: <Briefcase className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#E63956]" />,
  pages: <Layers className="w-3.5 h-3.5 text-[#008751] dark:text-[#34D399]" />,
  projects: <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />,
  compliance: <ShieldCheck className="w-3.5 h-3.5 text-[#008751] dark:text-[#34D399]" />,
  contact: <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
  legal: <FileText className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />,
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

  // Search results
  const rawResults = searchSite(query, locale);
  const results = activeCategory === 'all'
    ? rawResults
    : rawResults.filter((r) => r.category === activeCategory);

  // Focus management and body scroll locking
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
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 p-4 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
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
        className="w-full max-w-xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all transform animate-in zoom-in-95 duration-150"
      >
        {/* Accessible Dialog Title for Screen Readers */}
        <h2 id={`${dialogId}-title`} className="sr-only">
          {isRtl ? 'البحث العام في موقع مستشاركم' : 'Global Website Search'}
        </h2>

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0" />
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
            className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none"
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
              className="p-1 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              aria-label={isRtl ? 'مسح البحث' : 'Clear search'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isRtl ? 'إلغاء' : 'Esc'}
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-zinc-50/70 dark:bg-zinc-900/50 border-b border-zinc-200/60 dark:border-zinc-800/60 overflow-x-auto scrollbar-none text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat.key
                  ? 'bg-[#6B1426] text-white shadow-2xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-zinc-100 dark:divide-zinc-800/50 max-h-[50vh]"
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
                  className={`flex items-start justify-between gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 shrink-0 mt-0.5">
                      {categoryIcons[item.category] || <Layers className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 font-medium">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-center text-zinc-600 dark:text-zinc-400">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-zinc-600 dark:text-zinc-400">
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })
          ) : query.trim().length >= 2 ? (
            /* No Results */
            <div className="py-12 px-6 text-center text-zinc-600 dark:text-zinc-400">
              <p className="text-xs font-medium">
                {isRtl ? 'لم نتمكن من العثور على نتائج مطابقة لـ' : 'No matching results found for'}{' '}
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">&ldquo;{query}&rdquo;</span>
              </p>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-2">
                {isRtl
                  ? 'جرّب البحث بكلمات عامة مثل: الذكاء الاصطناعي، الجودة، ERP، المشاريع، أو أبوظبي'
                  : 'Try general terms like: AI, Data, ISO 9001, ERP, Projects, or Abu Dhabi'}
              </p>
            </div>
          ) : (
            /* Suggested Quick Links / Empty state */
            <div className="py-4 px-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 px-2 block mb-2">
                {isRtl ? 'عمليات بحث مقترحة' : 'Suggested Topics'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                {[
                  {
                    title: isRtl ? 'استشارات تقنية المعلومات' : 'IT Consulting & Management',
                    href: isRtl ? '/ar/services/it-consulting' : '/services/it-consulting',
                    cat: isRtl ? 'خدمة' : 'Service',
                  },
                  {
                    title: isRtl ? 'تحليل البيانات والذكاء الاصطناعي' : 'Data Analytics & AI',
                    href: isRtl ? '/ar/services/data-ai' : '/services/data-ai',
                    cat: isRtl ? 'خدمة' : 'Service',
                  },
                  {
                    title: isRtl ? 'شهادة الجودة ISO 9001:2015' : 'ISO 9001:2015 Compliance',
                    href: isRtl ? '/ar/quality-compliance' : '/quality-compliance',
                    cat: isRtl ? 'حوكمة' : 'Governance',
                  },
                  {
                    title: isRtl ? 'القيمة المحلية المضافة 55.03%' : 'In-Country Value (ICV 55.03%)',
                    href: isRtl ? '/ar/quality-compliance' : '/quality-compliance',
                    cat: isRtl ? 'حوكمة' : 'Governance',
                  },
                  {
                    title: isRtl ? 'سجل المشاريع والتعاقدات' : '12 Verified Project Engagements',
                    href: isRtl ? '/ar/projects' : '/projects',
                    cat: isRtl ? 'مشاريع' : 'Projects',
                  },
                  {
                    title: isRtl ? 'طلب عرض فني (RFP)' : 'Request Technical Proposal',
                    href: isRtl ? '/ar/contact' : '/contact',
                    cat: isRtl ? 'تواصل' : 'Contact',
                  },
                ].map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push(item.href);
                    }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-start transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B1426] dark:bg-[#E63956]" />
                      <span>{item.title}</span>
                    </div>
                    <span className="text-[10px] text-zinc-600 dark:text-zinc-400">{item.cat}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[9px]">
                ↑
              </kbd>
              <kbd className="px-1 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[9px]">
                ↓
              </kbd>
              <span>{isRtl ? 'للتنقل' : 'Navigate'}</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[9px]">
                ↵
              </kbd>
              <span>{isRtl ? 'للاختيار' : 'Select'}</span>
            </span>
          </div>
          <span className="hidden sm:inline">Mustasharcom Informatics Index</span>
        </div>
      </div>
    </div>
  );
}
