'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function ClassPage() {
  return (
    <SubpageLayout breadcrumb="Class">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Class
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
			<li className="breadcrumb-item active" aria-current="page">Classroom</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Classrooms
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
		<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>	Our College has well ventilated classrooms to accommodate all the students admitted to different streams of education. Support staff is allotted for each classroom to maintain cleanliness. All the faculty members regularly supervise the classrooms. Power generators are maintained by a company with AMC agreement.  Computers, Projectors, Printers, Speakers and other electronic equipments are tested and repaired by experts as and when needed. </strong></p>	
		<br /><br />
		<a href="/iqac/ClassRoom Details.pdf" target="blank">Click for more information and Photo Gallery</a>			
					</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
