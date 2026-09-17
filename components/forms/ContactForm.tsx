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
    <div className="bg-white dark:bg-[#111726] rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800 shadow-sm" dir={isRtl ? 'rtl' : 'ltr'}>
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-8 px-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            {t.successTitle}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">
            {t.successMsg}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-5 py-2.5 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-xs font-semibold transition-colors"
          >
            {locale === 'ar' ? 'إرسال استفسار آخر' : 'Submit Another Enquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field (hidden from real users) */}
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
            {/* Full Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
                {t.fullName} <span className="text-[#6B1426]">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'مثال: محمد الشامسي' : 'e.g. Mohammed Al Shamsi'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all"
              />
            </div>

            {/* Entity Name */}
            <div>
              <label htmlFor="contact-entity" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
                {t.entityName}
              </label>
              <input
                type="text"
                id="contact-entity"
                name="entity"
                value={formData.entity}
                onChange={handleChange}
                placeholder={locale === 'ar' ? 'دائرة حكومية / شركة' : 'e.g. Government Department / Enterprise'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Work Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
                {t.workEmail} <span className="text-[#6B1426]">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@entity.gov.ae"
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all dir-ltr"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
                {t.phone}
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all dir-ltr"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="contact-service" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
              {t.serviceInterest}
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all cursor-pointer"
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

          {/* Scope Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200 mb-1.5">
              {t.message} <span className="text-[#6B1426]">*</span>
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
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6B1426] focus:bg-white dark:focus:bg-zinc-800 transition-all resize-y"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-sm font-semibold transition-all shadow-sm placeholder:text-zinc-600 dark:placeholder:text-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] disabled:opacity-70 cursor-pointer"
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
