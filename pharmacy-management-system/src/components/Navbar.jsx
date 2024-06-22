import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css' // Import the CSS file

const Navbar = () => {
	const [servicesOpen, setServicesOpen] = useState(false)

	const toggleServices = () => {
		setServicesOpen(!servicesOpen)
	}

	return (
		<nav className='navbar'>
			<ul className='navbar-list'>
				<li className='navbar-item'>
					<Link to='/' className='navbar-link'>
						Home
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/about' className='navbar-link'>
						About
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/contact' className='navbar-link'>
						Contact
					</Link>
				</li>
				<li
					className='navbar-item'
					onMouseEnter={toggleServices}
					onMouseLeave={toggleServices}
				>
					<Link to='#' className='navbar-link'>
						Services
					</Link>
					{servicesOpen && (
						<ul className='dropdown'>
							<li className='dropdown-item'>
								<Link to='/prescriptions' className='navbar-link'>
									Prescriptions
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/pharmacists' className='navbar-link'>
									Pharmacists
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/prescripts' className='navbar-link'>
									Prescripts
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/admins' className='navbar-link'>
									Admins
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/cashiers' className='navbar-link'>
									Cashiers
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/managers' className='navbar-link'>
									Managers
								</Link>
							</li>
							<li className='dropdown-item'>
								<Link to='/stocks' className='navbar-link'>
									Stocks
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li className='navbar-item'>
					<Link to='/login' className='navbar-link'>
						Login
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/signup' className='navbar-link'>
						Sign Up
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/logout' className='navbar-link'>
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
