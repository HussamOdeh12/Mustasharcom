'use client';

import React, { useEffect, useRef } from 'react';

interface ReadingProgressBarProps {
  locale?: 'en' | 'ar';
}

export default function ReadingProgressBar({ locale = 'en' }: ReadingProgressBarProps) {
  const isRtl = locale === 'ar';
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let cachedScrollHeight = 0;

    const measureHeight = () => {
      cachedScrollHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
    };

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(Math.max(scrollTop / cachedScrollHeight, 0), 1);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    measureHeight();
    updateScrollProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', measureHeight, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureHeight);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-[#6B1426] dark:bg-[#F38C9C] shadow-xs will-change-transform"
        style={{
          transform: 'scaleX(0)',
          transformOrigin: isRtl ? 'right' : 'left',
          transition: 'transform 75ms ease-out',
        }}
      />
    </div>
  );
}
