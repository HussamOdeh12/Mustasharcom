import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFB] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#6B1426]/10 text-[#6B1426] dark:bg-[#6B1426]/25 dark:text-[#F38C9C] flex items-center justify-center font-bold text-2xl mb-4">
        404
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found / الصفحة غير موجودة</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
        The requested page could not be found. Return to the home page or contact support.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-sm font-semibold transition-colors shadow-sm"
        >
          Home (English)
        </Link>
        <Link
          href="/ar"
          className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold transition-colors"
        >
          الرئيسية (العربية)
        </Link>
      </div>
    </div>
  );
}
