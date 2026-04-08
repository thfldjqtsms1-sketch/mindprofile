'use client';

import { useRef, ReactNode } from 'react';

interface MagneticWrapProps {
  children: ReactNode;
  strength?: number;
}

export default function MagneticWrap({ children, strength = 0.3 }: MagneticWrapProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 1024) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-magnetic
      style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'inline-block' }}
    >
      {children}
    </div>
  );
}
