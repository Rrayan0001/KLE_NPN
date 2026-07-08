'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (reduced || isTouch) return;
    active.current = true;

    const el = glowRef.current;
    if (!el) return;
    el.style.opacity = '0';

    let raf = 0;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = '1';
    };
    const onLeave = () => { el.style.opacity = '0'; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest('a, button, [role="button"], input, textarea, select, .interactive');
      if (interactive) el.classList.add('cursorGlow-active');
      else el.classList.remove('cursorGlow-active');
    };
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      active.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseover', onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursorGlow {
          position: fixed;
          top: 0; left: 0;
          width: 26px; height: 26px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          background: radial-gradient(circle, rgba(232,114,42,0.18) 0%, rgba(232,114,42,0.06) 40%, transparent 70%);
          mix-blend-mode: screen;
          transition: opacity .3s ease, width .25s ease, height .25s ease, background .25s ease;
          will-change: transform, opacity;
        }
        .cursorGlow-active {
          width: 52px; height: 52px;
          background: radial-gradient(circle, rgba(248,246,240,0.22) 0%, rgba(248,246,240,0.08) 40%, transparent 70%);
        }
        @media (hover: none), (pointer: coarse) { .cursorGlow { display: none !important; } }
      `}</style>
      <div ref={glowRef} className="cursorGlow" aria-hidden="true" />
    </>
  );
}
