import './style.css'

export function Navbar () {
	return (
		<div className='navbar'>
			<div className='navbar-logo'>Grevt</div>

			<div className='navbar-items'>
				<span>Home</span>
				<span>Services</span>
				{/*<span>Blogs</span>*/}
				<span>About Us</span>
				<span>Contact Us</span>
			</div>

			<div className='navbar-btns'>
				<a href='#contact'> <button>Let's Talk</button> </a>
			</div>

		</div>
	)
}