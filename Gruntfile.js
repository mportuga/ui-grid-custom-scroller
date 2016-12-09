module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jscs: require('./grunt/jscs'),
		concat: require('./grunt/concat'),
		uglify: require('./grunt/uglify')
	});

	grunt.registerTask('build', ['concat', 'uglify']);
	grunt.registerTask('test', ['jscs', 'build']);

	grunt.registerTask('default', ['test', 'build']);
};