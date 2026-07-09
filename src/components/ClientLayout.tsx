'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';
import CursorGlow from './CursorGlow';
import BackToTop from './BackToTop';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  // Wrap bare tables in a scroll container so they don't push the whole page on mobile
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
      const parent = table.parentElement;
      if (parent && !parent.classList.contains('table-scroll-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll-wrapper';
        wrapper.style.width = '100%';
        wrapper.style.overflowX = 'auto';
        wrapper.style.WebkitOverflowScrolling = 'touch';
        parent.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }, [children]);

  return (
    <>
      <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      <CursorGlow />
      <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
        <Header />
        <main className="flex-grow" style={{ paddingTop: '0px' }}>{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
