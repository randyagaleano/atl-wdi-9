const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', component);
<<<<<<< HEAD

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
=======
>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
