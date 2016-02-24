// Generated on 2015-04-11 using generator-angular-fullstack 2.0.13
'use strict';

module.exports = function (grunt) {
  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    watch: {
      less: {
        files: ['./less/**/*.less'],
        tasks: ['less']
      },
    },

    // Compiles Less to CSS
    less: {
      server: {
        files: {
          './css/grid.css' : './less/grid.less'
        }
      }
    },
  });

  grunt.registerTask('serve', ['less', 'watch']);
};
