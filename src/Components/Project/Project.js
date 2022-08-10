import Nav from '../Nav/Nav'
import React from 'react'
import './Project.css'

const Project = ({ title, img, description, id, deploy, github }) => {
	return (
		<div className='project-container' id={id}>
			<p className='project-title'>
				<a
					href={deploy || github}
					id='externalLink'
					target='_blank'
					rel='noreferrer noopener'>
					{title}
				</a>
			</p>
			<img src={img} alt={title} className='project-img' />
			<p className='project-description'>{description}</p>
		</div>
	)
}

export default Project
