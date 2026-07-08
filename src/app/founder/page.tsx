'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function FounderPage() {
  return (
    <SubpageLayout breadcrumb="Founder">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Founder
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
			<li className="breadcrumb-item active" aria-current="page">Founders</li>
		</ol>
	</nav>

	
	<div className="about-page-2 py-5">
		<div className="container-fluid py-xl-5 py-lg-3">
			<div className="row about-head-wthree-2">
				<div className="col-lg-4 left-abw3ls text-lg-left text-center">
					
				</div>
				<div className="col-lg-4 right-abw3ls my-lg-0 my-sm-5 my-4">
				
				<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Founders 
				<span className="font-weight-bold"></span>
			
			</h3>
					<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Saptharshis</h4>
					<img src="/images/Saptarishis&amp;Donors.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-4 left-abw3ls text-lg-left text-center">
					
				</div>
			</div>
		</div>
	</div>
	

	

	
	<div className="testimonials py-5">
		<div className="container py-xl-5 py-lg-3">
		<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4" style={{ "color": "#00ffe7" }}>Saptharshis</h4>
			
			<div className="mis-stage">
				
				<ol className="mis-slider">
					
					<li className="mis-slide">
						
						<a href="#" className="mis-container">
							
							<figure>
								
								<img src="/images/SmallKLE-Founder-Shri-BB-Mamadapur.png" alt=" " className="img-fluid" />
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-BS-Hanchinal.png" alt=" " className="img-fluid" />
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="link" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-HF-Kattimani.png" alt=" " className="img-fluid" />
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-M-R-Sakhare.png" alt=" " className="img-fluid" />
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-PR-Chikodi.png" alt=" " className="img-fluid" />
								
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-SS-Basavanal.png" alt=" " className="img-fluid" />
								
								
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/SmallKLE-Founder-Shri-VV-Patil.png" alt=" " className="img-fluid" />
								
							</figure>
						</a>
					</li>
				</ol>
			</div>
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
