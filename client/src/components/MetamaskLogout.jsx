// load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// import components
import FlatButton from 'material-ui/FlatButton';

// load helpers
import Cookies from '../../helpers/cookies.js'

function signOut(){
	if(confirm("Are you sure you would like to deauthorize your browser?")){
		Cookies.removeCookie("signedAuthMessage");
	} else {
		// do nothing.
	}
}

const MetamaskLogout = () => (
	<FlatButton
		label="De-authorize browser"
		onTouchTap={signOut}
	/>
);

export default MetamaskLogout;