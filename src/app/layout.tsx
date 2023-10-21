import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유튜브 음원 추출',
  description: 'YouTube to MP3 Converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={'h-full'}>
        <main className="h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
