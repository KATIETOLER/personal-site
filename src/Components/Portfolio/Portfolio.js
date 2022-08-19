import React from 'react'
import Nav from '../Nav/Nav'
import './Portfolio.css'
import Project from '../Project/Project'
import psi from '../../PSI.png'
import fp from '../../FP.png'
const Portfolio = () => {
	return (
		<div>
			<Nav />
			<div className='portfolio-container'>
				{/* <h1 id='port'>Portfolio</h1> */}

				<Project
					title='Personal Space Invader'
					img={psi}
					description='Personal Space Invader is totally different from the "gigapets" of yore. These space monsters want to be your friend! Choose from a curated selection of monsters and name your own! Just be careful not to overfeed them... bad things can happen.

This was a showcase project for Turing School of Software & Design. It was created within 5 days to demonstrate knowledge of React, Router, Asynchronous JavaScript as well as E2E testing with Cypress.'
					deploy='https://personal-space-invader27.surge.sh/'
					github='https://github.com/KATIETOLER/personal-space-invader'
				/>

				<Project
					title='Plant Connect'
					img='https://user-images.githubusercontent.com/92649050/170574731-d423230a-d1c4-49be-adea-22510a3afca4.gif'
					description='What if you had an easy way to swap plants and clippings with your friends? Planty Swapper is a fun and useful mobile service that connects plant lovers. Expand your collection and keep heirloom plant varietals from endangerment and extinction with Planty Swapper today!
					We created this app for many different reasons. Through our work we were able to sucessfully work with the back-end as a team to build an application quickly and completely from scratch. We learned and gained a new understanding of the backend engineers capabilities and best way to work with each other as a larger group. We also self-taught React Native in two weeks.'
					github='https://github.com/Plant-Connect'
				/>

				<Project
					title='Fowl Prowl'
					img={fp}
					description='Fowl Prowl is a modern birding app that allows users to view multiple species of birds, get to know a featured "Bird of the Day" and add their favorite birds to their Lifers list! This project was given to us as a challenge to stretch our knowledge and self-teach a new technology. We chose to study back-end technologies and create an entire database and API, which has been deployed to Heroku for easier access. All of the data connected to this application was built by our team from the ground up.'
					deploy='https://fowl-prowl-turing.surge.sh/'
					github='https://github.com/AliNooner/fowl-prowl-app'
				/>
			</div>
		</div>
	)
}

export default Portfolio
