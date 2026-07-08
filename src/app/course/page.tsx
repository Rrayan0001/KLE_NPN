'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function CoursePage() {
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
            Course
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">About  
				<span className="font-weight-bold">Courses</span>
			
			</h3>
			<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Bachelor of Science(B.Sc) </h4><br /><br /><br />
<h5 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4"><strong>B.Sc. I &amp; II Semester</strong></h5><br />

<h5 ><strong>Group - I- Languages</strong></h5><br /><br />


					<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				     <li className="list-group-item" style={{ "backgroundColor": "#dce8fb" }}><strong>1.	Basic I - English</strong></li>
                     <li className="list-group-item"><strong>2.	Basic II - ( MIL) any one of the following</strong></li>
                     <li className="list-group-item" style={{ "backgroundColor": "#dce8fb" }}><strong>3. i)	Kannada ii) Hindi iii) Marathi iv) Urdu</strong></li>
                     
                    </ul><br /><br /><br />
					
			
				<h5><strong>Group - II- Optional : Any one of the following combinations</strong></h5>
					<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				     <li className="list-group-item" style={{ "backgroundColor": "#dce8fb" }}><strong>4.	Physics, Chemistry, Mathematics</strong></li>
                     <li className="list-group-item"><strong>5.	Chemistry, Botany, Zoology</strong></li>
                    </ul><br /><br /><br />
					
					<h5><strong>Group- III - Additional Subjects</strong></h5>
					<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				     <li className="list-group-item" style={{ "backgroundColor": "#dce8fb" }}><strong>6.	Indian Constitution - I Semester</strong></li>
                     <li className="list-group-item"><strong>7.	Human Rights and Environmental Studies - II Semester</strong></li>
					  </ul><br /><br />
					
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>Examination : Theory : one paper of 80 marks and 3 hours duration. 20 marks of internal assessment includes tests, assignments and attendance</strong></p><br />
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>Practical : One practical examination of 40 marks and of 4hours duration. 10 marks of internal assessment includes one practical test.</strong></p><br />
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>For Mathematics : 2 papers of 80 marks each and of 3 hours duration. 20 marks of internal assessment includes tests, assignments and attendance.</strong></p><br /><br /><br />
					
					<h5 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">B.Sc. III &amp; IV Semester</h5>
					<h5><strong>Group I : Same as in B.Sc. I Semester</strong></h5>
					<h5><strong>Group II : Same as in B.Sc. I Semester</strong></h5>
					<h5><strong>Group III : Additional subjects</strong></h5>
					
					
					
					<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				     <li className="list-group-item" style={{ "backgroundColor": "#dce8fb" }}><strong>8.	Personality development and communication skills - III Semester</strong></li>
                     <li className="list-group-item"><strong>9.	Computer Applications : IV Semester</strong></li>
                     
                    </ul><br /><br /><br />
					
					
					<h5 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">B.Sc. V &amp; VI Semester</h5>
					<h5><strong>Only Group II : Same as in B. Sc. I Semester</strong></h5><br />
					
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>Examination : Theory : Paper I &amp; Paper II of 80 marks and 3 hours duration. 20 marks of internal assessment includes tests, assignments and attendance</strong></p><br />
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>Practical : One practical examination of 40 marks and of 4 hours duration. 10 marks of internal assessment includes one practical test.</strong></p><br />
					<p align="justify" style={{ "color": "black" }}><strong style={{ "fontSize": "1.2em" }}>For Mathematics : 3 papers of 80 marks each and of 3 hours duration. 20 marks of internal assessment includes tests, assignments and attendance</strong></p><br />
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
