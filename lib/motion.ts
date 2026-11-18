'use client';

import { useEffect, useState, useSyncExternalStore, RefObject } from 'react';

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => {};
  }
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', callback);
    return () => mq.removeEventListener('change', callback);
  }
  return () => {};
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/**
 * Subscribes safely to `(prefers-reduced-motion: reduce)` without hydration mismatches.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

/**
 * Observes whether an element is currently visible in or near the viewport.
 * Returns both `isInView` (live visibility for suspending offscreen animations)
 * and `hasEntered` (one-time flag for lazy-mounting heavy visual islands).
 */
export function useViewportObserver(
  ref: RefObject<Element | null>,
  options: { rootMargin?: string; threshold?: number } = {}
): { isInView: boolean; hasEntered: boolean } {
  const { rootMargin = '120px 0px', threshold = 0.01 } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible = entry.isIntersecting;
          setIsInView(visible);
          if (visible) {
            setHasEntered(true);
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold]);

  return { isInView, hasEntered };
}

function subscribeVisibility(callback: () => void) {
  if (typeof document === 'undefined') return () => {};
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
}

function getVisibilitySnapshot(): boolean {
  if (typeof document === 'undefined') return true;
  return !document.hidden;
}

function getVisibilityServerSnapshot(): boolean {
  return true;
}

/**
 * Tracks whether the current browser tab is active and visible.
 * Used to suspend Canvas rAF loops when the user switches tabs.
 */
export function useDocumentVisible(): boolean {
  return useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot
  );
}
