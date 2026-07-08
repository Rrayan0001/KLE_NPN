'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function KlehistoryPage() {
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
            Klehistory
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
			<li className="breadcrumb-item active" aria-current="page">History</li>
		</ol>
	</nav>

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">History
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<br /><br /><img src="/images/KLES-Centenary-LOGO.png" alt="" className="img-fluid" height="800px" width="600px" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					
					<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
					
We are a Globally recognised Health Sciences University, founded in 1916, advancing innovation, research, and excellence.
 <br /><br />KLE Society fosters education, research, and healthcare, empowering individuals to succeed and contribute as responsible citizens.	<br /><br />	<br /><br />


</strong></p>
					
				</div>
				<div className="col-lg-12 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
				<p align="justify"> <font style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
The KLE Society, a renowned charitable trust, is guided by a strong and visionary Board of Management that upholds its legacy of service and excellence. Elected every five years through a democratic process, the board reflects transparency, accountability, and collective responsibility. With leaders drawn from diverse professional backgrounds, the management ensures that the Society’s vast network of institutions is managed with efficiency, Vision, and integrity. Operating in a structured and professional manner, the Board of Management not only Upholds the Society’s values but also drives its growth, ensuring quality education and social service keeping at the heart of its mission.		
				<br /><br />


Learning is an exciting journey, guided by dedicated educators who bring knowledge to life. Collaborations with universities in the US, UK, and Malaysia have further elevated KLE’s global standing. Under Dr.Prabhakar Kore’s leadership for over 40 years, KLE has flourished, supported by 1,48,000+ students, and 18,000 faculty, establishing itself as a globally renowned educational institution.			
			</font></p></div>
			</div>
		</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
