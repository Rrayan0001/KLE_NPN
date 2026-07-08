'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function CanPage() {
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
            Can
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
			<li className="breadcrumb-item active" aria-current="page">Canteen </li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Canteen
				<span className="font-weight-bold"></span>
			
			</h3><br /><br />
		<img src="images/canteen1.png
" alt="" className="img-fluid" /><br /><br />	
			
		<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
	Our College has Canteen facility provided for the student and the staff. The Cleanliness and hygiene is maintained by the canteen staff. Canteen provides homely and delicious food along with various edible items for breakfast and lunch. </strong></p>
</div>
			
					</div>
	
	
        </div>
      </div>
    </>
  );
}
