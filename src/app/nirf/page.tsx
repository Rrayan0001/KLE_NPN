'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function NirfPage() {
  return (
    <SubpageLayout breadcrumb="Nirf">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Nirf
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
			<li className="breadcrumb-item active" aria-current="page">NIRF</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">NIRF 
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
		
						<table className="table table-striped">
			<thead><tr>
			<th>Sl no</th>
			<th>Year	</th>
			<th>Click to view</th>
			
			</tr></thead>
			<tbody>
		
			
				<tr>
			<td>4
			</td><td>2019-2020 </td>
			<td><a href="/images/NIRF Participation 2020.pdf" target="blank">Click Here</a>
			</td></tr>
				<tr>
			<td>5</td>
			<td> 2020-2021</td>
			<td><a href="/images/NIRF Participation 2021.pdf" target="blank">Click Here</a>
			</td></tr>
				
			</tbody>
			</table>
			
			
			</div>

				</div>
	
	
        </div>
      </div>
    </SubpageLayout>
  );
}
