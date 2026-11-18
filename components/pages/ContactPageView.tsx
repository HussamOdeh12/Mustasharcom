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
      <div className="border-b border-[#DCE2DE] dark:border-[#18382F] bg-[#EFECE5] dark:bg-[#051410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsContact }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-20 md:py-28 bg-[#071C17] text-[#F4F7F5] border-b border-[#18382F] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 25%, rgba(24, 198, 160, 0.14) 0%, rgba(7, 28, 23, 0) 75%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#18C6A0] block hero-stagger-1">
              {t.getInTouch} · {COMPANY_PROFILE.location.city[locale]}
            </span>
            <h1
              className="font-bold tracking-[-0.035em] text-[#F4F7F5] leading-[1.06] text-balance hero-stagger-2"
              style={{ fontSize: 'clamp(2.35rem, 5vw, 4.5rem)' }}
            >
              {locale === 'ar'
                ? 'تواصل مع فريقنا الاستشاري والتقني'
                : 'Connect With Our Advisory & Technical Leadership'}
            </h1>
            <p className="text-lg sm:text-xl text-[#B8C7C2] leading-relaxed max-w-3xl hero-stagger-3">
              {locale === 'ar'
                ? 'سواء كنتم تبحثون عن استشارات لتقنية المعلومات، أو تطوير أنظمة ذكية، أو إعداد عروض المناقصات (RFP)، نحن جاهزون للاستجابة المباشرة.'
                : 'Whether requesting an IT architecture consultation, a formal RFP tender proposal, or direct executive advisory in Abu Dhabi, our senior consultants are ready to assist.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <SectionReveal>
        <section className="py-24 bg-[#F7F5F0] dark:bg-[#071C17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Office & Direct Leadership Contacts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Registered Office Box */}
                <div className="reveal-item reveal-delay-1 p-8 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] space-y-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                    01 / {t.registeredOffice.toUpperCase()}
                  </span>

                  <div className="space-y-4 text-sm text-[#17211D] dark:text-[#D8E6E2]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#174B3E] dark:text-[#18C6A0] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        {COMPANY_PROFILE.office.address[locale]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#174B3E] dark:text-[#18C6A0] shrink-0" />
                      <a
                        href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                        className="hover:text-[#174B3E] dark:hover:text-[#18C6A0] font-mono tabular-nums dir-ltr focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                      >
                        {COMPANY_PROFILE.office.telFax}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#174B3E] dark:text-[#18C6A0] shrink-0" />
                      <a
                        href={`mailto:${COMPANY_PROFILE.office.email}`}
                        className="hover:text-[#174B3E] dark:hover:text-[#18C6A0] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                      >
                        {COMPANY_PROFILE.office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-2 text-xs text-[#697671] dark:text-[#7E968E]">
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
                <div className="reveal-item reveal-delay-2 p-8 rounded-xl bg-white dark:bg-[#0B2922] border border-[#DCE2DE] dark:border-[#18382F] space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                    02 / {t.directLeadership.toUpperCase()}
                  </span>

                  <div className="divide-y divide-[#DCE2DE] dark:divide-[#18382F]">
                    {COMPANY_PROFILE.leadership.map((person, i) => (
                      <div key={i} className="py-4 first:pt-1 last:pb-0 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-sm text-[#17211D] dark:text-[#F4F7F5]">
                            {person.name[locale]}
                          </div>
                          <div className="text-xs text-[#43524C] dark:text-[#A5B8B1] mt-0.5">
                            {person.title[locale]}
                          </div>
                        </div>
                        <a
                          href={`tel:${person.phone.replace(/\s+/g, '')}`}
                          className="font-mono tabular-nums text-[#17211D] dark:text-[#F4F7F5] hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors dir-ltr font-semibold text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] rounded-sm"
                        >
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sovereign Assurance Ledger */}
                <div className="reveal-item reveal-delay-3 p-6 rounded-xl bg-[#071C17] dark:bg-[#0B2922] text-[#B8C7C2] border border-[#174B3E] text-xs font-mono leading-relaxed">
                  {locale === 'ar'
                    ? 'مملوكة 100% لمواطني دولة الإمارات · رخصة أبوظبي CN-2769971 · شهادة آيزو 9001:2015 · القيمة المحلية المضافة ICV 55.03%'
                    : '100% UAE National-Owned · Abu Dhabi Licence CN-2769971 · ISO 9001:2015 · ICV 55.03%'}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 reveal-item reveal-delay-2">
                <div className="mb-6 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174B3E] dark:text-[#18C6A0] block">
                    03 / {locale === 'ar' ? 'نموذج الاستشارة والمناقصات' : 'FORMAL CONSULTATION & RFP'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17211D] dark:text-[#F4F7F5] tracking-tight">
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
