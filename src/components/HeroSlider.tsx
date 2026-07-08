'use client';
import { useState, useEffect } from 'react';
import s from '@/styles/layout.module.css';

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const slides = [
    {
      image: '/images/bann1.jpg',
      tag: 'Est. 1961 · Nipani, Karnataka',
      title: 'Empowering',
      highlight: 'Minds',
      sub: "KLE Society's G.I.Bagewadi Arts, Science and Commerce College — shaping futures since 1961.",
      cta: 'Discover the College',
      url: '/aboutclg',
    },
    {
      image: '/images/bann2.jpg',
      tag: 'NAAC Accredited · A Grade',
      title: 'Academic',
      highlight: 'Excellence',
      sub: "Accredited 'A' Grade with 3.10 CGPA in the 4th Cycle by NAAC. A legacy of quality education.",
      cta: 'Explore Programmes',
      url: '/acadmic',
    },
    {
      image: '/images/bann3.png',
      tag: 'Admissions Open 2026–27',
      title: 'Journey of',
      highlight: 'Knowledge',
      sub: 'Admissions open for UG and PG programmes — build your career with us.',
      cta: 'Apply Now',
      url: '/admission',
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setCur(p => (p + 1) % slides.length);
      setAnimKey(k => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const goTo = (i: number) => {
    setCur(i);
    setAnimKey(k => k + 1);
  };

  return (
    <section className={s.hero} aria-label="Hero Slideshow">
      {/* Slides */}
      <div className={s.slideWrap}>
        {slides.map((sl, i) => (
          <div key={i} className={`${s.slide} ${i === cur ? s.slideOn : s.slideOff}`}>
            <img src={sl.image} alt={sl.title} className={s.slideImg} />
            <div className={s.slideShade} />
            <div className={s.slideBody}>
              <div className={s.slideBodyInner} key={`content-${animKey}-${i}`}>
                {i === cur && (
                  <div className={s.slideText}>
                    <span className={s.slideTag}>{sl.tag}</span>
                    <h1 className={s.slideH1}>
                      {sl.title}<br />
                      <span className={s.slideAccent}>{sl.highlight}</span>
                    </h1>
                    <p className={s.slidePara}>{sl.sub}</p>
                    <a href={sl.url} className={s.slideCta}>
                      {sl.cta}
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Arrows */}
      <button className={s.prevBtn} onClick={() => goTo((cur - 1 + slides.length) % slides.length)} aria-label="Previous slide">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
      </button>
      <button className={s.nextBtn} onClick={() => goTo((cur + 1) % slides.length)} aria-label="Next slide">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </button>

      {/* Slide Progress Dots */}
      <div className={s.dots}>
        {slides.map((_, i) => (
          <button key={i} className={`${s.dot} ${i === cur ? s.dotOn : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={s.scrollIndicator}>
        <div className={s.scrollMouse}>
          <div className={s.scrollWheel} />
        </div>
        <span className={s.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
