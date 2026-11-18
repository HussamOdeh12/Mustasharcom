import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060E0B] text-[#F4F6F5] p-6 text-center">
      <span className="font-mono text-sm font-semibold text-[#2DD4A4] mb-3">
        ERROR 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Page Not Found · الصفحة غير موجودة
      </h1>
      <p className="text-sm text-[#A6B5AF] max-w-md mb-8 leading-relaxed">
        The requested resource could not be found or has been relocated. Return to the Mustasharcom home page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-md bg-[#2DD4A4] hover:bg-[#24B88D] text-[#05100C] text-xs font-semibold transition-colors"
        >
          Home (English)
        </Link>
        <Link
          href="/ar"
          className="px-5 py-2.5 rounded-md border border-[#1E362D] bg-[#0C1A15] hover:border-[#2DD4A4] text-[#F4F6F5] text-xs font-semibold transition-colors"
        >
          الرئيسية (العربية)
        </Link>
      </div>
    </div>
  );
}
