/**
 *
 * Created by jmccommas on 12/19/17 7:18 AM*/
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	const activeStyle = { color: 'blue' };
	return (
		<nav>
			<NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
			{" | "}
			<NavLink to="/contacts" activeStyle={activeStyle}>Contacts</NavLink>
			{" | "}
			<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
			{loading && <LoadingDots interval={100} dots={20}/>}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;