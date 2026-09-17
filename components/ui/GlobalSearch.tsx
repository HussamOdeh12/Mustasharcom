'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Search } from 'lucide-react';
import { Locale } from '@/lib/company-data';

// Dynamically load the search modal only when opened
const GlobalSearchModal = dynamic(() => import('./GlobalSearchModal'), {
  ssr: false,
});

interface GlobalSearchProps {
  locale: Locale;
  variant?: 'header' | 'mobile' | 'compact';
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

export default function GlobalSearch({
  locale,
  variant = 'header',
  className = '',
  onOpenChange,
}: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = locale === 'ar';

  const setOpenState = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange]
  );

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpenState(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setOpenState]);

  return (
    <>
      {variant === 'compact' ? (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className={`inline-flex items-center justify-center p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer shrink-0 ${className}`}
          aria-label={isRtl ? 'البحث في الموقع (Ctrl+K)' : 'Search website (Ctrl+K)'}
          title={isRtl ? 'البحث (Ctrl+K)' : 'Search (Ctrl+K)'}
        >
          <Search className="w-4 h-4" />
        </button>
      ) : variant === 'mobile' ? (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${className}`}
          aria-label={isRtl ? 'البحث السريع' : 'Quick search'}
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#E63956]" />
            <span>{isRtl ? 'البحث في الخدمات والمشاريع...' : 'Search services & projects...'}</span>
          </div>
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-700 rounded border border-zinc-200 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400">
            ⌘K
          </kbd>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className={`hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer shrink-0 ${className}`}
          aria-label={isRtl ? 'البحث في الموقع (Ctrl+K)' : 'Search website (Ctrl+K)'}
        >
          <Search className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#E63956] shrink-0" />
          <span className="hidden md:inline text-zinc-600 dark:text-zinc-400">
            {isRtl ? 'بحث...' : 'Search...'}
          </span>
          <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-700/80 rounded border border-zinc-200 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 font-semibold shadow-2xs">
            ⌘K
          </kbd>
        </button>
      )}

      {/* Only render modal when active */}
      {isOpen && (
        <GlobalSearchModal
          locale={locale}
          onClose={() => setOpenState(false)}
        />
      )}
    </>
  );
}
