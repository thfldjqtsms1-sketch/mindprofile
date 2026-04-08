'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-3"
        >
          <div className="flex gap-3">
            <a
              href={siteConfig.applyCoaching}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center text-body-sm !py-3"
            >
              무료 상담 신청
              <ArrowRight size={16} className="ml-1.5" />
            </a>
            <a
              href={`https://open.kakao.com/o/${siteConfig.kakaoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-3 !px-4"
              aria-label="카카오톡 상담"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
