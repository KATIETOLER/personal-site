import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Blog from '../Blog/Blog'
import Nav from '../Nav/Nav'
import Contact from '../Contact/Contact'

class App extends Component {
	constructor() {
		super()
		this.state = {
			ideas: '',
		}
	}
	render() {
		return (
			<div className='App'>
				<Routes>
					<Route path='/AboutMe' element={<AboutMe />} />
					<Route path='/Portfolio' element={<Portfolio />} />
					<Route path='/Resume' element={<Resume />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Blog' element={<Blog />} />
					<Route
						path='/'
						element={
							<div className='App'>
								<Nav />
								<Header />
							</div>
						}
					/>
					{/* <Route path='/error' element={<Error error={error} />} /> */}
				</Routes>
			</div>
		)
	}
}

export default App
