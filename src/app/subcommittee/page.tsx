'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function SubcommitteePage() {
  return (
    <SubpageLayout breadcrumb="Subcommittee">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Subcommittee
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Composition 
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>page under constrution</p>		
					</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
