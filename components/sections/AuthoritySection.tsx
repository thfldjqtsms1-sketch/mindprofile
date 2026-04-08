'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { authority, siteConfig, bookReviews } from '@/lib/data';
import { fadeUp, slideInLeft, slideInRight, stagger, staggerSlow } from '@/lib/animations';

export default function AuthoritySection() {
  return (
    <section className="section-secondary" id="authority">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="mb-16">
            <p className="chapter-label">Chapter 04</p>
            <h2 className="text-h1" style={{ whiteSpace: 'pre-line' }}>
              {authority.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Portrait */}
            <motion.div variants={slideInLeft} className="lg:col-span-4">
              <div className="rounded-lg overflow-hidden relative" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                <div className="aspect-[3/4] flex items-center justify-center relative">
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--bg-surface) 100%)' }} />
                  <div className="text-center relative z-10 p-8">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(184,148,90,0.12)' }}>
                      <span className="font-display text-[36px]" style={{ color: 'var(--accent-gold)' }}>진</span>
                    </div>
                    <h3 className="font-display text-[28px] font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                      {authority.name}
                    </h3>
                    <p className="text-[14px]" style={{ color: 'var(--text-tertiary)' }}>{authority.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Credentials + Philosophy */}
            <motion.div variants={staggerSlow} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-8 space-y-8">
              {/* Philosophy quote */}
              <motion.div variants={fadeUp} className="pb-8" style={{ borderBottom: '1px solid var(--border-soft)' }}>
                <blockquote className="font-display text-[22px] lg:text-[26px] font-medium italic leading-[1.5]" style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
                  {authority.philosophy}
                </blockquote>
              </motion.div>

              {/* Credentials list */}
              <motion.div variants={fadeUp}>
                <ul className="space-y-3">
                  {authority.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1.5 text-[10px]" style={{ color: 'var(--accent-gold)' }}>&#9654;</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Book */}
              <motion.div variants={slideInRight} className="card-surface flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-20 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,148,90,0.1)' }}>
                  <BookOpen size={28} style={{ color: 'var(--accent-gold)' }} />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    &lsquo;{authority.book.title}&rsquo;
                  </h4>
                  <p className="text-[14px] leading-[1.7] mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    {authority.book.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={siteConfig.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-[13px] !py-2 !px-5">
                      도서 보기 <ExternalLink size={12} className="ml-1 inline" />
                    </a>
                    <a href={siteConfig.articleUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] flex items-center gap-1 transition-colors" style={{ color: 'var(--accent-gold-dim)' }}>
                      {authority.book.pressTitle} <ExternalLink size={12} />
                    </a>
                    {bookReviews.slice(0, 2).map((r, i) => (
                      <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="text-[12px] flex items-center gap-1 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        {r.source} <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
