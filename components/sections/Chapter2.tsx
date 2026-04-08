'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ch2 } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function Chapter2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;

    import('@/lib/gsap').then(({ gsap }) => {
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
            trigger: section, pin: true, scrub: 1,
            end: () => `+=${totalWidth}`,
            onUpdate: (self) => { progress.style.width = `${self.progress * 100}%`; },
          },
        });
      }, sectionRef);
    });

    return () => { if (ctx) ctx.revert(); };
  }, []);

  return (
    <>
      {/* Editorial heading */}
      <section className="sec-white" style={{ padding: '120px 0 60px' }} id="chapter2">
        <div className="container-buro">
          <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 2</p>
          <h2 className="t-editorial" style={{ maxWidth: 800 }}>
            {ch2.editorial}
          </h2>
        </div>
      </section>

      {/* Horizontal scroll — 4 framework panels */}
      <section ref={sectionRef} className="sec-white relative overflow-hidden" id="framework">
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'var(--c-border)' }}>
          <div ref={progressRef} className="h-full" style={{ width: 0, background: 'var(--c-black)', transition: 'none' }} />
        </div>

        {/* Desktop: horizontal scroll */}
        <div ref={trackRef} className="hidden lg:flex h-scroll-track">
          {ch2.framework.map((step, i) => (
            <div key={step.num} className="h-scroll-panel">
              <div style={{ maxWidth: 600 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 120, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.07em', color: 'rgba(0,0,0,0.04)', display: 'block', marginBottom: -20 }}>
                  {step.num}
                </span>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 12, fontSize: 13, fontWeight: 500 }}>
                  {step.name}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.15, marginBottom: 24, color: 'var(--c-text)' }}>
                  {step.title}
                </h3>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', maxWidth: 450 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden" style={{ padding: '40px 0 80px' }}>
          <div className="container-buro">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
              {ch2.framework.map((step) => (
                <motion.div key={step.num} variants={fadeUp} style={{ paddingBottom: 32, borderBottom: '1px solid var(--c-border)' }}>
                  <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 8 }}>
                    {step.num} — {step.name}
                  </p>
                  <h4 style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', marginBottom: 12 }}>
                    {step.title}
                  </h4>
                  <p className="t-body-sm" style={{ color: 'var(--c-text-muted)' }}>
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs — clean list */}
      <section className="sec-cream" style={{ padding: '100px 0' }}>
        <div className="container-buro">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {ch2.programs.map((prog, i) => (
              <div key={i} style={{ padding: '40px 32px', borderLeft: i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 24, fontFamily: 'var(--font-sans)' }}>
                  {prog.target}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {prog.items.map((item, j) => (
                    <li key={j} className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 12, paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--c-text-dim)' }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
