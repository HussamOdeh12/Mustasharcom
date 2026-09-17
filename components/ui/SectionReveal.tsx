import React from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionReveal({
  children,
  className = '',
  id,
}: SectionRevealProps) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}
