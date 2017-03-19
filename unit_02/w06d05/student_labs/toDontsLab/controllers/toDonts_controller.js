var express = require('express');
var router = express.Router();
var dataArray = require('../data.js');


router.get('/', function(req, res) {
	res.render('index', {
		data: dataArray.seededToDonts
	});
});

// 'NEW' FORM
router.get('/new', function (req, res) {
	res.render('new');
});
// SUBMITS FORM
router.post('/', function(req, res) {
	var newToDont = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	dataArray.seededToDonts.push(newToDont);
	res.redirect('/todont')
})
// SHOWS LIST ID
router.get('/:id', function (req, res) {
	var todontID = dataArray.seededToDonts[req.params.id];
	res.render('show', {
		todont: todontID
	});
});





module.exports = router;