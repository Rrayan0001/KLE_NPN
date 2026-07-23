'use client';
import { useState } from 'react';
import s from '@/styles/layout.module.css';

interface MenuDrawerProps { isOpen: boolean; onClose: () => void; }

export default function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const [activeTab, setActiveTab] = useState<'navigation' | 'resources'>('navigation');
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!isOpen) return null;

  const toggle = (sec: string) => setExpanded(expanded === sec ? null : sec);

  const sections: Record<string, { name: string; url: string }[]> = {
    'KLE Society': [
      { name: 'KLE History', url: '/klehistory' },
      { name: 'About the Society', url: '/aboutsociety' },
      { name: 'Founder', url: '/founder' },
      { name: 'College Emblem', url: '/emblem' },
      { name: 'Board of Management', url: '/bom' },
    ],
    'College Details': [
      { name: 'About the College', url: '/aboutclg' },
      { name: "Principal's Message", url: '/principal' },
      { name: "Chairman's Message", url: '/chairman-msg' },
      { name: 'Vision & Mission', url: '/vismis' },
      { name: 'Milestone', url: '/milestone' },
      { name: 'Affiliation', url: '/affiliation' },
      { name: 'Composition', url: '/composition' },
    ],
    'Academic Programmes': [
      { name: 'Bachelor of Arts (BA)', url: '/ba' },
      { name: 'Bachelor of Science (BSc)', url: '/bsc' },
      { name: 'Bachelor of Commerce (BCom)', url: '/comm' },
      { name: 'Master of Commerce (MCom)', url: '/mcom' },
      { name: 'Master of Science (MSc Maths)', url: '/msc' },
      { name: 'Master of Arts (MA English)', url: '/ma' },
      { name: 'ITEP Programme', url: '/itep' },
      { name: 'All Programmes', url: '/acadmic' },
    ],
    'IQAC': [
      { name: 'IQAC Working Committee', url: '/iqacworkingcomittee' },
      { name: 'AQAR Documents', url: '/aqardocs' },
      { name: 'Best Practices', url: '/best-practice' },
      { name: 'Institutional Distinctiveness', url: '/institutional-distinctiveness' },
      { name: 'Feedback', url: '/feedback' },
      { name: 'Quality Policy', url: '/quality' },
    ],
    'NAAC Details': [
      { name: 'NAAC Certificates', url: '/certificates' },
      { name: 'SSR Documents', url: '/ssr' },
      { name: 'Extended Profile', url: '/extendedprofile' },
      { name: 'Criterion 1–3', url: '/criterian1' },
      { name: 'Criterion 4–7', url: '/criterian4' },
    ],
    'Student Support': [
      { name: 'Scholarships', url: '/scholarship' },
      { name: 'NSS', url: '/nss' },
      { name: 'NCC', url: '/ncc' },
      { name: 'Sports', url: '/sports' },
      { name: 'Anti-Ragging Cell', url: '/ragging' },
      { name: 'Grievance Cell', url: '/cwc' },
      { name: 'Placements', url: '/placements' },
    ],
    'Photo Gallery': [
      { name: 'Campus & Event Gallery', url: '/gallery' },
    ],
    'In Focus': [
      { name: 'Events', url: '/events' },
      { name: 'Achievements', url: '/achivement' },
      { name: 'Research', url: '/research' },
      { name: 'NIRF Data', url: '/nirf' },
    ],
  };

  const resources = [
    { name: 'Admissions', icon: '📋', url: '/admission' },
    { name: 'NAAC Docs', icon: '🏆', url: '/certificates' },
    { name: 'Gallery', icon: '🖼️', url: '/gallery' },
    { name: 'IQAC', icon: '📊', url: '/iqacworkingcomittee' },
    { name: 'Library', icon: '📚', url: '/library' },
    { name: 'Contact Us', icon: '📞', url: '/contact' },
    { name: 'Results', icon: '📝', url: '/result' },
  ];

  return (
    <div className={s.drawerOverlay}>
      <div className={s.drawerBg} onClick={onClose} />
      <div className={s.drawerWrap}>
        <div className={s.drawerPanel}>
          <button className={s.drawerCloseBtn} onClick={onClose}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className={s.drawerBody}>
            {/* Left */}
            <div className={s.drawerLeft}>
              <div>
                <h4 className={s.drawerSearchHead}>Explore G.I.Bagewadi College</h4>
                <div className={s.searchWrap}>
                  <span className={s.searchIcon}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></span>
                  <input type="search" placeholder="Search departments, courses, facilities..." className={s.searchInput} />
                  <button className={s.searchBtn}>Search</button>
                </div>
              </div>
              <div className={s.drawerHero}>
                <h1 className={s.drawerHeroH1}>Empowering Minds,<br /><span className={s.drawerHeroGold}>Shaping Futures</span></h1>
                <p className={s.drawerHeroPara}>KLE Society's G.I.Bagewadi College is committed to academic excellence, NAAC-accredited quality education, and holistic student development.</p>
                <div className={s.drawerHeroBtns}>
                  <a href="/admission" onClick={onClose} className={s.dhBtnPrimary}>Apply Now</a>
                  <a href="/acadmic" onClick={onClose} className={s.dhBtnSecondary}>Explore Courses</a>
                </div>
              </div>
              <div className={s.drawerNotice}>
                <h3 className={s.noticeTitle}>Accredited at &apos;A&apos; Grade — NAAC</h3>
                <p className={s.noticePara}>3.10 CGPA in the 4th Cycle. Join a legacy of academic excellence since 1961.</p>
                <a href="/certificates" onClick={onClose} className={s.noticeBtn}>VIEW NAAC DETAILS</a>
              </div>
            </div>
            {/* Right */}
            <div className={s.drawerRight}>
              <div className={s.tabs}>
                <button className={`${s.tab} ${activeTab === 'navigation' ? s.tabOn : s.tabOff}`} onClick={() => setActiveTab('navigation')}>Main Menu</button>
                <button className={`${s.tab} ${activeTab === 'resources' ? s.tabOn : s.tabOff}`} onClick={() => setActiveTab('resources')}>Resources</button>
              </div>
              <div className={s.menuList}>
                {activeTab === 'navigation' ? (
                  Object.entries(sections).map(([title, items]) => (
                    <div key={title} className={s.accItem}>
                      <button className={s.accBtn} onClick={() => toggle(title)}>
                        <span>{title}</span>
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={`${s.accChevron} ${expanded === title ? s.accChevronOpen : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
                      </button>
                      {expanded === title && (
                        <div className={s.accContent}>
                          {items.map((it, idx) => (
                            <a key={idx} href={it.url} onClick={onClose} className={s.accLink}>
                              <span>{it.name}</span>
                              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className={s.resGrid}>
                    {resources.map((r, i) => (
                      <a key={i} href={r.url} onClick={onClose} className={s.resCard}>
                        <span className={s.resIcon}>{r.icon}</span>
                        <span className={s.resName}>{r.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
