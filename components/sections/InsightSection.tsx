'use client';

import { motion } from 'framer-motion';
import { insight } from '@/lib/data';
import { fadeUp, slideInLeft, slideInRight, stagger } from '@/lib/animations';
import { Nl2br } from '@/lib/utils';
import { useGoldLineDraw } from '@/lib/gsap';

export default function InsightSection() {
  const lineRef = useGoldLineDraw();

  return (
    <section className="section-primary">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-h1 mb-8">
              <Nl2br text={insight.title} />
            </h2>
            <p className="text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              <Nl2br text={insight.body} />
            </p>
          </motion.div>

          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={slideInLeft} className="card-surface" style={{ borderColor: 'var(--border-soft)' }}>
              <p className="overline mb-6" style={{ color: 'var(--text-muted)' }}>
                {insight.comparison.before.label}
              </p>
              <ul className="space-y-4">
                {insight.comparison.before.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: 'var(--text-tertiary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideInRight} className="card-surface" style={{ borderColor: 'var(--border-medium)' }}>
              <p className="overline mb-6">
                {insight.comparison.after.label}
              </p>
              <ul className="space-y-4">
                {insight.comparison.after.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>&#9654;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gold line divider */}
      <div className="mt-24 px-8">
        <div ref={lineRef} className="gold-line-full" />
      </div>
    </section>
  );
}
