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
          className={`inline-flex items-center justify-center p-2.5 rounded-md text-[#2C3A34] dark:text-[#C8D4CE] hover:text-[#0B1713] dark:hover:text-white hover:bg-[#F3EFEA] dark:hover:bg-[#10221C] border border-[#E3DFD7] dark:border-[#1A2E26] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer shrink-0 ${className}`}
          aria-label={isRtl ? 'البحث في الموقع (Ctrl+K)' : 'Search website (Ctrl+K)'}
          title={isRtl ? 'البحث (Ctrl+K)' : 'Search (Ctrl+K)'}
        >
          <Search className="w-4 h-4" />
        </button>
      ) : variant === 'mobile' ? (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0C1A15] text-xs text-[#485650] dark:text-[#A6B5AF] hover:border-[#6B1426] dark:hover:border-[#2DD4A4] transition-colors ${className}`}
          aria-label={isRtl ? 'البحث السريع' : 'Quick search'}
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#2DD4A4]" />
            <span>{isRtl ? 'البحث في الخدمات والمشاريع...' : 'Search services & projects...'}</span>
          </div>
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-[#10221C] rounded border border-[#E3DFD7] dark:border-[#1A2E26] text-[#485650] dark:text-[#A6B5AF]">
            ⌘K
          </kbd>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className={`hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/60 dark:bg-[#0C1A15] text-[#485650] dark:text-[#A6B5AF] hover:text-[#0B1713] dark:hover:text-white hover:border-[#C5BFB4] dark:hover:border-[#284539] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer shrink-0 whitespace-nowrap ${className}`}
          aria-label={isRtl ? 'البحث في الموقع (Ctrl+K)' : 'Search website (Ctrl+K)'}
        >
          <Search className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#2DD4A4] shrink-0" />
          <span className="hidden xl:inline">
            {isRtl ? 'بحث' : 'Search'}
          </span>
          <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-[#10221C] rounded border border-[#E3DFD7] dark:border-[#1A2E26] text-[#485650] dark:text-[#A6B5AF]">
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
