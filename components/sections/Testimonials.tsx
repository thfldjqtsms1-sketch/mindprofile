'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export default function Testimonials() {
  return (
    <section className="section-light" id="testimonials">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">학부모 후기</span>
            <h2 className="text-h1-m lg:text-h1 font-heading text-gray-800 mb-4">
              먼저 경험한 학부모님들의 이야기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="card-light p-8 relative"
              >
                <Quote size={24} className="text-gold/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-body text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-body-sm text-gray-500 font-medium">
                    — {t.author}
                  </p>
                  <div className="flex gap-1.5">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption text-gold-dark bg-gold/10 rounded-sm px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional testimonials row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {testimonials.slice(3).map((t, i) => (
              <motion.div
                key={i + 3}
                variants={fadeInUp}
                className="card-light p-6 flex gap-4"
              >
                <Quote size={20} className="text-gold/20 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-body-sm text-gray-700 mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-caption text-gray-500">— {t.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
