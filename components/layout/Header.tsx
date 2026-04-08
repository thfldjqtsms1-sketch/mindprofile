'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="text-white font-heading font-bold text-h4">
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="메인 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-gold text-body-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="btn-primary text-body-sm !py-2.5 !px-6">
            무료 상담 신청
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark/98 backdrop-blur-md border-t border-white/5"
            aria-label="모바일 메뉴"
          >
            <div className="container-main py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-gold text-body font-medium py-2 transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.applyCoaching}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
              >
                무료 상담 신청
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
