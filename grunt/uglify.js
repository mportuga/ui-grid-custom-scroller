module.exports = function() {
	'use strict';

	return {
		options: {
			banner: '/*! \n * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' * <%= pkg.repository.url %>\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> ; License: <%= pkg.license %>\n */\n'
		},
		dist: {
			src: 'dist/<%= pkg.name %>.js',
			dest: 'dist/<%= pkg.name %>.min.js'
		}
	};
};