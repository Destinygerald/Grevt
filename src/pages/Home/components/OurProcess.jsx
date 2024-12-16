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
				<OurProcessCard icon={<HiLightBulb />} step={1} title='Research and Discovery' content='In this initial phase, we work closely with our clients to understand their business goals, target audience and project requirements. Our team conducts market reaserach, analyzes industry trends and gathers feedback to inform our design and development process.' />
				<OurProcessCard icon={<FaPencilRuler />} step={2} title='Design and Prototyping' content="With a deep understanding of our clients' needs, we move into the design phase. Our team of experienced designers creates wireframes, prototypes and highfidelity designs that brings our clients' vision to life. " />
				<OurProcessCard icon={<FaClipboard />} step={3} title='Development and Testing' content="In this phase, our development team brings the design solution to life. We use agile methodologies to ensure rapid development, continuous testung and rapid delivery. Our quality assurance team conducts thorough testing to identify and fix any bugs, ensuring a smooth and seamless user experince." />
			</div>

		</div>
	)
}