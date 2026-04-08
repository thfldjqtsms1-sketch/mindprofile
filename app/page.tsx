'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site, intro, ch1, ch2, ch3, ch4 } from '@/lib/data';
import { Plus, Minus, ExternalLink, Phone } from 'lucide-react';

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!entered || typeof window === 'undefined' || isMobile) return;
    let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | null = null;
    const timer = setTimeout(() => {
      import('@/lib/gsap').then(({ gsap }) => {
        const track = trackRef.current;
        const wrapper = wrapperRef.current;
        const progress = progressRef.current;
        if (!track || !wrapper || !progress) return;
        ctx = gsap.context(() => {
          const totalWidth = track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: -totalWidth, ease: 'none',
            scrollTrigger: {
              trigger: wrapper, pin: true, scrub: 1,
              end: () => `+=${totalWidth}`, invalidateOnRefresh: true,
              onUpdate: (self) => { progress.style.width = `${self.progress * 100}%`; },
            },
          });
        }, wrapperRef);
      });
    }, 100);
    return () => { clearTimeout(timer); if (ctx) ctx.revert(); };
  }, [entered, isMobile]);

  const px = isMobile ? '40px 24px' : '0 clamp(60px, 5vw, 100px)';
  const Panel = ({ bg, children, className = '' }: { bg: 'w' | 'b' | 'c'; children: React.ReactNode; className?: string }) => (
    <div className={`flex-shrink-0 w-screen ${isMobile ? 'min-h-[60vh]' : 'h-screen'} flex items-center ${bg === 'b' ? 'sec-black' : bg === 'c' ? 'sec-cream' : 'sec-white'} ${className}`} style={{ padding: px }}>
      {children}
    </div>
  );

  // ─── INTRO ───
  if (!entered) {
    return (
      <div className="fixed inset-0 sec-white flex flex-col justify-between" style={{ zIndex: 200 }}>
        <div className="container-buro pt-8 lg:pt-12">
          <p className="t-label">{site.name} · {site.tagline}</p>
        </div>
        <div className="container-buro flex-1 flex items-center">
          <div style={{ maxWidth: 800 }}>
            <motion.h1 className="t-display" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: 32 }}>
              {intro.headline}
            </motion.h1>
            <motion.p className="t-editorial" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ marginBottom: 40, maxWidth: 600 }}>
              {intro.subline}
            </motion.p>
            <motion.p className="t-body" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ color: 'var(--c-text-muted)', maxWidth: 480 }}>
              {intro.body}
            </motion.p>
          </div>
        </div>
        <div className="container-buro pb-8 lg:pb-12">
          <div className="line-h" style={{ marginBottom: 16 }} />
          <div className="flex items-end justify-between">
            <div className="hidden md:grid grid-cols-4 gap-4 flex-1">
              {intro.chapters.map((ch, i) => (
                <div key={i}>
                  <p className="t-label" style={{ marginBottom: 2 }}>{ch.num}</p>
                  <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.02em' }}>{ch.title}</p>
                </div>
              ))}
            </div>
            <motion.button onClick={() => setEntered(true)} className="t-display" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(48px, 5vw, 68px)', letterSpacing: '-0.07em' }} whileHover={{ scale: 1.05 }}>
              Go
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // ─── MAIN ───
  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <div ref={progressRef} className="h-full" style={{ width: 0, background: 'var(--c-black)' }} />
      </div>

      {/* Nav pill */}
      <nav className="navbar-pill">
        <span style={{ fontWeight: 600, fontSize: isMobile ? 11 : 13 }}>{site.name}</span>
        <div className="divider" />
        {!isMobile && <><span className="t-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Scroll →</span><div className="divider" /></>}
        <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: isMobile ? 11 : 13, whiteSpace: 'nowrap' }}>상담 신청</a>
      </nav>

      <div ref={wrapperRef} className={isMobile ? '' : 'overflow-hidden'}>
        <div ref={trackRef} className={isMobile ? 'flex flex-col' : 'flex h-screen'}>

          {/* ══════════════════════════════════════
             CHAPTER 1 — 방향의 시작
             ══════════════════════════════════════ */}

          {/* P1: Ch1 title + subtitle */}
          <Panel bg="b">
            <div style={{ maxWidth: 700 }}>
              <p className="t-chapter" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Chapter 1</p>
              <h2 className="t-editorial-dark" style={{ marginBottom: 24 }}>{ch1.editorial}</h2>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 420 }}>
                학년이 올라갈수록 정보는 많아지지만, 우리 아이에게 맞는 전략은 더 찾기 어려워집니다.
              </p>
              {/* Decorative large text */}
              <p style={{ fontSize: 'clamp(100px, 15vw, 200px)', fontWeight: 200, lineHeight: 0.8, color: 'rgba(255,255,255,0.02)', marginTop: 40, fontFamily: 'var(--font-sans)', letterSpacing: '-0.07em' }}>01</p>
            </div>
          </Panel>

          {/* P2: Pain blocks 1+2 (merged) */}
          <Panel bg="b">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" style={{ maxWidth: 900, width: '100%' }}>
              {ch1.blocks.slice(0, 2).map((block, i) => (
                <div key={i} style={{ padding: isMobile ? '0' : '0 20px' }}>
                  <span style={{ fontSize: 48, fontWeight: 200, lineHeight: 1, color: 'rgba(255,255,255,0.06)', display: 'block', marginBottom: 8, fontFamily: 'var(--font-sans)', letterSpacing: '-0.05em' }}>0{i + 1}</span>
                  <h3 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 500, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 12 }}>{block.title}</h3>
                  <p className="t-body-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{block.body}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* P3: Pain blocks 3+4 (merged) */}
          <Panel bg="b">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" style={{ maxWidth: 900, width: '100%' }}>
              {ch1.blocks.slice(2, 4).map((block, i) => (
                <div key={i} style={{ padding: isMobile ? '0' : '0 20px' }}>
                  <span style={{ fontSize: 48, fontWeight: 200, lineHeight: 1, color: 'rgba(255,255,255,0.06)', display: 'block', marginBottom: 8, fontFamily: 'var(--font-sans)', letterSpacing: '-0.05em' }}>0{i + 3}</span>
                  <h3 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 500, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 12 }}>{block.title}</h3>
                  <p className="t-body-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{block.body}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* P4: Article quote + mega */}
          <Panel bg="w">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ maxWidth: 1000, width: '100%' }}>
              <div>
                <p className="t-mega" style={{ marginBottom: 16 }}>성적이 아니라</p>
                <p className="t-mega">설계 부재입니다.</p>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', marginTop: 24, maxWidth: 350 }}>
                  지금 방향을 세우지 않으면, 나중에 세울 수 있는 폭이 좁아집니다.
                </p>
              </div>
              <div style={{ borderLeft: isMobile ? 'none' : '1px solid var(--c-border)', paddingLeft: isMobile ? 0 : 48, marginTop: isMobile ? 24 : 0 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 16 : 20, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, color: 'var(--c-text-muted)', marginBottom: 16 }}>
                  {ch1.articleQuote}
                </p>
                <p className="t-label">{ch1.articleSource}</p>
              </div>
            </div>
          </Panel>

          {/* P5: Comparison */}
          <Panel bg="c">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full" style={{ maxWidth: 800 }}>
              <div style={{ padding: isMobile ? '20px 0' : '0 40px 0 0', borderRight: isMobile ? 'none' : '1px solid var(--c-border)', borderBottom: isMobile ? '1px solid var(--c-border)' : 'none' }}>
                <p className="t-label" style={{ marginBottom: 20 }}>{ch1.comparison.before.label}</p>
                {ch1.comparison.before.items.map((item, i) => (
                  <p key={i} className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 12 }}>— {item}</p>
                ))}
              </div>
              <div style={{ padding: isMobile ? '20px 0 0' : '0 0 0 40px' }}>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 20 }}>{ch1.comparison.after.label}</p>
                {ch1.comparison.after.items.map((item, i) => (
                  <p key={i} className="t-body-sm" style={{ color: 'var(--c-text)', fontWeight: 500, marginBottom: 12 }}>→ {item}</p>
                ))}
              </div>
            </div>
          </Panel>

          {/* ══════════════════════════════════════
             CHAPTER 2 — 설계의 기술
             ══════════════════════════════════════ */}

          {/* P6: Ch2 title + sixsense */}
          <Panel bg="w">
            <div style={{ maxWidth: 900, width: '100%' }}>
              <p className="t-chapter" style={{ marginBottom: 16 }}>Chapter 2</p>
              <h2 className="t-editorial" style={{ marginBottom: 24 }}>{ch2.editorial}</h2>
              <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 40, maxWidth: 450 }}>{ch2.sixsense.desc}</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {ch2.sixsense.types.map((type, i) => (
                  <div key={i} style={{ padding: isMobile ? '16px 8px' : '24px 20px', borderLeft: i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                    <p style={{ fontSize: isMobile ? 15 : 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 6, color: 'var(--c-accent)' }}>{type.name}</p>
                    <p style={{ fontSize: isMobile ? 12 : 13, color: 'var(--c-text-muted)', lineHeight: 1.5 }}>{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* P7: Book + review (merged) */}
          <Panel bg="c">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center" style={{ maxWidth: 900 }}>
              <img src="/insta-1.jpg" alt="성향 기반 중학 진로 로드맵" style={{ width: isMobile ? '50%' : 240, borderRadius: 4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: isMobile ? 20 : 26, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 8 }}>{ch4.profile.book.title}</p>
                <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 16 }}>{ch4.profile.book.publisher} · {ch4.profile.book.pages} · {ch4.profile.book.price}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontStyle: 'italic', color: 'var(--c-text-muted)', marginBottom: 16 }}>
                  &ldquo;{ch3.bookReview.quote.substring(0, 120)}...&rdquo;
                </p>
                <p className="t-label" style={{ marginBottom: 20 }}>{ch3.bookReview.source}</p>
                <div className="flex gap-2 flex-wrap">
                  <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ fontSize: 12 }}>도서 구매 <ExternalLink size={12} /></a>
                  <a href={site.articleUrl} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ fontSize: 12 }}>기사 보기 <ExternalLink size={12} /></a>
                </div>
              </div>
            </div>
          </Panel>

          {/* P8-9: Framework steps (2 per panel) */}
          <Panel bg="w">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" style={{ maxWidth: 900, width: '100%' }}>
              {ch2.framework.slice(0, 2).map((step) => (
                <div key={step.num}>
                  <span style={{ fontSize: 64, fontWeight: 200, lineHeight: 1, color: 'rgba(0,0,0,0.04)', display: 'block', marginBottom: 4, fontFamily: 'var(--font-sans)', letterSpacing: '-0.05em' }}>{step.num}</span>
                  <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 8 }}>{step.name}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 24 : 30, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, marginBottom: 16 }}>{step.title}</h3>
                  <p className="t-body-sm" style={{ color: 'var(--c-text-muted)' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel bg="w">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" style={{ maxWidth: 900, width: '100%' }}>
              {ch2.framework.slice(2, 4).map((step) => (
                <div key={step.num}>
                  <span style={{ fontSize: 64, fontWeight: 200, lineHeight: 1, color: 'rgba(0,0,0,0.04)', display: 'block', marginBottom: 4, fontFamily: 'var(--font-sans)', letterSpacing: '-0.05em' }}>{step.num}</span>
                  <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 8 }}>{step.name}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 24 : 30, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, marginBottom: 16 }}>{step.title}</h3>
                  <p className="t-body-sm" style={{ color: 'var(--c-text-muted)' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* P10: Programs + pricing (merged) */}
          <Panel bg="c">
            <div style={{ maxWidth: 1000, width: '100%' }}>
              <div className="flex flex-col lg:flex-row gap-0" style={{ marginBottom: isMobile ? 24 : 40 }}>
                {ch2.programs.map((prog, i) => (
                  <div key={i} className="flex-1" style={{ padding: isMobile ? '16px 0' : '0 24px', borderLeft: !isMobile && i > 0 ? '1px solid var(--c-border)' : 'none', borderTop: isMobile && i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                    <p style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 16 }}>{prog.target}</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {prog.items.map((item, j) => (
                        <li key={j} style={{ fontSize: 13, color: 'var(--c-text-muted)', marginBottom: 8, paddingLeft: 12, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0 }}>·</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="line-h" style={{ marginBottom: 16 }} />
              <div className="flex flex-wrap gap-x-8 gap-y-2" style={{ fontSize: 13, color: 'var(--c-text-muted)' }}>
                <span>1회 코칭 {ch2.pricing.coaching1.price}</span>
                <span>장기(12개월) {ch2.pricing.coaching12.price}</span>
                <span>정원 {ch2.pricing.capacity}</span>
                <span>{ch2.pricing.period}</span>
              </div>
            </div>
          </Panel>

          {/* P11: Scarcity + CTA */}
          <Panel bg="b">
            <div style={{ textAlign: isMobile ? 'left' : 'center', width: '100%' }}>
              <p className="t-mega" style={{ color: '#fff' }}>학년별</p>
              <p className="t-mega" style={{ color: 'var(--c-accent)' }}>정원 10명.</p>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 24, maxWidth: 380, marginLeft: isMobile ? 0 : 'auto', marginRight: isMobile ? 0 : 'auto' }}>
                정원 초과 시 신청 불가합니다. 지금이 아이의 방향을 세울 수 있는 시간입니다.
              </p>
              <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill" style={{ marginTop: 32, whiteSpace: 'nowrap' }}>
                코칭 신청하기
              </a>
            </div>
          </Panel>

          {/* ══════════════════════════════════════
             CHAPTER 3 — 결과의 증명
             ══════════════════════════════════════ */}

          {/* P12: Ch3 title + stats + achievements (ALL merged) */}
          <Panel bg="w">
            <div style={{ width: '100%', maxWidth: 900 }}>
              <p className="t-chapter" style={{ marginBottom: 16 }}>Chapter 3</p>
              <h2 className="t-editorial" style={{ marginBottom: 40 }}>{ch3.editorial}</h2>
              <div className="line-h" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {ch3.stats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'center', padding: isMobile ? '16px 8px' : '24px 12px' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 28 : 40, fontWeight: 300, letterSpacing: '-0.05em', marginBottom: 4 }}>{s.value}</div>
                    <p className="t-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="line-h" style={{ marginBottom: 24 }} />
              {/* All achievements inline */}
              <div className="flex flex-wrap gap-2">
                {ch3.achievements.map((ach) => (
                  ach.schools.map((s) => (
                    <span key={s} style={{ fontSize: 13, padding: '5px 12px', borderRadius: 999, border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>{s}</span>
                  ))
                ))}
              </div>
            </div>
          </Panel>

          {/* P13: Blog reviews (both merged) + book review */}
          <Panel bg="c">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ maxWidth: 900, width: '100%' }}>
              {ch3.blogReviews.map((r, i) => (
                <div key={i} style={{ padding: '24px', border: '1px solid var(--c-border)', borderRadius: 4 }}>
                  <p style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 12 }}>{r.title}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--c-text-muted)', marginBottom: 12 }}>
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <p className="t-label">{r.author}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* ══════════════════════════════════════
             CHAPTER 4 — 함께의 시작
             ══════════════════════════════════════ */}

          {/* P14: Profile */}
          <Panel bg="w">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start" style={{ maxWidth: 1000 }}>
              <div className="lg:col-span-4">
                <img src="/profile.jpg" alt="진승호 대표" style={{ width: '100%', borderRadius: 4, marginBottom: 16 }} />
                <p style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.03em' }}>{ch4.profile.name}</p>
                <p className="t-label" style={{ marginTop: 4 }}>{ch4.profile.role}</p>
              </div>
              <div className="lg:col-span-8">
                <p className="t-chapter" style={{ marginBottom: 16 }}>Chapter 4</p>
                <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 17 : 22, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--c-border)' }}>
                  {ch4.profile.philosophy}
                </blockquote>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0">
                  {ch4.profile.credentials.map((cred, i) => (
                    <div key={i} style={{ padding: '6px 0', borderBottom: '1px solid var(--c-border)', display: 'flex', gap: 6, alignItems: 'start' }}>
                      <span className="t-label" style={{ width: 18, flexShrink: 0, textAlign: 'right', fontSize: 10 }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ fontSize: 12, color: 'var(--c-text-muted)' }}>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>

          {/* P15: FAQ */}
          <Panel bg="c">
            <div style={{ width: '100%', maxWidth: 600 }}>
              <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 24 }}>자주 묻는 질문</p>
              {ch4.faq.map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--c-border)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: openFaq === i ? 'var(--c-accent)' : 'var(--c-text)', transition: 'color 0.3s', paddingRight: 12 }}>{item.q}</span>
                    <span style={{ color: 'var(--c-text-muted)', flexShrink: 0 }}>{openFaq === i ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: 13, color: 'var(--c-text-muted)', paddingBottom: 14, lineHeight: 1.6 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Panel>

          {/* P16: Final CTA */}
          <Panel bg="b">
            <div style={{ maxWidth: 500 }}>
              <h2 className="t-editorial-dark" style={{ marginBottom: 20 }}>{ch4.cta.headline}</h2>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>{ch4.cta.body}</p>
              <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: 24 }}>
                <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill" style={{ whiteSpace: 'nowrap' }}>초5~고2 코칭 상담</a>
                <a href={site.applyConsulting} target="_blank" rel="noopener noreferrer" className="btn-pill-dark" style={{ whiteSpace: 'nowrap' }}>고3 입시 컨설팅</a>
              </div>
              <div className="flex flex-col gap-2" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                <a href={`tel:${site.phone}`} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={12} /> {site.phone}</a>
                <span>카카오톡: {site.kakao}</span>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram {site.instaHandle}</a>
              </div>
              <p className="t-label" style={{ color: 'rgba(255,255,255,0.2)', marginTop: 24 }}>{ch4.cta.trust}</p>
              <p style={{ color: 'rgba(255,255,255,0.1)', marginTop: 32, fontSize: 11 }}>&copy; {new Date().getFullYear()} {site.name}</p>
            </div>
          </Panel>

        </div>
      </div>
    </>
  );
}
