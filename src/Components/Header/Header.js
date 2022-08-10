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
			<div className='img-container'>
				<img
					id='icon'
					src='https://64.media.tumblr.com/a67ddc041cb53540ed9b9268800014e1/tumblr_oeg8nuJftA1tez4xgo1_1280.jpg'
					alt='katie toler'></img>
			</div>
		</div>
	)
}

export default Header
