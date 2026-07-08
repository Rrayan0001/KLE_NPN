'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function LgbPage() {
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
            Lgb
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
			<li className="breadcrumb-item active" aria-current="page">Local Governing Body</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Local Governing Body
				<span className="font-weight-bold"></span>
			
			</h3>
					
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>SI.No</th>
			<th>Member Name</th>
			<th>Designation</th>
			</tr></thead>
			<tbody>
			<tr>
	<td>
01</td><td>Shri. Mahesh Vishwanath Bagewadi<br /> Chairman,Local Governing Body
K.L.E. Society's, G.I. Bagewadi College. Ashok Nagar,Ni ani-591237.	
</td><td>Chairman</td></tr>

<tr>
	<td>02</td><td>	
</td><td>Member</td></tr>

<tr>
	<td>03</td><td>Shri. Mahadev R Patil
Member,local Governing Body
K.L.E. Soci ety ' s, G. I. Bagewadi College, Jasud Galli,NiQani-591237.	
</td><td>Member</td></tr>

<tr>
	<td>04	</td><td>Shri. Ravindranath Chandrashekhar Shetti, Member,Local Governing Body
K.L.E. Society's, G.I. Bagewadi College, Ashok Nagar,NiQani-591237.	
</td><td>Member</td></tr>

<tr>
	<td>05	</td><td>Dr. Shankargonda R Patil
Member, Local Governing Body
K. L.E. Society's, G.I. Bagewadi College, Jasud Galli, Ni ani-591237.	
</td><td>Member</td></tr>

<tr>
	<td>06	</td><td>Shri. Mallikarjun Nilkanth Gadakari,
M em ber, Local Governing Body
K.L.E. Society's, G.I. Bagewadi College,
NiQani-591237.	
</td><td>Member</td></tr>

<tr>
	<td>07</td><td>Secretary, Board of Management K.L.E.Society, Belagavi/ Representative	
</td><td>Member
</td></tr><tr>
	<td>08</td><td>Principal,G.I. Bagewadi College, Nipani</td><td>Member/Secretary

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
