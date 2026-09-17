import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ContactForm from '../forms/ContactForm';
import SectionReveal from '../ui/SectionReveal';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import { MapPin, Phone, Mail, Clock, UserCheck, ShieldCheck } from 'lucide-react';

interface ContactPageViewProps {
  locale: Locale;
}

export default function ContactPageView({ locale }: ContactPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: t.breadcrumbsContact }]}
            />
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-14 md:py-18 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] mb-2 block">
                {t.getInTouch}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                {locale === 'ar'
                  ? 'تواصل مع فريقنا الاستشاري والتقني'
                  : 'Connect With Our Advisory & Technical Leadership'}
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {locale === 'ar'
                  ? 'سواء كنتم تبحثون عن استشارات لتقنية المعلومات، أو تطوير أنظمة ذكية، أو إعداد عروض المناقصات (RFP)، نحن جاهزون للاستجابة المباشرة.'
                  : 'Whether requesting an IT architecture consultation, an RFP proposal, or direct executive advisory in Abu Dhabi, our senior consultants are available to assist.'}
              </p>
            </div>
          </div>
        </section>

        {/* Main 2-Column Content */}
        <SectionReveal>
          <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Office & Direct Leadership Contacts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Registered Office Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] block">
                    {t.registeredOffice}
                  </span>

                  <div className="space-y-3.5 text-xs text-zinc-600 dark:text-zinc-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        {COMPANY_PROFILE.office.address[locale]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0" />
                      <a
                        href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                        className="hover:text-[#6B1426] dark:hover:text-white font-mono dir-ltr"
                      >
                        {COMPANY_PROFILE.office.telFax}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0" />
                      <a
                        href={`mailto:${COMPANY_PROFILE.office.email}`}
                        className="hover:text-[#6B1426] dark:hover:text-white font-medium"
                      >
                        {COMPANY_PROFILE.office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 pt-1 text-zinc-600 dark:text-zinc-400">
                      <Clock className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
                      <span>
                        {locale === 'ar'
                          ? 'الإثنين – الجمعة: 8:00 صباحاً – 5:00 مساءً (توقيت الإمارات)'
                          : 'Monday – Friday: 08:00 AM – 05:00 PM (GST)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Leadership List */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block">
                    {t.directLeadership}
                  </span>

                  <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {COMPANY_PROFILE.leadership.map((person, i) => (
                      <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-zinc-100">
                            {person.name[locale]}
                          </div>
                          <div className="text-[11px] text-[#6B1426] dark:text-[#F38C9C]">
                            {person.title[locale]}
                          </div>
                        </div>
                        <a
                          href={`tel:${person.phone.replace(/\s+/g, '')}`}
                          className="font-mono text-zinc-700 dark:text-zinc-300 hover:text-[#6B1426] dark:hover:text-white transition-colors dir-ltr font-medium text-[11px]"
                        >
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sovereign Assurance Badge */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/80 flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <ShieldCheck className="w-5 h-5 text-[#008751] shrink-0" />
                  <span>
                    {locale === 'ar'
                      ? 'مملوكة 100% لمواطني دولة الإمارات · رخصة أبوظبي CN-2769971 · شهادة آيزو 9001:2015'
                      : '100% UAE National Owned · Abu Dhabi Licence CN-2769971 · ISO 9001:2015'}
                  </span>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] block mb-1">
                    {locale === 'ar' ? 'طلب استشارة أو كراسة شروط (RFP)' : 'Formal Consultation & RFP Submission'}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
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
