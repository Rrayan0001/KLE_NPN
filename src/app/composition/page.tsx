'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function CompositionPage() {
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
            Composition
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
			<li className="breadcrumb-item active" aria-current="page">Composition</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Composition
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			
			
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>SI.No</th>
			<th>	IQAC Report/Year	</th>
			<th>CLICK TO VIEW</th>
			</tr></thead>
			<tbody>
		
				<tr>
			<td>1.
			</td><td>	Composition of IQAC: 2020-21</td>
			<td><a href="/iqac/IQAC_20-21.pdf" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>2.</td>
			<td>	Composition of IQAC: 2021-22</td>
			<td><a href="/iqac/IQAC_21-22.pdf" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>3.</td>
			<td>	Composition of IQAC: 2022-23</td>
			<td><a href="/iqac/IQAC Composition 2022-23.pdf" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>4.</td>
			<td>	Composition of IQAC: 2023-24</td>
			<td><a href="/iqac/IQAC Composition 2023-24.pdf" target="blank">Click Here</a>
			</td></tr>
				
			</tbody>
			</table>
			
			
			</div>
	</div>
					</div>
	
	
        </div>
      </div>
    </>
  );
}
