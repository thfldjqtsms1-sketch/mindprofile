'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 py-3"
          style={{ background: 'rgba(14,13,11,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--border-soft)' }}
        >
          <div className="flex gap-3">
            <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 text-center text-[14px] !py-3">
              상담 신청 <ArrowRight size={15} className="ml-1 inline" />
            </a>
            <a
              href={`https://open.kakao.com/o/${siteConfig.kakaoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-3 !px-4"
              aria-label="카카오톡 상담"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
