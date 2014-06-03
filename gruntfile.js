'use strict';
/*global module:false */

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    traceur: {
      options: {
        traceurOptions: '--experimental --sourcemap'
      },
      all: {
        files: {
          // Just need to transpile main file which imports others.
          'public/js/app.js': ['public/js/app.6.js'],
          'app.js': ['app.6.js']
        }
      }
    },

    jshint: {
      files: ['*.js', 'routes/**/*.js', 'public/js/**/*.js', '!**/*.6.js'],
      options: {
        globals: {
          console: true,
          module: true,
          angular: true
        },
        globalstrict: true
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks("grunt-traceur-simple");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['traceur', 'jshint']);
  grunt.registerTask('build', ['traceur', 'jshint']);

};