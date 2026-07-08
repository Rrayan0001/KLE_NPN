import React from 'react';

/* ── PageTitle ──────────────────────────────────────────────────────────── */
export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginBottom: '48px',
        paddingBottom: '28px',
        borderBottom: '1px solid rgba(10,22,40,0.06)',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '10.5px',
          fontWeight: 800,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#E8722A',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '20px',
            height: '2px',
            background: 'linear-gradient(90deg, #E8722A, #2A9D6F)',
            borderRadius: '1px',
            verticalAlign: 'middle',
          }}
        />
        KLE Society
      </span>

      <h2
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 'clamp(1.65rem, 3.2vw, 2.4rem)',
          fontWeight: 800,
          color: '#0A1628',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          margin: '0 0 18px',
        }}
      >
        {children}
      </h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, #E8722A, #2A9D6F)',
            borderRadius: '2px',
          }}
        />
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#E8722A',
            opacity: 0.3,
          }}
        />
      </div>
    </div>
  );
}

/* ── TwoColLayout ───────────────────────────────────────────────────────── */
export function TwoColLayout({
  image,
  imageAlt,
  children,
  imageLeft = true,
}: {
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  imageLeft?: boolean;
}) {
  const imgEl = (
    <div
      style={{
        position: 'relative',
        flex: '0 0 42%',
        maxWidth: '42%',
      }}
    >
      {/* Decorative background rectangle */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: imageLeft ? '16px' : 'auto',
          right: imageLeft ? 'auto' : '16px',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(232,114,42,0.12), rgba(42,157,111,0.08))',
          borderRadius: '18px',
          zIndex: 0,
        }}
      />
      <img
        src={image}
        alt={imageAlt}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: 'auto',
          borderRadius: '14px',
          boxShadow: '0 20px 60px rgba(10,22,40,0.14), 0 4px 16px rgba(10,22,40,0.08)',
          display: 'block',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.015) translateY(-4px)';
          (e.currentTarget as HTMLImageElement).style.boxShadow = '0 28px 72px rgba(10,22,40,0.18), 0 8px 24px rgba(10,22,40,0.1)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLImageElement).style.transform = '';
          (e.currentTarget as HTMLImageElement).style.boxShadow = '0 20px 60px rgba(10,22,40,0.14), 0 4px 16px rgba(10,22,40,0.08)';
        }}
      />
    </div>
  );

  const textEl = (
    <div
      style={{
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      className="subpage-two-col"
      style={{
        display: 'flex',
        gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'flex-start',
        marginBottom: '56px',
      }}
    >
      {imageLeft ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
    </div>
  );
}

/* ── BannerImage ────────────────────────────────────────────────────────── */
export function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '56px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '18px',
          background: 'linear-gradient(135deg, rgba(232,114,42,0.08), rgba(42,157,111,0.06))',
          transform: 'translate(8px, 8px)',
        }}
      />
      <img
        src={src}
        alt={alt}
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          maxHeight: '480px',
          objectFit: 'cover',
          borderRadius: '16px',
          boxShadow: '0 16px 48px rgba(10,22,40,0.12), 0 4px 16px rgba(10,22,40,0.07)',
          display: 'block',
        }}
      />
    </div>
  );
}

/* ── BodyText ───────────────────────────────────────────────────────────── */
export function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '16px',
        color: '#374151',
        lineHeight: 1.9,
        marginBottom: '22px',
        textAlign: 'left',
      }}
    >
      {children}
    </p>
  );
}

/* ── InfoBox (Glassmorphism card) ───────────────────────────────────────── */
export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10,22,40,0.03) 0%, rgba(232,114,42,0.04) 100%)',
        border: '1px solid rgba(232,114,42,0.18)',
        borderLeft: '4px solid #E8722A',
        borderRadius: '0 12px 12px 0',
        padding: '20px 24px',
        marginBottom: '28px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* Top-right accent dot */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '18px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #E8722A, #2A9D6F)',
          opacity: 0.5,
        }}
      />
      <p
        style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '15.5px',
          color: '#0A1628',
          lineHeight: 1.78,
          margin: 0,
          fontWeight: 600,
        }}
      >
        {children}
      </p>
    </div>
  );
}
