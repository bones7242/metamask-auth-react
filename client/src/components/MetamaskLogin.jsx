// load dependencies
import React from 'react';
import EthUtil from 'ethereumjs-util';
import PropTypes from 'prop-types';
// import components
import FlatButton from 'material-ui/FlatButton';
// load helpers
import Helpers from '../../helpers/cookies.js'

function signMessage(){
	var message = "testMessage";
	if (window.web3){
		var userEthereumClient = window.web3;
		// sign a message
		userEthereumClient.eth.sign(
			userEthereumClient.eth.coinbase,  // pass the user's public key
			window.web3.sha3(message),  // pass a sha hash of a message 
			function(error, data) {  // pass a callback
				if (error){
					console.log("An error occured while signing the message.");
				} else {
					Helpers.setCookie("signedAuthMessage", data, 2);
					if(Helpers.getCookie("signedAuthMessage")){
						console.log("You successfully stored the signed message.");
					} else {
						console.log("You did not successfully store the signed message.");
					};
				};
			});
	} else {
		console.log(">> You cannot sign the message because Web 3 is not loaded");
	};
}

const MetamaskLogin = () => (
	<FlatButton 
		label="Verify Your ID"
		onTouchTap={signMessage}
	/>
);

export default MetamaskLogin;