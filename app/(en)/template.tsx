import React from 'react';

export default function EnglishTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition-enter flex-1 flex flex-col">
      {children}
    </div>
  );
}
