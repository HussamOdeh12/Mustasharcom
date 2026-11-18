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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#174B3E] focus:text-white focus:rounded-md text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#18C6A0]"
      >
        {t.skipToContent}
      </a>

      {/* Main Server Header Shell — Strict 3-Zone Editorial Contract */}
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-[#F7F5F0]/95 dark:bg-[#071C17]/95 backdrop-blur-md border-b border-[#DCE3DF] dark:border-[#174B3E] transition-colors"
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
                      className="nav-link-underline inline-flex items-center gap-1.5 text-sm font-medium text-[#17211D] dark:text-[#DCE6E2] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
                    >
                      <span>{item.label[locale]}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Editorial Dropdown for 6 Practice Areas */}
                    <div className="absolute top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-50 ltr:left-0 rtl:right-0">
                      <div className="w-[390px] p-3 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE3DF] dark:border-[#174B3E] shadow-2xl">
                        <div className="px-3 py-2 border-b border-[#DCE3DF] dark:border-[#174B3E] flex items-center justify-between">
                          <span className="text-xs font-mono text-[#697671] dark:text-[#A3B8B0]">
                            {locale === 'ar' ? 'الممارسات الاستشارية المعتمدة' : 'Advisory & Engineering Practices'}
                          </span>
                          <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0]">01 — 06</span>
                        </div>

                        <div className="divide-y divide-[#DCE3DF]/60 dark:divide-[#174B3E]/60 my-1">
                          {SERVICES_CATALOG.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                              className="flex items-baseline gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F7F5F0] dark:hover:bg-[#10352C] transition-colors group/item focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
                            >
                              <span className="font-mono text-xs font-bold text-[#174B3E] dark:text-[#18C6A0] shrink-0">
                                {svc.number}.
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-[#17211D] dark:text-[#F4F7F5] group-hover/item:text-[#174B3E] dark:group-hover/item:text-[#18C6A0] transition-colors truncate">
                                  {svc.title[locale]}
                                </div>
                                <div className="text-[11px] text-[#697671] dark:text-[#A3B8B0] truncate mt-0.5">
                                  {svc.shortDesc[locale]}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-[#DCE3DF] dark:border-[#174B3E]">
                          <Link
                            href={item.href[locale]}
                            className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-[#174B3E] dark:text-[#18C6A0] hover:underline whitespace-nowrap"
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
                  className="nav-link-underline text-sm font-medium text-[#17211D] dark:text-[#DCE6E2] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-xs"
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
              className="btn-slide-trigger hidden sm:inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-md bg-[#071C17] hover:bg-[#174B3E] dark:bg-[#18C6A0] dark:hover:bg-[#12A989] text-white dark:text-[#071C17] text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] cursor-pointer whitespace-nowrap shrink-0"
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
