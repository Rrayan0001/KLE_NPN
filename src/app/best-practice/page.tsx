'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function BestPracticePage() {
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
            BestPractice
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
			<li className="breadcrumb-item active" aria-current="page">Best Practices</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Best Practices
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			<table className="table table-striped">
							<thead><tr>
									<th>Sl.No</th>
									<th>Title</th>
									<th>Link</th>
									

								</tr></thead>
							<tbody>
							
								
								
								
									<tr><td>1.	
								</td><td>Best Practices 2020-2021</td>
								<td><a href="/images/Best practices 2020-21.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								</tbody>
								</table><br /><br /><br />		
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
