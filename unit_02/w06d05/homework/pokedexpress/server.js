var express = require('express');
var app = express();
var hbs = require('hbs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded ({
	extended: true
}));
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 4000;







var pokemonController = require(__dirname + '/controllers/pokemon_controller.js');
app.use('/pokemon', pokemonController);










 

app.listen(port, function () {
	console.log('andre ' + port + ' is ready.');
});