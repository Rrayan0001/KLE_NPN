'use client';
import { useState, useEffect } from 'react';
import s from '@/styles/layout.module.css';

export default function Announcements() {
  const [cur, setCur] = useState(0);
  const items = [
    { title: 'Admissions open for BA, BSc, BCom, MCom, MSc & MA English — Academic Year 2026-27', url: '/admission' },
    { title: 'Integrated Teacher Education Program (ITEP) Admissions Now Open!', url: '/itep' },
    { title: "Accredited at 'A' Grade with 3.10 CGPA in the 4th Cycle by NAAC", url: '/certificates' },
    { title: 'B.A., B.Com. and B.Sc. I Semester SEP Admissions — Visit UUCMS Portal', url: 'https://uucms.karnataka.gov.in/' },
    { title: 'Academic Calendar and Commencement Schedule for 2026-27 available now', url: '/plan' },
    { title: 'Merit Scholarship and Fellowship applications for 2026-27 are open', url: '/scholarship' },
    { title: 'Click to view SSR Cycle 4 — NAAC Self Study Report', url: '/ssr' },
  ];

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div className={s.ticker}>
      <div className={s.tickerInner}>
        <div className={s.tickerLeft}>
          <span className={s.tickerDot} />
          <span className={s.tickerBadge}>Announcements</span>
        </div>
        <div className={s.tickerScroll}>
          {items.map((a, i) => (
            <div key={i} className={`${s.tickerItem} ${i === cur ? s.tickerOn : s.tickerOff}`}>
              <a href={a.url} className={s.tickerA}>{a.title}</a>
            </div>
          ))}
        </div>
        <div className={s.tickerCtrl}>
          <button className={s.tickerBtn} onClick={() => setCur(p => (p - 1 + items.length) % items.length)}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
          </button>
          <button className={s.tickerBtn} onClick={() => setCur(p => (p + 1) % items.length)}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
