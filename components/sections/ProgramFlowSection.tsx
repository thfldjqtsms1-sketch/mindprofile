'use client';

import { motion } from 'framer-motion';
import { programFlow, siteConfig } from '@/lib/data';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

export default function ProgramFlowSection() {
  return (
    <section className="section-primary">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="max-w-2xl mb-16">
            <h2 className="text-h2" style={{ whiteSpace: 'pre-line' }}>
              {programFlow.title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px" style={{ background: 'var(--border-soft)' }} />

            <div className="space-y-8">
              {programFlow.steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full mt-2 z-10" style={{
                    background: 'var(--accent-gold)',
                    boxShadow: '0 0 12px rgba(184,148,90,0.3)',
                  }} />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="font-accent text-[11px] font-bold tracking-[0.1em]" style={{ color: 'var(--accent-gold-dim)' }}>
                      0{i + 1}
                    </span>
                    <h4 className="text-[18px] font-semibold mt-1 mb-2" style={{ color: 'var(--text-primary)' }}>
                      {step.label}
                    </h4>
                    <p className="text-[14px]" style={{ color: 'var(--text-tertiary)' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note + CTA */}
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <p className="text-[15px] mb-8 max-w-md mx-auto" style={{ color: 'var(--text-tertiary)', whiteSpace: 'pre-line' }}>
              {programFlow.note}
            </p>
            <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold group">
              1:1 진단 상담 신청
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
