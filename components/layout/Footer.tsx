'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-soft)' }} className="py-12">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-[20px] font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
              {siteConfig.name}
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              진로진학입시 교육컨설팅
              <br />
              성향 진단 · 맞춤 설계 · 입시 전략
            </p>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>바로가기</h4>
            <ul className="space-y-2 text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
              <li><a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">초5~고2 코칭 신청</a></li>
              <li><a href={siteConfig.applyConsulting} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">고3 입시컨설팅 신청</a></li>
              <li><a href={siteConfig.bookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">도서 구매</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>상담 문의</h4>
            <ul className="space-y-2 text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} style={{ color: 'var(--accent-gold)' }} />
                카카오톡: {siteConfig.kakaoId}
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  인스타그램: {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-[11px]" style={{ borderTop: '1px solid var(--border-soft)', color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
