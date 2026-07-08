'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function SssPage() {
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
            Sss
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
			<li className="breadcrumb-item active" aria-current="page">Student Satisfaction Survey</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Student Satisfaction Survey (SSS)
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			<table className="table table-striped">
							<thead><tr>
									<th>Sl.No</th>
									<th>Title</th>
									<th>Link</th>
									

								</tr></thead>
							<tbody>
							
								
								
							
								
									<tr>
								<td>1.
								</td><td>Student Satisfaction Survey 2020-2021</td>
								<td><a href="/images/SSS 2020-21.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
									<tr>
								<td>2.</td>
								<td>Student Satisfaction Survey 2023-2024</td>
								<td><a href="/images/Student Satisfactory Survey 2023-24.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
								</tbody>
								</table><br /><br /><br />	
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
