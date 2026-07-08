'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function MilestonePage() {
  return (
    <>
      <PageBanner />
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Milestone
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          
<nav aria-label="breadcrumb">
		<ol className="breadcrumb">
			<li className="breadcrumb-item">
				<a href="/">Home</a>
			</li>
			<li className="breadcrumb-item active" aria-current="page">Landmarks</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Landmarks
				</h3>
			
			<p><strong>Inception of the Institution - 1961.</strong><br />
Affiliated to Karnatak University, Dharwad - 1961.<br />
Arts and Science UG Programmes Started - 1961.<br />
Commerce UG Programme Introduced - 1977.<br />
<strong>Silver Jubilee Year – 1986.</strong><br />
<strong>UGC Recognition under 2(f) and 12 B - 1987.</strong><br />
Bifurcation of PU – 2003<br />
<strong style={{ "color": "#CC0000" }}>NAAC Accreditation First Cycle at ‘B’ – 2004.</strong><br />
PG Programme MCOM Started – 2010<br />
Affiliated to Rani Channamma University, Belagavi - 2010.<br />
<strong style={{ "color": "#CC0000" }}>NAAC Accreditation Second Cycle at ‘A’ with 3.26 CGPA - 2010.</strong><br />
<strong style={{ "color": "#003366" }}>Golden Jubilee Year – 2011.</strong><br />
PG Programme MSC Maths Started – 2011.<br />
Construction of Indoor Stadium – 2015.<br />
<strong style={{ "color": "#003366" }}>UGC Recognition – ‘College with Potential for Excellence’ – 2016.</strong><br />
<strong style={{ "color": "#CC0000" }}>NAAC Accreditation Third Cycle at ‘A’ with 3.35 CGPA - 2016.</strong><br />
Construction of Swimming Pool – 2017.<br />
PG Programme MA English Started – 2018.</p><br /><br /><br />


<h3>HIGHLIGHTS</h3><br /><br />

<p></p><li>Convenient Location.</li><br /><br />
<li>Qualified experienced faculty.</li><br /><br />
<li>Teaching with ICT Application.</li><br /><br />
<li>Digital Library.</li><br /><br />
<li>Smart Rooms.</li><br /><br />
<li>Well Furnished Labs.</li><br /><br />
<li>Add-on Certificate Courses.</li><br /><br />
<li>Hostels for Girls and Boys.</li><br /><br />
<li>Quarters for Faculty Members.</li><br /><br />
<li>Canteen Facility.</li><br /><br />
<li>Bank Facility.</li><br /><br />
<li>Gymkhana.</li><br /><br />
<li>Indoor Stadium.</li><br /><br />
<li>Swimming Pool.</li>

					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
