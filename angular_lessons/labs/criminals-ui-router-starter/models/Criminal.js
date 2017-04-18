var mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
<<<<<<< HEAD
  	crime: String
=======
  crime: String,

>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
});

module.exports = mongoose.model('Criminal', CriminalSchema);
