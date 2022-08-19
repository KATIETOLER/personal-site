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
					software and solving problems. My previous experience in healthcare
					and academia make me uniquely qualified to create a seamless user
					experience and solve problems efficiently. I have always loved solving
					puzzles and playing scrabble and continue to be wildly enthusiastic
					about learning tech on my journey as a burgeoning software developer.
				</p>
				<div className='hobbies'>
					In my spare time I love caring for my many plants and hanging with my
					sweet lil' pup{' '}
					<a
						href='https://www.instagram.com/dandelion_babydog/'
						alt='dandelions instagram link'
						id='dan'
						target='_blank'>
						Dandelion
					</a>
					. I am a huge fan of books, particularly of the horror and sci-fi
					variety. Let me know if you have any suggestions. I also enjoy cooking
					vegetarian food, praticing my baking, and painting or doing some kind
					of home craft. I love playing DnD or board games with friends with
					extra snacks.{' '}
				</div>
			</div>
		</div>
	)
}

export default AboutMe
