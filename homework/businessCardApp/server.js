var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


// ROUTER SHIT | SERVICE
var businessCardsRoutes = require(__dirname + '/server/routes/businessCardsRoutes.js');
app.use('/cards', businessCardsRoutes);


app.listen(process.env.PORT || 3000, function () {
	console.log("Criminals app listening on port 3000");
});

