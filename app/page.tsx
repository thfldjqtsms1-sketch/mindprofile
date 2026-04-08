'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site, intro, ch1, ch2, ch3, ch4 } from '@/lib/data';
import { ArrowRight, Plus, Minus, ExternalLink, Phone, } from 'lucide-react';

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

  // ── helper: panel class ──
  const p = (bg: 'white' | 'black' | 'cream') => {
    const sec = bg === 'white' ? 'sec-white' : bg === 'black' ? 'sec-black' : 'sec-cream';
    return `flex-shrink-0 w-screen ${isMobile ? '' : 'h-screen'} flex items-center ${sec}`;
  };
  const pad = isMobile ? '60px 24px' : '0 80px';

  // ── INTRO ──
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
            <motion.p className="t-editorial" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: 48, maxWidth: 600 }}>
              {intro.subline}
            </motion.p>
            <motion.p className="t-body" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ color: 'var(--c-text-muted)', maxWidth: 480 }}>
              {intro.body}
            </motion.p>
          </div>
        </div>
        <div className="container-buro pb-8 lg:pb-12">
          <div className="line-h" style={{ marginBottom: 20 }} />
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="hidden md:grid grid-cols-4 gap-6 flex-1">
              {intro.chapters.map((ch, i) => (
                <div key={i}>
                  <p className="t-label" style={{ marginBottom: 2 }}>{ch.num}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>{ch.title}</p>
                  <p className="t-label">{ch.range}</p>
                </div>
              ))}
            </div>
            <motion.button onClick={() => setEntered(true)} className="t-display" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'clamp(48px, 5vw, 68px)', letterSpacing: '-0.07em' }} whileHover={{ scale: 1.05 }}>
              {intro.enter}
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // ── MAIN ──
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <div ref={progressRef} className="h-full" style={{ width: 0, background: 'var(--c-black)' }} />
      </div>

      <nav className="navbar-pill">
        <span style={{ fontWeight: 600 }}>{site.name}</span>
        <div className="divider" />
        <span className="hidden lg:inline t-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Scroll →</span>
        <div className="hidden lg:block divider" />
        <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>상담 신청</a>
      </nav>

      <div ref={wrapperRef} className={isMobile ? '' : 'overflow-hidden'}>
        <div ref={trackRef} className={isMobile ? 'flex flex-col' : 'flex h-screen'}>

          {/* ═══ 1. CH1 TITLE ═══ */}
          <div className={p('black')} style={{ padding: pad }}>
            <div style={{ maxWidth: 700 }}>
              <p className="t-chapter" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Chapter 1 — 방향의 시작</p>
              <h2 className="t-editorial-dark" style={{ marginBottom: 32 }}>{ch1.editorial}</h2>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 450 }}>
                학년이 올라갈수록 정보는 많아지지만, 우리 아이에게 맞는 전략은 더 찾기 어려워집니다. 지금 필요한 것은 더 많은 정보가 아닙니다.
              </p>
            </div>
          </div>

          {/* ═══ 2~5. PAIN BLOCKS ═══ */}
          {ch1.blocks.map((block, i) => (
            <div key={i} className={p('black')} style={{ padding: pad }}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center" style={{ maxWidth: 900 }}>
                <span style={{ fontSize: isMobile ? 60 : 100, fontWeight: 200, lineHeight: 1, color: 'rgba(255,255,255,0.04)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.07em', flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 500, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 16 }}>{block.title}</h3>
                  <p className="t-body" style={{ color: 'rgba(255,255,255,0.55)' }}>{block.body}</p>
                </div>
              </div>
            </div>
          ))}

          {/* ═══ 6. ARTICLE QUOTE — dark psychology anchor ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div style={{ maxWidth: 600 }}>
              <img src="/insta-5.jpg" alt="베리타스알파 기사" style={{ width: '100%', maxWidth: 400, borderRadius: 4, marginBottom: 32, opacity: 0.9 }} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, marginBottom: 20 }}>
                {ch1.articleQuote}
              </p>
              <p className="t-label">{ch1.articleSource}</p>
            </div>
          </div>

          {/* ═══ 7. MEGA STATEMENT — loss aversion trigger ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div style={{ textAlign: isMobile ? 'left' : 'center', width: '100%' }}>
              <p className="t-mega">성적이 아니라</p>
              <p className="t-mega">설계 부재입니다.</p>
              <p className="t-body" style={{ color: 'var(--c-text-muted)', marginTop: 32, maxWidth: 400, marginLeft: isMobile ? 0 : 'auto', marginRight: isMobile ? 0 : 'auto' }}>
                지금 방향을 세우지 않으면, 나중에 세울 수 있는 폭이 좁아집니다.
              </p>
            </div>
          </div>

          {/* ═══ 8. COMPARISON — framing effect ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full" style={{ maxWidth: 800 }}>
              <div style={{ padding: isMobile ? '24px 0' : '0 48px 0 0', borderRight: isMobile ? 'none' : '1px solid var(--c-border)', borderBottom: isMobile ? '1px solid var(--c-border)' : 'none' }}>
                <p className="t-label" style={{ marginBottom: 24 }}>{ch1.comparison.before.label}</p>
                {ch1.comparison.before.items.map((item, i) => (
                  <p key={i} className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 14 }}>— {item}</p>
                ))}
              </div>
              <div style={{ padding: isMobile ? '24px 0 0' : '0 0 0 48px' }}>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 24 }}>{ch1.comparison.after.label}</p>
                {ch1.comparison.after.items.map((item, i) => (
                  <p key={i} className="t-body" style={{ color: 'var(--c-text)', fontWeight: 500, marginBottom: 14 }}>→ {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ 9. CH2 TITLE ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div style={{ maxWidth: 700 }}>
              <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 2 — 설계의 기술</p>
              <h2 className="t-editorial" style={{ marginBottom: 32 }}>{ch2.editorial}</h2>
              <p className="t-body" style={{ color: 'var(--c-text-muted)', maxWidth: 450 }}>
                점수와 공부법 중심이 아닌, 진로에서 출발하는 입시 설계. 성향 분석 → 진로 탐색 → 몰입 경험 설계 → 전공 및 입시 전략 수립.
              </p>
            </div>
          </div>

          {/* ═══ 10. SIXSENSE — authority bias ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div style={{ maxWidth: 1000, width: '100%' }}>
              <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 12 }}>{ch2.sixsense.title}</p>
              <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 40, maxWidth: 500 }}>{ch2.sixsense.desc}</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {ch2.sixsense.types.map((type, i) => (
                  <div key={i} style={{ padding: isMobile ? '20px 12px' : '32px 24px', borderLeft: i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                    <span style={{ fontSize: isMobile ? 32 : 48, fontWeight: 200, lineHeight: 1, color: 'rgba(0,0,0,0.05)', display: 'block', marginBottom: 8 }}>0{i + 1}</span>
                    <p style={{ fontSize: isMobile ? 16 : 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>{type.name}</p>
                    <p className="t-body-sm" style={{ color: 'var(--c-text-muted)' }}>{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ 11. BOOK PROMO IMAGE ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center" style={{ maxWidth: 900 }}>
              <img src="/insta-1.jpg" alt="성향 기반 중학 진로 로드맵" style={{ width: isMobile ? '60%' : 300, borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }} />
              <div>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 12 }}>저서</p>
                <p style={{ fontSize: isMobile ? 22 : 28, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 12 }}>{ch4.profile.book.title}</p>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 8 }}>{ch4.profile.book.publisher} · {ch4.profile.book.pages} · {ch4.profile.book.price}</p>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 24 }}>{ch4.profile.book.desc}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontStyle: 'italic', color: 'var(--c-text-muted)', marginBottom: 24 }}>
                  &ldquo;성향을 알면, 진로가 보입니다&rdquo;
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">도서 구매 <ExternalLink size={14} /></a>
                  <a href={site.articleUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">베리타스알파 기사 <ExternalLink size={14} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ 12~15. FRAMEWORK STEPS ═══ */}
          {ch2.framework.map((step) => (
            <div key={step.num} className={p('white')} style={{ padding: pad }}>
              <div style={{ maxWidth: 520 }}>
                <span style={{ fontSize: isMobile ? 80 : 120, fontWeight: 200, lineHeight: 1, color: 'rgba(0,0,0,0.03)', display: 'block', marginBottom: -10, fontFamily: 'var(--font-sans)', letterSpacing: '-0.07em' }}>{step.num}</span>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 12, fontWeight: 500 }}>{step.name}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 28 : 36, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.15, marginBottom: 24 }}>{step.title}</h3>
                <p className="t-body" style={{ color: 'var(--c-text-muted)' }}>{step.body}</p>
              </div>
            </div>
          ))}

          {/* ═══ 16. PROGRAMS ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div className="flex flex-col lg:flex-row gap-0" style={{ width: '100%', maxWidth: 1000 }}>
              {ch2.programs.map((prog, i) => (
                <div key={i} className="flex-1" style={{ padding: isMobile ? '24px 0' : '40px 32px', borderLeft: !isMobile && i > 0 ? '1px solid var(--c-border)' : 'none', borderTop: isMobile && i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                  <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 24 }}>{prog.target}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {prog.items.map((item, j) => (
                      <li key={j} className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 12, paddingLeft: 16, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0 }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ 17. PRICING — anchoring effect ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div style={{ maxWidth: 600, width: '100%' }}>
              <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 24 }}>비용 안내</p>
              <div style={{ marginBottom: 32 }}>
                {[
                  { l: ch2.pricing.coaching1.label, p: ch2.pricing.coaching1.price, sub: '' },
                  { l: ch2.pricing.coaching12.label, p: ch2.pricing.coaching12.price, sub: ch2.pricing.coaching12.note },
                  ...ch2.pricing.admissions.map(a => ({ l: `입시 추가 — ${a.school}`, p: a.price, sub: '' })),
                  { l: `${ch2.pricing.consultOnly.label}`, p: ch2.pricing.consultOnly.price, sub: ch2.pricing.consultOnly.note },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', padding: '16px 0', borderBottom: '1px solid var(--c-border)', gap: 16 }}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 500 }}>{row.l}</p>
                      {row.sub && <p className="t-label" style={{ marginTop: 2 }}>{row.sub}</p>}
                    </div>
                    <p style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', flexShrink: 0 }}>{row.p}</p>
                  </div>
                ))}
              </div>
              <p className="t-label">정원: {ch2.pricing.capacity} · {ch2.pricing.period}</p>
              <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginTop: 8 }}>{ch2.pricing.note}</p>
            </div>
          </div>

          {/* ═══ 18. SCARCITY TRIGGER ═══ */}
          <div className={p('black')} style={{ padding: pad }}>
            <div style={{ textAlign: isMobile ? 'left' : 'center', width: '100%' }}>
              <p className="t-mega" style={{ color: '#fff' }}>학년별</p>
              <p className="t-mega" style={{ color: 'var(--c-accent)' }}>정원 10명.</p>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 32, maxWidth: 400, marginLeft: isMobile ? 0 : 'auto', marginRight: isMobile ? 0 : 'auto' }}>
                정원 초과 시 신청 불가. 지금이 아이의 방향을 세울 수 있는 시간입니다.
              </p>
              <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill" style={{ marginTop: 32 }}>
                코칭 신청하기 <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* ═══ 19. CH3 TITLE + STATS ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div style={{ width: '100%', maxWidth: 800 }}>
              <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 3 — 결과의 증명</p>
              <h2 className="t-editorial" style={{ marginBottom: 48 }}>{ch3.editorial}</h2>
              <div className="line-h" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {ch3.stats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '24px 12px' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? 32 : 48, fontWeight: 300, letterSpacing: '-0.05em', marginBottom: 4 }}>{s.value}</div>
                    <p className="t-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="line-h" />
            </div>
          </div>

          {/* ═══ 20~22. ACHIEVEMENTS ═══ */}
          {ch3.achievements.map((ach, i) => (
            <div key={i} className={p('black')} style={{ padding: pad }}>
              <div style={{ maxWidth: 500 }}>
                <p className="t-label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{ach.category}</p>
                <div className="flex flex-wrap gap-2" style={{ marginBottom: 20 }}>
                  {ach.schools.map((s) => (
                    <span key={s} style={{ fontSize: 15, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>{s}</span>
                  ))}
                </div>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.5)' }}>{ach.desc}</p>
              </div>
            </div>
          ))}

          {/* ═══ 23. BOOK REVIEW (베리타스) ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div style={{ maxWidth: 550 }}>
              <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 20 }}>{ch3.bookReview.title}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 17 : 22, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, marginBottom: 20 }}>
                {ch3.bookReview.quote}
              </p>
              <p className="t-label">{ch3.bookReview.source}</p>
            </div>
          </div>

          {/* ═══ 24~25. BLOG REVIEWS ═══ */}
          {ch3.blogReviews.map((r, i) => (
            <div key={`blog-${i}`} className={p('white')} style={{ padding: pad }}>
              <div style={{ maxWidth: 500 }}>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 16 }}>블로그 서평</p>
                <p style={{ fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 20 }}>{r.title}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--c-text-muted)', marginBottom: 20 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="t-label">{r.author}</p>
              </div>
            </div>
          ))}

          {/* ═══ 26. INSTAGRAM GALLERY ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div style={{ width: '100%', maxWidth: 900 }}>
              <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 24 }}>Instagram</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {['/insta-1.jpg', '/insta-2.jpg', '/insta-3.jpg', '/insta-4.jpg', '/insta-5.jpg', '/insta-6.jpg'].map((src, i) => (
                  <a key={i} href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 4, overflow: 'hidden' }}>
                    <img src={src} alt={`마인드프로필 인스타 ${i + 1}`} style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }} />
                  </a>
                ))}
              </div>
              <p className="t-label" style={{ marginTop: 16 }}>{site.instaHandle} · {ch4.profile.bio}</p>
            </div>
          </div>

          {/* ═══ 27. CH4 — PROFILE ═══ */}
          <div className={p('white')} style={{ padding: pad }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-start" style={{ maxWidth: 1000 }}>
              <div className="lg:col-span-4">
                <img src="/profile.jpg" alt="진승호 대표" style={{ width: '100%', maxWidth: isMobile ? 200 : '100%', borderRadius: 4, marginBottom: 16 }} />
                <p style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.03em' }}>{ch4.profile.name}</p>
                <p className="t-label" style={{ marginTop: 4 }}>{ch4.profile.role}</p>
              </div>
              <div className="lg:col-span-8">
                <p className="t-chapter" style={{ marginBottom: 20 }}>Chapter 4 — 함께의 시작</p>
                <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 24, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--c-border)' }}>
                  {ch4.profile.philosophy}
                </blockquote>
                <div className="grid grid-cols-1 gap-0">
                  {ch4.profile.credentials.map((cred, i) => (
                    <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--c-border)', display: 'flex', gap: 8, alignItems: 'start' }}>
                      <span className="t-label" style={{ width: 20, flexShrink: 0, textAlign: 'right' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="t-body-sm">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ 28. FAQ ═══ */}
          <div className={p('cream')} style={{ padding: pad }}>
            <div style={{ width: '100%', maxWidth: 600 }}>
              <p style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 32 }}>자주 묻는 질문</p>
              {ch4.faq.map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--c-border)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em', color: openFaq === i ? 'var(--c-accent)' : 'var(--c-text)', transition: 'color 0.3s', paddingRight: 12 }}>{item.q}</span>
                    <span style={{ color: 'var(--c-text-muted)', flexShrink: 0 }}>{openFaq === i ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                        <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', paddingBottom: 16 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ 29. FINAL CTA ═══ */}
          <div className={p('black')} style={{ padding: pad }}>
            <div style={{ maxWidth: 550 }}>
              <h2 className="t-editorial-dark" style={{ marginBottom: 24 }}>{ch4.cta.headline}</h2>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 40 }}>{ch4.cta.body}</p>
              <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: 24 }}>
                <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill">
                  초5~고2 코칭 상담
                </a>
                <a href={site.applyConsulting} target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                  고3 입시 컨설팅
                </a>
              </div>
              <div className="flex flex-col gap-2" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                <a href={`tel:${site.phone}`} className="flex items-center gap-2" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Phone size={13} /> {site.phone}
                </a>
                <span>카카오톡: {site.kakao}</span>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram: {site.instaHandle}</a>
              </div>
              <p className="t-label" style={{ color: 'rgba(255,255,255,0.2)', marginTop: 32 }}>{ch4.cta.trust}</p>
              <p className="t-label" style={{ color: 'rgba(255,255,255,0.15)', marginTop: 48 }}>&copy; {new Date().getFullYear()} {site.name}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
