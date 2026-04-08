'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { intro, site } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function IntroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    import('split-type').then(({ default: SplitType }) => {
      import('@/lib/gsap').then(({ gsap }) => {
        const split = new SplitType(headlineRef.current!, { types: 'chars,words' });
        gsap.from(split.chars!, {
          opacity: 0, y: 80, rotateX: -60,
          stagger: 0.04, duration: 1, ease: 'power3.out', delay: 0.3,
        });
      });
    });
  }, []);

  return (
    <section className="sec-white relative" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 0 80px' }}>
      <div className="container-buro">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Headline — burocratik mega style */}
          <h1 ref={headlineRef} className="t-display" style={{ maxWidth: '900px', marginBottom: 40 }}>
            {intro.headline}
          </h1>

          <motion.p variants={fadeUp} className="t-editorial" style={{ maxWidth: '700px', marginBottom: 60 }}>
            {intro.subline}
          </motion.p>

          <motion.div variants={fadeUp} style={{ maxWidth: '500px', marginBottom: 60 }}>
            <p className="t-body" style={{ color: 'var(--c-text-muted)' }}>
              {intro.body}
            </p>
          </motion.div>

          {/* Chapter list — like burocratik's bottom nav */}
          <motion.div variants={fadeUp}>
            <div className="line-h" style={{ marginBottom: 24 }} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {intro.chapters.map((ch, i) => (
                <a key={i} href={`#chapter${i + 1}`} className="group" style={{ textDecoration: 'none' }}>
                  <p className="t-label" style={{ marginBottom: 4 }}>{ch.num}</p>
                  <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--c-text)', letterSpacing: '-0.02em', fontFamily: 'var(--font-sans)' }}>
                    {ch.title}
                  </p>
                  <p className="t-label">{ch.range}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Enter CTA */}
          <motion.div variants={fadeUp} style={{ marginTop: 60, textAlign: 'right' }}>
            <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ fontSize: 16 }}>
              {intro.enter} →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
