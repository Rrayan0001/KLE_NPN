'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function GymPage() {
  return (
    <SubpageLayout breadcrumb="Gym">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Gym
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
			<li className="breadcrumb-item active" aria-current="page">Gymkhana</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Gymkhana
				<span className="font-weight-bold"></span>
			
			</h3>
				<img src="/images/bann3.png" alt="" className="img-fluid" />
		<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>	Fitness Centre has 16-station Multi-Gym. Support staff maintains the sports equipments and the cleanness of the gymkhana. Supervision is done by the Physical Director. 

</strong></p>
			
			</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
