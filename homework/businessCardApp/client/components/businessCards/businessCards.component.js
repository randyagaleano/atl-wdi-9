var businessCardsController = require(__dirname + '/businessCards.controller.js');
var businessCardsTemplate = require(__dirname + '/businessCards.html');

var BusinessCardsComponent = {
	template: businessCardsTemplate,
	controller: businessCardsController
}

angular
	.module('businessCardsApp')
	.component('cards', BusinessCardsComponent);