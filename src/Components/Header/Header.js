import React from 'react'
import './Header.css'
import arrow from '../../arrow.png'
function Header() {
	return (
		<div className='App-header'>
			<div className='name-container'>
				<div className='my-name'>Katie Toler</div>
				<div className='icon-container'>
					<img src={arrow} alt='arrow' id='arrow' />
				</div>
				<div className='sub-heading'>Front End Software Engineer</div>
			</div>
			<img
				id='icon'
				src='https://images.unsplash.com/photo-1485841938031-1bf81239b815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80'
				alt='katie toler'></img>
		</div>
	)
}

export default Header
