'use client';

import React, { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  locale?: 'en' | 'ar';
  className?: string;
  showLabel?: boolean;
}

function subscribe(callback: () => void) {
  window.addEventListener('theme-toggle', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('theme-toggle', callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle({
  locale = 'en',
  className = '',
  showLabel = false,
}: ThemeToggleProps) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('mustasharcom_theme', 'light');
      } catch {}
    } else {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('mustasharcom_theme', 'dark');
      } catch {}
    }
    window.dispatchEvent(new Event('theme-toggle'));
  };

  const label = locale === 'ar' ? (isDark ? 'الوضع النهاري' : 'الوضع الليلي') : (isDark ? 'Light Mode' : 'Dark Mode');

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-2 p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer shrink-0 ${className}`}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-200 hover:-rotate-12" />
      )}
      {showLabel && (
        <span className="text-xs font-medium whitespace-nowrap">
          {label}
        </span>
      )}
    </button>
  );
}
