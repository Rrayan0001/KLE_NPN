'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function ScholarshipPage() {
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
            Scholarship
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
			<li className="breadcrumb-item active" aria-current="page">Scholarship
 </li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Scholarship

				<span className="font-weight-bold"></span>
			
			</h3><br /><br />
	<br /><br />	
			
		<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
A scholarship is a form of financial aid awarded to students to further their education. Scholarships are awarded based upon various criteria, such as academic merit, diversity and inclusion, athletic skill, and financial need. The institution provides and maintains all the necessary procedure to help students get the scholarships from the Governments and other sources. </strong></p><br /><br /><br />
<h3>Consolidated statement of scholarships</h3>
<h4><a href="/iqac/Scholarship.pdf" target="_blank">Click Here</a></h4>

</div>
			
					</div>
	
	
        </div>
      </div>
    </>
  );
}
