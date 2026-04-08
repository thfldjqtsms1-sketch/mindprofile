'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { ch4, site } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function Chapter4() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Profile — burocratik editorial style */}
      <section className="sec-white" style={{ padding: '120px 0' }} id="chapter4">
        <div className="container-buro">
          <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 4</p>
          <h2 className="t-editorial" style={{ maxWidth: 800, marginBottom: 80 }}>
            {ch4.editorial}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Portrait placeholder */}
            <div className="lg:col-span-4">
              <div className="img-placeholder" style={{ aspectRatio: '3/4', borderRadius: 4, marginBottom: 24 }}>
                대표 사진
              </div>
              <p style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.03em', fontFamily: 'var(--font-sans)' }}>
                {ch4.profile.name}
              </p>
              <p className="t-label" style={{ marginTop: 4 }}>{ch4.profile.role}</p>
            </div>

            {/* Credentials + Philosophy */}
            <div className="lg:col-span-8">
              {/* Philosophy */}
              <blockquote style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5,
                marginBottom: 48, paddingBottom: 48,
                borderBottom: '1px solid var(--c-border)',
              }}>
                {ch4.profile.philosophy}
              </blockquote>

              {/* Credentials */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {ch4.profile.credentials.map((cred, i) => (
                  <motion.div key={i} variants={fadeUp} style={{
                    padding: '12px 0', borderBottom: '1px solid var(--c-border)',
                    display: 'flex', alignItems: 'center', gap: 12,
                  }}>
                    <span className="t-label" style={{ width: 28, flexShrink: 0, textAlign: 'right' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="t-body-sm">{cred}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Book */}
              <div style={{ marginTop: 48, padding: 32, border: '1px solid var(--c-border)', borderRadius: 4, display: 'flex', gap: 24, alignItems: 'start' }}>
                <div className="img-placeholder" style={{ width: 80, height: 110, flexShrink: 0, borderRadius: 2 }}>
                  <BookOpen size={24} style={{ color: 'var(--c-text-muted)' }} />
                </div>
                <div>
                  <p style={{ fontSize: 17, fontWeight: 500, marginBottom: 8, letterSpacing: '-0.02em' }}>
                    {ch4.profile.book.title}
                  </p>
                  <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 16 }}>
                    {ch4.profile.book.desc}
                  </p>
                  <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ fontSize: 13 }}>
                    도서 보기 <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — clean accordion */}
      <section className="sec-cream" style={{ padding: '80px 0' }} id="faq">
        <div className="container-buro" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 40, fontFamily: 'var(--font-sans)' }}>
            자주 묻는 질문
          </p>
          {ch4.faq.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--c-border)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.02em', color: openFaq === i ? 'var(--c-accent)' : 'var(--c-text)', transition: 'color 0.3s', paddingRight: 16 }}>
                  {item.q}
                </span>
                <span style={{ color: 'var(--c-text-muted)', flexShrink: 0 }}>
                  {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', paddingBottom: 20 }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA — clean, burocratik style */}
      <section className="sec-black" style={{ padding: '120px 0' }}>
        <div className="container-buro" style={{ maxWidth: 800 }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="t-editorial-dark" style={{ marginBottom: 32 }}>
              {ch4.cta.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="t-body" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 48, maxWidth: 500 }}>
              {ch4.cta.body}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4" style={{ marginBottom: 32 }}>
              <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill">
                초5~고2 코칭 상담 <ArrowRight size={16} />
              </a>
              <a href={site.applyConsulting} target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                고3 입시 컨설팅 <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="t-label" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {ch4.cta.trust}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
