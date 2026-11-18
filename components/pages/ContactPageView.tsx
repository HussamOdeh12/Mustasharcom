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
      <div className="border-b border-[#E3DFD7] dark:border-[#1A2E26] bg-[#F3EFEA]/70 dark:bg-[#0A1612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            locale={locale}
            items={[{ label: t.breadcrumbsContact }]}
          />
        </div>
      </div>

      {/* Consilio-style Dark Hero */}
      <section className="py-16 md:py-24 bg-[#060E0B] text-[#F4F6F5] border-b border-[#1A2E26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-semibold text-[#2DD4A4] tracking-wide block">
              {t.getInTouch} · {COMPANY_PROFILE.location.city[locale]}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6F5] leading-[1.12] text-balance">
              {locale === 'ar'
                ? 'تواصل مع فريقنا الاستشاري والتقني'
                : 'Connect With Our Advisory & Technical Leadership'}
            </h1>
            <p className="text-base sm:text-lg text-[#B8C7C0] leading-relaxed">
              {locale === 'ar'
                ? 'سواء كنتم تبحثون عن استشارات لتقنية المعلومات، أو تطوير أنظمة ذكية، أو إعداد عروض المناقصات (RFP)، نحن جاهزون للاستجابة المباشرة.'
                : 'Whether requesting an IT architecture consultation, a formal RFP tender proposal, or direct executive advisory in Abu Dhabi, our senior consultants are ready to assist.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <SectionReveal>
        <section className="py-20 bg-[#FAF8F5] dark:bg-[#07110E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Office & Direct Leadership Contacts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Registered Office Box */}
                <div className="p-7 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-5">
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    01 · {t.registeredOffice.toUpperCase()}
                  </span>

                  <div className="space-y-4 text-xs sm:text-sm text-[#2C3A34] dark:text-[#C8D4CE]">
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

                    <div className="flex items-center gap-3 pt-1 text-xs text-[#687670] dark:text-[#8FA19A]">
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
                <div className="p-7 rounded-lg bg-[#F3EFEA]/60 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] space-y-4">
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    02 · {t.directLeadership.toUpperCase()}
                  </span>

                  <div className="divide-y divide-[#E3DFD7] dark:divide-[#1A2E26]">
                    {COMPANY_PROFILE.leadership.map((person, i) => (
                      <div key={i} className="py-4 first:pt-1 last:pb-0 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-sm text-[#0B1713] dark:text-[#F4F6F5]">
                            {person.name[locale]}
                          </div>
                          <div className="text-xs text-[#485650] dark:text-[#A6B5AF] mt-0.5">
                            {person.title[locale]}
                          </div>
                        </div>
                        <a
                          href={`tel:${person.phone.replace(/\s+/g, '')}`}
                          className="font-mono tabular-nums text-[#0B1713] dark:text-[#F4F6F5] hover:text-[#6B1426] dark:hover:text-[#2DD4A4] transition-colors dir-ltr font-medium text-xs"
                        >
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unboxed Sovereign Assurance Ledger */}
                <div className="p-5 rounded-lg bg-white dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] text-xs text-[#485650] dark:text-[#A6B5AF] leading-relaxed">
                  {locale === 'ar'
                    ? 'مملوكة 100% لمواطني دولة الإمارات · رخصة أبوظبي CN-2769971 · شهادة آيزو 9001:2015 · القيمة المحلية المضافة ICV 55.03%'
                    : '100% UAE National-Owned · Abu Dhabi Licence CN-2769971 · ISO 9001:2015 · ICV 55.03%'}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="mb-5 space-y-1">
                  <span className="font-mono text-xs font-semibold text-[#6B1426] dark:text-[#2DD4A4] block">
                    03 · {locale === 'ar' ? 'نموذج الاستشارة والمناقصات' : 'FORMAL CONSULTATION & RFP'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B1713] dark:text-[#F4F6F5]">
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
