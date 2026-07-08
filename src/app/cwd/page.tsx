'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function CwdPage() {
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
            Cwd
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
			<li className="breadcrumb-item active" aria-current="page">Criterian Details</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Criterian Details
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			
			
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>Criterian</th>
			<th>Title	</th>
			<th>CLICK TO VIEW</th>
			</tr></thead>
			<tbody>
			<tr>
			<td>Criterian 1
			</td><td>Curriculur Aspects</td>
			<td><a href="/criterian1" target="blank">Click Here</a>
			</td></tr>
			<tr>
			<td>Criterian 2</td>
			<td>Teaching Learning &amp; Evaluation</td>
			<td><a href="/criterian2" target="blank">Click Here</a>
			</td></tr>
				<tr>
			<td>Criterian 3</td>
			<td>Research, Innorations and Extensions</td>
			<td><a href="/criterian3" target="blank">Click Here</a>
			</td></tr>
			
				<tr>
			<td>Criterian 4</td>
			<td>Infrastructure and Learning Resources</td>
			<td><a href="/criterian4" target="blank">Click Here</a>
			</td></tr>
				<tr>
			<td>Criterian 5</td>
			<td>Student Support and Progression</td>
			<td><a href="/criterian5" target="blank">Click Here</a>
			</td></tr>
			<tr>
			<td>Criterian 6</td>
			<td>Governance,Leadership and Management</td>
			<td><a href="/criterian6" target="blank">Click Here</a>
			</td></tr>
			<tr>
			<td>Criterian 7</td>
			<td>Institutional values and Best Practices</td>
			<td><a href="/criterian7" target="blank">Click Here</a>
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
