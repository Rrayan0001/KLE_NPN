'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function VissionPage() {
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
            Vission
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
			<li className="breadcrumb-item active" aria-current="page">Vision and Mission</li>
		</ol>
	</nav>

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Vision And Mission 
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			
			<h2 className="font-italic border-bottom text-center font-weight-bold pb-4 mb-4" style={{ "color": "#537b8e" }}>Vision</h2><br />
			
			
		

			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>To be a frontline institution and to act as a catalyst
			in disseminating quality education keeping in view the changing global perspectives </strong>

</p><br /><br />
			
			
			
			
			
			
			<h2 className="font-italic border-bottom text-center font-weight-bold pb-4 mb-4" style={{ "color": "#537b8e" }}>Mission</h2><br />
			
		
		

			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>•	To produce competent and skilled youth force with educational empowerment by maintaining equity, equality and social justice.
<br />•	To achieve the academic excellence and to develop the overall personality of the student community.<br />
•	To impart physical, moral and spiritual education and to inculcate the values to become complete human beings.<br />
•	To create the ambience for holistic education.</strong>

<br />
</p><br /><br />
			
			
			
			
			
			
			
			 <br /><br />
		</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
