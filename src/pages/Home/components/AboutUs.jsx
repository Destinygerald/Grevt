import '../style.css'
import '../style.mobile.css'
import img5 from '/images/img5.webp'

function AboutUsImg () {
	return (
		<div className='about-us-img'>

			<span />
			<span />

			<div className='about-us-img-cnt'>
				<img src={img5} />
			</div>

			<div className='about-us-img-extra'>
				<div>
					<span>4+</span>
					<div>
						<span>Years</span>
						<span>of Experience</span>
					</div>

				</div>
			</div>
		</div>
	)
}

function AboutUsCntHdr () {
	return (
		<div className='about-us-cnt-hdr'>
				<div> <div className='line' />  About Us</div>

				<div>We're <span className='green'>Awards Winning</span> <br/> Digital Agency </div>
				
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
				</div>

			</div>
	)
}


function AboutUsCnt () {
	return (
		<div className='about-us-cnt'>
			<AboutUsCntHdr />
			<div className='about-us-cnt-list'>
				<span> <span>•</span> Award Winning Digital Agency</span>
				<span> <span>•</span> Experience Team Members</span>
				<span> <span>•</span> High Quality Sevices</span>
			</div>

			<div className='about-us-cnt-btn'>
				<button>Learn More</button>
			</div>
		</div>
	)
}

export function AboutUs () {
	return (
		<div className='about-us'>
			<AboutUsImg />
			<AboutUsCnt />
		</div>
	)
}