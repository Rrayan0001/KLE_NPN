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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
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

  // Smart hide-on-scroll logic
  useEffect(() => {
    setIsAtTop(window.scrollY < 50);

    const handleScroll = () => {
      if (isOpen || isSearchOpen || hoveredSection) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen, isSearchOpen, hoveredSection]);

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
      {/* Top utility bar */}
      <div className={`${s.topBar} ${isHeroState ? s.topBarHero : ""}`}>
        <div className={s.topBarInner}>
          <div className={s.topBarLeft}>Accredited at &apos;A&apos; Grade with 3.10 CGPA in the 4th Cycle by NAAC</div>
          <div className={s.topBarRight}>
            <a href="mailto:klegib_npn@yahoo.co.in" className={s.topLink}>klegib_npn@yahoo.co.in</a>
            <span className={s.topDivider}>|</span>
            <a href="https://uucms.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className={s.topLink}>UUCMS Portal</a>
            <span className={s.topDivider}>|</span>
            <Link href="/itep" className={s.topBadge}>ITEP Admission</Link>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header className={`${s.header} ${visible ? s.headerVisible : s.headerHidden} ${isHeroState ? s.headerHero : ""} ${isHeroState ? s.headerHeroPad : ""}`}>
        <div className={`${s.mainNavInner} ${isHeroState ? s.mainNavInnerHero : ""}`}>
          
          {/* Logo & College Branding */}
          <Link href="/" onClick={() => setIsOpen(false)} className={`${s.logoWrap} ${isHeroState ? s.logoWrapHero : ""}`}>
            <img src="/images/logo.png" alt="KLE Logo" className={s.logoImg} />
            <div className={s.logoText}>
              <span className={s.logoSub}>KLE Society&apos;s</span>
              <span className={s.logoTitle}>G.I.Bagewadi Arts, Science &amp; Commerce College, Nipani - 591237</span>
              <span className={s.logoEst}>Accredited at &apos;A&apos; Grade with 3.10 CGPA in the 4th Cycle by NAAC</span>
            </div>
          </Link>

          {/* Right area actions */}
          <div className={s.actionWrap}>
            {/* Search Modal Toggle */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search modal"
              className={`${s.searchTrigger} ${isHeroState ? s.searchTriggerHero : ""}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={s.searchTriggerIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Hamburger menu toggle */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className={`${s.hamburgerBtn} ${isHeroState ? s.hamburgerBtnHero : ""}`}
            >
              <span className={s.hamburgerText}>MENU</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={s.hamburgerIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>

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
              src="/images/logo.png"
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
