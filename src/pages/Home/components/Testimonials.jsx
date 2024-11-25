import '../style.css'
import '../style.mobile.css'
import { FaStar } from 'react-icons/fa' 
import { useState } from 'react'

const Cards = [
	{
		img: '',
		ratings: 4,
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		user: 'Dianne Roswell',
		position: 'Owner, Architecure Studio'
	},
	{
		img: '',
		ratings: 5,
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		user: 'Jane Foster',
		position: 'Manager, Rex Studio'
	},
	{
		img: '',
		ratings: 4,
		testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.',
		user: 'James Cambell',
		position: 'Director, Aston Keelr'
	},
]

function TestimonialsCard ({ img, ratings, testimony, user, position }) {
	return (
		<div className='testimonials-card'>
			<div className='testimonials-card-img'>
				<div> <div> “ </div> </div>
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
			<TestimonialsCard ratings={Cards[card]?.ratings} user={Cards[card]?.user} position={Cards[card]?.position} testimony={Cards[card]?.testimony} />

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