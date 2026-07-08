'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function GardenPage() {
  return (
    <SubpageLayout breadcrumb="Garden">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Garden
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Garden
				<span className="font-weight-bold"></span>
			
			</h3>
			<img src="/images/garden.png" alt="" className="img-fluid" /><br />
			
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
The institution has 360 degree extensive gardens making the campus lush green and eco-friendly. They enhanced the aesthetic appearance of the campus beyond imagination. The green audit of the campus has been carried out regularly. Our campus stretches 42,290 square meters out of which around 50% of the campus is covered with lush green vegetation &amp; lawns. The Ecological club has been executing certain necessary measures to conserve Ozone belt of the college campus to make it ecological paradise. The campus has abundant water resources like an open well, a few bore wells and Municipal Water supply. The campus tree plantation is routinely carried out. Medicinal plants are well maintained on the campus. A renewable energy source like Solar Lighting has been installed on the campus. The Campus is encircled by a 360o garden. It naturally reduces CO2 content in the relatable atmosphere. The trees nurtured in the campus ooze 26,995 kg oxygen annually.</strong></p><br /><br /><br />		
		
		
		
		<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Information resources</h4>
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			
			<tbody>
			<tr>
			<td>Area already under Green covers in sq.meter</td>
			<td>	4758 sq. mts.</td>
			</tr>
			<tr>
			<td>Area of Gardens (in sq.meter)</td>
			<td>4758 sq.mts</td>
			</tr>
			<tr>
			<td>Number of lawn stretches and area covered (in sq.meter)</td>
			<td>12 &amp; 4359 sq.mts.</td>
			</tr>
			<tr>
			<td>Number of trees in the campus</td>
			<td>12 &amp; 4359 sq.mts.</td>
			</tr>
			<tr>
			<td>Number of fruit bearing trees in the campus</td>
			<td>114	</td>
			</tr>
			<tr>
			<td>Number of medicinal plants</td>
			<td>18</td>
			</tr>
			<tr>
			<td>Number of sacred plants</td>
			<td>130</td>
			</tr>
			<tr>
			<td>Number of rare / endangered plants</td>
			<td>12</td>
			</tr>
			<tr>
			<td>Number of shade houses</td>
			<td>01</td>
			</tr>
			<tr>
			<td>Number of vermicompost units</td>
			<td>01</td>
			</tr>
			
			</tbody>
			</table>
			
		</div><br /><br /><br />		
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
