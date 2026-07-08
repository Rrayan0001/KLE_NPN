'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function HallPage() {
  return (
    <SubpageLayout breadcrumb="Hall">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hall
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Conference 
				<span className="font-weight-bold">Hall </span>
			
			</h3><img src="/images/golden_c_hall (1).png" alt="" className="img-fluid" />
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Golden Jubilee Conference Hall has been built with UGC financial assistance as a Golden Jubilee Memorial Hall. It is equipped with audio visual aids and multimedia facilities. Its seating capacity is 250.</strong></p>
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
