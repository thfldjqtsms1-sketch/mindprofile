'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap } from 'lucide-react';
import { achievements } from '@/lib/data';
import { fadeInUp, clipReveal, staggerContainer } from '@/lib/animations';

const icons = [Award, Trophy, GraduationCap];

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const duration = 1800;
    let startTime: number;

    function animate(now: number) {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el!.textContent = String(Math.floor(eased * target));
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
  }, [target]);

  return <span ref={ref} className="font-accent font-bold">0</span>;
}

export default function Achievements() {
  return (
    <section className="section-dark" id="achievements">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={clipReveal} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">합격 실적</span>
            <h2 className="text-h1-m lg:text-h1 text-white font-heading mb-4">
              매년, 결과로 증명합니다
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {achievements.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.category}
                  variants={fadeInUp}
                  className="card-dark p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={32} className="text-gold" />
                  </div>
                  <h3 className="text-h3 text-white font-heading mb-3">{item.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {item.schools.map((school) => (
                      <span key={school} className="text-body-sm text-gold border border-gold/20 rounded-sm px-3 py-1">
                        {school}
                      </span>
                    ))}
                  </div>
                  <p className="text-body-sm text-white/50">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center py-8 border-t border-white/10"
          >
            <p className="text-white/40 text-body-sm mb-2">누적 합격생</p>
            <p className="text-display-m lg:text-display text-gold">
              <CountUp target={500} />
              <span className="text-h2">명+</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
