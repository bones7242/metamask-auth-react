// load dependencies
var Web3 = require('web3');
var EthUtil = require('ethereumjs-util');

// configure web 3
var endpoint = 'http://localhost:8545';  // this is the end point for testrpc
var web3 = new Web3(new Web3.providers.HttpProvider(endpoint)) ; 

// set message for decoding
var message = "testMessage";

// helper functions
function decodeMessage(signedAuthMessage){
	console.log(">> running decodeMessage");
	//console.log("signed auth message:", signedAuthMessage);
	var sigDecoded = EthUtil.fromRpcSig(signedAuthMessage);
	//console.log("sigDecoded:", sigDecoded);
	var messageHash = web3.sha3(message)
	//console.log("messageHash", messageHash);
	var messageHashx = new Buffer(messageHash.substring(2), 'hex');
	//console.log("messagehashx", messageHashx);
	var recoveredPub = EthUtil.ecrecover(messageHashx, sigDecoded.v, sigDecoded.r, sigDecoded.s);
	//console.log("recoveredPub:", recoveredPub);
	var recoveredAddress = EthUtil.pubToAddress(recoveredPub).toString("hex");
	//console.log("recoveredAddress:", recoveredAddress);
	// return the recovered Address
	return "0x" + recoveredAddress;
}

function checkLogin(providedAddress, recoveredAddress){
	console.log(">> running checkLogin");
	// Authentication Logic (Is user logged in?)
	if (providedAddress === recoveredAddress) {
		console.log ("Address is verified!");
		return true;
	} else {
		console.log("Address is not verified.")
		return false;
	};
}

function authenticateUser(providedAddress, signedAuthMessage){
	console.log(">> running authenticateUser");
	var recoveredAddress = decodeMessage(signedAuthMessage);
	return checkLogin(providedAddress, recoveredAddress);
}

// routes
module.exports = function(app){
	app.post("/login", function(req, res){
		console.log(">> POST request on /login.")
		console.log(">> req.body:", req.body);
		console.log(">> req.body.providedAddress:", req.body.providedAddress);
		console.log(">> req.body.signedAuthMessage:", req.body.signedAuthMessage);

		//res.send("request received");
		
		// authenticate the request
		var authenticated = authenticateUser(req.body.providedAddress, req.body.signedAuthMessage);
		// handle the request 
		if (authenticated){
			res.send("those credentials work!")
		} else {
			res.send("those credentials do not work.")
		};
		
	});

	app.post("/test", function(req, res){
		console.log(">> POST request on /test.")
		console.log(">> req.body:", req.body);
		var authPackage = JSON.parse(req.headers.authorization)
		console.log(">> req.headers.authorization:", authPackage);
		console.log(">> req.headers.authorization.publicAddress:", authPackage.publicAddress);
		console.log(">> req.headers.authorization.signedAuthMessage:", authPackage.signedAuthMessage);
		
		/* 
			@ req.header.authorization.publicAddress,
			@ req.header.authorization.signedAuthMessage
			@ req.body = "flash"
		*/
		//res.send("request received");
		
		// authenticate the request 
		var authenticated = authenticateUser(authPackage.publicAddress, authPackage.signedAuthMessage);
		// handle the request
		if (authenticated){
			if (req.body.message === "flash"){
				res.send("thunder")
			} else {
				res.send("huh?")
			};
		} else {
			res.send("those credentials do not work.")
		};
		
	});
}