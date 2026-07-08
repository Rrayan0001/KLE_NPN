'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function LibraryPage() {
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
            Library
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
			<li className="breadcrumb-item active" aria-current="page">Library</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">LIBRARY AND INFORMATION CENTER
				<span className="font-weight-bold"></span>
			
			</h3>
			<img src="/images/library.png" alt="" className="img-fluid" />
				<br /><br /><br />
				<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
			<ul id="myTab" className="nav nav-tabs" role="tablist">
								<li role="presentation" className="active"><a href="#home1" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" style={{ "fontSize": "1.2em" }}><strong>Introduction</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
								<li role="presentation"><a href="#menu2" role="tab" id="menu2-tab" data-toggle="tab" aria-controls="menu2"style={{ "fontSize": "1.2em" }}><strong>Photos</strong></a></li>&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp&amp;nbsp
							</ul> <br />
							<div id="myTabContent" className="tab-content">
				<div role="tabpanel" className="tab-pane fade in active" id="home1" aria-labelledby="home-tab">
							
					<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">About Us
				<span className="font-weight-bold"></span>
			
			</h3>
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>The K.L.E. Society’s G. I. Bagewadi Arts Science and Commerce College library is one of the oldest college Libraries in the border area of the North Karnataka was established in the year 1961 along with inception of the college. An automated modern library &amp; information center is on its way to becoming an outstanding learning resource center (LIC) catering to the ever growing and uncompromising information and intellectual requirements of the faculties and students of Arts, Science, Commerce and Business and Management. The Library has over the years built a robust collection of books, periodicals, Back-Volumes of Periodicals, CDs/DVDs etc. to cater the knowledge of thirst stake holders.
	</strong></p>
	<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>A well-equipped and well-managed library is the foundation of modern educational institution. The importance of library in education can be appreciated properly and precisely only if we try to understand the changing concepts as applications of education of today, Education and library service are twin sisters and one can’ t live apart from the other.
</strong><br /><br /></p>
			<br />
					
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			
			<tr align="center"><th colSpan="3" align="center"><strong>
			Information Resources</strong></th></tr>
<tr><td style={{ "fontSize": "17px" }}>1
</td><td style={{ "fontSize": "17px" }}>	Total number of Books</td>
<td style={{ "fontSize": "17px" }}>		50,446</td></tr>
<tr><td style={{ "fontSize": "17px" }}>2</td>
<td style={{ "fontSize": "17px" }}>		Total number of Titles</td>
<td style={{ "fontSize": "17px" }}>		28,034</td></tr>
<tr><td style={{ "fontSize": "17px" }}>3</td>
<td style={{ "fontSize": "17px" }}>		Total number of Textbooks	</td>
<td style={{ "fontSize": "17px" }}>	47,904
</td></tr><tr><td style={{ "fontSize": "17px" }}>4</td>
<td style={{ "fontSize": "17px" }}>		Total number of Reference Books</td>
<td style={{ "fontSize": "17px" }}>		2,542</td></tr>
<tr><td style={{ "fontSize": "17px" }}>5	</td>
<td style={{ "fontSize": "17px" }}>	Total amount spent	</td>
<td style={{ "fontSize": "17px" }}>	50,76,834</td></tr></table></div><br />
<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
<tr align="center"><th colSpan="3" align="center"><strong>Periodicals / News Papers</strong></th></tr>
<tr><td style={{ "fontSize": "17px" }}>1</td>
<td style={{ "fontSize": "17px" }}>		Journals</td>
<td style={{ "fontSize": "17px" }}>		27</td></tr>
<tr><td style={{ "fontSize": "17px" }}>2</td>
<td style={{ "fontSize": "17px" }}>		Magzines	</td>
<td style={{ "fontSize": "17px" }}>	34</td></tr>
<tr><td style={{ "fontSize": "17px" }}>3	</td>
<td style={{ "fontSize": "17px" }}>	News Papers</td>
<td style={{ "fontSize": "17px" }}>		16</td></tr></table></div><br />
<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
<tr align="center"><th colSpan="2" align="center"><strong>E-Resources</strong></th></tr>
<tr><td style={{ "fontSize": "17px" }}>1	</td>
<td style={{ "fontSize": "17px" }}>	Subscribed INFLIBNET N-LIST</td></tr>
<tr><td style={{ "fontSize": "17px" }}>2	</td>
<td style={{ "fontSize": "17px" }}>	Membership of National Digital Library of India (NDLI)</td></tr>
</table></div>

		<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Services provided by library</h4>
		<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				
					   <li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Internet Access to online learning Resources </strong></li>
 	 <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>Document Delivery Service </strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Book Bank </strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Reprographic </strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Current Awareness Service </strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Reference Services</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Special care of  Top10  Students</strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Poor Student Lending Library [Book Bank Services]</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Question Bank</strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Audio-Visual viewing facility</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>Newspaper Clippings</strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Remote Excess (N-LIST &amp; NDLI)</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Digital Display</strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Online Public Access Catalogue [OPAC]</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Library Orientation Programme</strong></li>
   <li className="list-group-item" style={{ "fontSize": "17px" }}><strong>	Book Exhibition</strong></li><li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Inter Library Loan of Books</strong></li>
 </ul><br /><br /><br />
		
		
		<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">THINGS 'TO DO' &amp; 'NOT TO DO':</h4>
		<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			
			<tbody>
			
			<tr>
			<td style={{ "fontSize": "17px" }}>Only registered members of the college are allowed to use the Library.</td></tr>
			 	
 	<tr>
			<td style={{ "fontSize": "17px" }}>You will not be entertained without the valid I.D. card, and it is Non-Transferable.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	A person desirous to using the library shall enter his/her Name, Class, Roll No. &amp; time of entry legibly and put a signature in the register kept at the entrance for the purpose. 
 </td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>Silence to be maintained in the library and no discussion permitted inside the library. </td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Textbooks, printed materials and issued books are not allowed to be taken inside the library.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Documents taken out of the shelves must be left on the table. Replacing the documents on shelves by users is not encouraged as the documents may get misplaced. 
 </td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>Using Mobile phones and audio instruments with or without speaker or headphone is strictly prohibited in the library premises. 
