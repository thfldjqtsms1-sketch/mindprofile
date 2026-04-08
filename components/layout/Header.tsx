'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid var(--border-soft)' : 'none' }}
    >
      <div className="container-editorial flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-display text-[22px] font-medium tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {siteConfig.name}
        </a>

        <nav className="hidden lg:flex items-center gap-10" aria-label="메인 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium transition-colors duration-300"
              style={{ color: 'var(--text-tertiary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              {item.label}
            </a>
          ))}
          <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold text-[13px] !py-2.5 !px-6">
            상담 신청
          </a>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
            style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-soft)' }}
            aria-label="모바일 메뉴"
          >
            <div className="container-editorial py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium py-2 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-gold text-center mt-2">
                상담 신청
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
