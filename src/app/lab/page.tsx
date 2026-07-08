'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function LabPage() {
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
            Lab
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
			<li className="breadcrumb-item active" aria-current="page">Labs</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Labs 
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			
<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Institute has assigned trained and dedicated support staff for maintaining laboratories. The concerned support staff of the laboratory checks the equipments regularly and verifies its working condition and reports brokerage if any. Heads of Departments regularly supervise the labs. Broken or malfunctioning equipments are repaired or replaced twice in a year. Power generators are maintained by a company with AMC agreement.  Computers, Projectors, Printers, Speakers and other electronic equipments are tested and repaired by experts as and when needed. Electronic and e-waste is maintained by Shiva Shakti Traders of Bengaluru.
</strong></p>
				</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
