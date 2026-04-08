'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-primary" id="testimonials">
      <div className="container-editorial">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-h2">
                각 아이의 출발점은 달랐고,
                <br />
                그래서 전략도 달랐습니다.
              </h2>
            </div>
            {/* Navigation arrows — desktop only */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-tertiary)' }}
                aria-label="이전 후기"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-tertiary)' }}
                aria-label="다음 후기"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel — extends beyond container */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-5 pl-6 md:pl-12 lg:pl-[calc((100vw-1080px)/2+24px)]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-surface flex-shrink-0 w-[320px] md:w-[400px] relative select-none"
              >
                <Quote size={20} className="mb-5 opacity-20" style={{ color: 'var(--accent-gold)' }} />
                <p className="text-[15px] md:text-[16px] leading-[1.8] mb-6" style={{ color: 'var(--text-primary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium" style={{ color: 'var(--text-tertiary)' }}>
                    — {t.author}
                  </span>
                  <span className="text-[11px] px-2 py-1 rounded-sm" style={{
                    color: 'var(--accent-gold-dim)',
                    background: 'rgba(184,148,90,0.06)',
                  }}>
                    {t.context}
                  </span>
                </div>
              </div>
            ))}
            {/* Spacer at end */}
            <div className="flex-shrink-0 w-12" />
          </div>
        </div>

        {/* Drag hint — mobile */}
        <div className="md:hidden text-center mt-6">
          <p className="text-[11px] font-accent tracking-[0.1em] uppercase" style={{ color: 'var(--text-muted)' }}>
            ← 스와이프하여 더 보기 →
          </p>
        </div>
      </motion.div>
    </section>
  );
}
