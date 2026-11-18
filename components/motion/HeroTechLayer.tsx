'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HeroTechCanvas = dynamic(() => import('./HeroTechCanvas'), {
  ssr: false,
});

/**
 * Defers loading the ambient Hero Canvas until after initial hydration & paint
 * so FCP, LCP, and initial main-thread blocking remain untouched.
 */
export default function HeroTechLayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setMounted(true), { timeout: 450 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = globalThis.setTimeout(() => setMounted(true), 120);
    return () => globalThis.clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  return <HeroTechCanvas />;
}
