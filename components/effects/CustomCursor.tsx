'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      circle.style.transform = `translate(${circleX - 20}px, ${circleY - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      circle.style.width = '60px';
      circle.style.height = '60px';
      circle.style.marginLeft = '-10px';
      circle.style.marginTop = '-10px';
      circle.style.opacity = '0.6';
    };

    const onLeave = () => {
      circle.style.width = '40px';
      circle.style.height = '40px';
      circle.style.marginLeft = '0px';
      circle.style.marginTop = '0px';
      circle.style.opacity = '0.4';
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animate);

    const hoverables = document.querySelectorAll('a, button, [data-magnetic]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = '';
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block"
        style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: 'var(--accent-gold)',
        }}
      />
      <div
        ref={circleRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden lg:block"
        style={{
          width: '40px', height: '40px', borderRadius: '50%',
          border: '1px solid var(--accent-gold)', opacity: 0.4,
          mixBlendMode: 'difference' as const,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, margin 0.3s ease',
        }}
      />
    </>
  );
}
