'use client';

import { motion } from 'framer-motion';
import { Search, Map, BookOpen, GraduationCap } from 'lucide-react';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

const steps = [
  { icon: Search, title: '유형 진단 & 분석', desc: '아이의 학습 유형과 성향을 정확히 파악합니다' },
  { icon: Map, title: '로드맵 설계', desc: '적성에 맞는 진로와 학습 방향을 설계합니다' },
  { icon: BookOpen, title: '학습 관리 & 점검', desc: '체계적인 학습 관리와 주기적 점검을 합니다' },
  { icon: GraduationCap, title: '입시 설계 & 합격', desc: '목표 학교에 맞는 입시 전략을 실행합니다' },
];

export default function Solution() {
  return (
    <section className="section-ivory" id="solution">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">마인드프로필이란</span>
            <h2 className="text-h1-m lg:text-h1 font-heading text-gray-800 mb-4">
              마인드프로필은 학원이 아닙니다
            </h2>
            <p className="text-body-lg text-gray-600 max-w-xl mx-auto">
              아이의 유형을 진단하고, 적성에 맞는 진로를 설계하고,
              <br className="hidden sm:block" />
              입시까지의 로드맵을 함께 만들어가는 1:1 교육 코칭 프로그램입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={scaleIn}
                className="card-light p-6 text-center relative group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300 text-h3 -translate-y-1/2 z-10">
                    &rarr;
                  </div>
                )}
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <step.icon size={28} className="text-gold-dark" />
                </div>
                <div className="text-caption text-gold font-accent font-bold mb-2">
                  STEP {i + 1}
                </div>
                <h3 className="text-h4 font-heading text-gray-800 mb-2">{step.title}</h3>
                <p className="text-body-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
