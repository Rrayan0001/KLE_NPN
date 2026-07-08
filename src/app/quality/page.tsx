'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function QualityPage() {
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
            Quality
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
			<li className="breadcrumb-item active" aria-current="page">Quality Policy</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Quality Policy
				<span className="font-weight-bold"> </span>
			
			</h3>
			
			
			<div className="grid_3 grid_5 wow fadeInUp animated" data-wow-delay=".5s">
						
						
						
						<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
							<ul id="myTab" className="nav nav-tabs" role="tablist">
<li role="presentation" className="active"><a href="#home1" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" style={{ "fontSize": "1.2em" }}><strong>Incubation Center</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu1" role="tab" id="menu1-tab" data-toggle="tab" aria-controls="menu1"style={{ "fontSize": "1.2em" }}><strong>Admissions</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu2" role="tab" id="menu2-tab" data-toggle="tab" aria-controls="menu2"style={{ "fontSize": "1.2em" }}><strong>Results</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu3" role="tab" id="menu3-tab" data-toggle="tab" aria-controls="menu3"style={{ "fontSize": "1.2em" }}><strong>Ranks</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu4" role="tab" id="menu4-tab" data-toggle="tab" aria-controls="menu4"style={{ "fontSize": "1.2em" }}><strong>Teacher Quality</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu5" role="tab" id="menu5-tab" data-toggle="tab" aria-controls="menu5"style={{ "fontSize": "1.2em" }}><strong>Calender of Events</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								

</ul>

<div id="myTabContent" className="tab-content">
								<div role="tabpanel" className="tab-pane fade in active" id="home1" aria-labelledby="home-tab">
									<h3 className="heading-agileinfo">Incubation <span> Center</span></h3>
									
			
			<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			<thead><tr>
			<th>Name of teacher</th>
			<th>Qualification	</th>
			<th>Department</th>
			<th>Position</th>
			</tr></thead>
			<tbody>
			<tr>
			<td>
			</td><td> </td>
			<td> </td>
			<td></td>
			</tr>
			<tr>
			<td></td>
			<td> </td>
			<td></td>
			<td> </td>
			</tr>
				<tr>
			<td></td>
			<td> </td>
			<td></td>
			<td> </td>
			</tr>
			
				<tr>
			<td></td>
			<td> </td>
			<td></td>
			<td> </td>
			</tr>
				<tr>
			<td></td>
			<td> </td>
			<td></td>
			<td> </td>
			</tr>
				
			</tbody>
			</table>
			
			
			</div>	</div>


<div role="tabpanel" className="tab-pane fade" id="menu1" aria-labelledby="menu1-tab">
									<h3 className="heading-agileinfo">Admissions<span></span></h3>
									<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>Page under constrution</p>		
			
									
								
								</div>
								
								
								<div role="tabpanel" className="tab-pane fade" id="menu2" aria-labelledby="menu2-tab">
									<h3 className="heading-agileinfo">Results<span></span></h3>
									<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>Page under constrution</p>		
			
		
								</div>
								
								
								
								
								<div role="tabpanel" className="tab-pane fade" id="menu3" aria-labelledby="menu3-tab">
									<h3 className="heading-agileinfo">Ranks<span></span></h3>
									<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>Page under constrution</p>		
			
				
								</div>
								
								
								<div role="tabpanel" className="tab-pane fade" id="menu4" aria-labelledby="menu4-tab">
								<h3 className="heading-agileinfo">Teacher Quality<span> </span></h3>
								<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>Page under constrution</p>		
			
					</div>
								
								
								
								
								<div role="tabpanel" className="tab-pane fade" id="menu5" aria-labelledby="menu5-tab">
								<h3 className="heading-agileinfo">Calender of events<span></span></h3>
								<img src="/images/images.jpg" style={{ "marginLeft": "83px" }} />
			<p style={{ "fontSize": "1.9em", "color": "black" }}>Page under constrution</p>		
			
					</div>
								
											
									
								</div>
								
</div>
</div>	
					
					</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
