var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err) {
	console.log(err);
});

db.once('open', function() {
	console.log('database hs been connected!');
});

db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema ({
	name: String,
	age: Number, 
	projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var project1 = new ProjectModel({title: "Connect 4", unit: "js"})

// frankie.projects.push(project1);

// frankie.save(function(err, student) {
// 	if (err) {
// 		console.log(err);
// 	}
// 		console.log(student);
// });

module.exports = {
	StudentModel: StudentModel,
	ProjectModel: ProjectModel
};












// To start/stop...
// brew services start mongo
// brew services stop mongo