'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { framework } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function FrameworkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

    import('@/lib/gsap').then(({ gsap, ScrollTrigger }) => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const progress = progressRef.current;
      if (!track || !section || !progress) return;

      ctx = gsap.context(() => {
        const totalWidth = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            onUpdate: (self) => {
              if (progress) progress.style.width = `${self.progress * 100}%`;
            },
          },
        });
      }, sectionRef);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="framework" style={{ background: 'var(--bg-secondary)' }}>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10" style={{ background: 'var(--border-soft)' }}>
        <div ref={progressRef} className="h-full w-0" style={{ background: 'var(--accent-gold)' }} />
      </div>

      {/* Chapter label */}
      <div className="hidden lg:block absolute top-8 left-8 z-10">
        <p className="chapter-label">Chapter 02</p>
      </div>

      {/* Desktop: Horizontal scroll */}
      <div ref={trackRef} className="hidden lg:flex">
        {framework.steps.map((step) => (
          <div key={step.number} className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-8">
            <div className="max-w-2xl">
              <span className="font-accent text-[100px] lg:text-[140px] font-bold leading-none block mb-4" style={{ color: 'rgba(184,148,90,0.06)' }}>
                {step.number}
              </span>
              <p className="overline mb-4" style={{ color: 'var(--accent-gold)' }}>
                {step.name}
              </p>
              <h3 className="font-display text-[36px] lg:text-[48px] font-medium mb-6" style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}>
                {step.title}
              </h3>
              <p className="text-[16px] lg:text-[18px] leading-[1.8] max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical stack */}
      <div className="lg:hidden py-16 px-6">
        <p className="chapter-label">Chapter 02</p>
        <h2 className="text-h1 mb-12" style={{ color: 'var(--text-primary)' }}>
          우리는 조언이 아니라,<br />전략이 작동하는 흐름을 만듭니다.
        </h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          {framework.steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="card-surface">
              <span className="font-accent text-[11px] font-bold tracking-[0.1em] block mb-2" style={{ color: 'var(--accent-gold)' }}>
                {step.number} — {step.name}
              </span>
              <h4 className="text-[20px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h4>
              <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
