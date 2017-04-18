HomeController.$inject = [];
<<<<<<< HEAD
// ^Keep array empty because we aren't pulling info from service
function HomeController() {
	const vm = this;
}

module.exports = HomeController;
=======

function HomeController() {

  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  const vm = this;

  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {

  }
}

module.exports = HomeController;
>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
