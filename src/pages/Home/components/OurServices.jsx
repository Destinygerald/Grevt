import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'


function OurServicesCnt () {
	return (
		<div className='our-services-cnt'>
			<div> <div className='line' />  Our Services</div>

			<div>
				<div>Discover Our <br/> Digital Solutions </div>
				
				<div>
					<div/>

					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.</div>
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
				<button onClick={toggleClicked}>See {clicked ? 'less' : 'more' }</button>
				<span>↗</span>
			</div>
		</div>
	)
}


function OurServicesGrid () {
	return (
		<div className='our-services-grid'>
			<OurServicesCard number='01.'  title='Mobile Application Development' skills={['Andriod App Development', 'Ios App Development', 'Flutter App Development', 'React Native App Development']} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.' />
			<OurServicesCard number='02.'  title='Website Development' skills={['ReactJS Development', 'Angular JS Development', 'Node JS Development', 'Django Development']} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.' />
			<OurServicesCard number='03.'  title='UX/UI Design' skills={['User Research', 'User Process', 'Usability Testing', 'Wireframing', 'Prototyping', 'Visual Design']} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.' />
			<OurServicesCard number='04.'  title='Graphic Design' skills={['Packaging Design', 'Infographic Design', 'Illustration', 'Brand Identity Design', 'Print Design', 'Digital Design']} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.' />
			<OurServicesCard number='05.'  title='Digital Marketing' skills={['Search Engine Optimization', 'Social Media Marketing', 'Email Marketing', 'Affiliate Marketing']} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet.' />
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