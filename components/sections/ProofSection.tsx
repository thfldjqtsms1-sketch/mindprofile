'use client';

import { motion } from 'framer-motion';
import { proof } from '@/lib/data';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';
import { useCountUp, useGoldLineDraw } from '@/lib/gsap';

function StatBlock({ value, label }: { value: string; label: string }) {
  const isNumber = /^\d+/.test(value);
  const numericPart = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, '');
  const countRef = useCountUp(isNumber ? numericPart : 0);

  return (
    <div className="text-center p-6">
      <div className="text-[40px] lg:text-[48px] font-accent font-bold mb-2" style={{ color: 'var(--accent-gold)' }}>
        {isNumber ? (
          <>
            <span ref={countRef}>0</span>
            <span>{suffix}</span>
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <p className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>{label}</p>
    </div>
  );
}

export default function ProofSection() {
  const lineRef = useGoldLineDraw();

  return (
    <section className="section-secondary" id="proof">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="mb-16">
            <p className="chapter-label">Chapter 03</p>
            <h2 className="text-h1" style={{ whiteSpace: 'pre-line' }}>
              {proof.title}
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {proof.stats.map((stat) => (
              <div key={stat.label} className="card-surface !p-0">
                <StatBlock value={stat.value} label={stat.label} />
              </div>
            ))}
          </motion.div>

          {/* Schools */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {proof.schools.map((group) => (
              <motion.div key={group.category} variants={scaleIn} className="card-surface text-center">
                <h4 className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {group.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.names.map((name) => (
                    <span
                      key={name}
                      className="text-[13px] px-3 py-1 rounded-sm"
                      style={{
                        color: 'var(--accent-gold)',
                        background: 'rgba(184,148,90,0.08)',
                        border: '1px solid rgba(184,148,90,0.15)',
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-24 px-8">
        <div ref={lineRef} className="gold-line-full" />
      </div>
    </section>
  );
}
