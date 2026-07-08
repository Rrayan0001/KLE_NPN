'use client';

import Link from 'next/link';
import PageBanner from './PageBanner';

interface SubpageLayoutProps {
  breadcrumb?: string;
  children: React.ReactNode;
}

export default function SubpageLayout({ breadcrumb, children }: SubpageLayoutProps) {
  return (
    <>
      <PageBanner />

      <nav
        aria-label="breadcrumb"
        style={{
          background: '#F8F6F0',
          borderBottom: '1px solid rgba(10,22,40,0.06)',
          padding: '10px 0',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px' }}>
          <ol
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              fontSize: '13px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
            }}
          >
            <li>
              <Link href="/" style={{ color: '#0A1628', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            {breadcrumb && (
              <>
                <li style={{ color: '#E8722A', fontSize: '15px', lineHeight: 1 }}>›</li>
                <li style={{ color: '#5A6A7A' }}>{breadcrumb}</li>
              </>
            )}
          </ol>
        </div>
      </nav>

      <main
        className="subpage-body"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '56px 24px 80px',
        }}
      >
        {children}
      </main>
    </>
  );
}
