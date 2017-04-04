angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];// Inject dependencies


function PresidentsController($http){
  var vm = this; //Add variable similarities across your app.

  vm.addPresident = addPresident; // addPresidents function
  vm.all = []; // list all variables.
  vm.deletePresident = deletePresident;
  vm.loadingAll = true;
  vm.newPresident = {};

  vm.all = [
    {name: 'George Washington', start: 1789, end: 1797 },
    {name: 'John Adams', start: 1797, end: 1801 },
    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
    {name: 'James Madison', start: 1809, end: 1817 },
    {name: 'Joshua Quincy Kushner', start: 2021, end: 2029 },
  ];

  activate(); // Need to activate presidents.

  function activate() { // Need to activate presidents.
    loadAllPresidents();

  }

// TODO: Add Presidents#create connection
  function addPresident(){

    $http // posting the new president to the server.
      .post('/presidents', vm.newPresident)
      .then(function someName(response){
        vm.all.push(response.data.president);
        vm.newPresident = {};
      })

  }

  function deletePresident(president) {
  	$http
  		.delete('/presidents/' + president._id)
  		.then (function resolve(response) {

  			vm.all.filter(function(currentlyIteratedPresident) {
  				return president._id !== currentlyIteratedPresident._id;
  			});
  		})
  }

  function loadAllPresidents() {
    $http
      .get('/presidents')// Get the presidents page.
      .then(function handleSuccess(response) { // handleSuccess is just a name
        console.log(response);
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      }, function handleError(err){
        vm.loadingAll = false;

      });
  };
};