module.exports = function( grunt ) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'themes/main.css': 'themes/main.scss'
        }
      }
    },
      concat: {
        generated: {
          files: [
            {
              dest: 'build/bundle.js',
              src: [
                'js/vendor/**/*.min.js',
                'js/script.js'
              ]
            },
            {
              dest: 'build/bundle.css',
              src: [
                'themes/main.css',
                'node_modules/font-awesome/css/font-awesome.css'
              ]
            }
          ]
        }
      },
      uglify: {
        generated: {
          files: [
            {
              dest: 'build/bundle.min.js',
              src: [ 'build/bundle.js' ]
            }
          ]
        },
        prepare: {
          files: [{
              expand: true,
              cwd: 'js/vendor',
              src: ['**/*.js', '!**/*.min.js']
          }]
        }
      },
      cssmin: {
        target: {
          files: {
            'build/bundle.min.css': ['build/bundle.css']
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [
                                  'sass',
                                  'uglify:prepare',
                                  'concat:generated',
                                  'uglify:generated',
                                  'cssmin'
                                ]);
/*  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });*/
};
