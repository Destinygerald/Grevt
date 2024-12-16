import '../style.css'
import '../style.mobile.css'
import { FaStar } from 'react-icons/fa' 
import { useState } from 'react'
import img1 from '/images/ceo1.webp'
import img2 from '/images/ceo2.webp'
import img3 from '/images/ceo3.webp'

const Cards = [
	{
		img: img1,
		ratings: 4,
		testimony: 'Grevt has been an invaluable partner in our digital trasformation journey. Their expertise and dedication has helped us achieve our goals and exceed our expectation. ',
		user: 'Dianne Roswell',
		position: 'Owner, Architecure Studio'
	},
	{
		img: img2,
		ratings: 5,
		testimony: 'Grevt designed and developed a mobile app for our business that has received rare positive reviews from our cutstomers. Their team is highly skilled, responsive and pleasurable to work with.',
		user: 'Jane Foster',
		position: 'Manager, Rex Studio'
	},
	{
		img: img3,
		ratings: 4,
		testimony: ' Grevt has provided us with exceptional UX/UI design services that have significantly improved our websites user experience. Their team is creative, knowledgeable, and always willing to go an extra mile. ',
		user: 'James Cambell',
		position: 'Director, Aston Keelr'
	},
]

function TestimonialsCard ({ img, ratings, testimony, user, position }) {
	return (
		<div className='testimonials-card'>
			<div className='testimonials-card-img'>
				<div>
					 <div> “ </div> 
				</div>

				<div> <img src={img} /> </div>
			</div>

			<div>
				<div className='testimonials-card-ratings'>
					{
						Array.from(Array(5)).map((item, i) => {
							if (i < ratings ) {
								return (
									<span className='color-star'> <FaStar /> </span>
								)
							} else {
								return (
									<span className='star'> <FaStar /> </span>
									)
							}
						})
					}
				</div>

				<div>{testimony}</div>

				<div>
					<span>{user}</span>
					<span>{position}</span>
				</div>
			</div>
		</div>
	)
}

function TestimonialsCnt () {

	const [ card, setCard ] = useState(0)

	function Right () {
		if (card >= Cards.length - 1) return;
		setCard(card => card += 1)
	}

	function Left () {
		if (card <= 0) return;
		setCard(card => card -= 1)
	}

	return (
		<div className='testimonials-cnt'>
			<TestimonialsCard ratings={Cards[card]?.ratings} user={Cards[card]?.user} position={Cards[card]?.position} testimony={Cards[card]?.testimony} img={Cards[card]?.img} />

			<div className='testimonials-arrow-left' onClick={Left}> <div> {'<'} </div> </div>
			<div className='testimonials-arrow-right' onClick={Right}> <div> {'>'} </div> </div>
		</div>
	)
}

export function Testimonials () {
	return (
		<div className='testimonials'>
			<div> <div className='line' /> Client Testimonials </div>
			<div> Testimonials That <br /> Speaks To My Results </div>
			<TestimonialsCnt />
		</div>
	)
}