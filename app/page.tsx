'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site, intro, ch1, ch2, ch3, ch4 } from '@/lib/data';
import { ArrowRight, Plus, Minus, ExternalLink } from 'lucide-react';

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // GSAP horizontal scroll — entire site
  useEffect(() => {
    if (!entered || typeof window === 'undefined') return;

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
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper,
              pin: true,
              scrub: 1,
              end: () => `+=${totalWidth}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                progress.style.width = `${self.progress * 100}%`;
              },
            },
          });
        }, wrapperRef);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [entered]);

  // ── INTRO SCREEN (before GO) ──
  if (!entered) {
    return (
      <div className="fixed inset-0 sec-white flex flex-col justify-between" style={{ zIndex: 200 }}>
        <div className="container-buro pt-12">
          <p className="t-label">마인드프로필 · 진로진학입시 교육컨설팅</p>
        </div>

        <div className="container-buro flex-1 flex items-center">
          <div style={{ maxWidth: 800 }}>
            <motion.h1
              className="t-display"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 32 }}
            >
              {intro.headline}
            </motion.h1>
            <motion.p
              className="t-editorial"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 48, maxWidth: 600 }}
            >
              {intro.subline}
            </motion.p>
            <motion.p
              className="t-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ color: 'var(--c-text-muted)', maxWidth: 480, marginBottom: 48 }}
            >
              {intro.body}
            </motion.p>
          </div>
        </div>

        {/* Bottom: chapters + GO */}
        <div className="container-buro pb-12">
          <div className="line-h" style={{ marginBottom: 20 }} />
          <div className="flex items-end justify-between">
            <div className="hidden md:grid grid-cols-4 gap-6 flex-1">
              {intro.chapters.map((ch, i) => (
                <div key={i}>
                  <p className="t-label" style={{ marginBottom: 2 }}>{ch.num}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>{ch.title}</p>
                  <p className="t-label">{ch.range}</p>
                </div>
              ))}
            </div>
            <motion.button
              onClick={() => setEntered(true)}
              className="t-display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 'clamp(48px, 5vw, 68px)', letterSpacing: '-0.07em',
              }}
              whileHover={{ scale: 1.05 }}
            >
              Go
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // ── MAIN HORIZONTAL SCROLL SITE ──
  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <div ref={progressRef} className="h-full" style={{ width: 0, background: 'var(--c-black)' }} />
      </div>

      {/* Navbar pill */}
      <nav className="navbar-pill" style={{ zIndex: 100 }}>
        <span style={{ fontWeight: 600 }}>{site.name}</span>
        <div className="divider" />
        <span className="t-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Scroll →</span>
        <div className="divider" />
        <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
          상담 신청
        </a>
      </nav>

      {/* Horizontal scroll wrapper */}
      <div ref={wrapperRef} className="overflow-hidden">
        <div ref={trackRef} className="flex h-screen">

          {/* ═══ PANEL: Chapter 1 Title ═══ */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center sec-black" style={{ padding: '0 80px' }}>
            <div>
              <p className="t-chapter" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Chapter 1 — 방향의 시작</p>
              <h2 className="t-editorial-dark" style={{ maxWidth: 700 }}>
                {ch1.editorial}
              </h2>
            </div>
          </div>

          {/* ═══ PANELS: Chapter 1 Pain blocks ═══ */}
          {ch1.blocks.map((block, i) => (
            <div key={i} className="flex-shrink-0 h-screen flex items-center sec-black" style={{ width: '80vw', padding: '0 80px', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ maxWidth: 500 }}>
                <span style={{ fontSize: 100, fontWeight: 200, lineHeight: 1, color: 'rgba(255,255,255,0.04)', display: 'block', marginBottom: -16, fontFamily: 'var(--font-sans)', letterSpacing: '-0.07em' }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 500, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 20 }}>
                  {block.title}
                </h3>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {block.body}
                </p>
              </div>
            </div>
          ))}

          {/* ═══ PANEL: Mega statement ═══ */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center sec-white" style={{ padding: '0 40px' }}>
            <div style={{ textAlign: 'center' }}>
              <p className="t-mega">성적이 아니라</p>
              <p className="t-mega">설계 부재입니다.</p>
            </div>
          </div>

          {/* ═══ PANEL: Comparison ═══ */}
          <div className="flex-shrink-0 h-screen flex items-center sec-cream" style={{ width: '90vw', padding: '0 80px' }}>
            <div className="grid grid-cols-2 gap-0 w-full" style={{ maxWidth: 800 }}>
              <div style={{ paddingRight: 48, borderRight: '1px solid var(--c-border)' }}>
                <p className="t-label" style={{ marginBottom: 32 }}>{ch1.comparison.before.label}</p>
                {ch1.comparison.before.items.map((item, i) => (
                  <p key={i} className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 16 }}>— {item}</p>
                ))}
              </div>
              <div style={{ paddingLeft: 48 }}>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 32 }}>{ch1.comparison.after.label}</p>
                {ch1.comparison.after.items.map((item, i) => (
                  <p key={i} className="t-body" style={{ color: 'var(--c-text)', fontWeight: 500, marginBottom: 16 }}>→ {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ PANEL: Chapter 2 Title ═══ */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center sec-white" style={{ padding: '0 80px' }}>
            <div>
              <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 2 — 설계의 기술</p>
              <h2 className="t-editorial" style={{ maxWidth: 700 }}>
                {ch2.editorial}
              </h2>
            </div>
          </div>

          {/* ═══ PANELS: Framework steps ═══ */}
          {ch2.framework.map((step) => (
            <div key={step.num} className="flex-shrink-0 h-screen flex items-center sec-white" style={{ width: '80vw', padding: '0 80px', borderLeft: '1px solid var(--c-border)' }}>
              <div style={{ maxWidth: 520 }}>
                <span style={{ fontSize: 120, fontWeight: 200, lineHeight: 1, color: 'rgba(0,0,0,0.03)', display: 'block', marginBottom: -20, fontFamily: 'var(--font-sans)', letterSpacing: '-0.07em' }}>
                  {step.num}
                </span>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginBottom: 12, fontWeight: 500 }}>{step.name}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.15, marginBottom: 24 }}>
                  {step.title}
                </h3>
                <p className="t-body" style={{ color: 'var(--c-text-muted)' }}>{step.body}</p>
              </div>
            </div>
          ))}

          {/* ═══ PANEL: Programs ═══ */}
          <div className="flex-shrink-0 h-screen flex items-center sec-cream" style={{ width: '100vw', padding: '0 80px' }}>
            <div className="flex gap-0 h-[60vh]" style={{ width: '100%' }}>
              {ch2.programs.map((prog, i) => (
                <div key={i} className="flex-1" style={{ padding: '40px 32px', borderLeft: i > 0 ? '1px solid var(--c-border)' : 'none' }}>
                  <p style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 32 }}>{prog.target}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {prog.items.map((item, j) => (
                      <li key={j} className="t-body-sm" style={{ color: 'var(--c-text-muted)', marginBottom: 14, paddingLeft: 16, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0 }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ PANEL: Chapter 3 Title + Stats ═══ */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center sec-white" style={{ padding: '0 80px' }}>
            <div style={{ width: '100%', maxWidth: 900 }}>
              <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 3 — 결과의 증명</p>
              <h2 className="t-editorial" style={{ marginBottom: 60 }}>{ch3.editorial}</h2>
              <div className="line-h" />
              <div className="grid grid-cols-4 gap-0">
                {ch3.stats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'center', padding: '32px 16px' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 48, fontWeight: 300, letterSpacing: '-0.05em', marginBottom: 8 }}>{s.value}</div>
                    <p className="t-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="line-h" style={{ marginBottom: 24 }} />
              <div className="flex flex-wrap gap-2">
                {ch3.schools.map((name) => (
                  <span key={name} style={{ fontSize: 13, padding: '5px 12px', borderRadius: 999, border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}>{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ PANELS: Testimonials ═══ */}
          {ch3.testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 h-screen flex items-center sec-cream" style={{ width: '60vw', padding: '0 80px', borderLeft: '1px solid var(--c-border)' }}>
              <div style={{ maxWidth: 420 }}>
                <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 32, color: 'var(--c-text)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="t-label">{t.author}</p>
                <p className="t-label" style={{ color: 'var(--c-accent)', marginTop: 4 }}>{t.context}</p>
              </div>
            </div>
          ))}

          {/* ═══ PANEL: Chapter 4 — Profile ═══ */}
          <div className="flex-shrink-0 h-screen flex items-center sec-white" style={{ width: '120vw', padding: '0 80px' }}>
            <div className="grid grid-cols-12 gap-12 w-full items-center">
              <div className="col-span-4">
                <img src="/profile.jpg" alt="진승호 대표" style={{ width: '100%', borderRadius: 4, marginBottom: 24 }} />
                <p style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.03em' }}>{ch4.profile.name}</p>
                <p className="t-label" style={{ marginTop: 4 }}>{ch4.profile.role}</p>
              </div>
              <div className="col-span-8">
                <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 4 — 함께의 시작</p>
                <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid var(--c-border)' }}>
                  {ch4.profile.philosophy}
                </blockquote>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
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

          {/* ═══ PANEL: Book ═══ */}
          <div className="flex-shrink-0 h-screen flex items-center sec-cream" style={{ width: '70vw', padding: '0 80px' }}>
            <div className="flex gap-16 items-center">
              <img src="/book-3d.jpg" alt="성향 기반 중학 진로 로드맵" style={{ height: 400, borderRadius: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
              <div style={{ maxWidth: 400 }}>
                <p style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 16 }}>{ch4.profile.book.title}</p>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 8 }}>진승호 저 · 초록비책공방 · 264쪽 · 19,000원</p>
                <p className="t-body" style={{ color: 'var(--c-text-muted)', marginBottom: 32 }}>{ch4.profile.book.desc}</p>
                <div className="flex gap-3">
                  <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">도서 구매 <ExternalLink size={14} /></a>
                  <a href={site.articleUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">베리타스알파 기사 <ExternalLink size={14} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL: FAQ ═══ */}
          <div className="flex-shrink-0 h-screen flex items-center sec-white" style={{ width: '80vw', padding: '0 80px' }}>
            <div style={{ width: '100%', maxWidth: 600 }}>
              <p style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 40 }}>자주 묻는 질문</p>
              {ch4.faq.map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--c-border)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.02em', color: openFaq === i ? 'var(--c-accent)' : 'var(--c-text)', transition: 'color 0.3s', paddingRight: 16 }}>{item.q}</span>
                    <span style={{ color: 'var(--c-text-muted)', flexShrink: 0 }}>{openFaq === i ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                        <p className="t-body-sm" style={{ color: 'var(--c-text-muted)', paddingBottom: 18 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ PANEL: Final CTA ═══ */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center sec-black" style={{ padding: '0 80px' }}>
            <div style={{ maxWidth: 600 }}>
              <h2 className="t-editorial-dark" style={{ marginBottom: 32 }}>{ch4.cta.headline}</h2>
              <p className="t-body" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 48, maxWidth: 450 }}>{ch4.cta.body}</p>
              <div className="flex flex-col sm:flex-row gap-4" style={{ marginBottom: 32 }}>
                <a href={site.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold-pill">
                  초5~고2 코칭 상담 <ArrowRight size={16} />
                </a>
                <a href={site.applyConsulting} target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                  고3 입시 컨설팅 <ArrowRight size={16} />
                </a>
              </div>
              <p className="t-label" style={{ color: 'rgba(255,255,255,0.25)' }}>{ch4.cta.trust}</p>
              <div style={{ marginTop: 60, display: 'flex', gap: 24, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
                <span>카카오톡: {site.kakao}</span>
                <span>&copy; {new Date().getFullYear()} {site.name}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
