'use client';

import { motion } from 'framer-motion';
import { fadeInUp, blurIn, staggerContainer } from '@/lib/animations';

export default function Empathy() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24" style={{
      background: 'linear-gradient(180deg, var(--color-navy) 0%, var(--color-ivory) 100%)',
    }}>
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.blockquote variants={blurIn} className="relative">
            <div className="text-gold/20 text-[80px] leading-none font-serif absolute -top-6 left-1/2 -translate-x-1/2">
              &ldquo;
            </div>
            <p className="text-h2-m lg:text-h2 text-white font-heading leading-relaxed pt-8">
              걱정되시죠. 당연합니다.
              <br />
              입시는 아이의 인생이 걸린 문제니까요.
            </p>
            <div className="w-16 h-px bg-gold/40 mx-auto my-8" />
            <p className="text-body-lg text-white/80 leading-relaxed">
              하지만 방향 없이 불안해하는 것과,
              <br />
              <span className="text-gold font-semibold">정확한 진단 위에 로드맵을 세우는 것</span>은
              <br />
              완전히 다른 결과를 만듭니다.
            </p>
          </motion.blockquote>

          <motion.div variants={fadeInUp} className="mt-10">
            <p className="text-white/50 text-body-sm">
              — 진승호, 마인드프로필 대표
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
