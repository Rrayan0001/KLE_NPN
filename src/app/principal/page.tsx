'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function PrincipalPage() {
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
            Principal
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
			<li className="breadcrumb-item active" aria-current="page">Principal Message</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Our Principal
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/gibprincipal.JPG" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Dr. M.M Hurali<br /><span  style={{ "color": "#537b8e", "fontSize": "0.7em" }}>Principal, G.I.Bagewadi College, Nipani</span></h4>
					
					</div>
			</div><br /><br /><br />
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }} align="justify">Welcome to all the students of UG and PG courses.
		</strong></p><br /><br />

		<p align="justify" style={{ "color": "#000000" }}>Our institution was established in 1961 
		and it is one of the pioneer institutions of KLE Society imparting Arts, Science and Commerce education for the aspiring young minds 
		of this part of Karnataka. Our institution offers BA, BSC, BCOM, MA English, MSC Mathematics and MCOM programmes. Our institution
		is accredited at ‘A’ grade with 3.10 CGPA in 4th Cycle by NAAC and is gearing up to face the process of assessment for the Fifth
		Cycle.

<br /><br />
		We make available our students an environment loaded in knowledge and encouraging their curricular and co-curricular interests. The college put into practice innovative teaching methods and organizes activities on a regular basis to nurture our students in all respects.
		We mould our students for acquiring knowledge and equip better to face the global challenges.<br /><br />
		
		Our faculty members work hard to give all their expertise to students. Eminent personalities are invited from all the walks of life to interact with our students for better exposure to new feelings and ideas.<br /><br />
		
		Our students are encouraged to participate in various seminars, symposia and conferences to share their innovative ideas in different levels of academic platforms. Our students are doing very well in semester end examinations, various competitions related to curriculum, cultural and sports.<br /><br />
		
		Our students need to gear up to face all the challenges. My best wishes to all our students.


		</p>
			
		</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
