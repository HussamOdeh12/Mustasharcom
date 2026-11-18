import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ContactForm from '../forms/ContactForm';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactPageViewProps {
  locale: Locale;
}

export default function ContactPageView({ locale }: ContactPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Breadcrumbs */}
      <div className="border-b border-[#D8E2E2] dark:border-[#0E2F33] bg-[#EAEFEF] dark:bg-[#021214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsContact }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-20 md:py-28 bg-[#000D0E] text-[#F2F6F6] border-b border-[#0E2F33] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 25%, rgba(45, 212, 164, 0.13) 0%, rgba(0, 13, 14, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2DD4A4] block hero-stagger-1">
              {t.getInTouch} · {COMPANY_PROFILE.location.city[locale]}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F2F6F6] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'تواصل مع فريقنا الاستشاري والتقني'
                : 'Connect With Our Advisory & Technical Leadership'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B4C8CA] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'سواء كنتم تبحثون عن استشارات لتقنية المعلومات، أو تطوير أنظمة ذكية، أو إعداد عروض المناقصات (RFP)، نحن جاهزون للاستجابة المباشرة.'
                : 'Whether requesting an IT architecture consultation, a formal RFP tender proposal, or direct executive advisory in Abu Dhabi, our senior consultants are ready to assist.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <SectionReveal>
        <section className="py-24 bg-[#F5F7F7] dark:bg-[#000D0E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Office & Direct Leadership Contacts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Registered Office Box */}
                <div className="p-8 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                    01 / {t.registeredOffice.toUpperCase()}
                  </span>

                  <div className="space-y-4 text-sm text-[#001517] dark:text-[#D8E6E7]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#6B1426] dark:text-[#2DD4A4] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        {COMPANY_PROFILE.office.address[locale]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#6B1426] dark:text-[#2DD4A4] shrink-0" />
                      <a
                        href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                        className="hover:text-[#6B1426] dark:hover:text-[#2DD4A4] font-mono tabular-nums dir-ltr"
                      >
                        {COMPANY_PROFILE.office.telFax}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#6B1426] dark:text-[#2DD4A4] shrink-0" />
                      <a
                        href={`mailto:${COMPANY_PROFILE.office.email}`}
                        className="hover:text-[#6B1426] dark:hover:text-[#2DD4A4] font-medium"
                      >
                        {COMPANY_PROFILE.office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-2 text-xs text-[#647A7C] dark:text-[#6C8587]">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>
                        {locale === 'ar'
                          ? 'الإثنين – الجمعة: 8:00 صباحاً – 5:00 مساءً (توقيت الإمارات)'
                          : 'Monday – Friday: 08:00 AM – 05:00 PM (GST)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Leadership List */}
                <div className="p-8 rounded-xl bg-white dark:bg-[#04191B] border border-[#D8E2E2] dark:border-[#0E2F33] space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                    02 / {t.directLeadership.toUpperCase()}
                  </span>

                  <div className="divide-y divide-[#D8E2E2] dark:divide-[#0E2F33]">
                    {COMPANY_PROFILE.leadership.map((person, i) => (
                      <div key={i} className="py-4 first:pt-1 last:pb-0 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-sm text-[#001517] dark:text-[#F2F6F6]">
                            {person.name[locale]}
                          </div>
                          <div className="text-xs text-[#3E5456] dark:text-[#9CB2B4] mt-0.5">
                            {person.title[locale]}
                          </div>
                        </div>
                        <a
                          href={`tel:${person.phone.replace(/\s+/g, '')}`}
                          className="font-mono tabular-nums text-[#001517] dark:text-[#F2F6F6] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors dir-ltr font-semibold text-xs"
                        >
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sovereign Assurance Ledger */}
                <div className="p-6 rounded-xl bg-[#001517] text-[#B4C8CA] border border-[#123A3F] text-xs font-mono leading-relaxed">
                  {locale === 'ar'
                    ? 'مملوكة 100% لمواطني دولة الإمارات · رخصة أبوظبي CN-2769971 · شهادة آيزو 9001:2015 · القيمة المحلية المضافة ICV 55.03%'
                    : '100% UAE National-Owned · Abu Dhabi Licence CN-2769971 · ISO 9001:2015 · ICV 55.03%'}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="mb-6 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B1426] dark:text-[#2DD4A4] block">
                    03 / {locale === 'ar' ? 'نموذج الاستشارة والمناقصات' : 'FORMAL CONSULTATION & RFP'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#001517] dark:text-[#F2F6F6] tracking-tight">
                    {locale === 'ar'
                      ? 'أرسل تفاصيل مشروعك إلى خبرائنا'
                      : 'Submit Your Project Scope to Our Specialists'}
                  </h2>
                </div>

                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </main>
  );
}
