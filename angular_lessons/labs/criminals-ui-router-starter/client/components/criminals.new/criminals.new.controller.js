<<<<<<< HEAD
CriminalsNew.$inject = [];

function CriminalsNew() {
	const vm = this;

	

}

module.exports = CriminalsNew;
=======
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
}

module.exports = CriminalsNewController;
>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
