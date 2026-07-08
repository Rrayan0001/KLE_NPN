'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function StreeringPage() {
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
            Streering
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
			<li className="breadcrumb-item active" aria-current="page">Steering Committee</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Steering Committee
				<span className="font-weight-bold"></span>
			
			</h3>
					<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>SI.No</th>
			<th>	Steering Committee	</th>
			<th>Designation</th>
			</tr></thead>
			<tbody>
			<tr>
			<td>1.
			</td><td> </td>
			<td></td>
			</tr>
			<tr>
			<td>2.</td>
			<td></td>
			<td> </td>
			</tr>
				<tr>
			<td>3.</td>
			<td></td>
			<td> </td>
			</tr>
			
				<tr>
			<td>4.</td>
			<td></td>
			<td> </td>
			</tr>
				<tr>
			<td>5.</td>
			<td></td>
			<td> </td>
			</tr>
				
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
