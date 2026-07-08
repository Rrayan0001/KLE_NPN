'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function PlayPage() {
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
            Play
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
			<li className="breadcrumb-item active" aria-current="page">Play Ground</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Play Ground
				<span className="font-weight-bold"> </span>
			
			</h3>
			
			
		
<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>College has its own play field with Volley Ball, Kabaddi and Tenny Coit courts. Support staff maintains the sports equipments and the cleanness of the play field. Damaged equipments are replaced and repaired in time. Supervision is done by the Physical Director. 

</strong></p>	
					
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
