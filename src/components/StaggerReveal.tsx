'use client';
import { useEffect, useRef, useState } from 'react';
import s from './StaggerReveal.module.css';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

export default function StaggerReveal({
  children,
  className = '',
  stagger = 80,
  distance = 32,
  duration = 700,
  threshold = 0.15,
  once = true,
  style,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (visible) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once, visible]);

  const motionStyle: React.CSSProperties = {
    ['--stagger-delay' as string]: `${stagger}ms`,
    ['--stagger-distance' as string]: `${distance}px`,
    ['--stagger-duration' as string]: `${duration}ms`,
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`${s.staggerReveal} ${visible ? s.visible : s.hidden} ${className}`}
      style={motionStyle}
    >
      {children}
    </div>
  );
}
