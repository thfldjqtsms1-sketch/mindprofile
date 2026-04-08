'use client';

import IntroSection from '@/components/sections/IntroSection';
import Chapter1 from '@/components/sections/Chapter1';
import Chapter2 from '@/components/sections/Chapter2';
import Chapter3 from '@/components/sections/Chapter3';
import Chapter4 from '@/components/sections/Chapter4';

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
    </>
  );
}
