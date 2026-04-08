'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { fadeInUp, blurIn, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    let start = 0;
    const end = 500;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      el!.textContent = `${start}+`;
      if (progress < 1) requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Subtle particle effect via CSS */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-main relative z-10 text-center py-32 lg:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.p
            variants={blurIn}
            className="badge-gold mb-6 text-caption"
          >
            진로진학입시 교육컨설팅
          </motion.p>

          <motion.h1
            variants={blurIn}
            className="text-display-m lg:text-display text-white font-heading mb-6 text-balance"
          >
            급변하는 입시,
            <br />
            <span className="text-gradient-gold">우리 아이의 방향</span>은
            <br className="lg:hidden" /> 잡혀 있나요?
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-white/70 mb-10 max-w-xl mx-auto"
          >
            정확히 진단하고, 방향을 잡고,
            <br className="hidden sm:block" />
            제대로 공부할 수 있는 환경을 만듭니다.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.applyCoaching}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-body-lg group"
            >
              우리 아이 무료 진단 받기
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#programs" className="btn-secondary text-body-lg">
              프로그램 보기
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-14 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-body-sm mb-3">
              올해{' '}
              <span ref={counterRef} className="text-gold font-accent font-bold text-h3">
                0+
              </span>
              명의 학부모가 마인드프로필을 선택했습니다
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['과학고', '외고', '상산고', '서연고', 'KAIST', '의약학'].map((tag) => (
                <span
                  key={tag}
                  className="text-caption text-white/40 border border-white/10 rounded-sm px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
