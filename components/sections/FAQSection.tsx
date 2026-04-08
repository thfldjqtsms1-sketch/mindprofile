'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-primary" id="faq">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-h2">궁금한 점이 있으신가요?</h2>
          </motion.div>

          <div>
            {faqData.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ borderBottom: '1px solid var(--border-soft)' }}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openIdx === i}
                >
                  <span className="text-[17px] font-semibold pr-4 transition-colors duration-300" style={{
                    color: openIdx === i ? 'var(--accent-gold)' : 'var(--text-primary)',
                  }}>
                    {item.q}
                  </span>
                  <span className="flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {openIdx === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] leading-[1.8] pb-6" style={{ color: 'var(--text-secondary)' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
