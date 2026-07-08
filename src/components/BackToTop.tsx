'use client';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    const start = window.scrollY;
    const duration = 700;
    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      window.scrollTo(0, Math.round(start * (1 - ease(p))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`backToTop ${show ? 'backToTop-on' : ''}`}
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <style>{`
        .backToTop {
          position: fixed;
          right: 22px; bottom: 22px;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: #E8722A;
          color: #fff;
          border: none;
          cursor: pointer;
          z-index: 90;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(232,114,42,0.4), 0 2px 8px rgba(10,22,40,0.18);
          opacity: 0;
          transform: translate3d(0, 30px, 0) scale(0.85);
          pointer-events: none;
          transition: opacity .35s ease, transform .35s cubic-bezier(0.22, 1, 0.36, 1), background .25s ease, box-shadow .25s ease;
        }
        .backToTop-on { opacity: 1; transform: translate3d(0, 0, 0) scale(1); pointer-events: auto; }
        .backToTop:hover {
          background: #0A1628;
          box-shadow: 0 12px 28px rgba(10,22,40,0.35);
        }
        .backToTop:active { transform: translate3d(0, 0, 0) scale(0.95); }
        @media (max-width: 640px) {
          .backToTop { width: 42px; height: 42px; right: 14px; bottom: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .backToTop { transition: opacity .15s; }
        }
      `}</style>
    </button>
  );
}
