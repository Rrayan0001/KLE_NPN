'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function InfraPage() {
  return (
    <SubpageLayout breadcrumb="Infra">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Infra
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
			<li className="breadcrumb-item active" aria-current="page">Infrastructure</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Infrastructure of College
				<span className="font-weight-bold"></span>
			
			</h3>
			<img src="/images/banner10.jpg" alt="" className="img-fluid" /><br /><br />
				
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>

The institution is spread over 11.2 acres of lush green land along the old NH-4 near Central Bus Stand of the town. The main building has 29 state of art class rooms, 11 well equipped labs, staff common room, separate ladies staff room, room for girl students and office units. Adjacent to the main building is the Library, Gymkhana, NSS &amp; NCC units, Healthcare Unit, Youth Red Cross Wing, Canteen and a Bank with ATM. The library has more than 50,000 volumes on its shelves with well ventilated separate reading rooms for boys, girls and staff. The various departments are provided with LAN and Internet connections. We have two computers labs with latest thin client technology networked computer and eleven VPN internet connections. Recently an elegant Indoor Sports Training facility and Swimming Pool have been constructed with UGC financial assistance. These sports facilities and the spacious common play field meet the needs of sport persons and athletes. While the boys and girls have separate hostel facilities, the teaching staff enjoys the facility of residential quarters.<br /><br />


 <br /><br /></strong></p>
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
