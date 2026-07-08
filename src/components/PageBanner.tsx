'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/* Slug → human page title. Falls back to title-casing the route segment. */
const TITLE_MAP: Record<string, string> = {
  about: 'About Us',
  aboutclg: 'About the College',
  aboutsociety: 'About the Society',
  acadmic: 'Academic Programmes',
  academic: 'Academic Programmes',
  achivement: 'Achievements',
  admission: 'Admissions',
  affiliation: 'Affiliation Details',
  aishe: 'AISHE',
  alumni: 'Alumni Network',
  aqar: 'AQAR',
  aqardocs: 'AQAR Documents',
  ba: 'Bachelor of Arts',
  bank: 'Bank',
  'best-practice': 'Best Practices',
  bom: 'Board of Management',
  can: 'Canteen',
  'chairman-msg': "Chairman's Message",
  class: 'Classrooms & Labs',
  coe: 'Controller of Examinations',
  coc: 'Code of Conduct',
  comm: 'Bachelor of Commerce',
  composition: 'Composition Details',
  contact: 'Contact Us',
  course: 'Courses',
  criterian1: 'Criterion 1 — Curricular Aspects',
  criterian2: 'Criterion 2 — Teaching-Learning',
  criterian3: 'Criterion 3 — Research, Innovations & Extension',
  criterian4: 'Criterion 4 — Infrastructure & Learning Resources',
  criterian5: 'Criterion 5 — Student Support & Progression',
  criterian6: 'Criterion 6 — Governance, Leadership & Management',
  criterian7: 'Criterion 7 — Institutional Values & Best Practices',
  curricular: 'Curricular Activities',
  cwd: 'Cell for Persons with Disabilities',
  cwc: 'Grievance Redressal Cell',
  donor: 'Donors',
  emblem: 'College Emblem',
  events: 'Events',
  'extended-profile': 'Extended Profile',
  extendedprofile: 'Extended Profile',
  feedback: 'Feedback System',
  founder: 'Founder Profile',
  garden: 'Garden',
  gym: 'Gymnasium & Sports',
  hall: 'Seminar Hall',
  hostel: 'Hostels',
  indoor: 'Indoor Sports',
  infra: 'Infrastructure',
  'institutional-distinctiveness': 'Institutional Distinctiveness',
  iqacworkingcomittee: 'IQAC Committee',
  itep: 'ITEP Programme',
  klehistory: 'KLE Society History',
  lab: 'Laboratories',
  lgb: 'Local Grievance Box',
  library: 'Library & Information Centre',
  ma: 'Master of Arts (English)',
  maitenance: 'Maintenance Policy',
  meeting: 'Meetings & Proceedings',
  mcom: 'Master of Commerce',
  mentor: 'Mentor – Mentee',
  milestone: 'Milestone Landmarks',
  msc: 'Master of Science',
  news: 'News',
  nirf: 'NIRF',
  ncc: 'NCC Wing',
  nss: 'NSS Unit',
  office: 'College Office',
  placements: 'Placements',
  plan: 'Academic Calendar',
  play: 'Playground',
  pool: 'Swimming Pool',
  principal: "Principal's Message",
  proceedings: 'Proceedings',
  program: 'Programmes',
  quality: 'Quality Policy',
  ragging: 'Anti-Ragging Cell',
  research: 'Research Activities',
  researchcell: 'Research Cell',
  result: 'Student Results',
  scholarship: 'Scholarships',
  sports: 'Sports',
  ssr: 'SSR Document',
  sss: 'Student Support Services',
  staff: 'Staff',
  steering: 'Steering Committee',
  streering: 'Steering Committee',
  strength: 'Student Strength',
  subcommittee: 'Sub Committee',
  subcommitte: 'Sub Committee',
  sup: 'Student Support',
  vission: 'Vision & Mission',
  vismis: 'Vision & Mission',
  vison: 'Vision & Mission',
};

function titleFromPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'Welcome';
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1];
  if (TITLE_MAP[last]) return TITLE_MAP[last];
  return last
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function PageBanner() {
  const pathname = usePathname();
  const title = titleFromPath(pathname);

  // Generate clean breadcrumb segment objects
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbItems = segments.map((seg, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
    const name = TITLE_MAP[seg] || seg.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return { name, url };
  });

  return (
    <section
      className="relative w-full overflow-hidden font-sans"
      style={{
        background:
          'radial-gradient(120% 140% at 85% -20%, #1B2A4A 0%, #0A1628 55%, #08111f 100%)',
        borderBottom: '3px solid #E8722A'
      }}
      aria-label={`${title} page header`}
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#F8F6F0 1px, transparent 1px), linear-gradient(90deg, #F8F6F0 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Orange accent bar on the left */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full"
        style={{ width: 4, background: 'linear-gradient(#E8722A, #2A9D6F)' }}
      />
      {/* Soft orange glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,114,42,0.2), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-8 md:pt-28 md:pb-10 flex flex-col gap-3">
        {/* Integrated Breadcrumbs Track */}
        <nav aria-label="breadcrumb" className="banner-breadcrumb z-10">
          <ol className="flex flex-wrap items-center gap-1.5 list-none m-0 p-0 text-[11px] font-bold tracking-wider uppercase text-white/50">
            <li>
              <Link href="/" className="hover:text-[#E8722A] transition-colors text-white/60 no-underline">
                Home
              </Link>
            </li>
            {breadcrumbItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className="text-[#E8722A] text-sm select-none">›</li>
                <li className={idx === breadcrumbItems.length - 1 ? "text-white/90" : "text-white/60"}>
                  {idx === breadcrumbItems.length - 1 ? (
                    item.name
                  ) : (
                    <Link href={item.url} className="hover:text-[#E8722A] transition-colors no-underline">
                      {item.name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        {/* Page Title */}
        <h1
          className="font-bold leading-tight text-white m-0"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}