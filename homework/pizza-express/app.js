var express = require('express');
var app = express ();
var port = 3001;
var hbs = require ('hbs');
app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
// 	res.send(`Welcome to Pizza Express!`)
// 	res.render()
// });

app.get('/', function(req, res) {
	var message = "Welcome to Pizza Express!";
	res.render('layout', {
		data: message
	});
});


var toppingsController = require(__dirname + '/controllers/toppings_controller.js');
	app.use('/topping', toppingsController);

var orderController = require(__dirname + '/controllers/order_controller.js');
	app.use('/order', orderController);

app.get('/:pizza', function(req, res) {
	res.status(404).send('<h1>ERROR 404</h1>');
});



app.listen(port, function() {
	console.log("===========================")
	console.log("listening on port" + port);
	console.log("===========================")
});
