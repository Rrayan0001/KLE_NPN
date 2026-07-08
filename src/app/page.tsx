'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import s from '@/styles/layout.module.css';
import HeroSlider from '@/components/HeroSlider';
import Announcements from '@/components/Announcements';
import FacilitiesBar from '@/components/FacilitiesBar';

/* ── Animated Count-Up Hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  }, [target, duration]);

  return { count, ref };
}

function StatCounter({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className={s.statCountCard} ref={ref}>
      <div className={s.statCountVal}>{count}{suffix}</div>
      <div className={s.statCountLabel}>{label}</div>
      <div className={s.statCountDesc}>{desc}</div>
    </div>
  );
}

/* ── Intersection Observer Fade-In ───────────────────────────── */
function FadeSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className ?? ''} ${visible ? s.fadeVisible : s.fadeHidden}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const quickLinks = [
    { name: 'Admission', icon: '📋', desc: 'Apply for 2026-27', url: '/admission' },
    { name: 'NAAC Docs', icon: '🏆', desc: 'Accreditation details', url: '/certificates' },
    { name: 'Placements', icon: '💼', desc: 'Placement records', url: '/placements' },
    { name: 'Library', icon: '📚', desc: 'Digital library', url: '/library' },
    { name: 'Hostel', icon: '🏠', desc: 'Campus living', url: '/hostel' },
    { name: 'IQAC', icon: '📊', desc: 'Quality assurance', url: '/iqacworkingcomittee' },
    { name: 'Scholarships', icon: '🎓', desc: 'Financial aid', url: '/scholarship' },
    { name: 'NSS / NCC', icon: '🌿', desc: 'Social & defence', url: '/nss' },
    { name: 'Gallery', icon: '🖼️', desc: 'Events & campus', url: '/gallery' },
    { name: 'Contact', icon: '📞', desc: 'Reach the college', url: '/contact' },
    // Duplicated for seamless marquee
    { name: 'Admission', icon: '📋', desc: 'Apply for 2026-27', url: '/admission' },
    { name: 'NAAC Docs', icon: '🏆', desc: 'Accreditation details', url: '/certificates' },
    { name: 'Placements', icon: '💼', desc: 'Placement records', url: '/placements' },
    { name: 'Library', icon: '📚', desc: 'Digital library', url: '/library' },
    { name: 'Hostel', icon: '🏠', desc: 'Campus living', url: '/hostel' },
    { name: 'IQAC', icon: '📊', desc: 'Quality assurance', url: '/iqacworkingcomittee' },
    { name: 'Scholarships', icon: '🎓', desc: 'Financial aid', url: '/scholarship' },
    { name: 'NSS / NCC', icon: '🌿', desc: 'Social & defence', url: '/nss' },
    { name: 'Gallery', icon: '🖼️', desc: 'Events & campus', url: '/gallery' },
    { name: 'Contact', icon: '📞', desc: 'Reach the college', url: '/contact' },
  ];

  const courses = [
    { title: 'Bachelor of Arts', short: 'BA', url: '/ba', color: '#E8722A' },
    { title: 'Bachelor of Science', short: 'BSc', url: '/bsc', color: '#2A9D6F' },
    { title: 'Bachelor of Commerce', short: 'BCom', url: '/comm', color: '#0A1628' },
    { title: 'Master of Commerce', short: 'MCom', url: '/mcom', color: '#E8722A' },
    { title: 'Master of Science', short: 'MSc', url: '/msc', color: '#2A9D6F' },
    { title: 'Master of Arts', short: 'MA', url: '/ma', color: '#0A1628' },
  ];

  const partnerImages = [
    '/images/download_1.jpg',
    '/images/download_2.png',
    '/images/download_3.png',
    '/images/download_4.png',
    '/images/download_5.png',
    // Duplicated for seamless loop
    '/images/download_1.jpg',
    '/images/download_2.png',
    '/images/download_3.png',
    '/images/download_4.png',
    '/images/download_5.png',
  ];

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── 2. ANNOUNCEMENTS ────────────────────────────────────── */}
      <Announcements />

      {/* ── 3. QUICK ACCESS — Scrolling Marquee ─────────────────── */}
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

      {/* ── 4. STATS ─────────────────────────────────────────────── */}
      <section className={s.statsSection}>
        <div className={s.statsSectionInner}>
          <div className={s.sectionHeadCenter}>
            <span className={s.eyebrow}>By the Numbers</span>
            <h2 className={s.sectionTitleLg}>Our <span className={s.accentText}>Impact</span></h2>
          </div>
          <div className={s.statsCountGrid}>
            <StatCounter value={60} suffix="+" label="Faculty Members" desc="Experienced educators" />
            <StatCounter value={1200} suffix="+" label="Students Enrolled" desc="Across all programmes" />
            <StatCounter value={16} suffix="+" label="Programmes Offered" desc="UG, PG & ITEP degrees" />
            <StatCounter value={90} suffix="%+" label="Placement Success" desc="Consistent track record" />
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT ─────────────────────────────────────────────── */}
      <section className={s.aboutSection} id="about">
        <div className={s.aboutSectionInner}>
          <FadeSection className={s.aboutLeft}>
            <span className={s.eyebrow}>Est. 1961 · Nipani, Karnataka</span>
            <h2 className={s.sectionTitleLg}>
              About <span className={s.accentText}>Us</span>
            </h2>
            <div className={s.titleUnderline} />
            <p className={s.aboutParagraph}>
              In 1961, KLE Society founded an Arts and Science College at Nipani to eradicate ignorance and illiteracy in the region. Today, the college offers a comprehensive range of UG, PG, and ITEP programmes and stands as the premier institution for Belagavi and Vijayapur districts.
            </p>
            <div className={s.visionMissionRow}>
              <div className={s.vmCard}>
                <div className={s.vmCardIcon}>🎯</div>
                <h4 className={s.vmCardTitle}>Our Vision</h4>
                <p className={s.vmCardText}>To be a frontline institution disseminating quality education that adapts to changing global perspectives.</p>
              </div>
              <div className={s.vmCard}>
                <div className={s.vmCardIcon}>🚀</div>
                <h4 className={s.vmCardTitle}>Our Mission</h4>
                <p className={s.vmCardText}>To produce competent, skilled youth with educational empowerment maintaining equity, equality, and social justice.</p>
              </div>
            </div>
            <Link href="/aboutclg" className={s.primaryBtn}>
              Know More
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
          </FadeSection>
          <FadeSection className={s.aboutRight2}>
            <div className={s.aboutImgWrap}>
              <img src="/images/banner10_1.jpg" alt="KLE College Campus" className={s.aboutImg2} />
              <div className={s.aboutImgOverlay} />
            </div>
            <div className={s.aboutMiniStats}>
              {[{ val: '60+', lbl: 'Faculty' }, { val: '1,200+', lbl: 'Students' }, { val: '16+', lbl: 'Programmes' }].map((st, i) => (
                <div key={i} className={s.miniStatBox}>
                  <span className={s.miniStatVal}>{st.val}</span>
                  <span className={s.miniStatLbl}>{st.lbl}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── 6. PROGRAMMES ─────────────────────────────────────────── */}
      <section className={s.progsSection} id="programmes">
        <div className={s.progsSectionInner}>
          <FadeSection className={s.sectionHeadCenter}>
            <span className={s.eyebrow}>Academic Offerings</span>
            <h2 className={s.sectionTitleLg}>Our <span className={s.accentText}>Programmes</span></h2>
            <div className={s.titleUnderline} />
            <p className={s.sectionSubtitle}>Choose from our range of undergraduate and postgraduate programmes designed for modern careers.</p>
          </FadeSection>
          <div className={s.coursesScroll}>
            {courses.map((c, i) => (
              <Link key={i} href={c.url} className={s.courseCardNew} style={{ '--card-accent': c.color } as React.CSSProperties}>
                <div className={s.courseCardAccentLine} />
                <div className={s.courseShortNew}>{c.short}</div>
                <div className={s.courseFullNew}>{c.title}</div>
                <div className={s.courseArrow}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </div>
              </Link>
            ))}
          </div>
          <div className={s.progsFooter}>
            <Link href="/acadmic" className={s.outlineBtn}>View All Programmes →</Link>
          </div>
        </div>
      </section>

      {/* ── 7. FACILITIES ──────────────────────────────────────────── */}
      <section className={s.facilSection} id="facilities">
        <div className={s.facilSectionInner}>
          <FadeSection className={s.sectionHeadCenter}>
            <span className={s.eyebrow}>World-Class Infrastructure</span>
            <h2 className={s.sectionTitleLg}>Campus <span className={s.accentText}>Facilities</span></h2>
            <div className={s.titleUnderline} />
            <p className={s.sectionSubtitle}>Explore state-of-the-art facilities built to support comprehensive learning and well-being.</p>
          </FadeSection>
          <FacilitiesBar />
        </div>
      </section>

      {/* ── 8. CHAIRMAN ────────────────────────────────────────────── */}
      <section className={s.chairSection} id="chairman">
        <div className={s.chairSectionInner}>
          <FadeSection>
            <span className={s.eyebrowLight}>Leadership</span>
            <h2 className={s.sectionTitleLgLight}>A Message from Our <span className={s.accentTextLight}>Chairman</span></h2>
            <div className={s.titleUnderlineLight} />
          </FadeSection>
          <FadeSection className={s.chairCard}>
            <div className={s.chairQuoteMark}>&ldquo;</div>
            <div className={s.chairContent}>
              <p className={s.chairQuoteText}>
                Our vision is to facilitate higher learning for rural and semi-urban youth, molding them into professional, competent global citizens while instilling moral values and a commitment to service excellence.
              </p>
              <div className={s.chairPerson}>
                <div className={s.chairAvatar}>
                  <img src="/images/Amitkoreimage.jpg" alt="Shri Amit P. Kore" className={s.chairAvatarImg} />
                </div>
                <div>
                  <div className={s.chairName}>Shri Amit P. Kore</div>
                  <div className={s.chairRole}>Chairman, KLE Society, Belagavi</div>
                  <Link href="/chairman-msg" className={s.chairReadMore}>Read Full Message →</Link>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── 9. PLACEMENT PARTNERS — Infinite Marquee ──────────────── */}
      <section className={s.partnersSection} id="partners">
        <div className={s.partnersSectionInner}>
          <FadeSection className={s.sectionHeadCenter}>
            <span className={s.eyebrow}>Hiring from Campus</span>
            <h2 className={s.sectionTitleLg}>Our Placement <span className={s.accentText}>Partners</span></h2>
            <div className={s.titleUnderline} />
          </FadeSection>
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
        </div>
      </section>
    </>
  );
}
