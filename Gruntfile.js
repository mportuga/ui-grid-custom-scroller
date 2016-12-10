module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jscs: require('./grunt/jscs'),
		karma: require('./grunt/karma'),
		concat: require('./grunt/concat'),
		uglify: require('./grunt/uglify'),
		ngdocs: require('./grunt/ngdocs')
	});

	grunt.registerTask('test', ['jscs', 'karma:unit']);
	grunt.registerTask('build', ['concat', 'uglify']);

	grunt.registerTask('default', ['test', 'build', 'ngdocs']);
};