'use client';

import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import InsightSection from '@/components/sections/InsightSection';
import FrameworkSection from '@/components/sections/FrameworkSection';
import ProgramFlowSection from '@/components/sections/ProgramFlowSection';
import ProofSection from '@/components/sections/ProofSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <InsightSection />
      <FrameworkSection />
      <ProgramFlowSection />
      <ProofSection />
      <TestimonialSection />
      <AuthoritySection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
