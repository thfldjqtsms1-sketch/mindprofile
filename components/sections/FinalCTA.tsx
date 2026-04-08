'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { fadeInUp, blurIn, staggerContainer } from '@/lib/animations';

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--gradient-hero)',
        paddingTop: 'var(--section-py-mobile)',
        paddingBottom: 'var(--section-py-mobile)',
      }}
    >
      <div className="container-main relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={blurIn} className="text-h1-m lg:text-h1 text-white font-heading mb-6 text-balance">
            아이의 미래는
            <br />
            <span className="text-gradient-gold">지금 이 순간의 선택</span>에서
            <br />
            시작됩니다.
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={siteConfig.applyCoaching}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-body-lg group"
            >
              초5~고2 코칭 신청
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={siteConfig.applyConsulting}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-body-lg"
            >
              고3 컨설팅 신청
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-body-sm text-white/50 mb-10">
            <a
              href={`https://open.kakao.com/o/${siteConfig.kakaoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <MessageCircle size={16} />
              카카오톡: {siteConfig.kakaoId}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              인스타그램: {siteConfig.instagramHandle}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="border-t border-white/10 pt-8">
              <p className="text-body text-white/40 italic">
                &ldquo;지금 방향을 잡지 않으면,
                <br className="sm:hidden" />
                1년 후에도 같은 고민을 하고 있을 겁니다.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
    </section>
  );
}
