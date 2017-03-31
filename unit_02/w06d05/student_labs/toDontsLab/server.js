var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
	res.send('hello')
});


var toDontsController = require('./controllers/toDonts_controller.js');
app.use('/toDont', toDontsController);









// PORT
var port        = process.env.PORT || 3001;
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});

