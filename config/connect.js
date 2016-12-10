module.exports = {
  dev: {
    options: {
      hostname: '*',
      port: process.env.DOCS_PORT || 9003,
      base: './docs/',
      livereload: true
    }
  }
};
