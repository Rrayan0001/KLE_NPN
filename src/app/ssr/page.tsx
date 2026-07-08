'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function SsrPage() {
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
            Ssr
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
			<li className="breadcrumb-item active" aria-current="page">SSR</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">SSR
				<span className="font-weight-bold"></span>
			
			</h3>
			
				<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>Sl no</th>
			<th>SSR	</th>
			<th>Click to view</th>
			
			</tr></thead>
			<tbody>
			<tr>
			<td>1
			</td><td> SSR 4 CYCLE </td>
			<td><a href="/naac/SSR  4 CYCLE.pdf" target="blank">Click Here</a>
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
