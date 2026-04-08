'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 py-12">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-heading font-bold text-h3 mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-body-sm leading-relaxed">
              진로진학입시 교육컨설팅
              <br />
              정확한 진단, 맞춤 로드맵, 입시 전략
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-body mb-3">바로가기</h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href={siteConfig.applyCoaching} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  초5~고2 코칭 신청
                </a>
              </li>
              <li>
                <a href={siteConfig.applyConsulting} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  고3 입시컨설팅 신청
                </a>
              </li>
              <li>
                <a href={siteConfig.bookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  도서 구매
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-body mb-3">상담 문의</h4>
            <ul className="space-y-2 text-body-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-gold" />
                <span>카카오톡: {siteConfig.kakaoId}</span>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  인스타그램: {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-caption text-white/40">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
