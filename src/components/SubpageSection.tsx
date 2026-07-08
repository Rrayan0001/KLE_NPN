import React from 'react';

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 800,
          color: '#0A1628',
          letterSpacing: '-0.02em',
          margin: '0 0 14px',
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: '48px',
          height: '3px',
          background: 'linear-gradient(90deg, #E8722A, #2A9D6F)',
          borderRadius: '2px',
          margin: '0 auto',
        }}
      />
    </div>
  );
}

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
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'flex-start',
        marginBottom: '48px',
      }}
      className="subpage-two-col"
    >
      {imageLeft ? (
        <>
          <div>
            <img
              src={image}
              alt={imageAlt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(10,22,40,0.08)',
              }}
            />
          </div>
          <div>{children}</div>
        </>
      ) : (
        <>
          <div>{children}</div>
          <div>
            <img
              src={image}
              alt={imageAlt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(10,22,40,0.08)',
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '420px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: '0 10px 32px rgba(10,22,40,0.1)',
        marginBottom: '48px',
      }}
    />
  );
}

export function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '15.5px',
        color: '#3A4556',
        lineHeight: 1.85,
        marginBottom: '20px',
        textAlign: 'justify',
      }}
    >
      {children}
    </p>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(10,22,40,0.03)',
        borderLeft: '4px solid #E8722A',
        borderRadius: '0 8px 8px 0',
        padding: '18px 20px',
        marginBottom: '24px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '15px',
          color: '#0A1628',
          lineHeight: 1.75,
          margin: 0,
          fontWeight: 600,
        }}
      >
        {children}
      </p>
    </div>
  );
}
