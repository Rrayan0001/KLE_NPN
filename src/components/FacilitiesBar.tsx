'use client';
import s from '@/styles/layout.module.css';

export default function FacilitiesBar() {
  const facs = [
    { name: 'Library & Info Center', desc: 'Spacious library hosting over 50,000 reference books, journals, and a modern digital reading room.', url: '/library', image: '/images/library.png' },
    { name: 'Boys & Girls Hostels', desc: 'Safe, comfortable hostels with clean dining halls adjacent to the main college campus.', url: '/hostel', image: '/images/boys_hostel.png' },
    { name: 'Gymnasium & Sports', desc: 'Modern gym equipment, indoor game halls, and fields supporting university-level sports programs.', url: '/gym', image: '/images/gym.png' },
    { name: 'Swimming Pool', desc: 'Premium multi-lane swimming pool open for practice and inter-collegiate tournaments.', url: '/indoor', image: '/images/swimming pool.png' },
    { name: 'Canteen Facility', desc: 'Hygiene-certified campus cafeteria offering fresh meals and snacks at student-friendly rates.', url: '/can', image: '/images/canteen1.png' },
    { name: 'Classrooms & Labs', desc: '29 state-of-the-art classrooms and 11 well-equipped science laboratories for practical learning.', url: '/class', image: '/images/office.png' },
  ];
  return (
    <section className={s.facs}>
      <div className={s.facsInner}>
        <div className={s.facsGrid}>
          {facs.map((f, i) => (
            <a key={i} href={f.url} className={s.facCard} style={{ ['--i' as string]: i } as React.CSSProperties}>
              <div className={s.facImgWrap}>
                <img src={f.image} alt={f.name} className={s.facImg} loading="lazy" />
                <div className={s.facImgShade} />
                <div className={s.facOverlay}>
                  <p className={s.facCardDesc}>{f.desc}</p>
                  <span className={s.facOverlayLink}>
                    View Details
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </span>
                </div>
              </div>
              <div className={s.facCardBody}>
                <h3 className={s.facCardNameInline}>{f.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
