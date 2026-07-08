'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function PoolPage() {
  return (
    <SubpageLayout breadcrumb="Pool">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Pool
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Swimming 
				<span className="font-weight-bold">Pool </span>
			
			</h3><img src="/images/swimming pool.png" alt="" className="img-fluid" />
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>The Olympic standard 8 lane swimming pool is constructed with the UGC financial assistance.</strong></p>
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
