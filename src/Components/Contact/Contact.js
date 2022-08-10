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
					<img
						src='https://64.media.tumblr.com/408ba1ffa2ecba9ff50a7ac291ff7941/tumblr_notm9g0gNN1tez4xgo1_1280.jpg'
						alt='oriol bird'
						id='oriol'
					/>
				</div>
				<div className='contact-box'>
					<h2>Contact Me</h2>
					<em>
						{' '}
						<p>Katie Toler</p>
					</em>
					<p className='FEE'>Front End Software Engineer</p>
					<p>
						<strong>Phone: </strong>303-868-8423
					</p>
					<p>
						<strong>Email: </strong> Katie.Toler3@gmail.com
					</p>
					<p>
						<strong>GitHub: </strong>
						<a href='https://github.com/KATIETOLER'>
							https://github.com/KATIETOLER
						</a>
					</p>
					<p>
						<strong> LinkedIn: </strong>
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
