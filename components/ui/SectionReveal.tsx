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
  // Progressive enhancement: start visible on SSR/initial render so no content is blank if JS is slow,
  // then animate below-the-fold sections smoothly when entering viewport.
  const [revealState, setRevealState] = useState<'initial' | 'hidden' | 'visible'>('initial');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealState('visible');
      return;
    }

    const rect = el.getBoundingClientRect();
    // If already within or above the viewport on mount, reveal immediately without hiding
    if (rect.top < window.innerHeight * 0.92) {
      setRevealState('visible');
      return;
    }

    setRevealState('hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealState('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    revealState === 'hidden'
      ? 'section-reveal section-reveal-hidden'
      : 'section-reveal section-reveal-visible';

  return (
    <div
      ref={ref}
      id={id}
      className={`${stateClass} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
