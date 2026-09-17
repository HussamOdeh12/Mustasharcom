import React from 'react';

export default function Loading() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-gradient-to-r from-[#6B1426] via-[#008751] to-[#6B1426] animate-pulse pointer-events-none"
      role="progressbar"
      aria-label="جاري تحميل الصفحة"
    />
  );
}
