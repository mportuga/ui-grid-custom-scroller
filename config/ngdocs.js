module.exports = {
	options: {
		dest: './docs',
		scripts: [
			'./node_modules/angular/angular.js',
			'./node_modules/angular-animate/angular-animate.min.js',
			'./node_modules/angular-touch/angular-touch.min.js',
			'./node_modules/angular-ui-grid/ui-grid.min.js',
			'./dist/ui-grid-custom-scroller.min.js'
		],
		styles: [
			'https://bootswatch.com/2/cerulean/bootstrap.min.css',
			'./node_modules/angular-ui-grid/ui-grid.min.css'
		],
		html5Mode: true,
		title: 'UI-Grid Custom Scroller',
		inlinePartials: true,
		bestMatch: true
	},
	api: {
		src: [
			'./dist/ui-grid-custom-scroller.js'
		],
		title: 'API'
	}
};
