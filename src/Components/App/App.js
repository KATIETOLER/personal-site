import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Game from '../Game/Game'
import Nav from '../Nav/Nav'

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
					<Route path='/Game' element={<Game />} />
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
