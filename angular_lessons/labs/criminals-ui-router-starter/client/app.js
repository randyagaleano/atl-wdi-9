const angular = require('angular');
require('angular-ui-router');
// ^Does not need to be set to variable

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup)

// BOILER PLATE .state('home')
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: <about></about>
			template: '<about></about>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		})
		.state('criminalsNew', {
			url: '/criminalsNew',
			template: '<criminals-new></criminals-new>'
		});
		
		
	$urlRouterProvider.otherwise('/');
}





