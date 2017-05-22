const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;
// configure epress
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// include routes
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// server-side routes
require('./server/routes/html-routes')(app);
require('./server/routes/api-routes')(app);

// server-side route that directs http routes back to the react app.
app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/server/static/index.html')
})

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT)
})