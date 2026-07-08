'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function EmblemPage() {
  return (
    <SubpageLayout breadcrumb="Emblem">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Emblem
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
			<li className="breadcrumb-item active" aria-current="page">Emblem</li>
		</ol>
	</nav>

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Emblem
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/KLE Symbol.gif" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
				    
				    
				    	<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
				The emblem that the Karnataka Lingayat Education Society has officially adopted is carefully designed, beautifully carved, meaningful, and symbolic of the ideology that the K.L.E. Society stands for. It truly reflects the aims, objectives, and aspirations of the Society.
					.</strong></p><br />
					
					<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
					The 'Sacred Bull' is symbolic of 'service'; The 'Flying Bird' is the awakened youth to take up any challenge; The 'Hexagon of Veerashaiva Dharma' with its secular outlook in service of the people; The 'Ishtalinga' in a palm and the Halo around it is suggestive of knowledge to remove ignorance of the people in fulfillment of the Veerashaiva philosophy
					.</strong></p><br />
					
					
					<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Therefore, the idea of the Emblem is that, by the union of Dharma, Knowledge, Service and Sacrifice, the vision of the KLE Society which is giving excellent educational service to the people of all castes, creeds, religions and regions is totally obtained.</strong></p>
					
				</div>
			</div>
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
