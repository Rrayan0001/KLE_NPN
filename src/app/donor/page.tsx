'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function DonorPage() {
  return (
    <SubpageLayout breadcrumb="Donor">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Donor
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
			<li className="breadcrumb-item active" aria-current="page">Donor</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Donor
	
			</h3>
			<h3 align="center"><img src="/images/IMG_20190318_141835.jpg" height="350px" width="350px" alt=""  /><br />
				</h3><h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4" style={{ "marginTop": "0px" }}><br />Late Shri. Ganapati Ishwarappa Bagewadi</h4>
			
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
