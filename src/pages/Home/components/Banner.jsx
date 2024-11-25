import '../style.css'
import '../style.mobile.css'

function BannerCnt () {
	return (
		<div className='banner-cnt'>
			<div> <div className='line' />  Award Winning Digital Agency</div>

			<div>
				<div>Where Innovation Meets <br/> <span className='green'>Digital Excellence</span> </div>
				<div>
					<div className='green-circle' />
					<div className='transparent-circle'></div>
				</div>
			</div>
		</div>
	)
}


function Skills ({ skill }) {
	return (
		<div className='skill'>
			{skill}
		</div>
	)
}

function BannerSkillList () {
	return (
		<div className='banner-skill-list'>
			<div>
				<Skills skill='Mobile Application Development'/>
				<Skills skill='Website Development'/>
				<Skills skill='UX/UI Design'/>
				<Skills skill='Graphic Design'/>
				<Skills skill='Digital Marketing'/>
			</div>

			<div />

			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Vorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. </div>
		</div>
	)
}


function BannerBtmCnt ({top, btm}) {
	return (
		<div className='banner-img-cnt-card'>
			<span>{top}</span>
			<span>{btm}</span>
		</div>
	)
}

function BannerBtm () {
	return (
		<div className='banner-btm'>
			<div className='banner-img'>
				{/*<img />*/}
				<div className='banner-img-info'>
					<div className='banner-img-info-inner'>
						<div>
							<div />
							<div />
							<div />
							<div>+</div>
						</div>


						<div>
							<span>4.9 Star</span>
							<span>Review</span>
						</div>
					</div>
				</div>
			</div>

			<div className='banner-img-cnt'>
				<BannerBtmCnt top='120+' btm='Projects Completed' />
				<BannerBtmCnt top='4+' btm='Years of Experience' />
				<BannerBtmCnt top='300+' btm='Happy Customers' />
			</div>
		</div>
	)
}

export function Banner () {
	return (
		<div className='banner'>
			<BannerCnt />
			<BannerSkillList />
			<BannerBtm />
		</div>
	)
}