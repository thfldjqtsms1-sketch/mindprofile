'use client';

import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import Empathy from '@/components/sections/Empathy';
import Solution from '@/components/sections/Solution';
import Programs from '@/components/sections/Programs';
import Achievements from '@/components/sections/Achievements';
import Profile from '@/components/sections/Profile';
import Book from '@/components/sections/Book';
import Testimonials from '@/components/sections/Testimonials';
import Enrollment from '@/components/sections/Enrollment';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Empathy />
      <Solution />
      <Programs />
      <Achievements />
      <Profile />
      <Book />
      <Testimonials />
      <Enrollment />
      <FAQ />
      <FinalCTA />
    </>
  );
}
