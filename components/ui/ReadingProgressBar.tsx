'use client';

import React, { useState, useEffect } from 'react';

interface ReadingProgressBarProps {
  locale?: 'en' | 'ar';
}

export default function ReadingProgressBar({ locale = 'en' }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const isRtl = locale === 'ar';

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const currentProgress = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
        setProgress(currentProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label={locale === 'ar' ? 'مؤشر تقدم القراءة' : 'Reading progress'}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full bg-gradient-to-r from-[#6B1426] via-[#9B2242] to-[#6B1426] dark:from-[#F38C9C] dark:via-[#E63956] dark:to-[#F38C9C] transition-all duration-75 ease-out shadow-xs ${
          isRtl ? 'ml-auto origin-right' : 'mr-auto origin-left'
        }`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
