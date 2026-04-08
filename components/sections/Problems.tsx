'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square } from 'lucide-react';
import { worries, siteConfig } from '@/lib/data';
import { fadeInUp, staggerContainer, slideLeft } from '@/lib/animations';

export default function Problems() {
  const [checked, setChecked] = useState<boolean[]>(new Array(worries.length).fill(false));
  const checkedCount = checked.filter(Boolean).length;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section className="section-dark" id="problems">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-h1-m lg:text-h1 text-white font-heading text-center mb-4">
            혹시 이런 고민,
            <br />
            하고 계시진 않나요?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-white/50 text-center text-body mb-10">
            해당하는 항목을 눌러보세요
          </motion.p>

          <div className="space-y-4">
            {worries.map((worry, i) => (
              <motion.button
                key={i}
                variants={slideLeft}
                onClick={() => toggle(i)}
                className={`w-full text-left card-dark p-5 flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                  checked[i] ? 'border-gold/30 bg-gold/5' : ''
                }`}
                aria-label={worry}
              >
                {checked[i] ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1.2, 1] }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckSquare size={22} className="text-gold mt-0.5 flex-shrink-0" />
                  </motion.div>
                ) : (
                  <Square size={22} className="text-white/30 mt-0.5 flex-shrink-0" />
                )}
                <span className={`text-body ${checked[i] ? 'text-white' : 'text-white/70'}`}>
                  &ldquo;{worry}&rdquo;
                </span>
              </motion.button>
            ))}
          </div>

          {checkedCount >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <p className="text-gold text-body-lg mb-4">
                많은 학부모님이 같은 고민을 하고 계세요.
              </p>
              <a
                href={siteConfig.applyCoaching}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                무료 진단으로 해답 찾기
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
