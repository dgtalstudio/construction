'use strict';

define('config', () => {
	requirejs.config({
		baseUrl: 'js/lib',
		paths: {
			app: '../app',
			component: '../component',
			data: '../data',
			templates: '../templates'
		}
	});
});
