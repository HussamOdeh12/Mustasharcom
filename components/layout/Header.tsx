'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Shield,
  Briefcase,
  BarChart3,
  Layers,
  ShieldCheck,
  Wrench,
  Headset,
} from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import GlobalSearch from '../ui/GlobalSearch';
import { Locale, NAVIGATION_ITEMS, SERVICES_CATALOG, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'it-consulting': <Briefcase className="w-4 h-4 text-[#6B1426] dark:text-[#E63956]" />,
  'data-ai': <BarChart3 className="w-4 h-4 text-[#008751] dark:text-[#34D399]" />,
  'systems-applications': <Layers className="w-4 h-4 text-[#6B1426] dark:text-[#E63956]" />,
  'infrastructure-security': <ShieldCheck className="w-4 h-4 text-[#008751] dark:text-[#34D399]" />,
  'technical-support': <Wrench className="w-4 h-4 text-[#6B1426] dark:text-[#E63956]" />,
  'contact-center': <Headset className="w-4 h-4 text-[#008751] dark:text-[#34D399]" />,
};

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' || path === '/ar') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6B1426] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-xs font-semibold"
      >
        {locale === 'ar' ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 dark:border-zinc-800/80 py-2.5'
          : 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-800/50 py-3.5'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Logo locale={locale} />
            
            {/* National Ownership Badge (Desktop Ultra-Wide Only) */}
            <div className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/50 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008751] animate-pulse shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_PROFILE.ownership[locale]}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0" aria-label="Main Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const href = item.href[locale];
              const active = isActive(href);

              if (item.key === 'services') {
                return (
                  <div
                    key={item.key}
                    className="relative shrink-0"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={href}
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'text-[#6B1426] dark:text-[#F38C9C] font-semibold bg-zinc-100/80 dark:bg-zinc-800/60'
                          : 'text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span className="whitespace-nowrap">{item.label[locale]}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div
                      className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} pt-2 w-[480px] transition-all duration-200 ${
                        servicesDropdownOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl p-3 grid grid-cols-1 gap-1">
                        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#E88C9C] border-b border-zinc-100 dark:border-zinc-800/60 mb-1 flex items-center justify-between">
                          <span className="whitespace-nowrap">{t.exploreServices}</span>
                          <Link
                            href={href}
                            prefetch={true}
                            className="text-[11px] font-medium text-zinc-500 hover:text-[#6B1426] dark:hover:text-zinc-300 whitespace-nowrap"
                          >
                            {t.viewAllServices} →
                          </Link>
                        </div>
                        {SERVICES_CATALOG.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                            prefetch={true}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/70 transition-colors group"
                          >
                            <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                              {serviceIcons[svc.slug] || <Briefcase className="w-4 h-4 text-[#6B1426]" />}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-[#6B1426] dark:group-hover:text-[#F38C9C] transition-colors whitespace-nowrap">
                                {svc.title[locale]}
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                {svc.shortDesc[locale]}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={href}
                  prefetch={true}
                  className={`inline-flex items-center px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-[#6B1426] dark:text-[#F38C9C] font-semibold bg-zinc-100/80 dark:bg-zinc-800/60'
                      : 'text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label[locale]}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Global Search */}
            <GlobalSearch locale={locale} variant="header" />

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />

            {/* Theme Toggle */}
            <ThemeToggle locale={locale} />

            {/* CTA Button */}
            <Link
              href={contactHref}
              prefetch={true}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-xs xl:text-sm font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">{t.requestRfp}</span>
              <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-zinc-200 dark:border-zinc-800 px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {/* UAE National Pill (Mobile) */}
            <div className="flex items-center gap-2 p-2.5 mb-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#008751]" />
              <span>{COMPANY_PROFILE.ownership[locale]}</span>
              <span className="text-zinc-400">·</span>
              <span>{COMPANY_PROFILE.location.city[locale]}</span>
            </div>

            {/* Mobile Search Trigger */}
            <GlobalSearch locale={locale} variant="mobile" className="mb-2" />

            {NAVIGATION_ITEMS.map((item) => {
              const href = item.href[locale];
              const active = isActive(href);

              if (item.key === 'services') {
                return (
                  <div key={item.key} className="flex flex-col gap-1 py-1">
                    <Link
                      href={href}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                        active ? 'text-[#6B1426] dark:text-[#F38C9C] bg-zinc-100 dark:bg-zinc-800/80' : 'text-zinc-900 dark:text-zinc-100'
                      }`}
                    >
                      {item.label[locale]}
                    </Link>
                    <div className="pl-4 pr-4 flex flex-col gap-1 border-l-2 border-zinc-200 dark:border-zinc-800 rtl:border-l-0 rtl:border-r-2 my-1">
                      {SERVICES_CATALOG.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                          prefetch={true}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-[#6B1426] dark:hover:text-white"
                        >
                          {svc.title[locale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-[#6B1426] dark:text-[#F38C9C] font-semibold bg-zinc-100 dark:bg-zinc-800/80'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <Link
                href={contactHref}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#6B1426] text-white text-sm font-semibold shadow-sm"
              >
                <span>{t.requestRfp}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
