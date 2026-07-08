'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      <div 
        className="flex flex-col min-h-screen" 
        style={{ visibility: showWelcome ? 'hidden' : 'visible' }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
