'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function MaPage() {
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
            Ma
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
			<li className="breadcrumb-item active" aria-current="page">Master Of Science (M.A.)</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
		<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Master of Arts (M.A)
				<span className="font-weight-bold"></span>
			
			</h3>
			<h4 className="title text-capitalize font-weight-light text-dark text-center mb-5" style={{ "fontSize": "3.2em" }}>English
				<span className="font-weight-bold"></span>
			
			</h4>
								  <h4  style={{ "fontSize": "2.2em" }}>Introduction</h4>
									
<p align="justify" style={{ "color": "black" }}>
PG course in English is introduced in the year 2018-19 which is a feather in the cap of the department and a much needed tread by the college and the management. The intake strength of the course is 20. Dr. B. Y. Naik was the first Coordinator. 
</p>
<p align="justify" style={{ "color": "black" }}>Presently, Mr. V. B. Sutar is the Coordinator and there is a team of committed teachers like Santosh Patil and Shridevi Jadhav.
</p>
<p align="justify" style={{ "color": "black" }}>Vinayak Sutar has cleared K-SET and Santosh Patil has cleared NET.
</p><br /><br />

<h4  style={{ "fontSize": "2.2em" }}>Faculty Profile</h4>
									<table className="table table-striped">
							<thead><tr>
									<th>Sl.No</th>
									<th>Name of the faculty</th>
									<th>Qualification</th>
									<th>Designation</th>
									<th>Contact</th>
									<th>Experience</th>
									<th>Link</th>


	

								</tr></thead>
							<tbody>

							<tr>
								<td>	01	
								</td><td>Mr. Vinayak Sutar	</td>
								<td>M.A., KSET	</td>
								<td>Assistant Professor	</td>
								<td>8296941538</td>
								<td>	16 Years 	</td>
								<td><a href="/images/staff/Departmental Profiles/English PG/VBS Resume.pdf" target="_blank">Click Here</a>
								</td></tr>
<tr>
								<td>02</td>
								<td>	Mr. Santosh Patil </td>
								<td>	M.A., NET	</td>
								<td>Assistant Professor </td>
								<td>	9370701019</td>
								<td>	06 Years	</td>
								<td><a href="/images/staff/Departmental Profiles/English PG/SPP Resume.pdf" target="_blank">Click Here</a>
								</td></tr>
<tr>
								<td>03</td>
								<td>	Miss. Shidevi Jadhav</td>
								<td>	MA	</td>
								<td>Assistant Professor	</td>
								<td>8951334892</td>
								<td>	10 Years	</td>
								<td><a href="/images/staff/Departmental Profiles/English PG/SVJ 23-3-22.pdf" target="_blank">Click Here</a>
								</td></tr>

</tbody></table>

			
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
