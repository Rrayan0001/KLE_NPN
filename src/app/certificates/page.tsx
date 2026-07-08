'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function CertificatesPage() {
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
            Certificates
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
			<li className="breadcrumb-item active" aria-current="page">Certificates</li>
		</ol>
	</nav>
	
	<section className="gallery py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Certificates
				<span className="font-weight-bold"></span>
			</h3>
			<div className="inner-sec pt-md-4">
				<div className="row proj_gallery_grid">
					<div className="col-sm-4 section_1_gallery_grid">
						<a href="/images/NAAC2004.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2004.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
					<div className="col-sm-4 section_1_gallery_grid my-sm-0 my-4">
						<a href="/images/NAAC2004QP.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2004QP.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
					<div className="col-sm-4 section_1_gallery_grid">
						<a href="/images/NAAC2010.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2010.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
				</div>
				<div className="row proj_gallery_grid mt-4">
					<div className="col-sm-4 section_1_gallery_grid">
						<a href="/images/NAAC2010QP.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2010QP.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
					<div className="col-sm-4 section_1_gallery_grid  my-sm-0 my-4">
						<a href="/images/NAAC2016.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2016.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
					<div className="col-sm-4 section_1_gallery_grid">
						<a href="/images/NAAC2016QP.jpg">
							<div className="section_1_gallery_grid1">
								<img src="/images/NAAC2016QP.jpg" alt=" " className="img-fluid" />
								
							</div>
						</a>
					</div>
				</div>
				
	
			
			</div>
		</div>
	</section>
	
        </div>
      </div>
    </>
  );
}
