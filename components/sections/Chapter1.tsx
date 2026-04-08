'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ch1 } from '@/lib/data';
import { slideInLeft, slideInRight, stagger } from '@/lib/animations';

export default function Chapter1() {
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    import('@/lib/gsap').then(({ gsap }) => {
      if (!megaRef.current) return;
      gsap.from(megaRef.current, {
        opacity: 0, scale: 0.8,
        scrollTrigger: { trigger: megaRef.current, start: 'top 80%', end: 'top 30%', scrub: 1 },
      });
    });
  }, []);

  return (
    <>
      {/* Dark intro — "방향 부재" */}
      <section id="chapter1" className="sec-black" style={{ padding: '120px 0' }}>
        <div className="container-buro">
          <p className="t-chapter" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Chapter 1</p>
          <h2 className="t-editorial-dark" style={{ maxWidth: 700, marginBottom: 60 }}>
            {ch1.editorial}
          </h2>

          {/* Pain blocks — horizontal scroll on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ch1.blocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ padding: 32, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4 }}
              >
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
                  0{i + 1}
                </p>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 16, lineHeight: 1.4, letterSpacing: '-0.02em' }}>
                  {block.title}
                </h3>
                <p className="t-body-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid statement — mega text */}
      <section className="sec-white" style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="container-buro">
          <div ref={megaRef}>
            <p className="t-mega" style={{ color: 'var(--c-text)' }}>
              성적이 아니라
            </p>
            <p className="t-mega" style={{ color: 'var(--c-text)' }}>
              설계 부재입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison — like burocratik's side by side */}
      <section className="sec-cream" style={{ padding: '100px 0' }}>
        <div className="container-buro">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Before */}
            <motion.div variants={slideInLeft} style={{ padding: 48, borderRight: '1px solid var(--c-border)' }}>
              <p className="t-label" style={{ marginBottom: 32 }}>{ch1.comparison.before.label}</p>
              {ch1.comparison.before.items.map((item, i) => (
                <p key={i} className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 16 }}>
                  — {item}
                </p>
              ))}
            </motion.div>
            {/* After */}
            <motion.div variants={slideInRight} style={{ padding: 48 }}>
              <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 32 }}>{ch1.comparison.after.label}</p>
              {ch1.comparison.after.items.map((item, i) => (
                <p key={i} className="t-body" style={{ color: 'var(--c-text)', fontWeight: 500, marginBottom: 16 }}>
                  → {item}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
