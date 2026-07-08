'use client';

import { usePathname } from 'next/navigation';

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

  return (
    <section
      className="relative w-full overflow-hidden font-sans"
      style={{
        background:
          'radial-gradient(120% 140% at 85% -20%, #1B2A4A 0%, #0A1628 55%, #08111f 100%)',
      }}
      aria-label={`${title} page header`}
    >
      {/* Decorative accent grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#F8F6F0 1px, transparent 1px), linear-gradient(90deg, #F8F6F0 1px, transparent 1px)',
          backgroundSize: '44px 44px',
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
          background: 'radial-gradient(circle, rgba(232,114,42,0.25), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-14 sm:pt-28 sm:pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-block h-[3px] w-7 rounded-full"
            style={{ background: '#E8722A' }}
          />
          <span
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ color: '#E8722A' }}
          >
            KLE Society&rsquo;s G.I. Bagewadi College, Nipani
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1
            className="font-bold leading-[1.08] text-white"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p
            className="text-sm max-w-2xl"
            style={{ color: 'rgba(248,246,240,0.62)', fontFamily: 'var(--font-source-serif), Georgia, serif' }}
          >
            KLE Society&rsquo;s G.I. Bagewadi Arts, Science &amp; Commerce College, Nipani &mdash; shaping futures since 1961.
          </p>
        </div>

        {/* NAAC accreditation tag */}
        <div
          className="mt-5 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider"
          style={{
            background: 'rgba(248,246,240,0.07)',
            border: '1px solid rgba(248,246,240,0.12)',
            color: 'rgba(248,246,240,0.85)',
          }}
        >
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold"
            style={{ background: '#E8722A', color: '#fff' }}
          >
            A
          </span>
          Accredited &lsquo;A&rsquo; Grade · 3.10 CGPA · NAAC 4th Cycle
        </div>
      </div>

      {/* Bottom orange accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full opacity-80"
        style={{
          background:
            'linear-gradient(90deg, #E8722A 0%, #2A9D6F 50%, transparent 100%)',
        }}
      />
    </section>
  );
}