</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Reference books and Periodicals are not issued outside the library premises.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Eating and chewing is strictly prohibited.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Borrowers must satisfy themselves with the physical condition of books before borrowing.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Readers’ should not write in, mark or otherwise disfigure/damage books, furniture, etc.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	Loss of a book the borrower must replace the lost book with the latest edition, along with the overdue charges.</td></tr>
 <tr>
			<td style={{ "fontSize": "17px" }}>	However, in case of not being able to replace the book, they are required to pay Three times of the latest price of the book.

</td></tr>
			</tbody>
			</table>
			
		</div><br /><br /><br />

<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">ONLINE LEARNING RESOURCES</h4>

<ul className="list-group wow fadeInUp animated" data-wow-delay=".5s">
				
					   <li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	N-LIST (INFLIBNET)		:<a href="https://nlist.inflibnet.ac.in/index.php">	https://nlist.inflibnet.ac.in/index.php</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>SWAYAM				: <a href="https://swayam.gov.in/" target="_blank">	https://swayam.gov.in/ </a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	SWAYAMPRABHA			: <a href="https://www.swayamprabha.gov.in/ e-PG PATHSHALA" target="_blank">	https://www.swayamprabha.gov.in/</a> e-PG PATHSHALA				:<a href="https://epgp.inflibnet.ac.in/" target="_blank"	>https://epgp.inflibnet.ac.in/</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>NATIONAL DIGITAL LIBRARY	:<a href="https://ndl.iitkgp.ac.in/" target="_blank">		https://ndl.iitkgp.ac.in/</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	e-Content Courseware in UG subjects	:<a href="#" target="_blank">		http://cec.nic.in/cec/</strong></a></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>E-YANTRA				:<a href="https://www.e-yantra.org/" target="_blank">		https://www.e-yantra.org/ </a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	VIRTUAL LABS			:<a href="http://www.vlab.co.in/" target="_blank">		http://www.vlab.co.in/ </a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>SHODHGANGA			:	<a href="https://shodhganga.inflibnet.ac.in" target="_blank">	https://shodhganga.inflibnet.ac.in </a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	SHODH SHUDDHI (PDS)		:<a href="https://pds.inflibnet.ac.in" target="_blank">		https://pds.inflibnet.ac.in</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>UGC-CARE List			: <a href="https://ugccare.unipune.ac.in/apps1/home/index" target="_blank">	https://ugccare.unipune.ac.in/apps1/home/index</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Open Access Theses and Dissertations	 :<a href="https://oatd.org/" target="_blank">	https://oatd.org/</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>Open Knowledge Repository-World Bank :<a href="https://openknowledge.worldbank.org/" target="_blank">	 https://openknowledge.worldbank.org/</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	HighWire				: <a href="https://www.highwirepress.com/" target="_blank">		https://www.highwirepress.com/</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>Science Direct Open Access Content	: <a href="https://www.sciencedirect.com/#open-access" target="_blank">		https://www.sciencedirect.com/#open-access</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Springer Open Journals		: <a href="https://www.springeropen.com/journals" target="_blank">		https://www.springeropen.com/journals</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>Taylor &amp; Francis Open Access	:<a href="https://www.tandfonline.com/openaccess/openjournals" target="_blank">	https://www.tandfonline.com/openaccess/openjournals</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	Cambridge University Press	:<a href="#" target="_blank">	https://www.cambridge.org/core/what-we-publish/open-access</a></strong></li>
<li className="list-group-item" style={{ "fontSize": "17px" }}><strong>OPEN ACCESS				: <a href="https://www.omicsonline.org/" target="_blank">https://www.omicsonline.org/</a></strong></li>
<li className="list-group-item" style={{ "backgroundColor": "#dce8fb", "fontSize": "17px" }}><strong>	OPEN ACCESS LIBRARY		:<a href="http://www.oalib.com/" target="_blank">http://www.oalib.com/</a></strong></li>
</ul><br /><br />

