'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Locale, SERVICES_CATALOG } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface ContactFormProps {
  locale: Locale;
  preselectedService?: string;
}

export default function ContactForm({ locale, preselectedService }: ContactFormProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    entity: '',
    email: '',
    phone: '',
    service: preselectedService || 'it-consulting',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          entity: '',
          email: '',
          phone: '',
          service: preselectedService || 'it-consulting',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || t.errorMsg);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.errorMsg);
    }
  };

  return (
    <div
      className="bg-white dark:bg-[#0C1A15] rounded-lg p-6 sm:p-8 lg:p-10 border border-[#E3DFD7] dark:border-[#1A2E26]"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-8 px-4">
          <div className="w-12 h-12 rounded-full bg-[#007A4D]/10 dark:bg-[#2DD4A4]/15 text-[#007A4D] dark:text-[#2DD4A4] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#0B1713] dark:text-[#F4F6F5] mb-2">
            {t.successTitle}
          </h3>
          <p className="text-sm text-[#485650] dark:text-[#A6B5AF] max-w-md mb-6 leading-relaxed">
            {t.successMsg}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-5 py-2.5 rounded-md bg-[#6B1426] hover:bg-[#82182E] dark:bg-[#2DD4A4] text-white dark:text-[#06110D] text-xs font-semibold transition-colors cursor-pointer"
          >
            {locale === 'ar' ? 'إرسال استفسار آخر' : 'Submit Another Enquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              aria-label="Do not fill this field"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
                {t.fullName} <span className="text-[#6B1426] dark:text-[#2DD4A4]">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'مثال: محمد الشامسي' : 'e.g. Mohammed Al Shamsi'}
                className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm placeholder:text-[#687670] dark:placeholder:text-[#768780] focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-entity" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
                {t.entityName}
              </label>
              <input
                type="text"
                id="contact-entity"
                name="entity"
                value={formData.entity}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'دائرة حكومية / شركة' : 'e.g. Government Department / Enterprise'}
                className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm placeholder:text-[#687670] dark:placeholder:text-[#768780] focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
                {t.workEmail} <span className="text-[#6B1426] dark:text-[#2DD4A4]">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@entity.gov.ae"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm placeholder:text-[#687670] dark:placeholder:text-[#768780] focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all dir-ltr"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
                {t.phone}
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm placeholder:text-[#687670] dark:placeholder:text-[#768780] focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all dir-ltr"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-service" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
              {t.serviceInterest}
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all cursor-pointer"
            >
              {SERVICES_CATALOG.map((svc) => (
                <option key={svc.slug} value={svc.slug}>
                  {svc.title[locale]}
                </option>
              ))}
              <option value="general-consultancy">
                {locale === 'ar' ? 'استشارة تقنية عامة / مناقصة RFP' : 'General IT Consultancy / RFP Tender'}
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-[#0B1713] dark:text-[#F4F6F5] mb-1.5">
              {t.message} <span className="text-[#6B1426] dark:text-[#2DD4A4]">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={
                locale === 'ar'
                  ? 'يرجى تقديم نبذة عن متطلبات المشروع، النطاق الزمني المتوقع، أو طلب كراسة الشروط...'
                  : 'Please summarize project objectives, timelines, and requirements...'
              }
              className="w-full px-3.5 py-2.5 rounded-md border border-[#E3DFD7] dark:border-[#1A2E26] bg-[#FAF8F5] dark:bg-[#07110E] text-[#0B1713] dark:text-[#F4F6F5] text-sm placeholder:text-[#687670] dark:placeholder:text-[#768780] focus:outline-none focus:ring-2 focus:ring-[#6B1426] dark:focus:ring-[#2DD4A4] transition-all resize-y"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#6B1426] hover:bg-[#82182E] dark:bg-[#2DD4A4] dark:hover:bg-[#24B88D] text-white dark:text-[#06110D] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] disabled:opacity-70 cursor-pointer whitespace-nowrap"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.submitting}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{t.submitEnquiry}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
