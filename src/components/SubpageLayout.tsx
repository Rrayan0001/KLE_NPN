'use client';

import PageBanner from './PageBanner';

interface SubpageLayoutProps {
  breadcrumb?: string;
  children: React.ReactNode;
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <>
      <PageBanner />

      {/* Premium content zone */}
      <main
        className="subpage-body"
        style={{
          background: 'linear-gradient(180deg, #f9f8f6 0%, #ffffff 120px)',
          minHeight: '60vh',
          position: 'relative',
        }}
      >
        {/* Top-edge shimmer line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #E8722A 30%, #2A9D6F 70%, transparent 100%)',
            opacity: 0.6,
          }}
        />

        {/* Inner reading column */}
        <div
          className="subpage-content"
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0px clamp(16px, 3vw, 40px) clamp(16px, 2vw, 24px)',
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
}
