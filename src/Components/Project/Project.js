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
					className='titles'
					rel='noreferrer noopener'>
					{title}
				</a>
			</p>
			<div className='project-info-container'>
				<img src={img} alt={title} className='project-img' />
				<div className='description-links-container'>
					<p className='project-description'>{description}</p>
					<div className='links-container'>
						<a href={github} target='_blank'>
							Github
						</a>
						{deploy && (
							<a href={deploy} target='_blank'>
								{' '}
								| Deploy
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
