var express = require('express');
router = express.Router();

var cardSeeds = [
	{
		_id: 221421412442,
		cardName: 'pookie',
		cardAddress: 'Charles House'
	},
	{
		_id: 231431414114,
		cardName: 'Shadow DOM',
		cardAddress: 'Here'
	},
	{
		_id: 243532541353,
		cardName: 'Ryan Charles',
		cardAddress: 'Atlanta'
	},

];

router.get('/', function(req, res) {
	res.json({cards: cardSeeds})
});

module.exports = router;

