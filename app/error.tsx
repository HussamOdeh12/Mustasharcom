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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F5F0] dark:bg-[#071C17] text-[#17211D] dark:text-[#F4F7F5] p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#18C6A0]/15 text-[#174B3E] dark:text-[#18C6A0] flex items-center justify-center font-bold text-2xl mb-4">
        !
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Something went wrong</h1>
      <p className="text-sm text-[#3E544C] dark:text-[#A3B8B0] max-w-md mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-lg bg-[#174B3E] hover:bg-[#0B2922] dark:bg-[#18C6A0] dark:hover:bg-[#12A989] text-white dark:text-[#071C17] text-sm font-semibold transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0]"
      >
        Try again
      </button>
    </div>
  );
}
