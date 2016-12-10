module.exports = {
	options: {
		banner: '/*! \n * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
		' * <%= pkg.repository.url %>\n' +
		' * Copyright (c) <%= grunt.template.today("yyyy") %> ; License: <%= pkg.license %>\n */\n' +
		'(function() {\n \'use strict\';\n\n',
		footer: '})();\n'
	},
	dist: {
		src: [
			'src/<%= pkg.name %>.module.js',
			'src/<%= pkg.name %>.constants.js',
			'src/<%= pkg.name %>.factory.js',
			'src/<%= pkg.name %>.directive.js'
		],
		dest: 'dist/<%= pkg.name %>.js'
	}
};