import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { Home, ArrowRight } from 'lucide-react';

export default function EnglishNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-[#FDFCFB] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 antialiased transition-colors text-center">
      <div className="max-w-md flex flex-col items-center gap-6">
        <Logo variant="full" />

        <div className="space-y-2 mt-4">
          <span className="font-mono text-4xl sm:text-5xl font-bold text-[#6B1426] dark:text-[#F38C9C]">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
            The requested page does not exist or has been relocated to our updated structure.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-all"
          >
            <span>Browse Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/ar"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-zinc-600 dark:text-zinc-400 hover:text-[#6B1426] dark:hover:text-white text-xs font-medium transition-colors"
          >
            <span>الصفحة الرئيسية (العربية)</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 w-full text-xs text-zinc-500">
          <span>Mustasharcom for Informatics Solutions · Abu Dhabi, UAE</span>
        </div>
      </div>
    </div>
  );
}
