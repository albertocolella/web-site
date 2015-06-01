module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      js: {
        files: {
          'build/bundle.js': pkg.browser,
        }
      },
      css: {
        files: {
          'build/bundle.css': pkg.style,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
}