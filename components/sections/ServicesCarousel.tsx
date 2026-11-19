'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Locale, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import HeadingH3 from '../ui/HeadingH3';
import ScrollToNextButton from '../ui/ScrollToNextButton';

interface ServicesCarouselProps {
  locale: Locale;
}

export default function ServicesCarousel({ locale }: ServicesCarouselProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const PrevIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const total = SERVICES_CATALOG.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  // Drag state refs (non-render-triggering)
  const dragStartRef = useRef<{ x: number; scrollLeft: number; active: boolean; moved: boolean }>({
    x: 0,
    scrollLeft: 0,
    active: false,
    moved: false,
  });

  // Synchronize activeIndex and boundary button disabled states with native scroll position
  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    let closestIdx = 0;
    let minDistance = Infinity;

    panelRefs.current.forEach((panel, idx) => {
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      // Distance from the start edge of the track (right edge in RTL, left edge in LTR)
      const distance = isRtl
        ? Math.abs(rect.right - trackRect.right)
        : Math.abs(rect.left - trackRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
    setCanScrollPrev(closestIdx > 0);
    setCanScrollNext(closestIdx < total - 1);
  }, [isRtl, total]);

  const handleTrackScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      updateScrollState();
      rafRef.current = null;
    });
  }, [updateScrollState]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', handleTrackScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleTrackScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleTrackScroll, updateScrollState]);

  const scrollToPanel = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      setActiveIndex(clamped);
      setCanScrollPrev(clamped > 0);
      setCanScrollNext(clamped < total - 1);

      const panel = panelRefs.current[clamped];
      const track = trackRef.current;
      if (panel && track) {
        const trackRect = track.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();
        const delta = isRtl
          ? panelRect.right - trackRect.right
          : panelRect.left - trackRect.left;

        track.scrollBy({
          left: delta,
          behavior: 'smooth',
        });
      }
    },
    [isRtl, total]
  );

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToPanel(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < total - 1) {
      scrollToPanel(activeIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (isRtl) {
        handlePrev();
      } else {
        handleNext();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (isRtl) {
        handleNext();
      } else {
        handlePrev();
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollToPanel(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToPanel(total - 1);
    }
  };

  // Mouse Drag Support (Desktop pointer drag without interfering with vertical scroll or touch)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !trackRef.current) return;
    dragStartRef.current = {
      x: e.pageX,
      scrollLeft: trackRef.current.scrollLeft,
      active: true,
      moved: false,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragStartRef.current.active || !trackRef.current) return;
    const dx = e.pageX - dragStartRef.current.x;
    if (Math.abs(dx) > 6) {
      dragStartRef.current.moved = true;
      if (!isDragging) setIsDragging(true);
      trackRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
    }
  };

  const finishDrag = () => {
    if (!dragStartRef.current.active) return;
    dragStartRef.current.active = false;
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const servicesHref = locale === 'ar' ? '/ar/services' : '/services';

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#ECE9E2] dark:bg-[#051410] border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors overflow-x-clip"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="services-carousel-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header & Interactive Carousel Controls */}
        <div className="reveal-item reveal-delay-1 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 md:pb-16 border-b border-[#DCE3DF] dark:border-[#174B3E]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
              02 / {locale === 'ar' ? 'الممارسات الاستشارية والحلول التقنية' : 'Our Services & Consulting Practices'}
            </span>
            <h2
              id="services-carousel-heading"
              className="font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'خبرات استشارية وهندسية متكاملة لكل مرحلة من مراحل التحول الرقمي'
                : 'Expert Guidance & Engineering For Every Stage of Institutional Growth'}
            </h2>
          </div>

          {/* Interactive Controls Cluster: Progress Counter + Prev/Next Buttons with Boundary Disabled States */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 shrink-0">
            <div className="flex items-center gap-3" aria-live="polite" aria-atomic="true">
              <span className="font-mono text-sm font-bold text-[#17211D] dark:text-[#F4F7F5] tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="w-8 h-[1px] bg-[#697671] dark:bg-[#174B3E]" />
              <span className="font-mono text-sm text-[#697671] dark:text-[#A3B8B0] tabular-nums">
                {String(total).padStart(2, '0')}
              </span>
            </div>

            <div
              className="flex items-center gap-2.5"
              role="group"
              aria-label={locale === 'ar' ? 'التحكم بعرض الخدمات' : 'Service carousel navigation'}
            >
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollPrev}
                aria-label={locale === 'ar' ? 'الخدمة السابقة' : 'Previous service'}
                className="btn-press w-12 h-12 rounded-full border border-[#DCE3DF] dark:border-[#174B3E] bg-white dark:bg-[#0B2922] enabled:hover:bg-[#174B3E] enabled:hover:text-white dark:enabled:hover:bg-[#18C6A0] dark:enabled:hover:text-[#071C17] enabled:hover:border-[#174B3E] dark:enabled:hover:border-[#18C6A0] text-[#17211D] dark:text-[#F4F7F5] disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
              >
                <PrevIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollNext}
                aria-label={locale === 'ar' ? 'الخدمة التالية' : 'Next service'}
                className="btn-press w-12 h-12 rounded-full border border-[#DCE3DF] dark:border-[#174B3E] bg-white dark:bg-[#0B2922] enabled:hover:bg-[#174B3E] enabled:hover:text-white dark:enabled:hover:bg-[#18C6A0] dark:enabled:hover:text-[#071C17] enabled:hover:border-[#174B3E] dark:enabled:hover:border-[#18C6A0] text-[#17211D] dark:text-[#F4F7F5] disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
              >
                <NextIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Direct Practice Selector Pills / Index Strip (Keyboard Accessible) */}
        <div
          className="reveal-item reveal-delay-2 pt-8 pb-3 flex items-center gap-2 overflow-x-auto no-scrollbar"
          role="tablist"
          aria-label={locale === 'ar' ? 'فهرس الممارسات الاستشارية' : 'Practice area index'}
        >
          {SERVICES_CATALOG.map((svc, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={svc.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => scrollToPanel(idx)}
                className={`btn-press px-4 py-2.5 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] ${
                  isActive
                    ? 'bg-[#071C17] text-[#F4F7F5] dark:bg-[#18C6A0] dark:text-[#071C17] font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#0B2922] text-[#3E544C] dark:text-[#A3B8B0] hover:text-[#17211D] dark:hover:text-[#F4F7F5] border border-[#DCE3DF] dark:border-[#174B3E]'
                }`}
              >
                <span className="font-mono text-[11px] opacity-80">{svc.number}</span>
                <span>{svc.title[locale]}</span>
              </button>
            );
          })}
        </div>

        {/* Smooth Active Track Progress Line */}
        <div className="reveal-line h-[2px] w-full bg-[#DCE3DF] dark:bg-[#174B3E]/60 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-[#174B3E] dark:bg-[#18C6A0] transition-transform duration-300 ease-out"
            style={{
              width: '100%',
              transformOrigin: isRtl ? 'right center' : 'left center',
              transform: `scaleX(${(activeIndex + 1) / total})`,
            }}
          />
        </div>

        {/* Horizontal Interactive Panels Track — Native Scroll-Snap + Trackpad + Touch + Mouse Drag */}
        <div
          ref={trackRef}
          tabIndex={0}
          onScroll={handleTrackScroll}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={finishDrag}
          onMouseLeave={finishDrag}
          role="region"
          aria-roledescription="carousel"
          aria-label={locale === 'ar' ? 'قائمة الخدمات التفاعلية' : 'Interactive consulting services'}
          style={{ touchAction: 'pan-x pan-y' }}
          className={`reveal-item reveal-delay-3 mt-5 flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-6 pt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xl ${
            isDragging ? 'cursor-grabbing select-none' : 'snap-x snap-mandatory cursor-grab'
          }`}
        >
          {SERVICES_CATALOG.map((svc, idx) => {
            const isActive = idx === activeIndex;
            const isDataAi = svc.slug === 'data-ai';
            const serviceHref = locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`;

            return (
              <div
                key={svc.slug}
                ref={(el) => {
                  panelRefs.current[idx] = el;
                }}
                onClick={(e) => {
                  if (dragStartRef.current.moved) {
                    e.preventDefault();
                    return;
                  }
                  setActiveIndex(idx);
                }}
                className={`service-card-item group relative overflow-hidden snap-start shrink-0 w-[85vw] sm:w-[440px] lg:w-[520px] rounded-xl border p-7 sm:p-10 lg:p-11 flex flex-col justify-between min-h-[430px] sm:min-h-[470px] transition-all duration-300 ${
                  isActive ? 'service-card-active opacity-100 scale-100' : 'opacity-90 scale-[0.988] hover:opacity-100'
                } ${
                  isDataAi
                    ? 'bg-[#071C17] text-[#F4F7F5] border-[#18C6A0]/65 shadow-xl'
                    : isActive
                    ? 'bg-white dark:bg-[#0B2922] text-[#17211D] dark:text-[#F4F7F5] border-[#174B3E] dark:border-[#18C6A0] shadow-lg'
                    : 'bg-[#F7F5F0] dark:bg-[#0B2922]/75 text-[#17211D] dark:text-[#F4F7F5] border-[#DCE3DF] dark:border-[#174B3E] hover:border-[#174B3E] dark:hover:border-[#18C6A0]/65'
                }`}
              >
                {/* Top Animated Accent Line */}
                <span
                  aria-hidden="true"
                  className={`service-accent-bar absolute top-0 inset-x-0 h-[3px] ${
                    isDataAi || isActive ? 'bg-[#18C6A0]' : 'bg-[#174B3E] dark:bg-[#18C6A0]/70'
                  }`}
                />

                {/* Subtle Radial Corner Illumination on Active / Hover */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 -end-24 w-56 h-56 rounded-full transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
                  }`}
                  style={{
                    background: isDataAi
                      ? 'radial-gradient(circle, rgba(24, 198, 160, 0.16) 0%, rgba(24, 198, 160, 0) 70%)'
                      : 'radial-gradient(circle, rgba(24, 198, 160, 0.10) 0%, rgba(24, 198, 160, 0) 70%)',
                  }}
                />

                {/* Top Row: Oversized Numeral & Practice Tag */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums leading-none transition-colors duration-300 ${
                        isDataAi
                          ? 'text-[#18C6A0]'
                          : isActive
                          ? 'text-[#174B3E] dark:text-[#18C6A0]'
                          : 'text-[#697671] dark:text-[#6E857D] group-hover:text-[#174B3E] dark:group-hover:text-[#18C6A0]'
                      }`}
                    >
                      {svc.number}
                    </span>

                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded border transition-colors ${
                        isDataAi
                          ? 'border-[#18C6A0]/40 text-[#18C6A0] bg-[#18C6A0]/10'
                          : 'border-[#DCE3DF] dark:border-[#174B3E] text-[#697671] dark:text-[#A3B8B0]'
                      }`}
                    >
                      {isDataAi
                        ? locale === 'ar'
                          ? 'ممارسة محورية · الذكاء الاصطناعي'
                          : 'Flagship Practice · AI & Data'
                        : locale === 'ar'
                        ? `ممارسة استشارية ${svc.number}`
                        : `Practice Area ${svc.number}`}
                    </span>
                  </div>

                  {/* Large Display Title */}
                  <HeadingH3
                    size="lg"
                    tone={isDataAi ? 'inverted' : 'default'}
                    interactive
                    className="mb-4"
                  >
                    {svc.title[locale]}
                  </HeadingH3>

                  {/* Editorial Narrative */}
                  <p
                    className={`text-base leading-relaxed mb-8 ${
                      isDataAi ? 'text-[#A3B8B0]' : 'text-[#3E544C] dark:text-[#A3B8B0]'
                    }`}
                  >
                    {svc.shortDesc[locale]}
                  </p>

                  {/* 3 Concrete Deliverables */}
                  <ul className="space-y-2.5 mb-8">
                    {svc.capabilities.slice(0, 3).map((cap, capIdx) => (
                      <li
                        key={capIdx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          isDataAi ? 'text-[#DCE6E2]' : 'text-[#17211D] dark:text-[#DCE6E2]'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDataAi ? 'text-[#18C6A0]' : 'text-[#174B3E] dark:text-[#18C6A0]'
                          }`}
                        />
                        <span>{cap[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div
                  className={`relative z-10 pt-6 border-t flex items-center justify-between ${
                    isDataAi ? 'border-[#174B3E]' : 'border-[#DCE3DF] dark:border-[#174B3E]'
                  }`}
                >
                  <Link
                    href={serviceHref}
                    prefetch={true}
                    onClick={(e) => {
                      if (dragStartRef.current.moved) {
                        e.preventDefault();
                      }
                    }}
                    className={`btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold focus:outline-none focus-visible:underline ${
                      isDataAi
                        ? 'text-[#18C6A0] hover:text-white'
                        : 'text-[#174B3E] dark:text-[#18C6A0] hover:underline'
                    }`}
                  >
                    <span>
                      {locale === 'ar' ? 'استعراض نطاق الممارسة الكامل' : 'Explore Practice & Mandates'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="font-mono text-xs opacity-60">
                    {svc.number} / 06
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Pagination Progress Dots & Bottom Summary Bar */}
        <div className="reveal-item reveal-delay-4 mt-8 pt-8 border-t border-[#DCE3DF] dark:border-[#174B3E] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Interactive Pagination Dots */}
          <div className="flex items-center gap-2" role="group" aria-label={locale === 'ar' ? 'مؤشر شرائح الخدمات' : 'Service slide pagination'}>
            {SERVICES_CATALOG.map((svc, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => scrollToPanel(idx)}
                  aria-label={
                    locale === 'ar'
                      ? `الانتقال إلى خدمة ${svc.number}: ${svc.title.ar}`
                      : `Go to service ${svc.number}: ${svc.title.en}`
                  }
                  aria-current={isActive ? 'true' : undefined}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] ${
                    isActive
                      ? 'w-8 bg-[#174B3E] dark:bg-[#18C6A0]'
                      : 'w-2 bg-[#697671]/40 dark:bg-[#174B3E] hover:bg-[#174B3E]/70 dark:hover:bg-[#18C6A0]/70'
                  }`}
                />
              );
            })}
          </div>

          <Link
            href={servicesHref}
            className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
          >
            <span>{t.viewAllServices}</span>
            <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
          </Link>
        </div>

        <ScrollToNextButton
          targetId="data-ai"
          sectionIndex="03"
          variant="light"
          label={
            locale === 'ar'
              ? 'الانتقال إلى معمارية البيانات والذكاء الاصطناعي'
              : 'Continue to Data & AI Architecture'
          }
          className="pt-12 md:pt-14"
        />
      </div>
    </section>
  );
}
