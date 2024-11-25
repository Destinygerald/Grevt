import '../style.css'
import '../style.mobile.css'
import { HiLightBulb } from 'react-icons/hi'
import { FaPencilRuler, FaClipboard } from 'react-icons/fa'

function OurProcessCard ({ icon, title, content, step }) {
	return (
		<div className='our-process-card'>
			<div>
				<div>{icon}</div>
				<span>Step {step}</span>
			</div>

			<div>{title}</div>

			<div>{content}</div>
		</div>
	)
}

export function OurProcess () {
	return (
		<div className='our-process'>
			<div>  <div className='line' />  Our Work Process</div> 

			<div> Our Working Process </div>

			<div className='our-process-cnt'>
				<OurProcessCard icon={<HiLightBulb />} step={1} title='Research and Discovery' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit  adipiscing elit.' />
				<OurProcessCard icon={<FaPencilRuler />} step={2} title='Design and Prototyping' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit  adipiscing elit.' />
				<OurProcessCard icon={<FaClipboard />} step={3} title='Development and Testing' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit  adipiscing elit.' />
			</div>

		</div>
	)
}