angular
	.module('businessCardsApp')
	.service('BusinessCardsService', BusinessCardsService);

function BusinessCardsService($http) {
	var self = this;

	self.getCards = function () {
		return $http.get('/cards')
	}

};

BusinessCardsService.$inject = ['$http'];