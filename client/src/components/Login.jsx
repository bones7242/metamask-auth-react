// load dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import components 
import MetamaskLogin from './MetamaskLogin.jsx';
import MetamaskLogout from './MetamaskLogout.jsx';

// load helpers
import Cookies from '../../helpers/cookies.js'

class Login extends Component {

	render() {
		return (
			<div>
				<MetamaskLogin />
				<MetamaskLogout />
			</div>
		)
	}
}

export default Login;