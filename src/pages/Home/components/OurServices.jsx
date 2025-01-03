import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import img1 from '/images/img1.webp'
import img2 from '/images/img2.webp'
import img3 from '/images/img3.webp'
import img4 from '/images/img4.webp'
import img5 from '/images/img5.webp'
import img6 from '/images/img6.webp'


function OurServicesCnt () {
	return (
		<div className='our-services-cnt'>
			<div> <div className='line' />  Our Services</div>

			<div>
				<div>Discover Our <br/> Digital Solutions </div>
				
				<div>
					<div/>

					<div> We offer a comprehensive range of services designed to help businesses thrive in the digital landscape. Our team of experts is dedicated to delivering innovative solutions that meets our clients' unique needs. </div>
				</div>

			</div>
		</div>
	)
}


function OurServicesCard ({ number, title, skills, content, img, link }) {
	
	const [ clicked, setClicked ] = useState(false)

	function toggleClicked () {
		setClicked(!clicked)
	}

	return (
		<div className='our-services-card'>
			<div>{number}</div>

			<div className='our-services-card-cnt'>
				<span>{title}</span>
				<div>
					{
						skills[0]
						?
						skills.map((item, i) => (
							<div key={'skill-' + title + '-' + i} className='our-services-card-cnt-skill'>{item}</div>
						))
						:
						''
					}
				</div>

				{
					clicked
					?
					<>
					<div>{content}</div>

					<div className='our-services-card-img'>
						<img src={img} alt='Bck-img' />
					</div>
					</>
					:
					''
				}
			</div>

			<div className='our-services-card-btn'>
				<button onClick={toggleClicked} className={clicked ? 'selected-btn' : ''} >See {clicked ? 'less' : 'more' }</button>
				<span>↗</span>
			</div>
		</div>
	)
}


function OurServicesGrid () {
	return (
		<div className='our-services-grid'>
			<OurServicesCard number='01.'  title='Mobile Application Development' skills={['Andriod App Development', 'Ios App Development', 'Flutter App Development', 'React Native App Development']} content="We design and develop mobile applications that are intuitive, engaging and tailored to our clients' specific requirements. Our expertise spans both iOS and Andriod platform." img={img1} />
			<OurServicesCard number='02.'  title='Website Development' skills={['ReactJS Development', 'Angular JS Development', 'Node JS Development', 'Django Development']} content=' Our team creates custom websites that are visually stunning, user-friendly and optimized for search engines. We usethe latest technologies and frameworks to ensure fast, secure and scalable websites.' img={img2} />
			<OurServicesCard number='03.'  title='UX/UI Design' skills={['User Research', 'User Process', 'Usability Testing', 'Wireframing', 'Prototyping', 'Visual Design']} content=" We specialize in crafting exceptional user experiences through intuitive and visually appealing interfaces. Our UX/UI design services ensure that our clients' digital products are both functional and beautiful." img={img3} />
			<OurServicesCard number='04.'  title='Graphic Design' skills={['Packaging Design', 'Infographic Design', 'Illustration', 'Brand Identity Design', 'Print Design', 'Digital Design']} content=' Our graphics design team creates stunning visual content that captures our clients brand essence. From logos and brochures to infographics and social media graphics, we deliver high-quality designs that elevate our clients brand presence. ' img={img4} />
			<OurServicesCard number='05.'  title='Digital Marketing' skills={['Search Engine Optimization', 'Social Media Marketing', 'Email Marketing', 'Affiliate Marketing']} content=' We offer a range of digital marketing services designed to help businesses reach and engage their target audience. Our services include search engine optimization(SEO) pay-per-click(PPC) advertising, social media marketing and content marketing. ' img={img6} />
		</div>
	)
}


export function OurServices () {
	return (
		<div className='our-services'>
			<OurServicesCnt />
			<OurServicesGrid />
		</div>
	)
}