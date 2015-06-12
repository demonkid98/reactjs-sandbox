module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      assets: ['public/js']
    },
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/',
            src: 'requirejs/require.js',
            dest: 'public/js/',
            flatten: true,
            filter: 'isFile'
          }
        ]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: 'assets/js',
          mainConfigFile: 'assets/js/config.js',
          preserveLicenseComments: false,
          name: 'jsx!app',
          out: 'public/js/built.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['./assets/**/*.{js,jsx}'],
        tasks: ['clean', 'requirejs', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'requirejs', 'copy', 'watch'])
};
