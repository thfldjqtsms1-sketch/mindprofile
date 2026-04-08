'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { finalCTA, siteConfig } from '@/lib/data';
import { blurReveal, fadeUp, stagger } from '@/lib/animations';
import { Nl2br } from '@/lib/utils';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'var(--gradient-hero)' }}>
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--gradient-gold-line)', opacity: 0.4 }} />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(184,148,90,0.05)' }} />

      <div className="container-editorial relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.h2 variants={blurReveal} className="text-h1 mb-8">
                <Nl2br text={finalCTA.title} />
              </motion.h2>

              <motion.p variants={fadeUp} className="text-[17px] leading-[1.8] mb-10" style={{ color: 'var(--text-secondary)' }}>
                <Nl2br text={finalCTA.body} />
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold group">
                  {finalCTA.cta}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={siteConfig.applyConsulting} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  {finalCTA.ctaAlt}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-6 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                <a href={`https://open.kakao.com/o/${siteConfig.kakaoId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <MessageCircle size={14} /> 카카오톡: {siteConfig.kakaoId}
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  인스타그램: {siteConfig.instagramHandle}
                </a>
              </motion.div>
            </div>

            {/* Right: Trust reinforcement */}
            <motion.div variants={fadeUp}>
              <div className="card-surface !p-8 lg:!p-10">
                <p className="overline mb-6">신뢰할 수 있는 이유</p>

                <div className="space-y-5 mb-8">
                  {[
                    '식스센스 성향 진단 기반 맞춤 설계',
                    '과학고·외고·상산고·서연고 매년 합격생 배출',
                    "'성향 기반 중학 진로 로드맵' 저자",
                    '한국교육컨설턴트협의회 공인 상담사',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1" style={{ color: 'var(--accent-gold)' }}>&#10003;</span>
                      <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6" style={{ borderTop: '1px solid var(--border-soft)' }}>
                  <p className="text-[13px] italic" style={{ color: 'var(--text-tertiary)' }}>
                    {finalCTA.trustNote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
