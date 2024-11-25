import './style.css'
import './style.mobile.css'
import { Banner } from './components/Banner.jsx'
import { Marquee } from './components/Marquee.jsx'
import { OurServices } from './components/OurServices.jsx'
import { AboutUs } from './components/AboutUs.jsx'
import { OurProcess } from './components/OurProcess.jsx'
import { Contact } from './components/Contact.jsx'
import { Testimonials } from './components/Testimonials.jsx'
import { Footer } from './components/Footer.jsx'

function Page () {
	return (
		<div className='home'>
			<Banner />
			<Marquee />
			<OurServices />
			<AboutUs />
			<OurProcess />
			<Marquee />
			<Contact />
			<Testimonials />
			<Marquee />
			<Footer />
		</div>
	)
}

export default Page