'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <SubpageLayout breadcrumb="Contact">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact
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
			<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
		</ol>
	</nav>
	
	

	
	<div className="contact py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">contact us
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row contact-grids agile-1 py-sm-5 pb-sm-0 pb-5">
				<div className="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-map-marker-alt rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
						<p>G.I.Bagewadi Arts,Science College, 
							<label>Nipani.</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-phone rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
						<p>08338 - 220116
							<label></label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-envelope-open rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
						<p>
							<a href="mailto:info@example.com">klegib_npn@yahoo.com</a>
							
						</p>
					</div>
				</div>
			</div>
			
			<form action="#" method="post">
				<div className="contact-grids1 w3agile-6">
					<div className="row">
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">First Name</label>
							<input type="text" className="form-control" name="First Name" placeholder="" required="" />
						</div>
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">Last Name</label>
							<input type="text" className="form-control" name="Last Name" placeholder="" required="" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">Subject</label>
							<input type="text" className="form-control" name="Subject" placeholder="" required="" />
						</div>
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">E-mail</label>
							<input type="email" className="form-control" name="Email" placeholder="" required="" />
						</div>
					</div>
					<div className="contact-me animated wow slideInUp form-group">
						<label className="col-form-label">Message</label>
						<textarea name="Message" className="form-control" placeholder="" required=""> </textarea>
					</div>
					<div className="contact-form">
						<input type="submit" value="Submit" />
					</div>
				</div>
			</form>
			
		</div>
	</div>
	

	
	
	
        </div>
      </div>
    </SubpageLayout>
  );
}
