'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function McomPage() {
  return (
    <SubpageLayout breadcrumb="Mcom">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mcom
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
			<li className="breadcrumb-item active" aria-current="page">Master Of Commerce (M.Com.)</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Master of Commerce (M.Com.)
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			<h4 className="title text-capitalize font-weight-light text-dark text-center mb-5" style={{ "fontSize": "3.2em" }}>
				<span className="font-weight-bold"></span>
			
			</h4>
			                        <h4  style={{ "fontSize": "2.2em" }}>About Department</h4>
									<p align="justify" style={{ "color": "black", "fontSize": "1.4em" }}>The department of commerce was established in 2010(PG) 
At present, the department is imparting education to 38 students by 3 faculty members. Since the inception of the department, it has been doing yeoman service by educating in the field of trade and commerce. This approach has been truly influencing students to excel both academically and intellectually. In addition to this department also encourages students to develop profundity in trade and commerce which has helped them to explore their talent and potential to a greater extent. As a matter of fact, this initiation has motivated students to develop their critical bend of mind to enhance and enrich their innate skills. Well Qualified and experienced staff. Miss Pallavi Ankali has secured Second Rank to the Rani Channamma University Belagavi in the year 2018.
</p><br /><br />
									<h4  style={{ "fontSize": "2.2em" }}>Faculty Profile</h4><br />
									<table className="table table-striped">
							<thead><tr>
									<th>SI.No</th>
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
								</td><td>Smt. Sangeeta Sansuddi	</td>
								<td>M.Com, Registered for Ph.D.	</td>
								<td>Asst. Prof. 	</td>
								<td>9972680128	</td>
								<td>06 Years 	</td>
								<td><a href="/images/staff/Departmental Profiles/M.com/PERSONAL PROFILE SPS.pdf" target="_blank">Click here</a>
								</td></tr>
<tr>
								<td>02	</td>
								<td>Smt. Renu Ghugare	</td>
								<td>M.Com, B.Ed</td>
                                <td>Asst. Prof. </td>
								<td>9148035550	</td>
								<td>03 Years 	</td>
								<td><a href="/images/staff/Departmental Profiles/M.com/PERSONAL PROFILE RBG.pdf" target="_blank">Click here</a>
								</td></tr>
<tr>
								<td>03	 </td>
								<td>Miss Pallavi Anure	</td>
								<td>M.Com 	</td>
								<td>Asst. Prof. 	</td>
								<td>8197969521	</td>
								<td>02 Years 	</td>
								<td><a href="/images/staff/Departmental Profiles/M.com/Pallavi Anure Personal Profile.pdf" target="_blank">Click here</a>
								</td></tr>
	
								</tbody>
								</table><br /><br /><br />	
					</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
