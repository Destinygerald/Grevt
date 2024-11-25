import '../style.css'
import '../style.mobile.css'
import { useEffect } from 'react'

function MarqueeInner () {
		
	// useEffect(() => {
	// 	const marquee = document.querySelector('.marquee-inner')

	// 	const marqueeChildren = Array.from(marquee.children)

	
	// 	marqueeChildren.forEach(item => {
	// 		const duplicatedItem = item.cloneNode(true)
	// 		duplicatedItem.setAttribute('aria-hidden', true)
	// 		marquee.appendChild(duplicatedItem)
	// 	})

	// }, [])


	return (
		<div className='marquee-inner'>
			<span className='asterisk'>⁕</span>
			<span>Mobile Application Development</span>
			<span className='asterisk'>⁕</span>
			<span>Website Development</span>
			<span className='asterisk'>⁕</span>
			<span>UX/UI Design</span>
			<span className='asterisk'>⁕</span>
			<span>Graphic Design</span>
			<span className='asterisk'>⁕</span>
			<span>Digital Marketing</span>

			<span className='asterisk' aria-hidden='true'>⁕</span>
			<span  aria-hidden='true'>Mobile Application Development</span>
			<span className='asterisk'  aria-hidden='true'>⁕</span>
			<span aria-hidden='true'>Website Development</span>
			<span aria-hidden='true' className='asterisk'>⁕</span>
			<span aria-hidden='true'>UX/UI Design</span>
			<span aria-hidden='true' className='asterisk'>⁕</span>
			<span aria-hidden='true'>Graphic Design</span>
			<span aria-hidden='true' className='asterisk'>⁕</span>
			<span aria-hidden='true'>Digital Marketing</span>

		</div>
	)
}

export function Marquee () {
	return (
		<div className='marquee'>
			<MarqueeInner />
		</div>
	)
}