<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Staff Information</h4>
<div className="bs-docs-example wow fadeInUp animated" data-wow-delay=".5s">
						<table className="table table-striped">
			
			<thead><tr>
<th>		Sl. No.
</th>
<th>	Name of Staff</th>
<th>	Qualification</th>
<th>	Designation</th>
<th>	Experience</th>
</tr></thead>

			<tbody><tr>
			<td style={{ "fontSize": "17px" }}>1
			</td><td style={{ "fontSize": "17px" }}>	Dr. Anand Y. Kenchakkanavar</td>
			<td style={{ "fontSize": "17px" }}>	MLISc, PGDLAN, JRF-NET, K-SET &amp; Ph.D.</td>
			<td style={{ "fontSize": "17px" }}>	Librarian</td>
			<td style={{ "fontSize": "17px" }}>	07 Years</td>
			</tr>
<tr>
			<td style={{ "fontSize": "17px" }}>2</td>
			<td style={{ "fontSize": "17px" }}>	Miss. A. A. Chandrakude</td>
			<td style={{ "fontSize": "17px" }}>	B.A</td>
			<td style={{ "fontSize": "17px" }}>	Computer Operator </td>
			<td style={{ "fontSize": "17px" }}>	13  Years</td>
			</tr>
<tr>
			<td style={{ "fontSize": "17px" }}>3</td>
			<td style={{ "fontSize": "17px" }}>	Shri. V. S. Muradande</td>
			<td style={{ "fontSize": "17px" }}>	S.S.L.C</td>
			<td style={{ "fontSize": "17px" }}>	Attendant</td>
			<td style={{ "fontSize": "17px" }}>	13  Years</td>
			</tr>
<tr>
			<td style={{ "fontSize": "17px" }}>4</td>
			<td style={{ "fontSize": "17px" }}>	Shri. S. D. Kamble</td>
			<td style={{ "fontSize": "17px" }}>	S.S.L.C	</td>
			<td style={{ "fontSize": "17px" }}>Attendant</td>
			<td style={{ "fontSize": "17px" }}>	10  Years</td>
		
</tr></tbody></table></div><br /><br />

	
		</div>
		
<div role="tabpanel" className="tab-pane fade" id="menu2" aria-labelledby="menu2-tab">
								
					<section className="gallery py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">our gallery
				<span className="font-weight-bold"></span>
			</h3>
		<p style={{ "fontSize": "17px" }}><strong>	Library &amp; Information Centre organized orientation programme on “Library Information” from 22-07-2019 to 27-07-2019
</strong></p><br />
	
			<div className="inner-sec pt-md-4">
				<div className="row proj_gallery_grid">
					<div className="col-sm-6 section_1_gallery_grid">
						<a href="/images/lib1.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib1.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/lib2.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib2.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
									
								</div>
							</div>
						</a>
					</div>
				
				</div><br /><br />
		<p style={{ "fontSize": "17px" }}><strong>		Library &amp; Information Centre organized Book Exhibition 
From 16th and 17th October, 2019</strong></p><br />

			
					<div className="row proj_gallery_grid">
					<div className="col-sm-6 section_1_gallery_grid">
						<a href="/images/lib3.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib3.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/lib4.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib4.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
									
								</div>
							</div>
						</a>
					</div>
				
				</div>
		<br /><br />
		<p style={{ "fontSize": "17px" }}><strong>				
Library &amp; Information Centre organized National Librarians Day in 12th August 2020 &amp; 12th August 2021</strong></p><br />

				<div className="row proj_gallery_grid">
					<div className="col-sm-6 section_1_gallery_grid">
						<a href="/images/lib5.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib5.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/lib6.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib6.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
									
								</div>
							</div>
						</a>
					</div>
				
				</div>
				
<br /><br />
		<p style={{ "fontSize": "17px" }}><strong>		Library and Information Center Organized One Day National Webinar on Scientific Writing Skills for Social Science Researchers on 24th July 2020
</strong></p><br />
				<div className="row proj_gallery_grid">
					<div className="col-sm-6 section_1_gallery_grid">
						<a href="/images/lib7.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib7.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/lib8.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib8.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
									
								</div>
							</div>
						</a>
					</div>
				
				</div>
				
				
<br /><br />
		<p style={{ "fontSize": "17px" }}><strong>		Library and Information Center organized National Level Webinar on N-List &amp; Open Educational Resources on 19th June 2021
</strong></p><br />
				<div className="row proj_gallery_grid">
					<div className="col-sm-6 section_1_gallery_grid">
						<a href="/images/lib9.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib9.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/lib10.png">
							<div className="section_1_gallery_grid1">
								<img src="/images/lib10.png" alt=" " className="img-fluid" />
								<div className="proj_gallery_grid1_pos">
									<h3></h3>
									
								</div>
							</div>
						</a>
					</div>
				
				</div>
				
			
			</div>
		</div>
	</section>			
				</div>

	
			</div>
	</div></div>
	</div>
        </div>
      </div>
    </>
  );
}
