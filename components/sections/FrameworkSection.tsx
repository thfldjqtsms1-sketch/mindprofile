'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { framework } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function FrameworkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    let gsapModule: typeof import('@/lib/gsap') | null = null;

    import('@/lib/gsap').then((mod) => {
      gsapModule = mod;
      const { ScrollTrigger } = mod;

      const section = sectionRef.current;
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${framework.steps.length * 100}%`,
        pin: true,
        scrub: 0.8,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * framework.steps.length),
            framework.steps.length - 1
          );
          setActiveStep(idx);
        },
      });
    });

    return () => {
      if (gsapModule) {
        gsapModule.ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === sectionRef.current) t.kill();
        });
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-secondary min-h-screen flex items-center" id="framework">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="mb-16">
            <p className="chapter-label">Chapter 02</p>
            <h2 className="text-h1" style={{ whiteSpace: 'pre-line' }}>
              {framework.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Step indicators */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3">
              {framework.steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="text-left transition-all duration-500 p-4 rounded-md flex-1 lg:flex-none"
                  style={{
                    background: activeStep === i ? 'var(--bg-surface)' : 'transparent',
                    borderLeft: activeStep === i ? '2px solid var(--accent-gold)' : '2px solid transparent',
                  }}
                >
                  <span className="font-accent text-[11px] font-bold tracking-[0.1em] block mb-1" style={{
                    color: activeStep === i ? 'var(--accent-gold)' : 'var(--text-muted)',
                  }}>
                    {step.number}
                  </span>
                  <span className="text-[14px] font-semibold block" style={{
                    color: activeStep === i ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  }}>
                    {step.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Step content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-accent text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--accent-gold)' }}>
                    {framework.steps[activeStep].name}
                  </p>
                  <h3 className="font-display text-[32px] font-medium mb-6 lg:text-[40px]" style={{ color: 'var(--text-primary)', lineHeight: 1.15 }}>
                    {framework.steps[activeStep].title}
                  </h3>
                  <p className="text-[16px] leading-[1.8] max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                    {framework.steps[activeStep].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
