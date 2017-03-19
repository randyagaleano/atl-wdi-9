var express = require("express");
var router = express.Router();


var piratesArray = require('../models/pirates.js');

router.get('/', function (req, res) {
	res.render('index', {
		pirates: piratesArray
	});
	// ^^^Looks FOR view/INDEX and renders PIRATES into it
});
 


module.exports = router;