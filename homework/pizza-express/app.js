//uses express
var express = require('express');
//save express module as app
var app = express ();
var port = 3000;

app.listen(port, function() {
	console.log("===========================")
	console.log("listening on port" + port);
	console.log("===========================")
});


