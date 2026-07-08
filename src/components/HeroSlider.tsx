'use client';
import { useState, useEffect } from 'react';
import s from '@/styles/layout.module.css';

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const slides = [
    { image: '/images/bann1.jpg', title: 'Empowering', highlight: 'Minds', sub: "KLE Society's G.I.Bagewadi Arts, Science and Commerce College, Nipani — Est. 1961.", cta: 'Know More', url: '/aboutclg' },
    { image: '/images/bann2.jpg', title: 'Academic', highlight: 'Excellence', sub: "Accredited 'A' Grade with 3.10 CGPA in the 4th Cycle by NAAC.", cta: 'Our Courses', url: '/acadmic' },
    { image: '/images/bann3.png', title: 'Journey of', highlight: 'Knowledge', sub: 'Admissions open for UG and PG programmes — Academic Year 2026-27.', cta: 'Apply Now', url: '/admission' },
  ];

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className={s.hero}>
      <div className={s.slideWrap}>
        {slides.map((sl, i) => (
          <div key={i} className={`${s.slide} ${i === cur ? s.slideOn : s.slideOff}`}>
            <img src={sl.image} alt="Banner" className={s.slideImg} />
            <div className={s.slideShade} />
            <div className={s.slideBody}>
              <div className={s.slideBodyInner}>
                <div className={s.slideText}>
                  <h1 className={s.slideH1}>
                    {sl.title}<br />
                    <span className={s.slideAccent}>{sl.highlight}</span>
                  </h1>
                  <p className={s.slidePara}>{sl.sub}</p>
                  <a href={sl.url} className={s.slideCta}>
                    {sl.cta}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={s.prevBtn} onClick={() => setCur(p => (p - 1 + slides.length) % slides.length)}>
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
      </button>
      <button className={s.nextBtn} onClick={() => setCur(p => (p + 1) % slides.length)}>
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </button>
      <div className={s.dots}>
        {slides.map((_, i) => (
          <button key={i} className={`${s.dot} ${i === cur ? s.dotOn : ''}`} onClick={() => setCur(i)} />
        ))}
      </div>
    </section>
  );
}
