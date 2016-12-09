module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: require('./grunt/concat')(),
		uglify: require('./grunt/uglify')()
	});

	grunt.registerTask('default', ['concat', 'uglify']);
};