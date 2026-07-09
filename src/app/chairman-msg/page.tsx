'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function ChairmanMsgPage() {
  return (
    <SubpageLayout breadcrumb="ChairmanMsg">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            ChairmanMsg
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
			<li className="breadcrumb-item active" aria-current="page">Chairman's Message</li>
		</ol>
	</nav>
	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Chairman's Message
				<span className="font-weight-bold"></span>
			</h3>
			<div className="row about-head-wthree">
				<div className="col-lg-6 left-abw3ls">
					<img src="/images/Amitkoreimage.jpg" alt="" className="img-fluid" />
				</div>
				<div className="col-lg-6 right-abw3ls mt-lg-0 mt-sm-5 mt-4">
					<h4 className="font-italic border-bottom text-center font-weight-bold pb-3 mb-4">Shri. Amit Prabhakar Kore<br /><span  style={{ "color": "#537b8e", "fontSize": "0.7em", "display": "block", "marginTop": "8px" }}>Hon’ble Chairman, Board of Management, KLE Society</span></h4>
					
					</div>
			</div><br /><br /><br />
			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }} align="justify">Every great event, it has been well said, brings one absolute new thing into the world. Such an event was the starting of the KLE Society in 1916 by seven dedicated teachers and three generous patrons. Their mission was to provide education, basically to the children of the farming community who constitute a significant majority in Karnataka.<br /><br />
			The environment toady is totally different from the one in 1916; yet, the Mission of the Founders of the KLE Society is pursued with the same zeal even after ten decades in the fulfillment of the vision of providing education to the needy in all the spheres of human knowledge.<br /><br />
		With a strong net-work of over 260 educational institutions spread in Karnataka, part of Maharashtra and even in Delhi, the KLE Society enjoys an unrivalled status. To advance the cause of education, the society has employed over 16,000 men and women committed to academic excellence, and has over 1,25,000 students on its roll. Obviously, the KLE Society today stands second to none. The rush for admissions to all classes and courses right from KG to PG, in Professional as well as traditional streams of learning speaks of the high standards that the Society has set over the years.<br /><br />
		In the functioning of the KLE Society, the true spirit of democracy runs. The Management of the Society is effectively and ably carried out by the Board of Management consisting of directors duly elected as per the constitutional provisions of the Society. The President and Vice-President guide the Chairman while the Life Members frame academic guidelines. The financial transparency is maintained through regular audit system.<br /><br />
		Its technological institutions overshadow the rich and varied heritage. While internationally renowned Jawaharlal Nehru Medical College brings the name and fame of the society back in the limelight by the quality track record that it has set overseas, infrastructural far-superior, ultra-modern, multi-specialty 2,400 beds Hospital and M.R.C. Belgaum, adds to it.<br /><br />
			In recognition of its world class standard the Government of India, on the recommendation of University Grants Commission, New Delhi has accorded the status of University as 'KLE University, Belagavi' to a unit of institutions in Health Sciences. With right approach and long perspective, our Society has set a brand - 'nothing beats quality'.<br /><br />
			It is a matter of great pride that the KLE Society has celebrated its Centenary. I am also proud to say that the achievements that the KLE Society has achieved are only due to the selfless, dedicated and devoted members of the KLE Family.<br /><br />
			</strong></p>
			
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
