'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function MscPage() {
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
            Msc
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
			<li className="breadcrumb-item active" aria-current="page">Master Of Science (M.Sc.)</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
		<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Master of Science (M.Sc.)
				<span className="font-weight-bold"></span>
			
			</h3>
			<h4 className="title text-capitalize font-weight-light text-dark text-center mb-5" style={{ "fontSize": "3.2em" }}>Mathematics
				<span className="font-weight-bold"></span>
			
			</h4>
								  <h4  style={{ "fontSize": "2.2em" }}>Introduction</h4>
									
									<p align="justify" style={{ "color": "black" }}>Mathematics is the science that deals with the logic of shape, quantity and arrangement. Maths is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture, art, money, engineering, medicine and even in sports. Hence in the year 1961 Mathematics was introduced as Minor subject in our institution. By that time ours is the only college with Physics as major and Mathematics, Chemistry as minor subjects in surrounding area, so students from even far off places used to come our college to study. In need of students, M.Sc. Mathematics is started in the year 2011.
</p>
<p align="justify" style={{ "color": "black" }}>Mathematics Museum with charts and models which is the unique feature of the department. Every year department is conducting Mathematics Aptitude Test for all faculty students which is helpful to face any competitive exam, campus interviews, bank exams, etc. Student progression is increasing every year.
</p>
<p align="justify" style={{ "color": "black" }}>In total for we have for B.Sc. – 308 students and for M.Sc. – 30 students. Two of our faculty members are Ph. D’s and one is registered for Ph.D. Research activities of the department are very good, 29 papers published in international journals, 5 papers in national journals, 5 papers in national and international proceedings with total 201 citations. Department has 13 University Ranks, 98 Centum Scorers. We have Department Library with 103 books. 
</p>
<p align="justify" style={{ "color": "black" }}>Department is encouraging students to participate in National and International level seminars/conferences to present papers and all other collegiate and intercollegiate competitions. One of the best practices of the department is awarding cash prizes to rank holders, highest scorers in Mathematics for each semester who scored more than 95% and centum scorers.  

</p>

	<h4  style={{ "fontSize": "2.2em" }}>Faculty</h4>
									<table className="table table-striped">
							<thead><tr>
									<th>SI.No</th>
									<th>Name of the faculty</th>
									<th>Qualification</th>
									<th>Designation</th>
									<th>Contact No</th>
									<th>Teaching experience	</th>
									<th>Link</th>
									


								</tr></thead>
							<tbody>
							
								<tr>
								<td>01	
								</td><td>Dr.(Smt.) M. M. Shankrikopp	</td>
								<td>M.Sc. Ph.D.	</td>
								<td>Associate Prof.	</td>
								<td>9480540084	</td>
								<td>37 years	</td>
								<td><a href="/images/staff/Departmental Profiles/Maths PG/MMS self appriosal.pdf" target="_blank">Click Here</a>
								</td></tr>
<tr>
								<td>02</td>
								<td>	Mr. S.A. Chougale</td>
								<td>	M.Sc. B.Ed.	</td>
								<td>Asst. Prof.	</td>
								<td>8867495822	</td>
								<td>7 years	</td>
								<td><a href="/images/staff/Departmental Profiles/Maths PG/SAC_Self_Appraisal final.pdf" target="_blank">Click Here</a>
								</td></tr>
<tr>
								<td>03	</td>
								<td> Miss V. U. Khot 	</td>
								<td>M.Sc.	</td>
								<td>Asst. Prof.</td>
								<td>	8497859074	</td>
								<td>5 years	</td>
								<td><a href="/images/staff/Departmental Profiles/Maths PG/Vinaya Khot Self Appraisal 2021-22.pdf" target="_blank">Click Here</a>
								</td></tr>
<tr>
								<td>4	</td>
								<td>Miss Nikita Jadhav</td>
								<td>	M.Sc. B. Ed.	</td>
								<td>Asst. Prof.	</td>
								<td>8904471429	</td>
								<td>2 years	</td>
								<td><a href="/images/staff/Departmental Profiles/Maths PG/nikita 2020-21 self appr.pdf" target="_blank">Click Here</a>
								</td></tr>

								
								</tbody>
								</table>
								
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
