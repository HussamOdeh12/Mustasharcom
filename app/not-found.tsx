import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#071C17] text-[#F4F7F5] p-6 text-center">
      <span className="font-mono text-sm font-semibold text-[#18C6A0] mb-3">
        ERROR 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Page Not Found · الصفحة غير موجودة
      </h1>
      <p className="text-sm text-[#A3B8B0] max-w-md mb-8 leading-relaxed">
        The requested resource could not be found or has been relocated. Return to the Mustasharcom home page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-md bg-[#18C6A0] hover:bg-[#12A989] text-[#071C17] text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
        >
          Home (English)
        </Link>
        <Link
          href="/ar"
          className="px-5 py-2.5 rounded-md border border-[#174B3E] bg-[#0B2922] hover:border-[#18C6A0] text-[#F4F7F5] text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
        >
          الرئيسية (العربية)
        </Link>
      </div>
    </div>
  );
}
