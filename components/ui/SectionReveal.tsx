'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  id,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible on SSR/initial render so content is 100% accessible without JS,
  // then arm below-the-fold sections for smooth viewport entrance transitions.
  const [revealState, setRevealState] = useState<'initial' | 'hidden' | 'visible'>('initial');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealState('visible');
      return;
    }

    const rect = el.getBoundingClientRect();
    // Keep sections already in or above the viewport immediately visible
    if (rect.top < window.innerHeight * 0.86) {
      setRevealState('visible');
      return;
    }

    setRevealState('hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealState('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -36px 0px',
      }
    );

    observer.observe(el);

    // Safety fallback: ensure content never remains trapped hidden on ultra-short viewports
    const safetyTimer = window.setTimeout(() => {
      const currentRect = el.getBoundingClientRect();
      if (currentRect.top < window.innerHeight) {
        setRevealState('visible');
      }
    }, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);

  const stateClass =
    revealState === 'hidden'
      ? 'section-reveal section-reveal-hidden'
      : 'section-reveal section-reveal-visible';

  return (
    <div
      ref={ref}
      id={id}
      data-reveal-state={revealState}
      className={`${stateClass} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
