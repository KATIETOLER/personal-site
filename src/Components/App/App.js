import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
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
				<Nav />
				<Header />
			</div>
		)
	}
}

export default App
