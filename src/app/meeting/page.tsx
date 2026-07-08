'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function MeetingPage() {
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
            Meeting
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
			<li className="breadcrumb-item active" aria-current="page">Meeting Details</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Meeting Details
				<span className="font-weight-bold"></span>
			
			</h3>
			
			<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>SI.No</th>
			<th>Year	</th>
			<th>Link</th>
			</tr></thead>
			<tbody>
			
				<tr>
			<td>1.
			</td><td>2020-2021</td>
			<td><a href="/images/Meetings-Compl-20-21.pdf" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>2.</td>
			<td>2021-2022</td>
			<td><a href="/images/IQAC meetings 2021-22.pdf" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>3.</td>
			<td>2022-2023</td>
			<td><a href="/images/IQAC meetings 2021-22.pdf" target="blank">Click Here</a>
			</td></tr>
			
			<tr>
			<td>4.</td>
			<td>2023-2024</td>
			<td><a href="/iqac/IQAC Meetings 2023-24.pdf" target="blank">Click Here</a>
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
