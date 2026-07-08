'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TITLE_MAP: Record<string, string> = {
  about: 'About Us', aboutclg: 'About the College', aboutsociety: 'About the Society',
  acadmic: 'Academic Programmes', academic: 'Academic Programmes', achivement: 'Achievements',
  admission: 'Admissions', affiliation: 'Affiliation Details', aishe: 'AISHE', alumni: 'Alumni Network',
  aqar: 'AQAR', aqardocs: 'AQAR Documents', ba: 'Bachelor of Arts', bank: 'Bank',
  'best-practice': 'Best Practices', bom: 'Board of Management', can: 'Canteen',
  'chairman-msg': "Chairman's Message", class: 'Classrooms & Labs', coe: 'Controller of Examinations',
  coc: 'Code of Conduct', comm: 'Bachelor of Commerce', composition: 'Composition Details',
  contact: 'Contact Us', course: 'Courses',
  criterian1: 'Criterion 1 — Curricular Aspects', criterian2: 'Criterion 2 — Teaching-Learning',
  criterian3: 'Criterion 3 — Research, Innovations & Extension', criterian4: 'Criterion 4 — Infrastructure & Learning Resources',
  criterian5: 'Criterion 5 — Student Support & Progression', criterian6: 'Criterion 6 — Governance, Leadership & Management',
  criterian7: 'Criterion 7 — Institutional Values & Best Practices', curricular: 'Curricular Activities',
  cwd: 'Cell for Persons with Disabilities', cwc: 'Grievance Redressal Cell', donor: 'Donors',
  emblem: 'College Emblem', events: 'Events', 'extended-profile': 'Extended Profile',
  extendedprofile: 'Extended Profile', feedback: 'Feedback System', founder: 'Founder Profile',
  garden: 'Garden', gym: 'Gymnasium & Sports', hall: 'Seminar Hall', hostel: 'Hostels',
  indoor: 'Indoor Sports', infra: 'Infrastructure', 'institutional-distinctiveness': 'Institutional Distinctiveness',
  iqacworkingcomittee: 'IQAC Committee', itep: 'ITEP Programme', klehistory: 'KLE Society History',
  lab: 'Laboratories', lgb: 'Local Grievance Box', library: 'Library & Information Centre',
  ma: 'Master of Arts (English)', maitenance: 'Maintenance Policy', meeting: 'Meetings & Proceedings',
  mcom: 'Master of Commerce', mentor: 'Mentor – Mentee', milestone: 'Milestone Landmarks',
  msc: 'Master of Science', news: 'News', nirf: 'NIRF', ncc: 'NCC Wing', nss: 'NSS Unit',
  office: 'College Office', placements: 'Placements', plan: 'Academic Calendar', play: 'Playground',
  pool: 'Swimming Pool', principal: "Principal's Message", proceedings: 'Proceedings', program: 'Programmes',
  quality: 'Quality Policy', ragging: 'Anti-Ragging Cell', research: 'Research Activities',
  researchcell: 'Research Cell', result: 'Student Results', scholarship: 'Scholarships', sports: 'Sports',
  ssr: 'SSR Document', sss: 'Student Support Services', staff: 'Staff', steering: 'Steering Committee',
  streering: 'Steering Committee', strength: 'Student Strength', subcommittee: 'Sub Committee',
  subcommitte: 'Sub Committee', sup: 'Student Support', vission: 'Vision & Mission', vismis: 'Vision & Mission',
  vison: 'Vision & Mission',
};

function titleFromPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'Welcome';
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1];
  if (TITLE_MAP[last]) return TITLE_MAP[last];
  return last.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function PageBanner() {
  const pathname = usePathname();
  const title = titleFromPath(pathname);
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbItems = segments.map((seg, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
    const name = TITLE_MAP[seg] || seg.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return { name, url };
  });

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label={`${title} page header`}
      style={{ background: '#0A1628' }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full"
        style={{ width: '4px', background: 'linear-gradient(to bottom, #E8722A, #2A9D6F 60%, transparent)' }}
      />
      <div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ padding: 'clamp(58px, 7vw, 84px) clamp(16px,4vw,48px) 8px' }}
      >
        <nav aria-label="breadcrumb" className="banner-breadcrumb mb-3 sm:mb-4 overflow-x-auto">
          <ol
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              listStyle: 'none',
              margin: 0,
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.12)',
              whiteSpace: 'nowrap',
            }}
          >
            <li>
              <Link
                href="/"
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Home
              </Link>
            </li>
            {breadcrumbItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <li style={{ color: '#E8722A', fontSize: '13px', lineHeight: 1, padding: '0 2px' }}>›</li>
                <li>
                  {idx === breadcrumbItems.length - 1 ? (
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <h1
          className="m-0 text-white font-bold"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: '720px',
          }}
        >
          {title}
        </h1>

        <div
          className="mt-4"
          style={{
            height: '3px',
            width: '64px',
            background: 'linear-gradient(90deg, #E8722A, #2A9D6F)',
            borderRadius: '2px',
          }}
        />

        <div
          className="mt-3 sm:mt-4 inline-flex items-center gap-2 d-none d-sm-flex"
          style={{
            padding: '5px 14px',
            background: 'rgba(232,114,42,0.15)',
            border: '1px solid rgba(232,114,42,0.3)',
            borderRadius: '100px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8722A', display: 'inline-block' }} />
          <span
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            KLE Society — G.I.Bagewadi College
          </span>
        </div>
      </div>
    </section>
  );
}