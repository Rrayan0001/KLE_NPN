'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function PlanPage() {
  return (
    <SubpageLayout breadcrumb="Plan">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Plan
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
			<li className="breadcrumb-item active" aria-current="page">Calender of Events</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Academic Plan Of Action
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
								</td><td>Academic Calender 2020-21</td>
								
								<td><a href="/iqac/Calendar of Events.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
									<tr>
								<td>2.</td>
								<td>Academic Calender 2021-22</td>
								
								<td><a href="/iqac/Academic calendar of events 2021-22.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
									<tr>
								<td>3.</td>
								<td>Academic calendar 2022-2023</td>
								
								<td><a href="/iqac/Calendar of Events for the Academic Year 2022-2023.pdf" target="_blank">Click Here</a>
								
								</td></tr>
								
									<tr>
								<td>4.</td>
								<td>Academic calendar 2023-2024</td>
								
								<td><a href="/iqac/Academic calendar 2023-2024.pdf" target="_blank">Click Here</a>
								
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
