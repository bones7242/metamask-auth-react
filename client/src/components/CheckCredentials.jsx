import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import EthUtil from 'ethereumjs-util';
import Helpers from '../../helpers/cookies.js'

function sendValidationPackage(){
	// get the address for the account
	var providedAddress = window.web3.eth.coinbase;
	if (!providedAddress){
		alert("We attempted to get your eth public address from your browser but it did not exist.  This is likely because web3 is not being injected into the page by your browser.  Please make sure you are using metamask or another web3 injector and then try again");
		return;
	};
	// get the signed message
	var signedAuthMessage = Helpers.getCookie("signedAuthMessage");
	if (!signedAuthMessage){
		alert("We attempted to get the signedAuthMessage from the cookies in your browser but it did not exist.  Please log in with metamask and sign the auth message then try again");
		return;
	};
	// send to the server
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/login", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.addEventListener("load", function(){
		if (xhr.status === 200){
			console.log("status 200.  success!")
			console.log("response:", xhr.response);
		} else {
			console.log("status not 200.  failure.")
			console.log("response:", xhr.response);
		}
	});
	xhr.send(JSON.stringify({
		providedAddress: providedAddress,
		signedAuthMessage: signedAuthMessage
	}));

}

const CheckCredentials = () => (
	<FlatButton 
		label="check credentials"
		onTouchTap={sendValidationPackage}
	/>
);

export default CheckCredentials;