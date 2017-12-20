/**
 *
 * Created by jmccommas on 12/19/17 7:18 AM*/
import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	const activeStyle = { color: 'blue' };
	return (
		<Nav>
			<NavItem>
				<NavLink href="/" activeStyle={activeStyle} exact>Home</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/contacts" activeStyle={activeStyle}>Contacts</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/about" activeStyle={activeStyle}>About</NavLink>
			</NavItem>
			{loading && <LoadingDots interval={100} dots={20}/>}
		</Nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;