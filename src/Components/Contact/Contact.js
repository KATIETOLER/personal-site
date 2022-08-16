import React from 'react'
import './Contact.css'
import Nav from '../Nav/Nav'
import gh from '../../GH-icon.png'
import li from '../../LI-icon.png'

function Contact() {
	return (
		<div className='contact-header'>
			<Nav />
			<div className='page-box'>
				<div className='image-box'>
					<img
						src='https://64.media.tumblr.com/ee5d1dc7db44168a8cc7696c33e72f6f/tumblr_ohbzxtSMDh1tez4xgo1_1280.jpg'
						alt='hair in the wind'
						id='hair'
					/>
				</div>
				<div className='contact-box'>
					<h2 className='contact-me'>Contact Me</h2>

					<p>Katie Toler</p>

					<p className='FEE'>Front End Software Engineer</p>
					<p>Phone: 303-868-8423</p>
					<p>Email: Katie.Toler3@gmail.com</p>
					<div className='icon-container'>
						<a href='https://github.com/KATIETOLER' target='_blank'>
							<img src={gh} alt='GitHub link' id='ghIcon' />
						</a>
						<a href='www.LinkedIn.com/in/katie--toler'>
							<img src={li} alt='LinkedIn link' id='liIcon' />
						</a>{' '}
						<a
							href='https://terminal.turing.edu/profiles/1338'
							alt='Turing School Link'>
							<img
								src='https://global-uploads.webflow.com/6181549f60a2245732e2f91b/6193f9ff1e2ea00183765ef1_turing-logo-gray.png'
								id='tIcon'></img>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
