<<<<<<< HEAD
const  controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
	controller: controller,
	template: template
}

angular
	.module('criminals')
	.component('criminalsShow', component);
=======
const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('criminalsShow', component);
>>>>>>> 8bd31f8bc7c769d0e1807ddaa29f2174b8f89ffc
