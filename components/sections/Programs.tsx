'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { coachingPrograms } from '@/lib/data';
import { fadeInUp, slideRight, staggerContainer } from '@/lib/animations';

export default function Programs() {
  return (
    <section className="section-light" id="programs">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">코칭 프로그램</span>
            <h2 className="text-h1-m lg:text-h1 font-heading text-gray-800 mb-4">
              대상별 맞춤 프로그램
            </h2>
            <p className="text-body-lg text-gray-600">
              장기 코칭은 1년 단위, 매년 3월~다음해 2월(학사기준)으로 진행됩니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {coachingPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={slideRight}
                className={`rounded-lg p-8 transition-all duration-300 relative overflow-hidden ${
                  program.highlight
                    ? 'bg-navy text-white border-2 border-gold/30 shadow-glow'
                    : 'card-light'
                }`}
              >
                {program.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="badge-danger flex items-center gap-1">
                      <Star size={12} />
                      마지막 기회
                    </span>
                  </div>
                )}

                <h3 className={`text-h2-m lg:text-h2 font-heading mb-2 ${
                  program.highlight ? 'text-gold' : 'text-gray-800'
                }`}>
                  {program.title}
                </h3>
                <p className={`text-body-sm mb-6 ${
                  program.highlight ? 'text-white/60' : 'text-gray-500'
                }`}>
                  {program.target}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-caption font-bold ${
                        program.highlight
                          ? 'bg-gold/20 text-gold'
                          : 'bg-gold/10 text-gold-dark'
                      }`}>
                        {i + 1}
                      </div>
                      <span className={`text-body ${
                        program.highlight ? 'text-white/80' : 'text-gray-700'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={program.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full rounded-xl py-4 font-semibold transition-all duration-300 group ${
                    program.highlight
                      ? 'btn-primary'
                      : 'border border-gold text-gold-dark hover:bg-gold hover:text-navy'
                  }`}
                >
                  {program.highlight ? '컨설팅 신청하기' : '코칭 신청하기'}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
