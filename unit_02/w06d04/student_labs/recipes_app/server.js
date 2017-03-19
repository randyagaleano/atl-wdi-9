var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

// app.set('views', './views');
// app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.send('hey');
});

var recipe = require('./recipes.js')
app.get('/recipes', function(req, res) {
	    res.render('recipes/index', {
        data: recipe.seededRecipes
    });
});


var newRecipe = require('./views/recipes/new.hbs')
app.get('/new', function(req, res) {
	res.render('recipes/new', {
		data: newRecipe
	});
});











var port = process.env.PORT || 3001;
var server = app.listen(port, function () {
	console.log('Express server is listening on port ' + port);
});

