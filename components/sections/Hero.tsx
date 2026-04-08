'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { hero, siteConfig } from '@/lib/data';
import { blurReveal, fadeUp, stagger } from '@/lib/animations';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      }} />

      <div className="container-editorial relative z-10 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Overline */}
            <motion.p variants={fadeUp} className="overline mb-8">
              {hero.overline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={blurReveal}
              className="text-display mb-8"
              style={{ whiteSpace: 'pre-line' }}
            >
              {hero.headline}
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="text-[18px] leading-[1.75] mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}
            >
              {hero.body}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold group">
                {hero.ctaPrimary}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#framework" className="btn-ghost">
                {hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Trust line */}
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
