import React from 'react'
import './Nav.css'

function Nav() {
	return (
		<div className='nav-bar'>
			<p className="nav-btns" id="aboutMe">About Me</p>
			<p className="nav-btns" id="portfolio">Portfolio</p>
			<p className="nav-btns" id="resume">Resume</p>
			<p className="nav-btns" id="game">Play a Game</p>
		</div>
	)
}

export default Nav
