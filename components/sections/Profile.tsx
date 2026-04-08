'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/data';
import { fadeInUp, slideLeft, slideRight, staggerContainer, staggerContainerSlow } from '@/lib/animations';

export default function Profile() {
  return (
    <section className="section-dark" id="profile">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="badge-gold mb-4 inline-block">대표 소개</span>
            <h2 className="text-h1-m lg:text-h1 text-white font-heading">
              {profile.name} 대표
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Profile Image Placeholder */}
            <motion.div variants={slideLeft} className="lg:col-span-2 flex justify-center">
              <div className="w-64 h-80 lg:w-full lg:h-96 rounded-lg bg-navy-light border border-white/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-display text-gold font-heading">진</span>
                  </div>
                  <p className="text-white font-heading font-bold text-h3">{profile.name}</p>
                  <p className="text-white/50 text-body-sm">{profile.title}</p>
                </div>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              {profile.credentials.map((group) => (
                <motion.div key={group.category} variants={slideRight}>
                  <h4 className="text-gold text-caption font-accent font-bold uppercase tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-white/80">
                        <span className="text-gold mt-1.5 text-body-sm">&#9654;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} className="pt-6 border-t border-white/10">
                <blockquote className="text-body-lg text-white/70 italic">
                  &ldquo;{profile.quote}&rdquo;
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
