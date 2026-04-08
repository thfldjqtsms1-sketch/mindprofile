'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ch3 } from '@/lib/data';
import { useCountUp } from '@/lib/gsap';

function Stat({ value, label }: { value: string; label: string }) {
  const isNum = /^\d+/.test(value);
  const num = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, '');
  const ref = useCountUp(isNum ? num : 0);

  return (
    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, letterSpacing: '-0.05em', color: 'var(--c-text)', marginBottom: 8 }}>
        {isNum ? <><span ref={ref}>0</span>{suffix}</> : value}
      </div>
      <p className="t-label">{label}</p>
    </div>
  );
}

export default function Chapter3() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      {/* Stats */}
      <section className="sec-white" style={{ padding: '120px 0 60px' }} id="chapter3">
        <div className="container-buro">
          <p className="t-chapter" style={{ marginBottom: 24 }}>Chapter 3</p>
          <h2 className="t-editorial" style={{ maxWidth: 700, marginBottom: 80 }}>
            {ch3.editorial}
          </h2>

          <div className="line-h" style={{ marginBottom: 40 }} />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {ch3.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <div className="line-h" style={{ marginTop: 40 }} />

          {/* Schools */}
          <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {ch3.schools.map((name) => (
              <span key={name} style={{
                fontSize: 13, padding: '6px 14px', borderRadius: 999,
                border: '1px solid var(--c-border)', color: 'var(--c-text-muted)',
                fontFamily: 'var(--font-sans)',
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — drag carousel like burocratik */}
      <section className="sec-cream" style={{ padding: '80px 0 100px' }}>
        <div className="container-buro" style={{ marginBottom: 32 }}>
          <div className="flex items-end justify-between">
            <p style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', fontFamily: 'var(--font-sans)' }}>
              학부모 후기
            </p>
            <div className="hidden md:flex gap-2">
              <button onClick={prev} className="btn-pill !p-2 !px-3" aria-label="이전"><ArrowLeft size={16} /></button>
              <button onClick={next} className="btn-pill !p-2 !px-3" aria-label="다음"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-4" style={{ paddingLeft: 'var(--grid-inset)', paddingRight: 40 }}>
            {ch3.testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 select-none" style={{
                width: 360, padding: 32, border: '1px solid var(--c-border)', borderRadius: 4, background: 'var(--c-white)',
              }}>
                <p className="t-body" style={{ marginBottom: 20, color: 'var(--c-text)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex justify-between items-center">
                  <span className="t-label">{t.author}</span>
                  <span className="t-label" style={{ color: 'var(--c-accent)' }}>{t.context}</span>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0" style={{ width: 40 }} />
          </div>
        </div>
      </section>
    </>
  );
}
