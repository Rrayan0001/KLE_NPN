'use client';
import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 40,
  threshold = 0.15,
  once = true,
  className = '',
  as: Tag = 'div',
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;
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

  const initialTransform = (() => {
    switch (direction) {
      case 'up':    return `translate3d(0, ${distance}px, 0)`;
      case 'down':  return `translate3d(0, -${distance}px, 0)`;
      case 'left':  return `translate3d(${distance}px, 0, 0)`;
      case 'right': return `translate3d(-${distance}px, 0, 0)`;
      case 'scale': return 'scale(0.92)';
      case 'rotate':return 'perspective(800px) rotateX(8deg)';
      default:      return 'translate3d(0, 0, 0)';
    }
  })();

  const finalTransform = (() => {
    switch (direction) {
      case 'scale': return 'scale(1)';
      case 'rotate':return 'perspective(800px) rotateX(0deg)';
      default:      return 'translate3d(0, 0, 0)';
    }
  })();

  const motionStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? finalTransform : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  };

  // @ts-expect-error - dynamic ref on tag
  return <Tag ref={ref} className={className} style={motionStyle}>{children}</Tag>;
}

/* ── useParallax hook ─────────────────────────────────────── */
export function useParallax(strength: number = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (reduced || isTouch) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offset = (progress - 0.5) * strength * 100;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [strength]);
  return ref;
}

/* ── StaggerChildren wrapper ──────────────────────────────── */
interface StaggerProps {
  children: React.ReactNode[];
  step?: number;
  initialDelay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
  distance?: number;
}
export function Stagger({
  children, step = 80, initialDelay = 0, direction = 'up',
  className = '', duration = 700, distance = 32,
}: StaggerProps) {
  return (
    <>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          direction={direction}
          delay={initialDelay + i * step}
          duration={duration}
          distance={distance}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
