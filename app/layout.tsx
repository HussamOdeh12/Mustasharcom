import './globals.css';
import ThemeScript from '@/components/ui/ThemeScript';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
