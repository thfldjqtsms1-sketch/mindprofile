'use client';

import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import LenisProvider from '@/components/providers/LenisProvider';
import CustomCursor from '@/components/effects/CustomCursor';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>마인드프로필 | 진로진학입시 교육컨설팅</title>
        <meta
          name="description"
          content="급변하는 입시체제, 우리 아이의 유형을 진단하고 맞춤 로드맵을 설계합니다. 과학고, 외고, 서연고, 의약학 합격생 매년 배출. 초5~고3 1:1 진로진학 코칭."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
          <CustomCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
