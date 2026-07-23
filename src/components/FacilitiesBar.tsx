'use client';
import s from '@/styles/layout.module.css';
import StaggerReveal from './StaggerReveal';

export default function FacilitiesBar() {
  const facs = [
    {
      name: 'Indoor Sports Complex',
      desc: 'State-of-the-art indoor sports facilities building housing badminton courts, table tennis, and physical fitness halls.',
      url: '/gallery',
      image: '/images/main_gallery/npn1.JPG'
    },
    {
      name: 'Olympic-Standard Swimming Pool',
      desc: 'Multi-lane athletic swimming pool host to inter-collegiate competitions, aquatic training, and student swimming sports.',
      url: '/gallery',
      image: '/images/main_gallery/npn4.jpg'
    },
    {
      name: 'NCC & Cadet Corps Parade Ground',
      desc: 'Dedicated parade grounds hosting National Cadet Corps (NCC) drills, Republic Day march past, and leadership training.',
      url: '/gallery',
      image: '/images/main_gallery/npn2.JPG'
    },
    {
      name: 'Cultural & Performing Arts Stage',
      desc: 'Vibrant cultural stage for classical dance, folk arts, theater performances, and annual student talent showcases.',
      url: '/gallery',
      image: '/images/main_gallery/npn3.JPG'
    },
    {
      name: 'Auditorium & Convocation Hall',
      desc: 'Spacious Golden Jubilee auditorium hosting faculty felicitations, national conferences, and academic symposia.',
      url: '/gallery',
      image: '/images/main_gallery/npn6.JPG'
    },
    {
      name: 'Student Community & Ethnic Days',
      desc: 'Rich campus life celebrating Traditional Day, youth festivals, and vibrant cultural heritage across all departments.',
      url: '/gallery',
      image: '/images/main_gallery/npn7.JPG'
    },
  ];
  return (
    <section className={s.facs}>
      <div className={s.facsInner}>
        <StaggerReveal className={s.facsGrid} stagger={100} threshold={0.1}>
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
        </StaggerReveal>
      </div>
    </section>
  );
}
