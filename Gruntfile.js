module.exports = function(grunt) {
	'use strict';

	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt);

	configs.pkg = grunt.file.readJSON('package.json');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig(configs);

	grunt.registerTask('test', ['jscs', 'karma:unit']);
	grunt.registerTask('build', ['concat', 'uglify']);

	grunt.registerTask('default', ['clean', 'test', 'build', 'ngdocs', 'copy:icons']);
	grunt.registerTask('dev', ['default', 'connect', 'watch']);
};