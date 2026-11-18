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
      className="bg-[#051410] text-[#D8E6E2] border-t border-[#18382F] transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 lg:pt-24 lg:pb-16">
        {/* Top Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#18382F]">
          {/* Col 1: Brand Identity & Sovereign Ledger */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <Logo locale={locale} tone="light" />
              <p className="text-xs font-mono font-semibold text-[#18C6A0] uppercase tracking-wider">
                {COMPANY_PROFILE.name[locale]}
              </p>
              <p className="text-sm text-[#A5B8B1] leading-relaxed max-w-sm">
                {COMPANY_PROFILE.tagline[locale]}
              </p>
            </div>

            {/* Unboxed Editorial Accreditations Ledger */}
            <div className="pt-5 border-t border-[#18382F] space-y-2 text-xs text-[#A5B8B1]">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#F4F7F5] font-medium">
                <span>{COMPANY_PROFILE.ownership[locale]}</span>
                <span aria-hidden="true" className="text-[#18382F]">·</span>
                <Link href={complianceHref} className="hover:text-[#18C6A0] transition-colors font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm">
                  ICV {COMPANY_PROFILE.certifications.icv.score}
                </Link>
                <span aria-hidden="true" className="text-[#18382F]">·</span>
                <Link href={complianceHref} className="hover:text-[#18C6A0] transition-colors font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm">
                  {COMPANY_PROFILE.certifications.iso.standard}
                </Link>
              </div>
              <p className="font-mono text-[11px] text-[#7E968E]">
                ADRA Licence {COMPANY_PROFILE.licence.number} · {locale === 'ar' ? 'صالحة حتى 17 أبريل 2031' : 'Valid until 17 April 2031'}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F4F7F5]">
              {locale === 'ar' ? 'التنقل الرئيسي' : 'Directory'}
            </span>
            <ul className="flex flex-col gap-3 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href[locale]}
                    prefetch={true}
                    className="nav-link-underline text-[#A5B8B1] hover:text-[#18C6A0] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                  >
                    <span>{item.label[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Six Consulting Practices */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F4F7F5]">
              {locale === 'ar' ? 'الممارسات الاستشارية' : 'Practice Areas'}
            </span>
            <ul className="flex flex-col gap-3 text-sm">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                    prefetch={true}
                    className="group flex items-baseline gap-2.5 text-[#A5B8B1] hover:text-[#F4F7F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                  >
                    <span className="font-mono text-xs text-[#18C6A0] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">/{svc.number}</span>
                    <span className="line-clamp-1 group-hover:text-[#18C6A0] transition-colors">{svc.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Abu Dhabi Headquarters */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F4F7F5]">
              {t.registeredOffice}
            </span>
            <div className="flex flex-col gap-4 text-xs leading-relaxed text-[#A5B8B1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#18C6A0] shrink-0 mt-0.5" />
                <span>{COMPANY_PROFILE.office.address[locale]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#18C6A0] shrink-0" />
                <a
                  href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                  className="hover:text-[#18C6A0] transition-colors dir-ltr font-mono tabular-nums focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                >
                  {COMPANY_PROFILE.office.telFax}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#18C6A0] shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.office.email}`}
                  className="group hover:text-[#18C6A0] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                >
                  <span>{COMPANY_PROFILE.office.email}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="text-[11px] font-mono text-[#7E968E] pt-1">
                <span>P.O. Box {COMPANY_PROFILE.office.poBox} · {COMPANY_PROFILE.location.city[locale]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Governance Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E968E]">
          <p>
            © {new Date().getFullYear()} {COMPANY_PROFILE.name[locale]}. {t.rightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={privacyHref} prefetch={true} className="nav-link-underline hover:text-[#18C6A0] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm">
              {t.privacyPolicy}
            </Link>
            <Link href={termsHref} prefetch={true} className="nav-link-underline hover:text-[#18C6A0] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm">
              {t.termsOfService}
            </Link>
            <Link href={complianceHref} prefetch={true} className="nav-link-underline hover:text-[#18C6A0] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm">
              {t.qualityCompliance}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
