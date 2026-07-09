"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "@/styles/layout.module.css";
import SearchModal from "./SearchModal";

interface NavLinkItem {
  name: string;
  href: string;
  sublinks?: { name: string; href: string }[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setHoveredSection(null);
    setActiveSection("");
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Track scroll position for sticky menu bar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "KLE SOCIETY",
      href: "/klehistory",
      sublinks: [
        { name: "KLE History", href: "/klehistory" },
        { name: "About the Society", href: "/aboutsociety" },
        { name: "Founder Profile", href: "/founder" },
        { name: "College Emblem", href: "/emblem" },
        { name: "Board of Management", href: "/bom" },
      ],
    },
    {
      name: "COLLEGE",
      href: "/aboutclg",
      sublinks: [
        { name: "About College", href: "/aboutclg" },
        { name: "Principal's Message", href: "/principal" },
        { name: "Chairman's Message", href: "/chairman-msg" },
        { name: "Vision & Mission", href: "/vismis" },
        { name: "Milestone Landmarks", href: "/milestone" },
        { name: "Affiliation Details", href: "/affiliation" },
        { name: "Composition Details", href: "/composition" },
      ],
    },
    {
      name: "PROGRAMMES",
      href: "/acadmic",
      sublinks: [
        { name: "Bachelor of Arts (BA)", href: "/ba" },
        { name: "Bachelor of Science (BSc)", href: "/bsc" },
        { name: "Bachelor of Commerce (BCom)", href: "/comm" },
        { name: "Master of Commerce (MCom)", href: "/mcom" },
        { name: "Master of Science (MSc)", href: "/msc" },
        { name: "Master of Arts (MA English)", href: "/ma" },
        { name: "ITEP Program", href: "/itep" },
        { name: "All Programmes Offered", href: "/acadmic" },
      ],
    },
    {
      name: "IQAC",
      href: "/iqacworkingcomittee",
      sublinks: [
        { name: "IQAC Committee", href: "/iqacworkingcomittee" },
        { name: "AQAR Documents", href: "/aqardocs" },
        { name: "Best Practices", href: "/best-practice" },
        { name: "Institutional Distinctiveness", href: "/institutional-distinctiveness" },
        { name: "Feedback System", href: "/feedback" },
        { name: "Quality Policy", href: "/quality" },
      ],
    },
    {
      name: "NAAC",
      href: "/certificates",
      sublinks: [
        { name: "NAAC Certificates", href: "/certificates" },
        { name: "SSR Documents", href: "/ssr" },
        { name: "Extended Profile", href: "/extendedprofile" },
        { name: "Criterion 1-3 Details", href: "/criterian1" },
        { name: "Criterion 4-7 Details", href: "/criterian4" },
      ],
    },
    {
      name: "STUDENT SUPPORT",
      href: "/scholarship",
      sublinks: [
        { name: "Scholarships Available", href: "/scholarship" },
        { name: "NSS Unit", href: "/nss" },
        { name: "NCC Wing", href: "/ncc" },
        { name: "Sports Facilities", href: "/sports" },
        { name: "Anti-Ragging Cell", href: "/ragging" },
        { name: "Grievance Cell", href: "/cwc" },
        { name: "Placements Support", href: "/placements" },
      ],
    },
    {
      name: "IN FOCUS",
      href: "/gallery",
      sublinks: [
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Events Calendar", href: "/events" },
        { name: "Achievements Board", href: "/achivement" },
        { name: "Research Activities", href: "/research" },
        { name: "NIRF Data Info", href: "/nirf" },
      ],
    },
    {
      name: "STUDENT DATA",
      href: "/result",
      sublinks: [
        { name: "Student Results", href: "/result" },
        { name: "AISHE Details", href: "/aishe" },
        { name: "Alumni Network", href: "/alumni" },
        { name: "Mentor Mentee list", href: "/mentor" },
      ],
    },
    { name: "CONTACT", href: "/contact" },
  ];

  const isHeroState = pathname === "/" && isAtTop;

  return (
    <>
      <div className={s.headerWrapper}>
        
        {/* DESKTOP HEADER (Top bar) */}
        <div className={s.topHeader}>
          {/* Logo Badge (Overlapping) */}
          <Link href="/" className={s.logoBadge} onClick={() => setIsOpen(false)}>
            <img src="/images/logos/navbar_logo_bgrmeoved.png" className={s.logoBadgeImg} alt="KLE Logo" />
          </Link>

          {/* Symmetrical branding titles */}
          <div className={s.brandingCenter}>
            <h2 className={s.titleMain}>
              <span className={s.titleSchool}>KLE Society&apos;s</span>
              <span className={s.titleChandan}>G.I.Bagewadi Arts, Science &amp; Commerce College, Nipani</span>
            </h2>
            <div className={s.subtitleSlogan}>Accredited at &apos;A&apos; Grade with 3.10 CGPA in the 4th Cycle by NAAC</div>
            <div className={s.subtextInstitution}>
              An Institution of Karnatak Lingayat Education Society, Belagavi | Affiliated to Rani Channamma University, Belagavi
            </div>
          </div>

          {/* Badges block + Select Language */}
          <div className={s.headerRight}>
            <div className={s.headerRightRow1}>
              <span className={s.headerBadge}>ESTD 1961</span>
              <span className={s.headerBadge}>NAAC &apos;A&apos; GRADE</span>
            </div>
            
            <div className={s.headerRightRow2}>
              <div className={s.phoneInfo}>PHONE: 08338 - 220116</div>
              
              {/* Language Selector styled select dropdown */}
              <div className={s.languageSelector}>
                <select
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    outline: 'none',
                    fontWeight: 800,
                    fontSize: 'inherit',
                    cursor: 'pointer',
                    paddingRight: '4px'
                  }}
                  defaultValue="en"
                  onChange={(e) => {
                    if (e.target.value === "kn") {
                      alert("Language translation functionality (Kannada) can be integrated here.");
                    }
                  }}
                >
                  <option value="en" style={{ color: '#0A1628' }}>Select Language</option>
                  <option value="kn" style={{ color: '#0A1628' }}>ಕನ್ನಡ (Kannada)</option>
                </select>
                <svg className={s.languageChevron} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU BAR */}
        <nav className={`${s.menuBar} ${isSticky ? s.menuBarSticky : ""}`}>
          <ul className={s.navLinksList}>
            {navLinks.map((link) => (
              <li key={link.name} className={s.navItem}>
                {link.sublinks ? (
                  <>
                    <button className={`${s.navLink} ${pathname.startsWith(link.href) ? s.navLinkActive : ""}`}>
                      {link.name}
                      <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ marginLeft: '2px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <div className={s.dropdownPanel}>
                      {link.sublinks.map((sub) => (
                        <Link key={sub.name} href={sub.href} className={s.dropdownItem}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href} className={`${s.navLink} ${pathname === link.href ? s.navLinkActive : ""}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Socials Block + Search Trigger */}
          <div className={s.socialsBlock}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${s.socialCircle} ${s.socialFB}`} aria-label="Facebook">
              <i className="fab fa-facebook-f" style={{ fontSize: '12px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${s.socialCircle} ${s.socialIG}`} aria-label="Instagram">
              <i className="fab fa-instagram" style={{ fontSize: '12px' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${s.socialCircle} ${s.socialYT}`} aria-label="YouTube">
              <i className="fab fa-youtube" style={{ fontSize: '11px' }} />
            </a>
            
            <span style={{ height: '20px', width: '1px', background: 'rgba(10,22,40,0.15)', margin: '0 4px' }} />
            
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search modal"
              className={s.socialCircle}
              style={{
                border: '1.5px solid rgba(10,22,40,0.15)',
                background: '#ffffff',
                color: '#0A1628',
                cursor: 'pointer'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '13px', height: '13px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* MOBILE HEADER */}
        <div className={s.mobileHeader}>
          <div className={s.logoBadgeMobile}>
            <img src="/images/logos/navbar_logo_bgrmeoved.png" className={s.logoBadgeMobileImg} alt="KLE Logo" />
          </div>
          <div className={s.brandingMobile}>
            <h3 className={s.titleMobile}>KLE Society&apos;s <span className={s.titleMobileSpan}>G.I.Bagewadi College</span></h3>
            <div className={s.subtitleMobile}>Excellence Beyond Education</div>
            <div className={s.subtextMobile}>Nipani · Estd. 1961</div>
          </div>
        </div>

        {/* MOBILE BRAND / MENU BAR */}
        <div className={`${s.mobileBrandBar} ${isSticky ? s.mobileBrandBarSticky : ""}`}>
          <span className={s.mobileBrandText}>K.L.E. G.I.B.</span>
          <div className={s.mobileActions}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={s.tapTarget} aria-label="Facebook">
              <span className={`${s.socialCircle} ${s.socialFB}`} style={{ width: '24px', height: '24px' }}>
                <i className="fab fa-facebook-f" style={{ fontSize: '10px' }} />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={s.tapTarget} aria-label="Instagram">
              <span className={`${s.socialCircle} ${s.socialIG}`} style={{ width: '24px', height: '24px' }}>
                <i className="fab fa-instagram" style={{ fontSize: '10px' }} />
              </span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={s.tapTarget} aria-label="YouTube">
              <span className={`${s.socialCircle} ${s.socialYT}`} style={{ width: '24px', height: '24px' }}>
                <i className="fab fa-youtube" style={{ fontSize: '9px' }} />
              </span>
            </a>

            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search modal"
              className={s.tapTarget}
            >
              <span className={s.socialCircle} style={{
                width: '24px',
                height: '24px',
                border: '1.5px solid rgba(10,22,40,0.15)',
                background: '#ffffff',
                color: '#0A1628',
                cursor: 'pointer'
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '11px', height: '11px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className={s.mobileMenuBtn}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={s.mobileMenuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>MENU</span>
            </button>
          </div>
        </div>

      </div>

      {/* Navigation menu drawer (sliding right-side panel) */}
      <div
        className={s.drawerOverlay}
        style={{ 
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        {/* Dark blur backdrop */}
        <div
          className={s.drawerBg}
          style={{ opacity: isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={s.drawerPanel}
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          {/* Drawer Header */}
          <div className={s.drawerHeader}>
            <img
              src="/images/logos/navbar_logo_bgrmeoved.png"
              alt="KLE Logo"
              className={s.drawerHeaderLogo}
            />
            <div className={s.drawerHeaderTitleBox}>
              <span className={s.drawerHeaderSub}>KLE Society&apos;s</span>
              <span className={s.drawerHeaderTitle}>G.I.Bagewadi College, Nipani</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className={s.drawerCloseBtn}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable menu body */}
          <div className={s.drawerBody}>
            <p className={s.drawerNavSection}>Navigation Menu</p>
            <nav className={s.drawerList}>
              {navLinks.map((link) => {
                const isSelected = activeSection === link.name;
                return (
                  <div key={link.name} className={s.drawerItem}>
                    {link.sublinks ? (
                      <div>
                        {/* Dropdown toggle */}
                        <button
                          onClick={() => setActiveSection(isSelected ? "" : link.name)}
                          className={`${s.drawerItemBtn} ${isSelected ? s.drawerItemBtnActive : s.drawerItemBtnInactive}`}
                        >
                          <span>{link.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            className={`${s.drawerChevron} ${isSelected ? s.drawerChevronOpen : ''}`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        {/* Collapsible Sublinks */}
                        {isSelected && (
                          <div className={s.drawerSublinks}>
                            {link.sublinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className={s.drawerSubLink}
                              >
                                {sub.name}
                              </Link>
                            ))}
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className={s.drawerSubLinkViewAll}
                            >
                              View All {link.name} →
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={s.drawerDirectLink}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className={s.drawerFooter}>
            <p className={s.drawerFooterLabel}>KLE Society&apos;s</p>
            <p className={s.drawerFooterText}>
              G.I.Bagewadi Arts, Science and Commerce College, Nipani. Established in 1961.
            </p>
          </div>
        </div>
      </div>

      {/* Search overlay modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
