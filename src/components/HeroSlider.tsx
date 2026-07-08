'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import s from '@/styles/layout.module.css';

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const DURATION = 6000;

  const slides = [
    {
      image: '/images/bann1.jpg',
      tag: 'Est. 1961 · Nipani, Karnataka',
      title: 'Empowering',
      highlight: 'Minds',
      sub: "KLE Society's G.I. Bagewadi Arts, Science and Commerce College — shaping futures and eradicating ignorance since 1961.",
      cta: 'Discover the College',
      url: '/aboutclg',
      secondaryLabel: 'Explore Programmes',
      secondaryUrl: '/acadmic',
    },
    {
      image: '/images/bann2.jpg',
      tag: 'NAAC Accredited · A Grade',
      title: 'Academic',
      highlight: 'Excellence',
      sub: "Accredited 'A' Grade with 3.10 CGPA in the 4th Cycle by NAAC — a six-decade legacy of quality education and research.",
      cta: 'View Accreditation',
      url: '/certificates',
      secondaryLabel: 'Browse Campus',
      secondaryUrl: '/gallery',
    },
    {
      image: '/images/bann3.png',
      tag: 'Admissions Open 2026–27',
      title: 'Journey of',
      highlight: 'Knowledge',
      sub: 'Admissions open for UG, PG and ITEP programmes — build your future at one of Karnataka\'s premier institutions.',
      cta: 'Apply Now',
      url: '/admission',
      secondaryLabel: 'Scholarships',
      secondaryUrl: '/scholarship',
    },
  ];

  const chips = [
    { name: 'Admissions 2026', url: '/admission' },
    { name: 'Programmes', url: '/acadmic' },
    { name: 'Placements', url: '/placements' },
    { name: 'Gallery', url: '/gallery' },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setCur(p => (p + 1) % slides.length);
      setAnimKey(k => k + 1);
    }, DURATION);
    return () => clearInterval(t);
  }, [slides.length]);

  const goTo = (i: number) => {
    setCur((i + slides.length) % slides.length);
    setAnimKey(k => k + 1);
  };

  return (
    <section className={s.hero} aria-label="Hero Slideshow">
      {/* Slides */}
      <div className={s.slideWrap}>
        {slides.map((sl, i) => (
          <div key={i} className={`${s.slide} ${i === cur ? s.slideOn : s.slideOff}`}>
            <img src={sl.image} alt={sl.title} className={s.slideImg} loading={i === 0 ? 'eager' : 'lazy'} />
            <div className={s.slideShade} />
            <div className={s.slideGrain} />
            <div className={s.slideBody}>
              <div className={s.slideBodyInner} key={`content-${animKey}-${i}`}>
                {i === cur && (
                  <div className={s.slideText}>
                    <span className={s.slideTag}>
                      <span className={s.slideTagDot} />
                      {sl.tag}
                    </span>
                    <h1 className={s.slideH1}>
                      {sl.title}<br />
                      <span className={s.slideAccent}>{sl.highlight}</span>
                    </h1>
                    <p className={s.slidePara}>{sl.sub}</p>
                    <div className={s.slideActions}>
                      <Link href={sl.url} className={s.slideCta}>
                        {sl.cta}
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                      </Link>
                      <Link href={sl.secondaryUrl} className={s.slideCtaGhost}>
                        {sl.secondaryLabel}
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                      </Link>
                    </div>
                    <div className={s.slideChips}>
                      {chips.map((c, ci) => (
                        <Link key={ci} href={c.url} className={s.slideChip}>
                          <span className={s.slideChipDot} />
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating NAAC accreditation badge */}
      <div className={s.slideBadge} aria-label="NAAC A Grade Accreditation">
        <div className={s.slideBadgeGrade}>A</div>
        <div className={s.slideBadgeMeta}>
          <div className={s.slideBadgeLabel}>NAAC Accredited</div>
          <div className={s.slideBadgeSub}>3.10 CGPA · 4th Cycle</div>
        </div>
      </div>

      {/* Nav Arrows */}
      <button className={s.prevBtn} onClick={() => goTo(cur - 1)} aria-label="Previous slide">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
      </button>
      <button className={s.nextBtn} onClick={() => goTo(cur + 1)} aria-label="Next slide">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </button>

      {/* Bottom bar: slide counter + dots + scroll cue */}
      <div className={s.heroFoot}>
        <div className={s.heroCounter}>
          <span className={s.heroCounterNum}>0{cur + 1}</span>
          <span className={s.heroCounterSep} />
          <span className={s.heroCounterTotal}>0{slides.length}</span>
        </div>
        <div className={s.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === cur ? s.dotOn : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className={s.scrollIndicator}>
          <div className={s.scrollMouse}>
            <div className={s.scrollWheel} />
          </div>
          <span className={s.scrollLabel}>Scroll</span>
        </div>
      </div>

      {/* Top progress bar — restarts each slide via key */}
      <div className={s.heroProgress} aria-hidden="true">
        <div
          key={`progress-${animKey}`}
          className={s.heroProgressFill}
          style={{ ['--hero-dur' as string]: `${DURATION}ms` } as React.CSSProperties}
        />
      </div>
    </section>
  );
}