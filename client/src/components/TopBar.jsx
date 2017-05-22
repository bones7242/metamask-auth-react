import React from 'react';
import PropTypes from 'prop-types'
// import components
import AppBar from 'material-ui/AppBar';
import Login from './Login.jsx';

const TopBar = () => (
	<AppBar
		title="Metamask Auth Test"
		showMenuIconButton={false}
		iconElementRight={<Login />}
	/>
);

export default TopBar;