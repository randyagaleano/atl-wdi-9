// component is just an object
let reviewsController = require(__dirname + '/reviews.controller.js');
let reviewsTemplate = require(__dirname + '/reviews.html');

let ReviewsComponent = {
	// template is our view(HTML)
    template: reviewsTemplate,
    controller: reviewsController
};

angular.module('moviesApp').component('reviews', ReviewsComponent);

