'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function AboutPage() {
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
            About
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">about
				<span className="font-weight-bold">us</span>
				</h3><h3 className="title text-capitalize font-weight-light text-dark text-center mb-5"><img src="/images/kore.jpg" alt="" className="img-fluid" />
				<span className="font-weight-bold">us</span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/ap-1.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Our History</h4>
					<p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi, Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi. </p>
					<p className="mt-3">Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi, Eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="about-page-2 py-5">
		<div className="container-fluid py-xl-5 py-lg-3">
			<div className="row about-head-wthree-2">
				<div className="col-lg-4 left-abw3ls text-lg-left text-center">
					<img src="/images/ap-2.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-4 right-abw3ls my-lg-0 my-sm-5 my-4">
					<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Our Mission</h4>
					<p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi. </p>
					<p className="mt-3">Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi, Eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
				</div>
				<div className="col-lg-4 left-abw3ls text-lg-left text-center">
					<img src="/images/ap-3.jpg" alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="team py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">our
				<span className="font-weight-bold">Instructors</span>
			</h3>
			<div className="row inst-grids pt-md-4">
				<div className="col-md-3 col-6 blog-gd-w3ls">
					<img src="/images/team1.jpg" alt=" " className="img-fluid" />
					<div className="date-w3">
						<h4>Michael King</h4>
						<p className="para-w3-agile">Phasellus sed iaculis</p>
						<div className="agileinfo-social-grids">
							<ul>
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-rss"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 blog-gd-w3ls">
					<img src="/images/team2.jpg" alt=" " className="img-fluid" />
					<div className="date-w3">
						<h4>Katherin Tresa</h4>
						<p className="para-w3-agile">Phasellus sed iaculis</p>
						<div className="agileinfo-social-grids">
							<ul>
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-rss"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 blog-gd-w3ls  last mt-md-0 mt-sm-5 mt-4">
					<img src="/images/team3.jpg" alt=" " className="img-fluid" />
					<div className="date-w3">
						<h4>Steven Monroe</h4>
						<p className="para-w3-agile">Phasellus sed iaculis</p>
						<div className="agileinfo-social-grids">
							<ul>
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-rss"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 blog-gd-w3ls last mt-md-0 mt-sm-5 mt-4">
					<img src="/images/team4.jpg" alt=" " className="img-fluid" />
					<div className="date-w3">
						<h4>Khamok Mokai</h4>
						<p className="para-w3-agile">Phasellus sed iaculis</p>
						<div className="agileinfo-social-grids">
							<ul>
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-rss"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="why-choose-agile py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-white text-center mb-5">what we
				<span className="font-weight-bold">do</span>
			</h3>
			<div className="row agileits-w3layouts-grid pt-md-4">
				<div className="col-lg-4 services-agile-1">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="fab fa-accusoft"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">special education</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 services-agile-1 my-lg-0 my-5">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="fas fa-book"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">full day session</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 services-agile-1">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="fas fa-users"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">qualified teachers</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row agileits-w3layouts-grid mt-5">
				<div className="col-lg-4 services-agile-1">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="far fa-calendar-alt"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">events</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 services-agile-1  my-lg-0 my-5">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="fas fa-graduation-cap"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">pre classes</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 services-agile-1">
					<div className="row wthree_agile_us">
						<div className="col-lg-3 col-md-2 col-3  agile-why-text">
							<div className="wthree_features_grid text-center p-3 border rounded">
								<i className="far fa-clock"></i>
							</div>
						</div>
						<div className="col-9 agile-why-text-2">
							<h4 className="text-capitalize text-white font-weight-bold mb-3">24/7 supports</h4>
							<p>Lorem ipsum magna, vehicula ut scelerisque ornare porta ete celerisque ornare.</p>
							<a className="btn mt-3 service-button p-0" href="/about.html" role="button">Read More
								<i className="fas fa-long-arrow-alt-right ml-1"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="video-choose-agile py-5">
		<div className="container py-xl-5 py-lg-3">
			<div className="row">
				<div className="col-lg-7 video">
					<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">our
						<span className="font-weight-bold">video</span>
					</h3>
					<iframe src="https://player.vimeo.com/video/58123228"></iframe>
				</div>
				<div className="col-lg-5 events">
					<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">upcoming
						<span className="font-weight-bold">events</span>
					</h3>
					<div className="events-w3ls">
						<div className="d-flex">
							<div className="col-sm-2 col-3 events-up p-3 text-center">
								<h5 className="text-white font-weight-bold">28
									<span className="border-top font-weight-light pt-2 mt-2">May</span>
								</h5>
							</div>
							<div className="col-sm-10 col-9 events-right">
								<h4 className="text-dark">Admission Fair Spring </h4>
								<ul className="list-unstyled">
									<li className="my-2">
										<i className="far fa-clock mr-2"></i>5.00 pm - 7.30 pm</li>
									<li>
										<i className="fas fa-map-marker mr-2"></i>25 Newyork City.</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="d-flex my-4">
						<div className="col-sm-2 col-3 events-up p-3 text-center">
							<h5 className="text-white font-weight-bold">28
								<span className="border-top font-weight-light pt-2 mt-2">May</span>
							</h5>
						</div>
						<div className="col-sm-10 col-9 events-right">
							<h4 className="text-dark">Admission Fair Spring </h4>
							<ul className="list-unstyled">
								<li className="my-2">
									<i className="far fa-clock mr-2"></i>5.00 pm - 7.30 pm</li>
								<li>
									<i className="fas fa-map-marker mr-2"></i>25 Newyork City.</li>
							</ul>
						</div>
					</div>
					<div className="d-flex">
						<div className="col-sm-2 col-3 events-up p-3 text-center">
							<h5 className="text-white font-weight-bold">28
								<span className="border-top font-weight-light pt-2 mt-2">May</span>
							</h5>
						</div>
						<div className="col-sm-10 col-9 events-right">
							<h4 className="text-dark">Admission Fair Spring </h4>
							<ul className="list-unstyled">
								<li className="my-2">
									<i className="far fa-clock mr-2"></i>5.00 pm - 7.30 pm</li>
								<li>
									<i className="fas fa-map-marker mr-2"></i>25 Newyork City.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="testimonials py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-white text-center mb-5">what our
				<span className="font-weight-bold">people says</span>
			</h3>
			<div className="mis-stage">
				
				<ol className="mis-slider">
					
					<li className="mis-slide">
						
						<a href="#" className="mis-container">
							
							<figure>
								
								<img src="/images/t1.jpg" alt=" " className="img-fluid" />
								<figcaption>Carl Lii
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/t2.jpg" alt=" " className="img-fluid" />
								<figcaption>Michael Paul
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="link" className="mis-container">
							<figure>
								<img src="/images/t3.jpg" alt=" " className="img-fluid" />
								<figcaption>Henry Doe
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/t4.jpg" alt=" " className="img-fluid" />
								<figcaption>Laura James
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/t5.jpg" alt=" " className="img-fluid" />
								<figcaption>Thomas Carl
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/t6.jpg" alt=" " className="img-fluid" />
								<figcaption>Rosy Crisp
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
					<li className="mis-slide">
						<a href="#" className="mis-container">
							<figure>
								<img src="/images/t4.jpg" alt=" " className="img-fluid" />
								<figcaption>Michael Paul
									<span>Sed maximus eros quis leo.</span>
								</figcaption>
							</figure>
						</a>
					</li>
				</ol>
			</div>
		</div>
	</div>
	

	
	<div className="news-section py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">our lastest
				<span className="font-weight-bold">news</span>
			</h3>
			<div className="row news-grids-w3l pt-md-4">
				<div className="col-md-4 news-grid">
					<a href="/blog.html">
						<img src="/images/n1.jpg" className="img-fluid" alt="" />
					</a>
					<div className="news-text">
						<div className="news-events-agile event-colo1 py-2 px-3">
							<h5 className="float-left">
								<a href="/blog.html" className="text-white">07 May</a>
							</h5>
							<div className="post-img float-right">
								<ul>
									<li>
										<a href="#">
											<i className="far fa-comments text-white"></i>
										</a>
									</li>
									<li className="mx-3">
										<a href="#">
											<i className="far fa-heart text-white"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-share text-white"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="detail-bottom">
							<h6 className="my-3">
								<a href="/blog.html" className="text-dark">
									Eiusmod tempor incididunt ut labore sed do eiusmod
								</a>
							</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod
								tempor incididunt ut labore</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 news-grid my-md-0 my-sm-5 my-4">
					<a href="/blog.html">
						<img src="/images/n2.jpg" className="img-fluid" alt="" />
					</a>
					<div className="news-text">
						<div className="news-events-agile py-2 px-3">
							<h5 className="float-left">
								<a href="/blog.html" className="text-white">07 May</a>
							</h5>
							<div className="post-img float-right">
								<ul>
									<li>
										<a href="#">
											<i className="far fa-comments text-white"></i>
										</a>
									</li>
									<li className="mx-3">
										<a href="#">
											<i className="far fa-heart text-white"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-share text-white"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="detail-bottom">
							<h6 className="my-3">
								<a href="/blog.html" className="text-dark">
									Eiusmod tempor incididunt ut labore sed do eiusmod
								</a>
							</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod
								tempor incididunt ut labore</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 news-grid">
					<a href="/blog.html">
						<img src="/images/n3.jpg" className="img-fluid" alt="" />
					</a>
					<div className="news-text">
						<div className="news-events-agile event-colo3 py-2 px-3">
							<h5 className="float-left">
								<a href="/blog.html" className="text-white">07 May</a>
							</h5>
							<div className="post-img float-right">
								<ul>
									<li>
										<a href="#">
											<i className="far fa-comments text-white"></i>
										</a>
									</li>
									<li className="mx-3">
										<a href="#">
											<i className="far fa-heart text-white"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-share text-white"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="detail-bottom">
							<h6 className="my-3">
								<a href="/blog.html" className="text-dark">
									Eiusmod tempor incididunt ut labore sed do eiusmod
								</a>
							</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod
								tempor incididunt ut labore</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	
	<div className="brands-w3ls py-md-5 py-4">
		<div className="container py-xl-3">
			<ul className="list-unstyled">
				<li>
					<i className="fab fa-supple"></i>
				</li>
				<li>
					<i className="fab fa-angrycreative"></i>
				</li>
				<li>
					<i className="fab fa-aviato"></i>
				</li>
				<li>
					<i className="fab fa-aws"></i>
				</li>
				<li>
					<i className="fab fa-cpanel"></i>
				</li>
				<li>
					<i className="fab fa-hooli"></i>
				</li>
				<li>
					<i className="fab fa-node"></i>
				</li>
			</ul>
		</div>
	</div>
	
        </div>
      </div>
    </>
  );
}
