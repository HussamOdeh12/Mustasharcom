'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';

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
  const reducedMotion = useReducedMotion();

  // Start visible on SSR/initial render so content is 100% readable without JS,
  // then arm below-the-fold sections for repeatable viewport reveal transitions.
  const [revealState, setRevealState] = useState<'initial' | 'hidden' | 'visible'>('initial');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      setRevealState('visible');
      return;
    }

    const rect = el.getBoundingClientRect();
    const initiallyVisible = rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
    setRevealState(initiallyVisible ? 'visible' : 'hidden');

    // Hysteresis Zone 1 (Enter): trigger reveal when section enters inside bottom/top bounds
    const enterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealState('visible');
          }
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    // Hysteresis Zone 2 (Meaningful Exit): reset to hidden only after section is >96px clear of viewport
    let isFirstExitCheck = true;
    const exitObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (isFirstExitCheck) {
            isFirstExitCheck = false;
            continue;
          }
          if (!entry.isIntersecting) {
            setRevealState('hidden');
          }
        }
      },
      {
        threshold: 0,
        rootMargin: '96px 0px 96px 0px',
      }
    );

    enterObserver.observe(el);
    exitObserver.observe(el);

    // Initial mount safety check for sections positioned right near the bottom fold
    const safetyTimer = window.setTimeout(() => {
      const currentRect = el.getBoundingClientRect();
      if (currentRect.top < window.innerHeight && currentRect.bottom > 0) {
        setRevealState('visible');
      }
    }, 900);

    return () => {
      enterObserver.disconnect();
      exitObserver.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, [reducedMotion]);

  const stateClass =
    reducedMotion || revealState !== 'hidden'
      ? 'section-reveal section-reveal-visible'
      : 'section-reveal section-reveal-hidden';

  return (
    <div
      ref={ref}
      id={id}
      data-reveal-state={reducedMotion ? 'visible' : revealState}
      className={`${stateClass} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
