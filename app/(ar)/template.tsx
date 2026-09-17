import React from 'react';

export default function ArabicTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition-enter flex-1 flex flex-col">
      {children}
    </div>
  );
}
