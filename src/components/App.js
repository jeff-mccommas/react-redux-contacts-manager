// This component handles the App template used on every page.
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './common/header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactsPage from './contacts/ContactsPage'

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header
					loading={this.props.loading}
				/>
				
				<Route exact path="home" component={HomePage}/>
				<Route path="/contacts" component={ContactsPage}/>
				<Route path="/about" component={AboutPage}/>
			</div>
		);
	}
}
