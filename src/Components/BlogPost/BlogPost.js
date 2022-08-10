import React from 'react'
import './BlogPost.css'
import { useNavigate } from 'react-router-dom'

const BlogPost = () => {
	return (
		<div className='BlogPost-container'>
			<div className='post-container'></div>
			<h1 className='post-title'>Design in Tech: Why it matters</h1>
			<hr></hr>
			<p>
				{/* <p>
					“Like all people, we perceive the version of reality that our culture
					communicates. Like others having or living in more than one culture,
					we get multiple, often opposing messages. The coming together of two
					self-consistent but habitually incomparable frames of reference causes
					un choque, a cultural collision.”
				</p>
				<p>
					<strong>
						― Gloria E. Anzaldúa, Borderlands/La Frontera: The New Mestiza
					</strong>
				</p> */}

				<div id='img-container'>
					<img
						src='https://64.media.tumblr.com/c21487e78637fa711fc4176a80ab74e6/tumblr_oewg8zJ9Ui1tez4xgo2_r1_1280.jpg'
						alt='hair in the wind'
						className='blog-imgs'
					/>
				</div>
			</p>
			<h1 className='post-title'>Finding Hope in the Tech Community</h1>
			<hr></hr>
			<p>
				{/* <p>
					“The here and now is a prison house. We must strive, in the face of
					the here and now’s totalising rendering of reality, to think and feel
					a then and there. Some will say that all we have are the pleasures of
					this moment, but we must never settle for that minimal transport; we
					must dream and enact new and better pleasures, other ways of being in
					the world, and ultimately new worlds.”
				</p>
				<p>
					<strong>
						― José Esteban Muñoz, Cruising Utopia: The Then and There of Queer
						Futurity
					</strong>
				</p> */}

				<div id='img-container'>
					<img
						src='https://64.media.tumblr.com/b127bb7337d6a30e1347005ea86ebe25/tumblr_ognvoeca6p1tez4xgo1_1280.jpg'
						alt='woman with pink hair'
						className='blog-imgs'
					/>
				</div>
			</p>
			<h1 className='post-title'>Utilizing Archives... Queering Data</h1>
			<hr></hr>
			<p>
				{/* <p>
					“The idea of an archive has gone beyond a repository or storage of
					information and // documents or a legitimizing instrument of power
					structures and prevailing authori- // ties. In recent years, feminist
					scholars have suggested that the archive is a space // for dwelling
					and a quotidian site for marginalized subjects as well as gendered //
					and erotically charged energies, meanings, and other bodily
					processes.”
				</p>
				<p>
					<strong>
						― Martin F. Manalansan IV, 'The “Stuff” of Archives: Mess,
						Migration, and Queer Lives Futurity'
					</strong>
				</p> */}

				<div id='img-container'>
					<img
						src='https://64.media.tumblr.com/47b05aad5c26d4e8e732c7101612a3a7/tumblr_oeylnqKZT01tez4xgo1_1280.jpg'
						className='blog-imgs'
					/>
				</div>
			</p>
		</div>
	)
}

export default BlogPost
