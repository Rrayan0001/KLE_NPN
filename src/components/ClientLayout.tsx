'use client';

import { useState } from 'react';
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

  return (
    <>
      <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      <CursorGlow />
      <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
