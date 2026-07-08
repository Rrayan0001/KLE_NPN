'use client';

import SubpageLayout from '@/components/SubpageLayout';

import Link from 'next/link';

export default function VismisPage() {
  return (
    <SubpageLayout breadcrumb="Vismis">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Vismis
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
			<li className="breadcrumb-item active" aria-current="page">Vision and Mission</li>
		</ol>
	</nav>

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">KLE Society's Vision And Mission 
				<span className="font-weight-bold"></span>
			
			</h3>
			
			
			
			<h2 className="font-italic border-bottom text-center font-weight-bold pb-4 mb-4" style={{ "color": "#537b8e" }}>Vision</h2><br />
			
			
		

			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>To continually evolve as an organisation symbolising global excellence in standards and commitments in the domains of quality education, healthcare, and research, while at the same time adopting, nurturing, and propagating democratic values, charitable virtues, and a philanthropic culture.</strong>

</p><br /><br />
			
			
			
			
			
			
			<h2 className="font-italic border-bottom text-center font-weight-bold pb-4 mb-4" style={{ "color": "#537b8e" }}>Mission</h2><br />
			
		
		

			<p align="justify"><strong style={{ "color": "#0e0e0e", "fontSize": "18px" }}>To propagate, support, and champion the cause of “Excellence through Education” for aspirants across the globe.<br /><br />

To recruit and groom well-qualified, well-trained, and efficient human resources committed to the accomplishment of individual and organisational excellence through continual learning.<br /><br />

To create infrastructure and state-of-the-art educational facilities and provide opportunities for school, collegiate, technical, and professional education, especially for students in rural India.<br /><br />

To provide state-of-the-art healthcare facilities and services to people in both urban and rural areas.<br /><br />

To contribute to the welfare of the farming community in urban and rural areas by facilitating education, the adoption of technology, and modern farming and farm management practices.<br /><br />

To set, develop, and maintain high standards for quality education in existing KLE institutions through ‘best-in-domain’ work systems and methods.<br /><br />

To constantly display sensitivity and respond to changing educational, social, and community demands.<br /><br />

To supplement conventional education with real-time exposure and experiential learning and groom technically well-versed, morally committed, and ethically strong professionals.<br /><br />

To develop an entrepreneurial ecosystem that nurtures creativity and innovation and to integrate the same with existing professional academic courses in order to promote regional enterprise as a precursor to economic development.<br /><br />

To facilitate the landscaping of the learning environment to enable “21st Century Learning” and to maintain clean and green campuses with a pollution-free environment and eco-friendly surroundings.<br /><br />

To undertake the development of society at large and motivate individuals to be socially responsible, productive, and useful citizens of the globalised world.<br /><br />

To impart the spirit of inquiry, promote scientific temperament, and encourage research with the aid of state-of-the-art equipment, methods, and infrastructure as an essential part of professional learning in basic sciences, healthcare, engineering, creative arts and humanities, management, and commerce.</strong>

<br />
</p><br /><br />
			
			
			
			
			
			
			
			 <br /><br />
		</div>
	</div>
	
        </div>
      </div>
    </SubpageLayout>
  );
}
