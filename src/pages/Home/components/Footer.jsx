import '../style.css'
import '../style.mobile.css'
import { IoMdSend } from 'react-icons/io'


function FooterCnt () {
	return (
	<div className='footer-cnt'>
		<div>
			<span>Grevt</span>
			<span>At Grevt, we are committed to continuing our pursuit of excellence, driving innovation and delivering exceptional results that exceed our clients' expectations.</span>
		</div>

		<div>
			<div>
				<span>Navigation</span>
				<span>Home</span>
				<span>Services</span>
				<span>About Us</span>
				<span>Testimonials</span>
				<span>Contact</span>
			</div>

			<div>
				<span>Contact</span>
				<span>+124-801-621-5678</span>
				<span>grevt@gmail.com</span>
				<span>2534 Washington Ave. Manchester, Kentucky 39098</span>
				{/*<span>Contact</span>*/}
			</div>
		</div>

		<div>
			<span>Get the Latest Information</span>

			<div className='footer-subscribe'>
				<input type='text' placeholder='Email Address' />
				<div> <IoMdSend /> </div>
			</div>
		</div>
	</div>
	)
}

function Copyright () {
	return (
		<div className='copy-right'>
			<div />

			<div>
				<span>Copyright©2024 <span className='green'>Grevt</span>. All Rights Reserved.</span>
				<span>User Terms & Conditions | Privacy Policy  </span>
			</div>
		</div>
	)
}

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<span> Let's <span className='green'>Connect</span> there </span>

				<a href='#contact'> <button>Let's Connect</button> </a>
			</div>

			<FooterCnt />

			<Copyright />
			
		</div>
	)
}