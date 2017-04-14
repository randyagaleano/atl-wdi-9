const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', component);

// THIS STRUCTURE FOR EVERY COMPONENT
// const controller = require('./BOILERPLATE.controller.js');
// const template = require('./BOILERPLATE.html');

// const CriminalsComponent = {
// 	controller: controller,
// 	template: template
// };

// angular
// 	.module('criminals')
// 	.component('BOILERPLATE', CriminalsComponent);
