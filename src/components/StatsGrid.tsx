'use client';
import s from '@/styles/layout.module.css';

export default function StatsGrid() {
  const stats = [
    { value: 'NAAC A', label: 'Accredited College', desc: '3.10 CGPA in the 4th Cycle', icon: <svg width="24" height="24" fill="none" stroke="#b28f4d" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg> },
    { value: '16+', label: 'Programmes Offered', desc: 'UG, PG & ITEP degrees', icon: <svg width="24" height="24" fill="none" stroke="#b28f4d" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg> },
    { value: '1,200+', label: 'Students Enrolled', desc: 'Across all active programmes', icon: <svg width="24" height="24" fill="none" stroke="#b28f4d" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.642 9.642 0 019 19.128v-.109c0-1.11-.283-2.155-.783-3.06M9 19.128a9.38 9.38 0 01-2.625.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M9 19.128v-.003c0-1.11.283-2.155.783-3.06m5.217 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"/></svg> },
    { value: '90%+', label: 'Placement Success', desc: 'Consistent track record', icon: <svg width="24" height="24" fill="none" stroke="#b28f4d" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-.225 6.008"/></svg> },
  ];
  return (
    <section className={s.stats}>
      <div className={s.statsInner}>
        {stats.map((st, i) => (
          <div key={i} className={s.statCard}>
            <div className={s.statIconBox}>{st.icon}</div>
            <div>
              <span className={s.statVal}>{st.value}</span>
              <span className={s.statLbl}>{st.label}</span>
              <span className={s.statDesc}>{st.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
