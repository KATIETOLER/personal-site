import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import Nav from '../Nav/Nav'
import './Blog.css'

const Blog = () => {
	return (
		<div className='blog-background'>
			<Nav />
			<div className='blog-container'>
				<h1 id='post-title'>Posts</h1>
				<hr id='hrTitle' />
				<BlogPost />
			</div>
		</div>
	)
}

export default Blog
