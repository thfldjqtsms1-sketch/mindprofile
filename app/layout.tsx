'use client';

import './globals.css';
import { ReactNode } from 'react';
import LenisProvider from '@/components/providers/LenisProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>마인드프로필 | 진로진학입시 교육컨설팅</title>
        <meta name="description" content="초5~고2 맞춤 진로진학 코칭. 식스센스 성향 진단 기반 1:1 로드맵 설계. 과학고, 외고, 서연고, 의약학 합격생 매년 배출." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
