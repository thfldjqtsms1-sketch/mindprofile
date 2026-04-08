'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

function useDday() {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const target = new Date('2026-03-01T00:00:00+09:00');
    const calc = () => {
      const now = new Date();
      const diff = Math.max(0, Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
      setDays(diff);
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, []);
  return days;
}

const slots = [
  { label: '초등반', remaining: 3, total: 8 },
  { label: '중등반', remaining: 2, total: 10 },
  { label: '고등반', remaining: 1, total: 6, urgent: true },
];

export default function Enrollment() {
  const dday = useDday();

  return (
    <section className="section-dark relative overflow-hidden" id="enrollment">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-gold mb-6">
              <Clock size={20} />
              <span className="font-accent font-bold text-h4">
                {dday > 0 ? `D-${dday}` : '모집 중'}
              </span>
            </div>
            <h2 className="text-h1-m lg:text-h1 text-white font-heading mb-4">
              2026년도 장기 코칭 모집
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-body-sm text-white/60">
              <span>기간: 2026년 3월 ~ 2027년 2월 (1년)</span>
              <span>|</span>
              <span>대상: 초5 ~ 고2 (2026년 기준)</span>
            </div>
          </motion.div>

          {/* Slot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {slots.map((slot) => (
              <motion.div
                key={slot.label}
                variants={scaleIn}
                className={`card-dark p-6 text-center ${
                  slot.urgent ? 'border-danger/40 bg-danger/5' : ''
                }`}
              >
                <h4 className="text-white font-heading font-semibold text-h4 mb-2">
                  {slot.label}
                </h4>
                <div className={`font-accent font-bold text-h2 mb-1 ${
                  slot.urgent ? 'text-danger' : 'text-gold'
                }`}>
                  {slot.remaining}석
                </div>
                <p className="text-white/40 text-caption">
                  / 총 {slot.total}명 정원
                </p>
                {slot.urgent && (
                  <span className="badge-danger mt-3 inline-flex items-center gap-1">
                    <AlertTriangle size={12} />
                    마감임박
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <div className="inline-block text-left text-body-sm text-white/50 space-y-1">
              <p>※ 모집 마감 후 추가 접수 불가</p>
              <p>※ 상담 후 적합 여부 판단 뒤 최종 등록</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <a
              href={siteConfig.applyCoaching}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-body-lg group"
            >
              지금 바로 신청하기
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/30 text-caption mt-4">
              신청 후 개별 상담을 통해 프로그램을 안내드립니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
