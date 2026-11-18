'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Locale, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ServicesCarouselProps {
  locale: Locale;
}

export default function ServicesCarousel({ locale }: ServicesCarouselProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const PrevIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = SERVICES_CATALOG.length;

  const scrollToPanel = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    setActiveIndex(clamped);
    const panel = panelRefs.current[clamped];
    const track = trackRef.current;
    if (panel && track) {
      const trackRect = track.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const offset = panelRect.left - trackRect.left + track.scrollLeft;
      track.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  }, [total]);

  const handlePrev = () => {
    scrollToPanel(activeIndex > 0 ? activeIndex - 1 : total - 1);
  };

  const handleNext = () => {
    scrollToPanel(activeIndex < total - 1 ? activeIndex + 1 : 0);
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
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left
        isRtl ? handlePrev() : handleNext();
      } else {
        // Swiped right
        isRtl ? handleNext() : handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const servicesHref = locale === 'ar' ? '/ar/services' : '/services';

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#EAEFEF] dark:bg-[#021214] border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-labelledby="services-carousel-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Header & Interactive Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 md:pb-16 border-b border-[#D8E2E2] dark:border-[#0E2F33]">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
              02 / {locale === 'ar' ? 'الممارسات الاستشارية والحلول التقنية' : 'Our Services & Consulting Practices'}
            </span>
            <h2
              id="services-carousel-heading"
              className="font-bold text-[#001517] dark:text-[#F2F6F6] tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {locale === 'ar'
                ? 'خبرات استشارية وهندسية متكاملة لكل مرحلة من مراحل التحول الرقمي'
                : 'Expert Guidance & Engineering For Every Stage of Institutional Growth'}
            </h2>
          </div>

          {/* Interactive Controls Cluster: Progress Counter + Prev/Next Buttons + View All */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#001517] dark:text-[#F2F6F6] tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="w-8 h-[1px] bg-[#9CB2B4] dark:bg-[#1E454A]" />
              <span className="font-mono text-sm text-[#647A7C] dark:text-[#6C8587] tabular-nums">
                {String(total).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2.5" role="group" aria-label={locale === 'ar' ? 'التحكم بعرض الخدمات' : 'Service carousel navigation'}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label={locale === 'ar' ? 'الخدمة السابقة' : 'Previous service'}
                className="w-12 h-12 rounded-full border border-[#C5D3D3] dark:border-[#153C40] bg-white dark:bg-[#04191B] hover:bg-[#001517] hover:text-white dark:hover:bg-[#2DD4A4] dark:hover:text-[#001517] text-[#001517] dark:text-[#F2F6F6] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4]"
              >
                <PrevIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={locale === 'ar' ? 'الخدمة التالية' : 'Next service'}
                className="w-12 h-12 rounded-full border border-[#C5D3D3] dark:border-[#153C40] bg-white dark:bg-[#04191B] hover:bg-[#001517] hover:text-white dark:hover:bg-[#2DD4A4] dark:hover:text-[#001517] text-[#001517] dark:text-[#F2F6F6] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4]"
              >
                <NextIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Direct Practice Selector Pills / Index Strip (Keyboard Accessible) */}
        <div
          className="pt-8 pb-4 flex items-center gap-2 overflow-x-auto no-scrollbar"
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
                className={`px-4 py-2.5 rounded-md text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#001517] text-[#F2F6F6] dark:bg-[#2DD4A4] dark:text-[#001517] font-semibold shadow-sm'
                    : 'bg-white/70 dark:bg-[#04191B] text-[#3E5456] dark:text-[#9CB2B4] hover:text-[#001517] dark:hover:text-[#F2F6F6] border border-[#D8E2E2] dark:border-[#0E2F33]'
                }`}
              >
                <span className="font-mono text-[11px] opacity-80">{svc.number}</span>
                <span>{svc.title[locale]}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Interactive Panels Track */}
        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label={locale === 'ar' ? 'قائمة الخدمات التفاعلية' : 'Interactive consulting services'}
          className="mt-6 flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2 focus:outline-none"
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
                onClick={() => setActiveIndex(idx)}
                className={`snap-start shrink-0 w-[88vw] sm:w-[460px] lg:w-[540px] rounded-xl border p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] transition-all duration-300 ${
                  isDataAi
                    ? 'bg-[#001517] text-[#F2F6F6] border-[#2DD4A4]/60 shadow-xl'
                    : isActive
                    ? 'bg-white dark:bg-[#04191B] text-[#001517] dark:text-[#F2F6F6] border-[#6B1426] dark:border-[#2DD4A4] shadow-lg'
                    : 'bg-[#F5F7F7]/90 dark:bg-[#04191B]/70 text-[#001517] dark:text-[#F2F6F6] border-[#D8E2E2] dark:border-[#0E2F33] hover:border-[#6B1426]/60 dark:hover:border-[#2DD4A4]/50'
                }`}
              >
                {/* Top Row: Oversized Numeral & Practice Tag */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums leading-none ${
                        isDataAi
                          ? 'text-[#2DD4A4]'
                          : isActive
                          ? 'text-[#6B1426] dark:text-[#2DD4A4]'
                          : 'text-[#647A7C]/60 dark:text-[#6C8587]'
                      }`}
                    >
                      {svc.number}
                    </span>

                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded border ${
                        isDataAi
                          ? 'border-[#2DD4A4]/40 text-[#2DD4A4] bg-[#2DD4A4]/10'
                          : 'border-[#D8E2E2] dark:border-[#0E2F33] text-[#647A7C] dark:text-[#9CB2B4]'
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
                  <h3
                    className={`text-2xl sm:text-3xl font-bold tracking-tight leading-[1.18] mb-4 ${
                      isDataAi ? 'text-[#F2F6F6]' : 'text-[#001517] dark:text-[#F2F6F6]'
                    }`}
                  >
                    {svc.title[locale]}
                  </h3>

                  {/* Editorial Narrative */}
                  <p
                    className={`text-base leading-relaxed mb-8 ${
                      isDataAi ? 'text-[#B4C8CA]' : 'text-[#3E5456] dark:text-[#9CB2B4]'
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
                          isDataAi ? 'text-[#D5E4E5]' : 'text-[#2C3E40] dark:text-[#B4C8CA]'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDataAi ? 'text-[#2DD4A4]' : 'text-[#6B1426] dark:text-[#2DD4A4]'
                          }`}
                        />
                        <span>{cap[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div
                  className={`pt-6 border-t flex items-center justify-between ${
                    isDataAi ? 'border-[#123A3F]' : 'border-[#D8E2E2] dark:border-[#0E2F33]'
                  }`}
                >
                  <Link
                    href={serviceHref}
                    prefetch={true}
                    className={`btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold ${
                      isDataAi
                        ? 'text-[#2DD4A4] hover:text-white'
                        : 'text-[#6B1426] dark:text-[#2DD4A4] hover:underline'
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

        {/* Bottom Summary & View All Services Bar */}
        <div className="mt-8 pt-8 border-t border-[#D8E2E2] dark:border-[#0E2F33] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#3E5456] dark:text-[#9CB2B4]">
            {locale === 'ar'
              ? 'جميع الممارسات الست مرخصة رسمياً ضمن رخصة أبوظبي الاقتصادية CN-2769971 ومعتمدة بشهادة ISO 9001:2015.'
              : 'Helping government authorities and enterprises grow with clarity, ISO 9001:2015 governance, and measurable outcomes.'}
          </p>

          <Link
            href={servicesHref}
            className="btn-slide-trigger inline-flex items-center gap-2 text-sm font-semibold text-[#001517] dark:text-[#2DD4A4] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t.viewAllServices}</span>
            <ArrowIcon className="w-4 h-4 btn-slide-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
