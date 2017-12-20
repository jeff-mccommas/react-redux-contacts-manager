// This component handles the App template used on every page.
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactsPage from './contacts/ContactsPage'
import './App.css';
class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container-fluid">
					<Header
						loading={this.props.loading}
					/>
					
					<Route exact path="home" component={HomePage}/>
					<Route path="/contacts" component={ContactsPage}/>
					<Route path="/about" component={AboutPage}/>
				</div>
			</Router>
		);
	}
}

export default App;
