'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { siteConfig, bookReviews } from '@/lib/data';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export default function Book() {
  return (
    <section className="section-ivory" id="book">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">저서 · 언론</span>
            <h2 className="text-h1-m lg:text-h1 font-heading text-gray-800">
              전문성이 담긴 기록
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Book Mockup */}
            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="relative" style={{ perspective: '1000px' }}>
                <div
                  className="w-64 h-80 rounded-lg shadow-xl flex flex-col items-center justify-center p-8 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #1B2838 0%, #243447 100%)',
                    transform: 'rotateY(-8deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <BookOpen size={48} className="text-gold mb-4" />
                  <h3 className="text-white font-heading font-bold text-h4 mb-2 leading-tight">
                    성향 기반
                    <br />
                    중학 진로
                    <br />
                    로드맵
                  </h3>
                  <div className="w-12 h-px bg-gold/40 my-3" />
                  <p className="text-white/60 text-caption">진승호 저</p>
                </div>
                {/* Shadow effect */}
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-navy-dark/20 blur-xl rounded-full" />
              </div>
            </motion.div>

            {/* Book Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-h2-m lg:text-h2 font-heading text-gray-800 mb-4">
                &lsquo;성향 기반 중학 진로 로드맵&rsquo;
              </h3>
              <p className="text-body-lg text-gray-600 mb-6 leading-relaxed">
                중학생 자녀를 둔 부모라면 반드시 읽어야 할 진로 가이드.
                아이의 성향을 이해하고, 그에 맞는 진로 방향을 설계하는
                실전 로드맵을 담았습니다.
              </p>

              <a
                href={siteConfig.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mb-10 group"
              >
                네이버에서 도서 보기
                <ExternalLink size={16} className="ml-2" />
              </a>

              {/* Press */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-body-sm text-gray-500 font-semibold mb-4">언론 보도 · 서평</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption text-trust hover:underline flex items-center gap-1"
                  >
                    베리타스알파 <ExternalLink size={12} />
                  </a>
                  {bookReviews.slice(0, 4).map((review, i) => (
                    <a
                      key={i}
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption text-trust hover:underline flex items-center gap-1"
                    >
                      {review.source} {i + 1} <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
