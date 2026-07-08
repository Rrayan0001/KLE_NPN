'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function CocPage() {
  return (
    <SubpageLayout breadcrumb="Coc">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Coc
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
			<li className="breadcrumb-item active" aria-current="page">Code Of Conduct</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Code Of Conduct
				<span className="font-weight-bold"></span>
			
			</h3>
			
	<a href="/iqac/CodeOfConduct.pdf" target="blank"><b>Click to Open Code Of Conduct </b> </a>	<br /><br /><br /><br /><br /><br /><br /><br />	
			
<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Wear College ID badge</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Respect Your Opposite Sex</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Be Polite and Courteous</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Act with Degnity and Integrity</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Follow Rules and Regulations</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Appreciate and enjoy College Environment</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Be Disciplined and Maintain Peace</strong></p>

<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>Share the Ideas and Learn Together
</strong>

</p>
				</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
