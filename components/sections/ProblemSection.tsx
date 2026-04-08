'use client';

import { motion } from 'framer-motion';
import { problems } from '@/lib/data';
import { fadeUp, slideInLeft, stagger } from '@/lib/animations';
import { Nl2br } from '@/lib/utils';

export default function ProblemSection() {
  return (
    <section className="section-secondary">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <p className="chapter-label">Chapter 01</p>
            <h2 className="text-h1 mb-6">
              <Nl2br text={problems.title} />
            </h2>
            <p className="text-[18px]" style={{ color: 'var(--text-secondary)' }}>
              {problems.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.cards.map((card, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                className="card-surface flex items-start gap-5"
              >
                <span className="font-accent text-[13px] font-bold mt-1 flex-shrink-0" style={{ color: 'var(--accent-gold-dim)' }}>
                  0{i + 1}
                </span>
                <p className="text-[16px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                  {card}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
