// component is just an object
let moviesController = require(__dirname + '/movies.controller.js');
let moviesTemplate = require(__dirname + '/movies.html');

let MoviesComponent = {
	// template is our view(HTML)
    template: moviesTemplate,
    controller: moviesController
};

angular
	.module('moviesApp')
	.component('movies', MoviesComponent);

