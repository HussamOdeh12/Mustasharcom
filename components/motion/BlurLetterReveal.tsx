'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface BlurLetterRevealProps {
  /** Text content to animate */
  text: string;
  /** Additional classes applied to the wrapper element */
  className?: string;
  /** HTML tag for the inline/block wrapper */
  as?: 'span' | 'div' | 'p';
  /** 'mount' animates immediately on load; 'view' replays via scroll viewport entry */
  trigger?: 'mount' | 'view';
  /** Initial delay before the first letter starts animating (ms) */
  baseDelayMs?: number;
  /** Stagger delay between consecutive characters (ms) */
  staggerMs?: number;
  /** Maximum total stagger window (ms) so long headlines finish crisply */
  maxStaggerSpanMs?: number;
  /** Duration of each character's fade + slide + unblur animation (ms) */
  durationMs?: number;
  /** Starting vertical slide offset in pixels */
  yOffsetPx?: number;
  /** Starting Gaussian blur radius in pixels */
  blurPx?: number;
  /** Replay animation when scrolled well out of view and re-entered */
  replayable?: boolean;
}

interface WordToken {
  word: string;
  units: string[];
  startIndex: number;
  trailingSpace: boolean;
}

const ARABIC_SCRIPT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

/**
 * Per-letter animated text reveal combining opacity fade-in, upward slide,
 * subtle micro-scale settle, and Gaussian blur reduction.
 *
 * Automatically preserves cursive joining for Arabic script by animating
 * word units while keeping true letter-by-letter animation for Latin text.
 * Screen readers receive a single clean sr-only string to avoid spelling stutter.
 */
export default function BlurLetterReveal({
  text,
  className,
  as: Tag = 'span',
  trigger = 'view',
  baseDelayMs = 60,
  staggerMs = 24,
  maxStaggerSpanMs = 680,
  durationMs = 620,
  yOffsetPx = 18,
  blurPx = 10,
  replayable = true,
}: BlurLetterRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<'ssr' | 'hidden' | 'visible'>(
    trigger === 'mount' ? 'visible' : 'ssr'
  );

  // Detect Arabic script so connected cursive letters are never broken by per-character spans
  const isArabicText = useMemo(() => ARABIC_SCRIPT_REGEX.test(text), [text]);

  const { tokens, totalUnits } = useMemo(() => {
    const rawWords = text.split(' ');
    let runningIndex = 0;
    const built: WordToken[] = rawWords.map((word, idx) => {
      const units = isArabicText ? [word] : Array.from(word);
      const startIndex = runningIndex;
      runningIndex += units.length;
      return {
        word,
        units,
        startIndex,
        trailingSpace: idx < rawWords.length - 1,
      };
    });
    return { tokens: built, totalUnits: Math.max(1, runningIndex) };
  }, [text, isArabicText]);

  // Adaptive stagger keeps both short phrases and multi-word headlines snappy
  const effectiveStaggerMs = useMemo(() => {
    const base = isArabicText ? Math.max(staggerMs * 2.2, 48) : staggerMs;
    if (totalUnits <= 1) return 0;
    return Math.min(base, maxStaggerSpanMs / (totalUnits - 1));
  }, [isArabicText, staggerMs, maxStaggerSpanMs, totalUnits]);

  useEffect(() => {
    if (reducedMotion) {
      setPhase('visible');
      return;
    }

    if (trigger === 'mount') {
      setPhase('visible');
      return;
    }

    const el = containerRef.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setPhase('visible');
      return;
    }

    const rect = el.getBoundingClientRect();
    const inInitialFold = rect.top < window.innerHeight * 0.96 && rect.bottom > 0;
    setPhase(inInitialFold ? 'visible' : 'hidden');

    const enterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPhase('visible');
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    );

    let exitObserver: IntersectionObserver | null = null;
    if (replayable) {
      let isInitialCallback = true;
      exitObserver = new IntersectionObserver(
        (entries) => {
          if (isInitialCallback) {
            isInitialCallback = false;
            return;
          }
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              setPhase('hidden');
            }
          }
        },
        { threshold: 0, rootMargin: '96px 0px 96px 0px' }
      );
      exitObserver.observe(el);
    }

    enterObserver.observe(el);

    return () => {
      enterObserver.disconnect();
      exitObserver?.disconnect();
    };
  }, [reducedMotion, trigger, replayable]);

  const isVisible = reducedMotion || phase === 'visible' || phase === 'ssr';
  const animateOnMount = trigger === 'mount' && !reducedMotion;

  const customVars = {
    '--blur-letter-duration': `${durationMs}ms`,
    '--blur-letter-y': `${yOffsetPx}px`,
    '--blur-letter-blur': `${blurPx}px`,
  } as React.CSSProperties;

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      style={customVars}
      className={cn(
        'blur-letter-root',
        animateOnMount
          ? 'blur-letter-mount'
          : isVisible
          ? 'blur-letter-visible'
          : 'blur-letter-hidden',
        className
      )}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {tokens.map((token, wordIdx) => (
          <React.Fragment key={`${wordIdx}-${token.word}`}>
            <span className="inline-block whitespace-nowrap">
              {token.units.map((unit, unitIdx) => {
                const globalIndex = token.startIndex + unitIdx;
                const delay = Math.round(baseDelayMs + globalIndex * effectiveStaggerMs);
                return (
                  <span
                    key={`${wordIdx}-${unitIdx}`}
                    className="blur-letter-char inline-block"
                    style={{ '--char-delay': `${delay}ms` } as React.CSSProperties}
                  >
                    {unit}
                  </span>
                );
              })}
            </span>
            {token.trailingSpace ? ' ' : null}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  );
}
