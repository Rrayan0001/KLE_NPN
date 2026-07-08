'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function BomPage() {
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
            Bom
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
			<li className="breadcrumb-item active" aria-current="page">Board of Management</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Board Of Management
				<span className="font-weight-bold"></span>
			
			</h3>
					<h3 align="center" style={{ "color": "#CC3300" }}><strong>Office Bearers</strong></h3><br />
		
	<h4 align="center" style={{ "color": "#CC3300" }}>	<strong>President</strong> </h4>
<h4 align="center" style={{ "color": "#000066" }}><strong>Shri Mahantesh S. Koujalgi</strong></h4>
<br /><br />
<h4 align="center" style={{ "color": "#CC3300" }}><strong>Vice-President</strong></h4>
<h4 align="center" style={{ "color": "#000066" }}><strong>Shri Basavaraj S. Tatawati</strong></h4><br /><br />

			<h3 align="center" style={{ "color": "#CC3300" }}><strong>MEMBERS OF THE BOARD OF MANAGEMENT</strong></h3><br />
		
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>SI.No</th>
			<th>Member Name</th>
			<th>Designation</th>
			</tr></thead>
			<tbody>
			<tr>
	<td>1.
</td><td>	Shri Amit P. Kore</td>	
<td>Chairman</td></tr>
	<tr>
	<td>2.	</td>
	<td>Shri Y. S. Patil	</td>
	<td>Member</td></tr>
	<tr>
	<td>3.</td>
<td>Shri Mahantesh M. Kavatagimath</td>
<td>Member</td></tr>
	<tr><td>4.</td>
<td>Shri Anil V. Patted	</td>
<td>	Member</td></tr>
	<tr><td>5.	</td>
	<td>Shri Jayanand M. Munavalli</td>	
	<td>Member</td></tr>
	<tr>
	<td>6.</td>	
	<td>Shri Basavaraj R. Patil	</td>
	<td>Member</td></tr>
	<tr>
	<td>7.</td>	
	<td>Shri Mallikarjun C.Kolli</td>
	<td>Member</td></tr>
	<tr>
	<td>8.	</td>
	<td>Dr. Vishwanath I. Patil</td>	
	<td>Member</td></tr>
	<tr>
	<td>9.	</td>
	<td>Shri Praveen A. Bagewadi	</td>
	<td>Member</td></tr>
	<tr>
	<td>10.</td>
<td>Dr. Preeti K. Doddwad</td>
<td>Member</td></tr>
	<tr>
	<td>11.	</td>
	<td>Shri Manjunath S Munavalli</td>	
	<td>Member</td></tr>
	<tr>
	<td>12.</td>
<td>Shri Vijay S.Metgud	</td>	
<td>Member</td></tr>
</tbody>
			</table>
			<table className="table table-striped">
			<thead><tr>
			<th></th>
			<th>Nominated Life Members</th>
			<th></th>
			</tr></thead>
			<tbody>

	<tr>
	<td>13.</td>
<td>Dr. Deepa C.Metgud	</td>
<td>Member</td></tr>
	<tr>
	<td>14.</td>	
	<td>Shri Bharamappa S.Ambi</td>	
	<td>Member</td></tr>
	<tr>
	<td>15.</td>
<td>Shri Sheetal G.Nanjappanavar</td>	
<td>Member</td></tr>
	<tr>
	<td></td>
	<td>Dr. Sunil S. Jalalpure</td>	
	<td>Secretary</td></tr>

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
