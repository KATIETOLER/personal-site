import React from 'react'
import './AboutMe.css'
import Nav from '../Nav/Nav'

const AboutMe = () => {
	return (
		<div>
			<Nav />
			<div className='aboutme-container'>
				<h1>About Me</h1>
				<p>
					I am a passionate Front End Developer who enjoys creating beautiful
					software and solving problems. My previous experience makes me
					uniquely qualified to create a seamless user experience and solve
					problems efficiently. I love solving puzzles and continue to be wildly
					enthusiastic about learning new things.
				</p>
			</div>
		</div>
	)
}

export default AboutMe
