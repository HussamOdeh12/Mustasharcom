import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import { Locale, COMPANY_PROFILE, SERVICES_CATALOG, NAVIGATION_ITEMS } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  const privacyHref = locale === 'ar' ? '/ar/privacy' : '/privacy';
  const termsHref = locale === 'ar' ? '/ar/terms' : '/terms';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  return (
    <footer
      className="bg-[#050D0A] text-[#C8D4CE] border-t border-[#1A2E26] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-14">
        {/* Top Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[#1A2E26]">
          {/* Col 1: Brand Identity & Sovereign Ledger */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <Logo locale={locale} tone="light" />
              <p className="text-xs font-medium text-[#2DD4A4] tracking-wide">
                {COMPANY_PROFILE.name[locale]}
              </p>
              <p className="text-sm text-[#8FA19A] leading-relaxed max-w-sm">
                {COMPANY_PROFILE.tagline[locale]}
              </p>
            </div>

            {/* Unboxed Editorial Accreditations Ledger */}
            <div className="pt-4 border-t border-[#1A2E26] space-y-2 text-xs text-[#8FA19A]">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#E6ECE9] font-medium">
                <span>{COMPANY_PROFILE.ownership[locale]}</span>
                <span aria-hidden="true" className="text-[#485650]">·</span>
                <Link href={complianceHref} className="hover:text-[#2DD4A4] transition-colors font-mono">
                  ICV {COMPANY_PROFILE.certifications.icv.score}
                </Link>
                <span aria-hidden="true" className="text-[#485650]">·</span>
                <Link href={complianceHref} className="hover:text-[#2DD4A4] transition-colors font-mono">
                  {COMPANY_PROFILE.certifications.iso.standard}
                </Link>
              </div>
              <p className="font-mono text-[11px] text-[#768780]">
                ADRA Licence {COMPANY_PROFILE.licence.number} · {locale === 'ar' ? 'صالحة حتى 17 أبريل 2031' : 'Valid until 17 April 2031'}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#F4F6F5] tracking-wide">
              {locale === 'ar' ? 'التنقل الرئيسي' : 'Directory'}
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href[locale]}
                    prefetch={true}
                    className="text-[#8FA19A] hover:text-[#2DD4A4] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Six Consulting Practices */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#F4F6F5] tracking-wide">
              {locale === 'ar' ? 'الممارسات الاستشارية' : 'Practice Areas'}
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                    prefetch={true}
                    className="group flex items-baseline gap-2 text-[#8FA19A] hover:text-[#F4F6F5] transition-colors"
                  >
                    <span className="font-mono text-[11px] text-[#2DD4A4] shrink-0">{svc.number}.</span>
                    <span className="line-clamp-1">{svc.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Abu Dhabi Headquarters */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#F4F6F5] tracking-wide">
              {t.registeredOffice}
            </span>
            <div className="flex flex-col gap-3.5 text-xs leading-relaxed text-[#8FA19A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2DD4A4] shrink-0 mt-0.5" />
                <span>{COMPANY_PROFILE.office.address[locale]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2DD4A4] shrink-0" />
                <a
                  href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                  className="hover:text-[#F4F6F5] transition-colors dir-ltr font-mono tabular-nums"
                >
                  {COMPANY_PROFILE.office.telFax}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2DD4A4] shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.office.email}`}
                  className="hover:text-[#F4F6F5] transition-colors inline-flex items-center gap-1"
                >
                  <span>{COMPANY_PROFILE.office.email}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
              <div className="text-[11px] font-mono text-[#768780] pt-1">
                <span>P.O. Box {COMPANY_PROFILE.office.poBox} · {COMPANY_PROFILE.location.city[locale]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Governance Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#768780]">
          <p>
            © {new Date().getFullYear()} {COMPANY_PROFILE.name[locale]}. {t.rightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={privacyHref} prefetch={true} className="hover:text-[#F4F6F5] transition-colors whitespace-nowrap">
              {t.privacyPolicy}
            </Link>
            <Link href={termsHref} prefetch={true} className="hover:text-[#F4F6F5] transition-colors whitespace-nowrap">
              {t.termsOfService}
            </Link>
            <Link href={complianceHref} prefetch={true} className="hover:text-[#F4F6F5] transition-colors whitespace-nowrap">
              {t.qualityCompliance}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
