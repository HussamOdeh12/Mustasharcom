'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface ScrollToNextButtonProps {
  /** Target element ID (without #) to scroll smoothly into view */
  targetId: string;
  /** Concise editorial action label, e.g. "Scroll to Who We Are" */
  label: string;
  /** Optional subtle destination index, e.g. "01" */
  sectionIndex?: string;
  /** Surface styling variant matching the host section */
  variant?: 'dark' | 'light';
  /** Optional extra classes on the outer container */
  className?: string;
}

/**
 * Editorial 'scroll-to-next' button anchored at the bottom of major hero
 * and landing-page sections. Becomes visible as the bottom of the segment
 * enters the viewport to encourage discovery and smooth navigation.
 */
export default function ScrollToNextButton({
  targetId,
  label,
  sectionIndex,
  variant = 'dark',
  className,
}: ScrollToNextButtonProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const el = sentinelRef.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '40px 0px 24px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const handleScrollToNext = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    // Update URL hash cleanly without jumping scroll
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      ref={sentinelRef}
      className={cn('flex justify-center pt-10 md:pt-12', className)}
    >
      <button
        type="button"
        onClick={handleScrollToNext}
        aria-label={label}
        className={cn(
          'scroll-next-btn group btn-press inline-flex items-center gap-3.5 px-5 py-3 min-h-[44px] rounded-md border text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] transition-all duration-500 ease-out',
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none',
          isDark
            ? 'bg-[#0B2922]/90 hover:bg-[#10352C] text-[#DCE6E2] hover:text-[#F4F7F5] border-[#174B3E] hover:border-[#18C6A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071C17]'
            : 'bg-white/90 dark:bg-[#0B2922]/90 hover:bg-white dark:hover:bg-[#10352C] text-[#17211D] dark:text-[#F4F7F5] border-[#DCE3DF] dark:border-[#174B3E] hover:border-[#174B3E] dark:hover:border-[#18C6A0]'
        )}
      >
        {sectionIndex ? (
          <span
            className={cn(
              'font-mono text-[11px] font-semibold tabular-nums',
              isDark ? 'text-[#18C6A0]' : 'text-[#174B3E] dark:text-[#18C6A0]'
            )}
          >
            {sectionIndex}
          </span>
        ) : null}

        <span>{label}</span>

        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200',
            isDark
              ? 'bg-[#18C6A0]/15 text-[#18C6A0] group-hover:bg-[#18C6A0] group-hover:text-[#071C17]'
              : 'bg-[#174B3E]/10 dark:bg-[#18C6A0]/15 text-[#174B3E] dark:text-[#18C6A0] group-hover:bg-[#174B3E] group-hover:text-white dark:group-hover:bg-[#18C6A0] dark:group-hover:text-[#071C17]'
          )}
        >
          <ArrowDown className="w-3.5 h-3.5 scroll-next-arrow" />
        </span>
      </button>
    </div>
  );
}
