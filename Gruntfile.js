module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      options: {
        livereload: true,
      },
      configFiles: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        options: {
          reload: true
        }
      },
      compass: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['compass:dev', 'autoprefixer'],
        options: {
          spawn: false,
        }
      },

      html: {
        files: ['**/*.html'],
        options: {
          spawn: false,
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      } 
    },


    uglify: {
      build: {
        src: ['js/vendor/*.js', 'js/main.js', 'js/plugins.js'], //input
        dest: 'build/js/main.min.js' //output
      }
    },
    
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img/'
        }]
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 8 versions']
      },
      dist: {
        files: {
          'build/css/styles.css' : 'build/css/styles.css' 
        }
      }
    },
    
    compass: {
      dev: {
        options: {              
          sassDir: ['scss/'],
          cssDir: ['build/css'],
          environment: 'development'
        }
      },
      prod: {
        options: {              
          sassDir: ['scss/'],
          cssDir: ['build/css'],
          environment: 'production'
        }
      },
    },
    
    production: {
      tasks:['compass:prod']
    },


    
  
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-livereload');


  // Default task(s).
  grunt.registerTask('default', ['livereload',  'autoprefixer', 'uglify', 'imagemin', 'compass']);

};