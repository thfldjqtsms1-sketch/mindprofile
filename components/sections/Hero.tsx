'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SplitType from 'split-type';
import { gsap } from '@/lib/gsap';
import { hero, siteConfig } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';
import MagneticWrap from '@/components/effects/MagneticWrap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const split = new SplitType(headlineRef.current, { types: 'chars,words' });

    gsap.from(split.chars!, {
      opacity: 0,
      y: 60,
      rotateX: -40,
      stagger: 0.03,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5,
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }} />

      <div className="container-editorial relative z-10 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="overline mb-8">
              {hero.overline}
            </motion.p>

            {/* Headline — SplitType animated */}
            <h1 ref={headlineRef} className="text-display mb-8" style={{ visibility: 'visible' }}>
              입시보다 먼저,<br />우리 아이의 방향을 세웁니다.
            </h1>

            <motion.p variants={fadeUp} className="text-[18px] leading-[1.75] mb-10 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              학년이 올라갈수록 정보는 많아지지만, 우리 아이에게 맞는 전략은 더 찾기 어려워집니다.<br />
              지금 필요한 것은 더 많은 정보가 아니라, 성향과 목표에 맞춘 1:1 진단과 설계입니다.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticWrap>
                <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold group">
                  {hero.ctaPrimary}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticWrap>
              <a href="#framework" className="btn-ghost">
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="gold-divider mb-6" />
              <p className="text-[14px] leading-relaxed max-w-md" style={{ color: 'var(--text-tertiary)' }}>
                {hero.trustLine}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-accent uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
      </motion.div>
    </section>
  );
}
