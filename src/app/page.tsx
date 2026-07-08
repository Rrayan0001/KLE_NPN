'use client';
import Link from 'next/link';
import s from '@/styles/layout.module.css';
import HeroSlider from '@/components/HeroSlider';
import Announcements from '@/components/Announcements';
import StatsGrid from '@/components/StatsGrid';
import FacilitiesBar from '@/components/FacilitiesBar';

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
  ];

  const courses = [
    { title: 'Bachelor of Arts', short: 'BA', url: '/ba', img: '/images/logo2.jpg' },
    { title: 'Bachelor of Science', short: 'BSc', url: '/bsc', img: '/images/logo6.jpg' },
    { title: 'Bachelor of Commerce', short: 'BCom', url: '/comm', img: '/images/logo3.jpg' },
    { title: 'Master of Commerce', short: 'MCom', url: '/mcom', img: '/images/logo5.jpg' },
    { title: 'Master of Science', short: 'MSc', url: '/msc', img: '/images/logo4.jpg' },
    { title: 'Master of Arts', short: 'MA', url: '/ma', img: '/images/logo7.jpg' },
  ];

  return (
    <>
      {/* 1. Full-screen Hero Slider */}
      <HeroSlider />

      {/* 2. Announcements Ticker */}
      <Announcements />

      {/* 3. Quick Links Grid */}
      <div className={s.quickLinks}>
        <div className={s.quickLinksInner}>
          {quickLinks.map((q, i) => (
            <Link key={i} href={q.url} className={s.qlCard}>
              <div className={s.qlIcon}>{q.icon}</div>
              <span className={s.qlName}>{q.name}</span>
              <div className={s.qlBar} />
              <span className={s.qlDesc}>{q.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Stats Bar */}
      <StatsGrid />

      {/* 5. About Section */}
      <section className={s.about}>
        <div className={s.aboutInner}>
          <div>
            <span className={s.aboutEyebrow}>Est. 1961 — Nipani, Karnataka</span>
            <h2 className={s.aboutH2}>
              Empowering Minds,<br />
              <span className={s.aboutH2Gold}>Inspiring Futures</span>
            </h2>
            <p className={s.aboutPara}>
              In the year 1961, KLE Society with a mission to eradicate ignorance and illiteracy started an Arts and Science College at Nipani. This was the only college catering to the educational needs of major parts of Belagavi and Vijayapur districts. In 1977, Commerce was introduced. Today, the college offers a wide range of UG, PG and ITEP programmes.
            </p>
            <div className={s.visionBox}>
              <h4 className={s.boxTitle}>Our Vision</h4>
              <p className={s.boxText}>To be a frontline institution and to act as a catalyst in disseminating quality education keeping in view the changing global perspectives.</p>
            </div>
            <div className={s.missionBox}>
              <h4 className={s.boxTitle}>Our Mission</h4>
              <p className={s.boxText}>To produce competent and skilled youth with educational empowerment by maintaining equity, equality, and social justice.</p>
            </div>
            <Link href="/aboutclg" className={s.aboutBtn}>
              Know More
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
          <div className={s.aboutRight}>
            <img src="/images/banner10_1.jpg" alt="College Campus" className={s.aboutImg} />
            <div className={s.statsRow}>
              {[{ val: '60+', lbl: 'Faculty Members' }, { val: '1,200+', lbl: 'Students' }, { val: '16+', lbl: 'Programmes' }].map((st, i) => (
                <div key={i} className={s.statBox}>
                  <span className={s.statBoxVal}>{st.val}</span>
                  <span className={s.statBoxLbl}>{st.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Programmes */}
      <section className={s.progs}>
        <div className={s.progsInner}>
          <div className={s.secHead}>
            <h2 className={s.secTitle}>Our <span className={s.secTitleGold}>Programmes</span></h2>
            <p className={s.secSub}>Choose from our range of undergraduate and postgraduate programmes.</p>
          </div>
          <div className={s.coursesGrid}>
            {courses.map((c, i) => (
              <Link key={i} href={c.url} className={s.courseCard}>
                <div className={s.courseImgWrap}>
                  <img src={c.img} alt={c.short} className={s.courseImg} />
                </div>
                <span className={s.courseShort}>{c.short}</span>
                <span className={s.courseFull}>{c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Facilities Grid */}
      <FacilitiesBar />

      {/* 8. Chairman */}
      <section className={s.chairman}>
        <div className={s.chairmanInner}>
          <div className={s.secHead}>
            <h2 className={s.secTitle}>Our Honorable <span className={s.secTitleGold}>Chairman</span></h2>
          </div>
          <div className={s.chairmanCard}>
            <div className={s.chairmanAvatar}>
              <img src="/images/Amitkoreimage.jpg" alt="Shri Amit P. Kore" className={s.chairmanAvatarImg} />
            </div>
            <div>
              <h3 className={s.chairmanName}>Shri Amit P. Kore</h3>
              <span className={s.chairmanRole}>Chairman, KLE Society, Belagavi</span>
              <p className={s.chairmanQuote}>&ldquo;Our vision is to facilitate higher learning for rural and semi-urban youth, molding them into professional, competent global citizens while instilling moral values and service excellence.&rdquo;</p>
              <Link href="/chairman-msg" className={s.chairmanMore}>Read Full Message →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Placement Partners */}
      <section className={s.partners}>
        <div className={s.partnersInner}>
          <p className={s.partnersHead}>Our Placed Partners</p>
          <div className={s.partnersRow}>
            {['/images/download_1.jpg', '/images/download_2.png', '/images/download_3.png', '/images/download_4.png', '/images/download_5.png'].map((img, i) => (
              <div key={i} className={s.partnerBox}>
                <img src={img} alt={`Partner ${i + 1}`} className={s.partnerBoxImg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
