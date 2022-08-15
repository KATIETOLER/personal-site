import React from 'react'
import './Contact.css'
import Nav from '../Nav/Nav'

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
					<p>
						GitHub:{'  '}
						<a href='https://github.com/KATIETOLER'>
							https://github.com/KATIETOLER
						</a>
					</p>
					<p>
						LinkedIn:{'  '}
						<a href='www.LinkedIn.com/in/katie--toler'>
							www.LinkedIn.com/in/katie--toler
						</a>{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Contact
