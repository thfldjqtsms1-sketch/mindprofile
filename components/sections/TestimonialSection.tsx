'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';

export default function TestimonialSection() {
  return (
    <section className="section-primary" id="testimonials">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-h2">
              각 아이의 출발점은 달랐고,
              <br />
              그래서 전략도 달랐습니다.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={scaleIn} className="card-surface relative">
                <Quote size={20} className="mb-5 opacity-20" style={{ color: 'var(--accent-gold)' }} />
                <p className="text-[16px] leading-[1.8] mb-6" style={{ color: 'var(--text-primary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium" style={{ color: 'var(--text-tertiary)' }}>
                    — {t.author}
                  </span>
                  <span className="text-[11px] px-2 py-1 rounded-sm" style={{
                    color: 'var(--accent-gold-dim)',
                    background: 'rgba(184,148,90,0.06)',
                  }}>
                    {t.context}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
