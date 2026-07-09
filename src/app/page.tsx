'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import s from '@/styles/layout.module.css';
import HeroSlider from '@/components/HeroSlider';
import EditorialHero from '@/components/EditorialHero';
import Announcements from '@/components/Announcements';
import FacilitiesBar from '@/components/FacilitiesBar';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerReveal from '@/components/StaggerReveal';

/* ── Odometer counter ─────────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [count, setCount] = useState(reducedMotion ? target : 0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(ease * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, reducedMotion]);
  return { count, ref };
}

function OdometerDigits({ value }: { value: number }) {
  const digits = String(value).split('');
  return (
    <span className={s.odoValue}>
      {digits.map((d, i) => (
        <span key={i} className={s.odoDigit}>
          <span
            className={s.odoDigitInner}
            style={{ ['--odo-target' as string]: d } as React.CSSProperties}
          >
            {Array.from({ length: 10 }, (_, n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

function StatCounter({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className={s.statCountCard} ref={ref}>
      <div className={s.statCountVal}>
        <OdometerDigits value={count} />
        {suffix}
      </div>
      <div className={s.statCountLabel}>{label}</div>
      <div className={s.statCountDesc}>{desc}</div>
    </div>
  );
}

/* ── About image reveal via observer (class toggle) ───────── */
function RevealImage({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${s.aboutImgWrap} ${className ?? ''} ${shown ? 'revealed' : ''}`}>
      {children}
    </div>
  );
}

/* ── Tilt card (3D) on hover ──────────────────────────────── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width - 0.5) * 12;
    const py = (y / rect.height - 0.5) * -12;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const card = el.querySelector('.vmCard') as HTMLElement | null;
    if (card) card.style.transform = `perspective(900px) rotateY(${px}deg) rotateX(${py}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector('.vmCard') as HTMLElement | null;
    if (card) card.style.transform = '';
  };
  return (
    <div
      ref={ref}
      className={`tilt-wrap ${className ?? ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: 'relative' }}
    >
      {children}
    </div>
  );
}

/* ── Section wave divider ─────────────────────────────────── */
// Single consistent wave path used throughout: 2 full sine periods
// 'down'  = wave crests point up, fill goes downward  (section above → section below)
// 'up'    = wave crests point down, fill goes upward  (same curve, mirrored vertically)
const WAVE_PATH_DOWN = "M0,20 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,10 1440,20 L1440,70 L0,70 Z";
const WAVE_PATH_UP   = "M0,50 C180,10 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1380,60 1440,50 L1440,0 L0,0 Z";

function WaveDivider({ variant = 'dark', direction = 'down' }: { variant?: 'dark' | 'light' | 'paper' | 'white'; direction?: 'down' | 'up' }) {
  const fillClass = variant === 'dark' ? s.sectionDividerDark : variant === 'paper' ? s.sectionDividerPaper : variant === 'white' ? s.sectionDividerWhite : s.sectionDividerLight;
  return (
    <div className={`${s.sectionDivider} ${fillClass}`} aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={direction === 'up' ? WAVE_PATH_UP : WAVE_PATH_DOWN} />
      </svg>
    </div>
  );
}

export default function Home() {
  const [progIndex, setProgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const uniqueQuickLinks = [
    { name: 'Admission', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>), desc: 'Apply for 2026-27', url: '/admission' },
    { name: 'NAAC Docs', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 100-8 4 4 0 000 8zm0 0v4m-4 0h8M4 11h16"/></svg>), desc: 'Accreditation details', url: '/certificates' },
    { name: 'Placements', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>), desc: 'Placement records', url: '/placements' },
    { name: 'Library', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>), desc: 'Digital library', url: '/library' },
    { name: 'Hostel', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>), desc: 'Campus living', url: '/hostel' },
    { name: 'IQAC', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2"/></svg>), desc: 'Quality assurance', url: '/iqacworkingcomittee' },
    { name: 'Scholarships', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>), desc: 'Financial aid', url: '/scholarship' },
    { name: 'NSS / NCC', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>), desc: 'Social & defence', url: '/nss' },
    { name: 'Gallery', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>), desc: 'Events & campus', url: '/gallery' },
    { name: 'Contact', icon: (<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>), desc: 'Reach the college', url: '/contact' },
  ];

  const quickLinks = [...uniqueQuickLinks, ...uniqueQuickLinks, ...uniqueQuickLinks, ...uniqueQuickLinks];

  const courses = [
    {
      title: 'Bachelor of Arts',
      short: 'B.A.',
      url: '/ba',
      color: '#E8722A',
      image: '/images/c1.jpg',
      duration: '4 Years (NEP)',
      subjects: 'History · Economics · Political Science · English',
      prospects: 'Civil Services, Media, Journalism, Education',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Bachelor of Science',
      short: 'B.Sc.',
      url: '/bsc',
      color: '#2A9D6F',
      image: '/images/c2.jpg',
      duration: '4 Years (NEP)',
      subjects: 'Physics · Chemistry · Mathematics · Comp. Science',
      prospects: 'Research Laboratories, IT Sector, Data Analytics',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.07 15.2l-1.022.547a2 2 0 00-.77 2.656l1.5 3a2 2 0 002.656.77l11.5-5.75a2 2 0 00.77-2.656l-1.5-3z" />
        </svg>
      )
    },
    {
      title: 'Bachelor of Commerce',
      short: 'B.Com.',
      url: '/comm',
      color: '#0A1628',
      image: '/images/c3.jpg',
      duration: '4 Years (NEP)',
      subjects: 'Financial Accounting · Taxation · Law · Audit',
      prospects: 'Chartered Accountancy, Banking, Corporate Finance',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      title: 'Master of Commerce',
      short: 'M.Com.',
      url: '/mcom',
      color: '#E8722A',
      image: '/images/c4.jpg',
      duration: '2 Years Postgraduate',
      subjects: 'Adv. Cost Accounting · Financial Mgmt · Commerce',
      prospects: 'Management Audits, Investment Banking, Academia',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Master of Science',
      short: 'M.Sc.',
      url: '/msc',
      color: '#2A9D6F',
      image: '/images/c5.jpg',
      duration: '2 Years Postgraduate',
      subjects: 'Organic Chemistry · Inorganic Chemistry · Analysis',
      prospects: 'Pharmaceuticals, R&D Labs, Chemical Industries',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: 'Master of Arts',
      short: 'M.A.',
      url: '/ma',
      color: '#0A1628',
      image: '/images/c6.jpg',
      duration: '2 Years Postgraduate',
      subjects: 'British & American Literature · Linguistics · Poetry',
      prospects: 'Publishing Houses, Journalism, Content Writing, Teaching',
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      )
    },
  ];

  const uniquePartners = [
    '/images/download_1.jpg', '/images/download_2.png', '/images/download_3.png',
    '/images/download_4.png', '/images/download_5.png',
  ];
  const partnerImages = [...uniquePartners, ...uniquePartners, ...uniquePartners, ...uniquePartners, ...uniquePartners, ...uniquePartners];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setProgIndex(prev => {
        const maxIndex = courses.length - visibleCards;
        if (maxIndex <= 0) return 0;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3800);
    return () => clearInterval(timer);
  }, [courses.length, isHovered, visibleCards]);

  return (
    <>
      <EditorialHero />
      <Announcements />

      {/* Quick Access marquee */}
      <section className={s.quickSection}>
        <div className={s.sectionLabel}>
          <span className={s.sectionLabelText}>Quick Access</span>
        </div>
        <div className={s.marqueeTrack} aria-hidden="true">
          <div className={s.marqueeInner}>
            {quickLinks.map((q, i) => (
              <Link key={i} href={q.url} className={s.marqueeItem}>
                <span className={s.marqueeIcon}>{q.icon}</span>
                <span className={s.marqueeName}>{q.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: '#F8F6F0' }}><WaveDivider variant="dark" /></div>

      {/* Stats */}
      <section className={s.statsSection}>
        <div className={s.statsSectionInner}>
          <ScrollReveal direction="up" threshold={0.3}>
            <div className={s.sectionHeadCenter}>
              <span className={s.eyebrow}>By the Numbers</span>
              <h2 className={s.sectionTitleLgLight}>Our <span className={s.accentTextLight}>Impact</span></h2>
            </div>
          </ScrollReveal>
          <StaggerReveal className={s.statsCountGrid} stagger={90} distance={36} duration={800} threshold={0.2}>
            <StatCounter value={60}  suffix="+" label="Faculty Members" desc="Experienced educators" />
            <StatCounter value={1200} suffix="+" label="Students Enrolled" desc="Across all programmes" />
            <StatCounter value={16} suffix="+" label="Programmes Offered" desc="UG, PG & ITEP degrees" />
            <StatCounter value={90} suffix="%+" label="Placement Success" desc="Consistent track record" />
          </StaggerReveal>
        </div>
      </section>

      <div style={{ background: '#0A1628' }}><WaveDivider variant="light" direction="down" /></div>

      {/* About */}
      <section className={s.aboutSection} id="about">
        <div className={s.aboutSectionInner}>
          <StaggerReveal className={s.aboutLeft} stagger={100} distance={40} duration={800} threshold={0.2}>
            <span className={s.eyebrow}>Est. 1961 · Nipani, Karnataka</span>
            <h2 className={s.sectionTitleLg}>About <span className={s.accentText}>Us</span></h2>
            <div className={s.titleUnderline} />
            <p className={s.aboutParagraph}>
              In 1961, KLE Society founded an Arts and Science College at Nipani to eradicate ignorance and illiteracy in the region. Today, the college offers a comprehensive range of UG, PG, and ITEP programmes and stands as the premier institution for Belagavi and Vijayapur districts.
            </p>
            <div className={s.visionMissionRow}>
              <TiltCard className={s.vmCard}>
                <div className={s.vmCardGlow} />
                <div className={s.vmCardIcon}>🎯</div>
                <h4 className={s.vmCardTitle}>Our Vision</h4>
                <p className={s.vmCardText}>To be a frontline institution disseminating quality education that adapts to changing global perspectives.</p>
              </TiltCard>
              <TiltCard className={s.vmCard}>
                <div className={s.vmCardGlow} />
                <div className={s.vmCardIcon}>🚀</div>
                <h4 className={s.vmCardTitle}>Our Mission</h4>
                <p className={s.vmCardText}>To produce competent, skilled youth with educational empowerment maintaining equity, equality, and social justice.</p>
              </TiltCard>
            </div>
            <Link href="/aboutclg" className={s.primaryBtn}>
              Know More
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
          </StaggerReveal>
          <StaggerReveal stagger={120} distance={40} duration={900} threshold={0.2}>
            <div className={s.aboutImgContainer}>
              <RevealImage className={s.aboutRight2}>
                <img src="/images/ap-1.jpg" alt="KLE College Campus" className={s.aboutImg2} />
                <div className={s.aboutImgOverlay} />
              </RevealImage>
              <div className={s.aboutImgSubCard}>
                <img src="/images/main_logo.png" alt="KLE College Logo" className={s.aboutImgSubImg} />
              </div>
            </div>
            <div className={s.aboutMiniStats}>
              {[{ val: '60+', lbl: 'Faculty' }, { val: '1,200+', lbl: 'Students' }, { val: '16+', lbl: 'Programmes' }].map((st, i) => (
                <div key={i} className={s.miniStatBox}>
                  <span className={s.miniStatVal}>{st.val}</span>
                  <span className={s.miniStatLbl}>{st.lbl}</span>
                </div>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      <div style={{ background: '#FAFAFA' }}><WaveDivider variant="paper" direction="down" /></div>

      {/* Strategic Offerings */}
      <section className={s.offeringsSection}>
        <div className={s.offeringsInner}>
          <ScrollReveal direction="up" threshold={0.2}>
            <div className={s.offeringsHeader}>
              <span className={s.offeringsEyebrow}>Strategic Services</span>
              <h2 className={s.offeringsTitle}>
                Your trusted partner for academic excellence across four major streams:
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal className={s.offeringsGrid} stagger={120} threshold={0.1}>
            {/* Column 01: Arts */}
            <div className={`${s.offeringsCard} ${s.cardInner}`}>
              <div className={s.cardNumBackdrop}>01</div>
              <div className={s.cardInner}>
                <div className={s.cardImgWrap}>
                  <img src="/images/gal1.jpeg" alt="Humanities & Social Sciences" className={s.cardImg} />
                </div>
                <div className={s.cardLabel}>Arts Division</div>
                <div className={s.cardTitleWrap}>
                  <h3 className={s.cardTitle}>Humanities &amp; Sciences</h3>
                  <Link href="/ba" className={s.cardBtn} aria-label="Explore Arts division">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
                <p className={s.cardDesc}>
                  Empowering students with deep critical thinking, cultural appreciation, and creative expression through languages, literature, and history.
                </p>
              </div>
            </div>

            {/* Column 02: Science */}
            <div className={`${s.offeringsCard} ${s.cardInner}`}>
              <div className={s.cardNumBackdrop}>02</div>
              <div className={s.cardInner}>
                <div className={s.cardImgWrap}>
                  <img src="/images/gal2.jpeg" alt="Scientific Discovery" className={s.cardImg} />
                </div>
                <div className={s.cardLabel}>Science Division</div>
                <div className={s.cardTitleWrap}>
                  <h3 className={s.cardTitle}>Scientific Discovery</h3>
                  <Link href="/bsc" className={s.cardBtn} aria-label="Explore Science division">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
                <p className={s.cardDesc}>
                  Fostering rigorous research, analytical skills, and technological innovation across mathematics, physics, chemistry, and life sciences.
                </p>
              </div>
            </div>

            {/* Column 03: Commerce */}
            <div className={`${s.offeringsCard} ${s.cardInner}`}>
              <div className={s.cardNumBackdrop}>03</div>
              <div className={s.cardInner}>
                <div className={s.cardImgWrap}>
                  <img src="/images/gal3.jpeg" alt="Business & Finance" className={s.cardImg} />
                </div>
                <div className={s.cardLabel}>Commerce Division</div>
                <div className={s.cardTitleWrap}>
                  <h3 className={s.cardTitle}>Business &amp; Finance</h3>
                  <Link href="/mcom" className={s.cardBtn} aria-label="Explore Commerce division">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
                <p className={s.cardDesc}>
                  Molding next-generation business leaders, accountants, and finance managers with practical accounting skills and economic insights.
                </p>
              </div>
            </div>

            {/* Column 04: ITEP */}
            <div className={`${s.offeringsCard} ${s.cardInner}`}>
              <div className={s.cardNumBackdrop}>04</div>
              <div className={s.cardInner}>
                <div className={s.cardImgWrap}>
                  <img src="/images/gal4.jpeg" alt="Teacher Education" className={s.cardImg} />
                </div>
                <div className={s.cardLabel}>ITEP Programme</div>
                <div className={s.cardTitleWrap}>
                  <h3 className={s.cardTitle}>Teacher Education</h3>
                  <Link href="/itep" className={s.cardBtn} aria-label="Explore Teacher Education program">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
                <p className={s.cardDesc}>
                  Nurturing professional, competent educators through the prestigious Integrated Teacher Education Programme to shape future classrooms.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      <div style={{ background: '#F8F6F0' }}><WaveDivider variant="white" direction="down" /></div>

      {/* Programmes */}
      <section className={s.progsSection} id="programmes">
        <div className={s.progsLayout}>
          <StaggerReveal className={s.progsLeft} stagger={100} distance={36} duration={800} threshold={0.2}>
            <span className={s.progsEyebrow}>Academic Offerings</span>
            <h2 className={s.progsTitle}>Academic <span className={s.accentText}>Programmes</span></h2>
            <div className={s.titleUnderline} />
            <p className={s.progsDesc}>
              KLE Society&apos;s G.I.Bagewadi College offers a comprehensive suite of undergraduate and postgraduate courses, empowering students with the skills and knowledge for a successful career.
            </p>
            <div className={s.sliderCtrl}>
              <button
                className={s.sliderCtrlBtn}
                onClick={() => setProgIndex(p => Math.max(p - 1, 0))}
                disabled={progIndex === 0}
                aria-label="Previous slide"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
              </button>
              <button
                className={s.sliderCtrlBtn}
                onClick={() => setProgIndex(p => Math.min(p + 1, courses.length - visibleCards))}
                disabled={progIndex >= courses.length - visibleCards}
                aria-label="Next slide"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
              </button>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link href="/acadmic" className={s.outlineBtn}>View All Programmes →</Link>
            </div>
          </StaggerReveal>

          <div
            className={s.sliderViewport}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={s.sliderTrack}
              style={{ transform: `translate3d(-${progIndex * 294}px, 0, 0)` } as React.CSSProperties}
            >
              {courses.map((c, i) => (
                <div key={i} className={s.progCard}>
                  <div className={s.progCardImgWrap}>
                    <img src={c.image} alt={c.title} className={s.progCardImg} loading="lazy" />
                  </div>
                  <div className={s.progCardBody} style={{ background: c.color } as React.CSSProperties}>
                    <div className={s.progCardHeader}>
                      <h3 className={s.progCardTitle}>{c.title}</h3>
                      <span className={s.progCardIcon}>{c.icon}</span>
                    </div>
                    <div className={s.progCardSpecs}>
                      <div className={s.progCardSpec}>
                        <span className={s.progCardSpecLabel}>Duration</span>
                        <span className={s.progCardSpecVal}>{c.duration}</span>
                      </div>
                      <div className={s.progCardSpec}>
                        <span className={s.progCardSpecLabel}>Major Subjects</span>
                        <span className={s.progCardSpecVal}>{c.subjects}</span>
                      </div>
                      <div className={s.progCardSpec}>
                        <span className={s.progCardSpecLabel}>Career Prospects</span>
                        <span className={s.progCardSpecVal}>{c.prospects}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: '#ffffff' }}><WaveDivider variant="light" direction="down" /></div>

      {/* Facilities */}
      <section className={s.facilSection} id="facilities">
        <div className={s.facilSectionInner}>
          <ScrollReveal direction="up" threshold={0.2}>
            <div className={s.sectionHeadCenter}>
              <span className={s.eyebrow}>World-Class Infrastructure</span>
              <h2 className={s.sectionTitleLg}>Campus <span className={s.accentText}>Facilities</span></h2>
              <div className={s.titleUnderline} />
              <p className={s.sectionSubtitle}>Explore state-of-the-art facilities built to support comprehensive learning and well-being.</p>
            </div>
          </ScrollReveal>
          <FacilitiesBar />
        </div>
      </section>

      <div style={{ background: '#FAFAFA' }}><WaveDivider variant="paper" direction="down" /></div>

      {/* Chairman */}
      <section className={s.chairSection} id="chairman">
        <div className={s.chairSectionInner}>
          <div className={s.chairRedesignGrid}>
            <ScrollReveal direction="left" delay={100} duration={800} threshold={0.2}>
              <div className={s.chairImageFrame}>
                <div className={s.chairImageBg} />
                <div className={s.chairImageContainer}>
                  <img src="/images/Amitkoreimage.jpg" alt="Shri Amit P. Kore" className={s.chairImage} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} duration={800} threshold={0.2}>
              <div className={s.chairContent}>
                <span className={s.chairEyebrowRedesign}>
                  ABOUT THE CHAIRMAN
                </span>
                <h2 className={s.chairTitleRedesign}>A Legacy of Academic &amp; Service Excellence</h2>
                
                <p className={s.chairParagraphStrong}>
                  Shri Amit Prabhakar Kore is the Hon’ble Chairman of the Board of Management, KLE Society. Under his visionary leadership, the society carries forward a legacy of educational empowerment.
                </p>
                
                <p className={s.chairParagraphRedesign}>
                  &ldquo;Our vision is to facilitate higher learning for rural and semi-urban youth, molding them into professional, competent global citizens while instilling moral values and a commitment to service excellence.&rdquo;
                </p>

                <p className={s.chairParagraphRedesign}>
                  By prioritizing high-quality education and building world-class campus facilities, Shri Amit Kore has steered the institutions of the KLE Society to achieve national recognition and continue their commitment to society.
                </p>

                <Link href="/chairman-msg" className={s.chairReadMoreRedesign}>
                  Read Full Message
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ marginLeft: '6px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div style={{ background: '#F8F6F0' }}><WaveDivider variant="white" direction="down" /></div>

      {/* Partners */}
      <section className={s.partnersSection} id="partners">
        <StaggerReveal className={s.partnersSectionInner} stagger={120} threshold={0.2}>
          <div className={s.sectionHeadCenter}>
            <span className={s.eyebrow}>Hiring from Campus</span>
            <h2 className={s.sectionTitleLg}>Our Placement <span className={s.accentText}>Partners</span></h2>
            <div className={s.titleUnderline} />
          </div>
          <div className={s.partnerMarqueeWrap}>
            <div className={s.partnerMarqueeInner}>
              {partnerImages.map((img, i) => (
                <div key={i} className={s.partnerLogo}>
                  <img src={img} alt={`Partner ${(i % 5) + 1}`} className={s.partnerLogoImg} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className={s.partnersFooter}>
            <Link href="/placements" className={s.primaryBtn}>
              View Placement Records
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
        </StaggerReveal>
      </section>
    </>
  );
}
