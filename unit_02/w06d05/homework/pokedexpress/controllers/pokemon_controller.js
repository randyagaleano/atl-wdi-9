
var express     = require('express');
var router      = express.Router();
var pokeData    = require('../models/poke_array.js');
// ^^^sets array as variable for later use.

router.get('/', function(req, res) {
  res.render('index.hbs', {
    pokemon: pokeData
  })
});


router.get('/new', function (req, res) {
	res.render('new');
});

router.post('/', function (req, res) {
	pokeData.push({
		name: req.body.name,
		id: req.body.id,
		type: req.body.type,
	});
	res.redirect('/pokemon')
});


router.get('/:id', function(req, res) {
	var pokemon = pokeData[req.params.id];

	res.render('show', {
		name: pokemon.name,
		id: pokemon.id,
		type: pokemon.type,
		img: pokemon.img,
		stats: pokemon.stats,
		// add link to moves where user can see complete moveset
	});
});








module.exports = router;


