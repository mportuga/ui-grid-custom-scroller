var grunt = require('grunt');

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// frameworks to use
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		// note that the karmangular setup from util.createKarmangularConfig seems
		// to take precedence over this, but we can't remove this because then
		// the karmangular task doesn't appear to run.  So includes the features/**/test, but
		// they don't get run if you've used the --fast or --core options
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/angular-ui-grid/ui-grid.js',

			// the code
			'src/**/*.module.js',
			'src/**/*.constants.js',
			'src/**/*.factory.js',
			'src/**/*.directive.js',

			// the tests
			'tests/Specs/**/*.spec.js'
		],

		// list of files to exclude
		exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'spec'
		reporters: ['spec', 'coverage'],

		preprocessors: {
			'src/**/*.js': ['coverage']
		},

		// optionally, configure the reporter
		coverageReporter: {
			reporters: [
				{type: 'html', dir: 'coverage/'},
				{type: 'cobertura'}
			]
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 2,
		browserNoActivityTimeout: 45000 // 20000,
	});
};
