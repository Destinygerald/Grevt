import '../style.css'
import '../style.mobile.css'
import { FaFacebook, FaPinterest } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'


function ContactTop () {
	return (
		<div className='contact-top'>
			<div className='contact-top-hdr'>
				<div>
					<div> <div className='line' /> Contact Us </div>
					<div>Join Us in Creating <br /> <span className='green'>Something Great</span> </div>
				</div>

				<div>
					<div className='green-circle' />
					<div className='transparent-circle'></div>
				</div>
			</div>
		</div>
	)
}


function ContactBtm () {
	return (
		<div className='contact-btm'>
			<div className='contact-form'>
				<input type='text' name='first_name' placeholder='First Name' />
				<input type='text' name='last_name' placeholder='Last Name' />
				<input type='email' name='email' placeholder='Email' />
				<input type='text' name='phone' placeholder='Phone Number' />
				<input type='text' name='subject' placeholder='Subject' />
				<textarea placeholder='Message'></textarea>

				<button>Send Message</button>
			</div>

			<div className='contact-info'>
				<div>
					<span>Address</span>
					<span> 2534 Washington Ave. Manchester, </span>
					<span>Kentucky 39098</span>
				</div>

				<div>
					<span>Contact</span>
					<span>Phone:  +124-801-621-5678</span>
					<span>Email: grevt@gmail.com</span>
				</div>

				<div>
					<span>Open Time</span>
					<span>Monday - Friday : 10:00 - 8:00</span>
				</div>

				<div>
					<span>Stay Connected</span>
					<div className='contact-socials'>
						<span> <FaFacebook /> </span>
						<span> <AiFillTwitterCircle /> </span>
						<span> <FaPinterest /> </span>
						<span> <AiFillInstagram /> </span>
					</div>
				</div>

			</div>
		</div>
	)
}

export function Contact () {
	return (
		<div className='contact' id='contact'>
			<ContactTop />
			<ContactBtm />
		</div>
	)
}