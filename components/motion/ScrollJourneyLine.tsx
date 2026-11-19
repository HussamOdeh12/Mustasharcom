'use client';

import React, { useEffect, useId, useRef } from 'react';
import { useReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface ScrollJourneyLineProps {
  /**
   * 'page' renders a full-page vertical architectural SVG journey rail synchronized
   * with total document scroll percentage (0% → 100%).
   * 'bridge' renders an inline SVG connector ribbon between major sections that
   * draws forward as the connector travels through the viewport.
   */
  mode?: 'page' | 'bridge';
  /** Surface tone for 'bridge' mode */
  surface?: 'light' | 'muted' | 'dark';
  /** Right-to-left awareness for page rail placement */
  isRtl?: boolean;
  /** Optional editorial caption label on the connector */
  label?: string;
  className?: string;
}

const PAGE_MILESTONES = [0.06, 0.22, 0.38, 0.54, 0.70, 0.84, 0.96];

/**
 * Scroll-driven SVG journey line that draws itself forward smoothly based on
 * the user's scroll percentage. Updates stroke-dashoffset and the leading
 * luminous tracer directly via rAF DOM refs with zero React re-renders per frame.
 */
export default function ScrollJourneyLine({
  mode = 'page',
  surface = 'light',
  isRtl = false,
  label,
  className,
}: ScrollJourneyLineProps) {
  const reducedMotion = useReducedMotion();
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const tracerRef = useRef<SVGCircleElement | null>(null);
  const haloRef = useRef<SVGCircleElement | null>(null);
  const milestoneRefs = useRef<(SVGCircleElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;

    // Snap milestone circles onto exact Bezier curve coordinates
    if (mode === 'page') {
      milestoneRefs.current.forEach((node, idx) => {
        if (!node) return;
        const pt = path.getPointAtLength(PAGE_MILESTONES[idx] * totalLength);
        node.setAttribute('cx', pt.x.toFixed(2));
        node.setAttribute('cy', pt.y.toFixed(2));
      });
    }

    const applyProgress = (rawProgress: number) => {
      const progress = Math.max(0, Math.min(1, rawProgress));
      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

      const point = path.getPointAtLength(progress * totalLength);
      if (tracerRef.current) {
        tracerRef.current.setAttribute('cx', point.x.toFixed(2));
        tracerRef.current.setAttribute('cy', point.y.toFixed(2));
        tracerRef.current.style.opacity = progress > 0.01 ? '1' : '0.35';
      }
      if (haloRef.current) {
        haloRef.current.setAttribute('cx', point.x.toFixed(2));
        haloRef.current.setAttribute('cy', point.y.toFixed(2));
        haloRef.current.style.opacity = progress > 0.01 ? '0.32' : '0';
      }

      if (mode === 'page') {
        milestoneRefs.current.forEach((node, idx) => {
          if (!node) return;
          const reached = progress >= PAGE_MILESTONES[idx];
          node.setAttribute('fill', reached ? '#18C6A0' : 'transparent');
          node.setAttribute('stroke', reached ? '#18C6A0' : '#697671');
          node.setAttribute('stroke-opacity', reached ? '1' : '0.45');
        });
      }
    };

    if (reducedMotion) {
      applyProgress(1);
      return;
    }

    const computeScrollProgress = (): number => {
      if (mode === 'page') {
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
        return window.scrollY / maxScroll;
      }

      const el = containerRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Starts drawing when connector enters bottom 88% of viewport, completes by top 28%
      const startY = vh * 0.88;
      const endY = vh * 0.28;
      return (startY - rect.top) / Math.max(1, startY - endY);
    };

    const scheduleUpdate = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        applyProgress(computeScrollProgress());
      });
    };

    // Initial paint sync
    applyProgress(computeScrollProgress());

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [mode, reducedMotion]);

  if (mode === 'bridge') {
    const bgClass =
      surface === 'dark'
        ? 'bg-[#071C17] border-b border-[#174B3E]'
        : surface === 'muted'
        ? 'bg-[#ECE9E2] dark:bg-[#051410] border-b border-[#DCE3DF] dark:border-[#174B3E]'
        : 'bg-[#F7F5F0] dark:bg-[#071C17] border-b border-[#DCE3DF] dark:border-[#174B3E]';

    return (
      <div
        ref={containerRef}
        className={cn('relative overflow-hidden py-6 sm:py-8', bgClass, className)}
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <svg
            className="w-full max-w-4xl h-16 sm:h-20 overflow-visible"
            viewBox="0 0 960 88"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#174B3E" />
                <stop offset="55%" stopColor="#12A989" />
                <stop offset="100%" stopColor="#18C6A0" />
              </linearGradient>
            </defs>

            {/* Subtle static guide rail */}
            <path
              d="M 16 14 C 240 14, 290 74, 480 44 C 670 14, 720 74, 944 74"
              stroke={surface === 'dark' ? '#174B3E' : '#697671'}
              strokeOpacity={surface === 'dark' ? '0.6' : '0.25'}
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />

            {/* Animated scroll-percentage foreground path */}
            <path
              ref={pathRef}
              d="M 16 14 C 240 14, 290 74, 480 44 C 670 14, 720 74, 944 74"
              stroke={`url(#${gradientId})`}
              strokeWidth="2.25"
              strokeLinecap="round"
            />

            {/* Leading luminous tracer node */}
            <circle
              ref={haloRef}
              cx="16"
              cy="14"
              r="9"
              fill="#18C6A0"
              opacity="0"
            />
            <circle
              ref={tracerRef}
              cx="16"
              cy="14"
              r="4"
              fill="#18C6A0"
              stroke="#071C17"
              strokeWidth="1.5"
            />
          </svg>

          {label ? (
            <span
              className={cn(
                'mt-1 text-[11px] font-mono tracking-wider uppercase',
                surface === 'dark'
                  ? 'text-[#A3B8B0]'
                  : 'text-[#697671] dark:text-[#A3B8B0]'
              )}
            >
              {label}
            </span>
          ) : null}
        </div>
      </div>
    );
  }

  // Default 'page' mode: continuous full-page architectural SVG journey spine
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed top-24 bottom-8 z-30 hidden xl:flex items-center',
        isRtl ? 'left-4' : 'right-4',
        className
      )}
    >
      <svg
        className="w-8 h-full overflow-visible"
        viewBox="0 0 32 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#18C6A0" />
            <stop offset="50%" stopColor="#12A989" />
            <stop offset="100%" stopColor="#18C6A0" />
          </linearGradient>
        </defs>

        {/* Quiet architectural guide track */}
        <path
          d="M 16 12 C 26 78, 6 142, 16 210 C 26 278, 6 342, 16 410 C 26 478, 6 536, 16 588"
          stroke="#697671"
          strokeOpacity="0.28"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Scroll-synchronized self-drawing journey line */}
        <path
          ref={pathRef}
          d="M 16 12 C 26 78, 6 142, 16 210 C 26 278, 6 342, 16 410 C 26 478, 6 536, 16 588"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.25"
          strokeLinecap="round"
        />

        {/* Milestone nodes along the journey spine */}
        {PAGE_MILESTONES.map((ratio, idx) => {
          const y = 12 + ratio * (588 - 12);
          return (
            <circle
              key={ratio}
              ref={(el) => {
                milestoneRefs.current[idx] = el;
              }}
              cx="16"
              cy={y}
              r="2.75"
              fill="transparent"
              stroke="#697671"
              strokeOpacity="0.45"
              strokeWidth="1.25"
            />
          );
        })}

        {/* Leading luminous scroll tracer */}
        <circle
          ref={haloRef}
          cx="16"
          cy="12"
          r="7.5"
          fill="#18C6A0"
          opacity="0"
        />
        <circle
          ref={tracerRef}
          cx="16"
          cy="12"
          r="3.25"
          fill="#18C6A0"
          stroke="#071C17"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  );
}
