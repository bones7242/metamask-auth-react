# metamask-auth (react)
a basic react website that uses metamask to authorize users via a signed message signed client-side and sent to the server

### What is this repository for? ###

* Quick summary: the purpose of this repo is to create a generic react.js application that uses metamask for authentication.
* Version: 0.0.1

### How do I get set up? ###

* clone this repository
* run `npm install`
* start `testrpc` (check [here](https://github.com/ethereumjs/testrpc) for information on testrpc).
* in one terminal run `npm start` (to use strict mode) or `nodemon server.js` (to run without strict mode).
* in another run `npm run bundle`
* visit [localhost 3000](http://localhost:3000)
* log in to metamask 

### How do I use the app? ###
* run metamask
* use the app to log in with metamask (it will ask to you to sign a message, and store the signed message in your cookies)
* use the  buttons on the home page to test whether you have logged in correctly (it will send the signed message to the server for decoding and authorization)
