'use client';

import { site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="sec-black" style={{ padding: '40px 0 80px' }}>
      <div className="container-buro">
        <div className="line-h-dark" style={{ marginBottom: 40, background: 'rgba(255,255,255,0.1)' }} />
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="t-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
              {site.tagline}
            </p>
            <p style={{ fontSize: 20, fontWeight: 500, color: '#fff', fontFamily: 'var(--font-sans)', letterSpacing: '-0.04em' }}>
              {site.name}
            </p>
          </div>
          <div className="flex gap-8 items-end" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <span>카카오톡: {site.kakao}</span>
            <span>&copy; {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
