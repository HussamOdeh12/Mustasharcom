import React from 'react';
import { cn } from '@/lib/utils';

export type HeadingH3Size = 'sm' | 'md' | 'lg' | 'display';
export type HeadingH3Tone = 'default' | 'inverted' | 'accent' | 'muted';

export interface HeadingH3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Responsive typographic scale preset */
  size?: HeadingH3Size;
  /** Semantic color palette paired for light & dark surfaces */
  tone?: HeadingH3Tone;
  /** Enables smooth interactive color shift on hover/group-hover */
  interactive?: boolean;
  children: React.ReactNode;
}

const SIZE_CLASSES: Record<HeadingH3Size, string> = {
  sm: 'text-lg sm:text-xl leading-[1.24] tracking-[-0.02em]',
  md: 'text-xl sm:text-2xl md:text-[1.625rem] leading-[1.2] tracking-[-0.024em]',
  lg: 'text-2xl sm:text-3xl md:text-[2rem] leading-[1.16] tracking-[-0.028em]',
  display: 'text-2xl sm:text-3xl md:text-4xl leading-[1.12] tracking-[-0.032em]',
};

const TONE_CLASSES: Record<HeadingH3Tone, string> = {
  default: 'text-[#17211D] dark:text-[#F4F7F5]',
  inverted: 'text-[#F4F7F5]',
  accent: 'text-[#174B3E] dark:text-[#18C6A0]',
  muted: 'text-[#3E544C] dark:text-[#A3B8B0]',
};

const INTERACTIVE_TONE_CLASSES: Record<HeadingH3Tone, string> = {
  default:
    'hover:text-[#174B3E] dark:hover:text-[#18C6A0] group-hover:text-[#174B3E] dark:group-hover:text-[#18C6A0]',
  inverted: 'hover:text-[#18C6A0] group-hover:text-[#18C6A0]',
  accent:
    'hover:text-[#12A989] dark:hover:text-[#F4F7F5] group-hover:text-[#12A989] dark:group-hover:text-[#F4F7F5]',
  muted:
    'hover:text-[#17211D] dark:hover:text-[#F4F7F5] group-hover:text-[#17211D] dark:group-hover:text-[#F4F7F5]',
};

/**
 * Reusable editorial H3 heading styled with Tailwind CSS.
 * Provides responsive font sizing, tight letter tracking, balanced wrapping,
 * and smooth color transitions for hero banners, section headers, and case studies.
 */
export default function HeadingH3({
  size = 'md',
  tone = 'default',
  interactive = false,
  className,
  children,
  ...props
}: HeadingH3Props) {
  return (
    <h3
      className={cn(
        'font-bold text-balance transition-colors duration-300 ease-out',
        SIZE_CLASSES[size],
        TONE_CLASSES[tone],
        interactive && INTERACTIVE_TONE_CLASSES[tone],
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
