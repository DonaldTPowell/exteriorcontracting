module.exports = function(grunt) { 

  function shellLog ( err, stdout, stderr, cb ) {
    console.log( stdout );
    cb();
  }

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: false
			},
		    build: {

				files: {
					'js/build/plugins.min.js': ['js/src/plugins.js'],
					'js/build/main.min.js': ['js/src/main.js'],

				}
		  }
		},
		concat: {
			options: {
			  separator: ';',
			},
			dist: {
			  src: ['js/build/plugins.min.js', 'js/build/main.min.js', 'js/build/bootstrap.min.js', 'js/build/skrollr.min.js'],
			  dest: 'js/dist/main.min.js',
			},
		},
		compass: {
			compileWithConfigFile: {
				options: {
					config: 'config.rb',
				}
			},

		},
		//php: {
		//  watch: {
		//    files: ['**/*.php'],
		//    options: {
		//      livereload: 9000
    //    }
    //  }
    //},

    //shell: {
    //  init2: {
    //    command: 'whoami',
    //    options: {
    //      callback: shellLog
    //    }
    //  },
    //  init: {
    //    command: 'if screen -list | grep -q "mpsmnProxy"; then screen -r mpsmnProxy -X quit; fi; screen -d -m -S mpsmnProxy;',
    //    callback: shellLog
    //  },
    //  wget: {
    //    //command: 'exec screen -S mpsmnProxy -X stuff "clear; wget -O - echo $MPSMN;"'
    //    command: function() {
    //      var outputString = "if [[ $MPSMN ]]; ";
    //      outputString += "then > mpsmn_payload.sh; ";
    //      outputString += "echo \"clear; wget -O - \\\"\"$MPSMN\"\\\";\\r \" >> mpsmn_payload.sh; fi; ";
    //      outputString += "screen -S -p0 -X stuff \"./mpsmn_payload.sh\\r\"; "
    //      return outputString;
    //    }
    //  }
    //},
      
		watch: {
		  sass: {
		    files: ['sass/*.scss'],
		    tasks: ['compass']
		  },
		  js: {
		    files: ['js/src/*.js'],
		    tasks: ['uglify', 'concat']
		  },

		  //compass: {
		  //  files: ['wp-content/themes/sass/*.scss'],
		  //  task: ['compass']
		  //},
		  //contact: {
		  //  files: ['js/src/*.js'],
		  //  tasks: ['uglify', 'concat']
		  //},
		  scripts: {
		    files: ['js/dist/*.js', 'css/*.css','**/*.php'],
		    //tasks: ['uglify','concat','compass','shell:wget'],
		    //tasks: ['uglify', 'concat', 'compass'],
		    options: {
		      spawn: false,
		      reload: true,
		      livereload: 9000,
		    }
		  }
		}


	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-shell');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	//grunt.registerTask('default', ['uglify', 'concat', 'compass', 'shell:init', 'watch']);
	grunt.registerTask('default', ['uglify', 'concat', 'compass', 'watch']);

};
