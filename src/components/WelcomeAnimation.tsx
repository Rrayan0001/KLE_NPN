'use client';

import { useEffect, useState } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<'draw' | 'hold' | 'exit'>('draw');

  useEffect(() => {
    // Check system preferences or session storage to skip animation if needed
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = typeof window !== 'undefined' && sessionStorage.getItem('kle-intro-seen');

    if (prefersReduced || seen) {
      setVisible(false);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('hold'), 1200);
    const t2 = setTimeout(() => setPhase('exit'), 1800);
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('kle-intro-seen', '1');
      onComplete();
    }, 2350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`welcome-overlay ${phase === 'exit' ? 'exit-active' : ''}`}>
      <style>{`
        .welcome-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #0A1628;
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .welcome-overlay.exit-active {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        .welcome-svg {
          width: 140px;
          height: 80px;
        }

        @keyframes strokeDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* SVG line drawing animations */
        .path-k-vertical {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: strokeDraw 0.4s ease forwards 0.1s;
        }

        .path-k-diag-top {
          stroke-dasharray: 34;
          stroke-dashoffset: 34;
          animation: strokeDraw 0.25s ease forwards 0.4s;
        }

        .path-k-diag-bottom {
          stroke-dasharray: 34;
          stroke-dashoffset: 34;
          animation: strokeDraw 0.25s ease forwards 0.5s;
        }

        .path-l {
          stroke-dasharray: 72;
          stroke-dashoffset: 72;
          animation: strokeDraw 0.45s ease forwards 0.7s;
        }

        .path-e-vertical {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: strokeDraw 0.4s ease forwards 1.05s;
        }

        .path-e-top {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: strokeDraw 0.2s ease forwards 1.25s;
        }

        .path-e-middle {
          stroke-dasharray: 18;
          stroke-dashoffset: 18;
          animation: strokeDraw 0.15s ease forwards 1.35s;
        }

        .path-e-bottom {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: strokeDraw 0.2s ease forwards 1.45s;
        }

        /* Fade in up title */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .welcome-text {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.28em;
          color: rgba(248, 246, 240, 0.75);
          margin-top: 22px;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.4s;
        }

        /* Progress loading bar */
        @keyframes progressScale {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .welcome-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #E8722A, #2A9D6F);
          transform-origin: left;
          animation: progressScale 1.8s linear forwards;
        }
      `}</style>

      <svg
        className="welcome-svg"
        viewBox="0 0 140 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* K */}
        <path
          d="M 20 16 L 20 64"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-k-vertical"
        />
        <path
          d="M 44 16 L 20 40"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-k-diag-top"
        />
        <path
          d="M 20 40 L 44 64"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-k-diag-bottom"
        />

        {/* L */}
        <path
          d="M 58 16 L 58 64 L 82 64"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-l"
        />

        {/* E */}
        <path
          d="M 96 16 L 96 64"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-e-vertical"
        />
        <path
          d="M 96 16 L 120 16"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-e-top"
        />
        <path
          d="M 96 40 L 114 40"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-e-middle"
        />
        <path
          d="M 96 64 L 120 64"
          stroke="#E8722A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path-e-bottom"
        />
      </svg>

      <p className="welcome-text">KLE SOCIETY&apos;S G.I.BAGEWADI COLLEGE</p>

      <div className="welcome-progress" />
    </div>
  );
}
