function businessCardsController(BusinessCardsService) {

	var vm = this;
		
	BusinessCardsService.getCards()
		.then(function(response) {
			vm.businessCards = response.data.cards;
		});
}

businessCardsController.$inject = ['BusinessCardsService']

module.exports = businessCardsController;