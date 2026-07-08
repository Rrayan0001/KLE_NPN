'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function IndoorPage() {
  return (
    <SubpageLayout breadcrumb="Indoor">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Indoor
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
			<li className="breadcrumb-item active" aria-current="page">Other Facilities</li>
		</ol>
	</nav>

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Indoor Stadium
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/badmiton_court.png" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					
					<p align="justify"><strong>
					Our college has a state-of-art indoor stadium for games like Badminton, Table Tennis, Carom and Chess. Support staff maintains the courts, sports equipments and the cleanness of the Indoor Stadium. A specialist in Badminton is appointed to coach the aspirant students. Supervision is done by the Physical Director. 
					</strong>
					</p><br /><br />
				</div>
			</div><br /><br />
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Swimming Pool
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/Backyardpool.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					
					<p align="justify"><strong>
					College has 25 meters of 8 lane standards Swimming pool constructed under UGC financial assistance. Regular chlorine contents of water are tested and water is purified regularly.
					A special coach is appointed to manage the pool and coach the aspirant students. Supervision is done by the Physical Director. 
				</strong>	</p><br /><br />
				</div>
			</div>
			<br /><br />
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Botanical Garden
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/botanicalgarden.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					
					<p align="justify"><strong>
					Botanical Garden and herbal gardens are developed with several herbal, medicinal and devotional plants in the College campus. Separate menial staff is allotted as Gardeners to maintain the gardens.
					Under Swatch Bharat Abhiyan, Staff, Students and Volunteers of various support services carry out cleanliness activities.
					</strong></p><br /><br />
				</div>
			</div><br /><br />
			
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Health Care System
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/healthcare.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					
					<p align="justify"><strong>
					A separate room for the Health Centre with first aid equipments which are used for the initial treatment of students and staff is provided. A doctor from KLE hospital visits the health centre thrice a weak. KLE ‘Vaidyashree’ health card for students and staff is available.
					Maintenance of the clean and hygienic campus and facility of purified drinking water are other facilities provided.</strong>
					</p><br /><br />
					</div></div>
		
				<h4>	Canteen</h4><br />

<h4>Scholarships</h4><br />

<h4>NCC</h4><br />

<h4>NSS</h4><br />

<h4>Bank</h4><br />

<h4>Eco-friendly Campus </h4><br /><br />
<p></p><li><strong>  Green lush gardens are maintained in the campus </strong></li><br /><br />
 <li><strong> Plantation of trees to reduce CO2</strong> </li><br /><br />
 <li><strong> Aerated open well is maintained</strong></li><br /><br />
 <li><strong> Prohibition of entry of vehicles in the campus &amp; Vehicles parking is avoided </strong></li><br /><br />
 <li><strong> Installed solar energy bulbs on the campus and solar water heaters in hostels</strong></li><br /><br />
 <li><strong> Swachha Bharat Abhiyan is implemented</strong></li><br /><br />
 <li> <strong>Mobiles are not allowed on our college campus</strong></li><br /><br />
 <li> <strong>Seminars, Guest Lectures and competitions on environment awareness are organized</strong></li><br /><br />
  <li><strong>Plastic Free Zone</strong></li><br />


<h4>Others</h4>

			</div>	
			
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
