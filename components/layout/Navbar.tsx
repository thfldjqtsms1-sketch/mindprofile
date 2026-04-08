'use client';

import { useState, useEffect } from 'react';
import { site } from '@/lib/data';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="navbar-pill"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <span style={{ fontWeight: 600 }}>{site.name}</span>
      <div className="divider" />
      <a href="#chapter1">방향</a>
      <a href="#chapter2">설계</a>
      <a href="#chapter3">증명</a>
      <a href="#chapter4">시작</a>
      <div className="divider" />
      <a
        href={site.applyCoaching}
        target="_blank"
        rel="noopener noreferrer"
        style={{ opacity: 1, fontWeight: 600 }}
      >
        상담 신청 →
      </a>
    </nav>
  );
}
