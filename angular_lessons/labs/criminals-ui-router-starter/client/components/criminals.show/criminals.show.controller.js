CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);
<<<<<<< HEAD
		
=======

>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
<<<<<<< HEAD

}

module.exports = CriminalsShowController;
=======
}

module.exports = CriminalsShowController;
>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
