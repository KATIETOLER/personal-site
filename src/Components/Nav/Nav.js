import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav() {
	let navigate = useNavigate()
	return (
		<div className='nav-bar'>
			<button className='nav-btns' onClick={() => navigate('/')}>
				Home
			</button>
			<button className='nav-btns' onClick={() => navigate('/AboutMe')}>
				About Me
			</button>
			<button className='nav-btns' onClick={() => navigate('/Contact')}>
				Contact Me
			</button>
			<button className='nav-btns' onClick={() => navigate('/Portfolio')}>
				Portfolio
			</button>
			<button className='nav-btns' onClick={() => navigate('/Resume')}>
				Resume
			</button>
			<button className='nav-btns' onClick={() => navigate('/Blog')}>
				Blog
			</button>
		</div>
	)
}

export default Nav
