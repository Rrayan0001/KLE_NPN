'use client';
import { useEffect, useRef, useState } from 'react';

interface EditorialHeroProps {
  /** Defaults to KLE Bagewadi College branding */
  heading?: string;
  leftMeta?: string;
  centerMeta?: string;
  rightMeta?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function EditorialHero({
  heading = 'KLE BAGEWADI',
  leftMeta = 'ESTD. 1961 · NIPANI',
  centerMeta = 'NAAC ACCREDITED A GRADE',
  rightMeta = 'ADMISSIONS 2026–27',
  image = '/images/herosection.png',
  ctaLabel = 'Discover the College',
  ctaHref = '/aboutclg',
}: EditorialHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { setScrollY(window.scrollY); raf = 0; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={rootRef} className="editorial-hero">
        {/* ── 1. MEDIA VIEWPORT (BACKGROUND) ── */}
        <div className="hero-viewport">
          <img
            src={image}
            alt="KLE College Campus"
            className={`hero-img ${mounted ? 'zoomed' : ''}`}
            loading="eager"
          />
          <div className="hero-top-overlay" />
          <div className="hero-gradient" />
        </div>

        {/* ── 2. OVERLAY CONTENT ── */}
        <div className="hero-overlay-content">
          <div
            className="hero-head"
            style={{ transform: mounted ? `translate3d(0, ${scrollY * -0.15}px, 0)` : undefined }}
          >
            <h1 className="hero-heading">
              {heading.split('').map((ch, i) => (
                <span
                  key={i}
                  className="hero-char"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    display: 'inline-block',
                    width: ch === ' ' ? '0.3em' : 'auto',
                  }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
            </h1>
          </div>

          <div
            className="hero-meta-bar"
            style={{ transform: mounted ? `translate3d(0, ${scrollY * -0.1}px, 0)` : undefined }}
          >
            <span className="hero-meta">{leftMeta}</span>
            <span className="hero-meta hero-meta-center">{centerMeta}</span>
            <span className="hero-meta hero-meta-right">{rightMeta}</span>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-hero {
          --ek-navy: #0A1628;
          --ek-orange: #E8722A;
          --ek-green: #2A9D6F;
          --ek-paper: #F8F6F0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          margin-top: -80px;
          position: relative;
          overflow: hidden;
          background: var(--ek-navy);
          will-change: transform;
          font-family: var(--font-dm-sans), sans-serif;
        }

        /* ── 1. Typographic heading ── */
        .hero-head {
          width: 100%;
          padding: 24px 0 16px;
          overflow: hidden;
        }
        .hero-heading {
          width: 100%;
          font-weight: 800;
          font-size: clamp(3rem, 10vw, 8.5rem);
          letter-spacing: -0.04em;
          line-height: 0.95;
          text-transform: uppercase;
          margin: 0;
          color: var(--ek-orange);
          font-family: var(--font-dm-sans), sans-serif;
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          overflow: hidden;
          white-space: nowrap;
          padding: 0 16px;
          box-sizing: border-box;
          text-shadow: 0 4px 30px rgba(10, 22, 40, 0.5);
        }
        .hero-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(100%);
          animation: charUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes charUp {
          0%   { opacity: 0; transform: translateY(100%); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ── 2. Metadata bar ── */
        .hero-meta-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 80rem;
          padding: 18px 32px;
          box-sizing: border-box;
          border-top: 1px solid rgba(248, 246, 240, 0.15);
          border-bottom: 1px solid rgba(248, 246, 240, 0.15);
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(248, 246, 240, 0.85);
          flex-wrap: nowrap;
          gap: 12px;
        }
        .hero-meta-center {
          color: var(--ek-orange);
          font-weight: 700;
        }
        .hero-meta-right {
          color: var(--ek-green);
          font-weight: 700;
        }

        /* ── 3. Media viewport ── */
        .hero-viewport {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: var(--ek-navy);
          z-index: 1;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.12);
          opacity: 0;
          transition: transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s ease;
          will-change: transform;
        }
        .hero-img.zoomed {
          transform: scale(1);
          opacity: 1;
        }
        .hero-top-overlay {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 380px;
          background: linear-gradient(to bottom, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }
        .hero-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 350px;
          background: linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }
        .hero-overlay-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 80px;
          z-index: 5;
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .editorial-hero { height: 100vh; height: 100dvh; }
          .hero-overlay-content { padding-top: 48px; }
          .hero-heading { font-size: clamp(2.5rem, 11vw, 4rem); }
          .hero-meta-bar { padding: 14px 16px; font-size: 9px; letter-spacing: 0.1em; gap: 8px; }
          .hero-meta-center { display: none; }
          .hero-viewport { height: 100%; }
          .hero-head { padding: 24px 0 12px; }
        }
        @media (max-width: 480px) {
          .editorial-hero { height: 100vh; height: 100dvh; }
          .hero-overlay-content { padding-top: 36px; }
          .hero-heading { font-size: clamp(2rem, 12vw, 3rem); letter-spacing: -0.03em; padding: 0 10px; }
          .hero-meta-bar { font-size: 8px; padding: 12px 10px; }
          .hero-meta-right { display: none; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hero-char,
          .hero-img { animation: none !important; transform: none !important; opacity: 1 !important; }
          .hero-head, .hero-meta-bar, .hero-viewport { transform: none !important; }
        }
      `}</style>
    </>
  );
}