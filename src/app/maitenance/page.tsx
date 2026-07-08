'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function MaitenancePage() {
  return (
    <SubpageLayout breadcrumb="Maitenance">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Maitenance
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
			<li className="breadcrumb-item active" aria-current="page">Maintenance Policy</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Maintenance Policy
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			<table className="table table-striped">
							<thead><tr>
									<th>Sl.No</th>
									<th>Title</th>
									<th>Click Here</th>
									

								</tr></thead>
							<tbody>
								<tr>
								<td>1.				
								</td><td>Maintenance Policy 2018-2019 </td>
								
								<td><a href="/images/WebUpload.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
								<tr><td>2.				</td>
								<td>Maintenance Policy 2019-2020 </td>
								
								<td><a href="/images/4.4.2 SUPPORT SERVICES.pdf" target="_blank">Click Here</a>
								
								
								</td></tr>
								
								</tbody>
								</table><br /><br /><br />		
	  </div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
