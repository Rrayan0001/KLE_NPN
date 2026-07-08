'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function OfficePage() {
  return (
    <SubpageLayout breadcrumb="Office">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Office
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
			<li className="breadcrumb-item active" aria-current="page">Office </li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Office
				<span className="font-weight-bold"></span>
			
			</h3><br /><br />
		<img src="/images/office.png" alt="" className="img-fluid" /><br /><br />	
			
		<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>
		Our College Office is spacious, well furnished, equipped and automated. Office Superintendent, Accountant, FDAs and SDAs assist in 
		all the administrative matters including admission, financial activities, disbursement of scholarships, Leaving certificates and
		examinations. At present there is a crew of 07 experienced, dedicated administrative staff on roll. As per the instructions from
		Government of Karnataka and affiliating Rani Channamma University for admission process and examination should be automated and to 
		align with the instructions the office is updated with latest computers and high speed internet connection for smooth conduction of
		automated admission and examinations process.</strong></p>
<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}> Annual budget is prepared to keep track of income and expenses. Annually internal and external audits are done by concerned authorities like Society and Charted Accountants.
Office maintains the services for the staff like PF (Provident Funds), ESI (Employees State Insurance), Income Tax (IT), Professional Tax, etc.
Office also maintains the services for the students like Scholarships, Health care, Bus Pass facilities etc.
 </strong></p>   <br /><br />

<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Faculty Profile</h4><br />
<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			
			<thead><tr>
<th>	
Sr.No</th>
	 <th>Name of Faculty	</th>
	 <th>Qualification	</th>
	 <th>Designation	</th>
	 <th>Contact	</th>
	 <th>Experience</th>
	 </tr></thead>

			<tbody><tr>
			<td style={{ "fontSize": "17px" }}>1
			</td><td>Shri. B.M. Mathapati	</td>
			<td>B.Com	</td>
			<td>Superintendent	</td>
			<td>9945584440	</td>
			<td>21</td></tr>
<tr>
			<td style={{ "fontSize": "17px" }}>2	</td>
			<td>Shri. J.S. Benadi	</td>
			<td>B.Com	</td>
			<td>Superintendent	</td>
			<td>9731570013	</td>
			<td>14</td></tr>
<tr>
			<td style={{ "fontSize": "17px" }}>3	</td>
			<td>Shri. R.N.Patil	</td>
			<td>B.A	</td>
			<td>FDA	</td>
			<td>9902238008	</td>
			<td>07</td></tr>
<tr>
			<td style={{ "fontSize": "17px" }}>4	</td>
			<td>Shri. S.M.Jamadar	</td>
			<td>B.A	</td>
			<td>SDA	</td>
			<td>9611607860	</td>
			<td>07</td></tr>
<tr>
			<td style={{ "fontSize": "17px" }}>5	</td>
			<td>Shri. S.B.Magadum	</td>
			<td>B.Com	</td>
			<td>SDA	</td>
			<td>9482002418	</td>
			<td>15</td></tr>
<tr>
			<td style={{ "fontSize": "17px" }}>6	</td>
			<td>Miss. S.B.Dhanal	</td>
			<td>B.A	</td>
			<td>SDA	</td>
			<td>08338221871	</td>
			<td>13</td></tr>


</tbody></table></div>
			
					</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
