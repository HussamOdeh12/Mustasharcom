import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import Logo from '../ui/Logo';
import GlobalSearch from '../ui/GlobalSearch';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { Locale, NAVIGATION_ITEMS, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6B1426] focus:text-white focus:rounded-md text-xs font-semibold focus:outline-none"
      >
        {t.skipToContent}
      </a>

      {/* Main Server Header Shell — Strict 3-Zone Editorial Contract */}
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-[#F5F7F7]/95 dark:bg-[#000D0E]/95 backdrop-blur-md border-b border-[#D8E2E2] dark:border-[#0E2F33] transition-colors"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[76px] flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <div className="shrink-0">
            <Logo locale={locale} />
          </div>

          {/* Zone 2: Clean Typographic Navigation Links (Server HTML + CSS Dropdown) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Main Navigation"
          >
            {NAVIGATION_ITEMS.map((item) => {
              if (item.key === 'services') {
                return (
                  <div key={item.key} className="relative group py-2">
                    <Link
                      href={item.href[locale]}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#001517] dark:text-[#D8E6E7] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{item.label[locale]}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Editorial Dropdown for 6 Practice Areas */}
                    <div className="absolute top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-50 ltr:left-0 rtl:right-0">
                      <div className="w-[390px] p-3 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] shadow-2xl">
                        <div className="px-3 py-2 border-b border-[#D8E2E2] dark:border-[#0E2F33] flex items-center justify-between">
                          <span className="text-xs font-mono text-[#647A7C] dark:text-[#9CB2B4]">
                            {locale === 'ar' ? 'الممارسات الاستشارية المعتمدة' : 'Advisory & Engineering Practices'}
                          </span>
                          <span className="font-mono text-xs text-[#6B1426] dark:text-[#2DD4A4]">01 — 06</span>
                        </div>

                        <div className="divide-y divide-[#D8E2E2]/60 dark:divide-[#0E2F33]/60 my-1">
                          {SERVICES_CATALOG.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                              className="flex items-baseline gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F5F7F7] dark:hover:bg-[#072528] transition-colors group/item"
                            >
                              <span className="font-mono text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                                {svc.number}.
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-[#001517] dark:text-[#F2F6F6] group-hover/item:text-[#6B1426] dark:group-hover/item:text-[#2DD4A4] transition-colors truncate">
                                  {svc.title[locale]}
                                </div>
                                <div className="text-[11px] text-[#647A7C] dark:text-[#9CB2B4] truncate mt-0.5">
                                  {svc.shortDesc[locale]}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-[#D8E2E2] dark:border-[#0E2F33]">
                          <Link
                            href={item.href[locale]}
                            className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] hover:underline whitespace-nowrap"
                          >
                            <span>{t.viewAllServices}</span>
                            <ArrowIcon className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href[locale]}
                  className="text-sm font-medium text-[#001517] dark:text-[#D8E6E7] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors whitespace-nowrap shrink-0"
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Utilities & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <GlobalSearch locale={locale} variant="header" />
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle locale={locale} />

            <Link
              href={contactHref}
              className="btn-slide-trigger hidden sm:inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-md bg-[#001517] hover:bg-[#6B1426] dark:bg-[#2DD4A4] dark:hover:bg-[#24B88D] text-white dark:text-[#001517] text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4A4] cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{t.requestRfp}</span>
              <ArrowIcon className="w-3.5 h-3.5 shrink-0 btn-slide-arrow" />
            </Link>

            <MobileMenu locale={locale} />
          </div>
        </div>
      </header>
    </>
  );
}
