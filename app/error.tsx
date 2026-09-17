'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFB] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-2xl mb-4">
        !
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Something went wrong</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-4 py-2 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-sm font-semibold transition-colors shadow-sm"
      >
        Try again
      </button>
    </div>
  );
}
