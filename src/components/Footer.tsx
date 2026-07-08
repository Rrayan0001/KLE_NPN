'use client';
import Link from 'next/link';
import s from '@/styles/layout.module.css';

export default function Footer() {
  const quickLinks = [
    { name: 'Admissions', url: '/admission' },
    { name: 'Programmes', url: '/acadmic' },
    { name: 'Placements', url: '/placements' },
    { name: 'Library', url: '/library' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'IQAC', url: '/iqacworkingcomittee' },
    { name: 'Scholarships', url: '/scholarship' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const naacLinks = [
    { name: 'SSR Document', url: '/ssr' },
    { name: 'AQAR Reports', url: '/aqardocs' },
    { name: 'NIRF Data', url: '/nirf' },
    { name: 'Best Practices', url: '/best-practice' },
    { name: 'Extended Profile', url: '/extendedprofile' },
  ];

  const socials = [
    {
      name: 'Facebook', url: '#',
      icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>,
    },
    {
      name: 'Twitter', url: '#',
      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>,
    },
    {
      name: 'YouTube', url: '#',
      icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>,
    },
    {
      name: 'Instagram', url: '#',
      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>,
    },
  ];

  return (
    <footer className={s.footer}>
      {/* Wavy SVG divider */}
      <div className={s.footerWave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#0A1628" />
        </svg>
      </div>

      <div className={s.footerInner}>
        <div className={s.footerGrid}>

          {/* Col 1 — Brand */}
          <div className={s.footerBrand}>
            <img src="/images/logo.png" alt="KLE College Logo" className={s.footerLogo} />
            <p className={s.footerDesc}>
              KLE Society&apos;s G.I.Bagewadi Arts, Science &amp; Commerce College, Nipani — a NAAC-accredited institution committed to quality education and student welfare since 1961.
            </p>
            <div className={s.footerAccredBadge}>
              <span className={s.footerAccredGrade}>A</span>
              <div>
                <div className={s.footerAccredLabel}>NAAC Accredited</div>
                <div className={s.footerAccredSub}>3.10 CGPA · 4th Cycle</div>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className={s.footerColTitle}>Quick Links</h4>
            <ul className={s.footerLinks}>
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.url} className={s.footerLink}>
                    <span className={s.footerLinkArrow}>›</span> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — NAAC / IQAC */}
          <div>
            <h4 className={s.footerColTitle}>NAAC &amp; Quality</h4>
            <ul className={s.footerLinks}>
              {naacLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.url} className={s.footerLink}>
                    <span className={s.footerLinkArrow}>›</span> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Social */}
          <div>
            <h4 className={s.footerColTitle}>Get In Touch</h4>
            <div className={s.footerContactItem}>
              <svg className={s.footerContactIcon} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
              <p className={s.footerAddress}>G.I.Bagewadi Arts, Science<br />&amp; Commerce College,<br />Nipani – 591237, Belagavi, Karnataka</p>
            </div>
            <div className={s.footerContactItem}>
              <svg className={s.footerContactIcon} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              <p className={s.footerPhone}>08338 – 220116</p>
            </div>
            <div className={s.footerContactItem}>
              <svg className={s.footerContactIcon} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
              <a href="mailto:klegib_npn@yahoo.co.in" className={s.footerEmailA}>klegib_npn@yahoo.co.in</a>
            </div>

            <div className={s.socialRow}>
              {socials.map((sc, i) => (
                <a key={i} href={sc.url} className={s.socialA} aria-label={sc.name}>{sc.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={s.footerBottom}>
          <div>© {new Date().getFullYear()} KLE Society&apos;s G.I.Bagewadi College. All rights reserved.</div>
          <div className={s.footerBottomLinks}>
            <Link href="/coc" className={s.footerBottomA}>Code of Conduct</Link>
            <span className={s.footerSep}>·</span>
            <Link href="/maitenance" className={s.footerBottomA}>Maintenance Policy</Link>
            <span className={s.footerSep}>·</span>
            <Link href="/contact" className={s.footerBottomA}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
