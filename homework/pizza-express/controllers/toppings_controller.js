var express = require('express');
var router = express.Router();

router.get("/:type", function(req, res) {
	// res.send(`${req.params.type} pizza! Good choice!`)
	res.render("topping", {
		topping: req.params.type
	});
});

module.exports = router;