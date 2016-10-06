module.exports=function(grunt){
    'use strict';
    require('load-grunt-tasks')(grunt, {
      pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.initConfig({
        cfg: grunt.file.readJSON('config.json'),
        jshint: {
            all: ['<%= cfg.dirs.dev.source %>/scripts/build/**/*.js']
        },
        clean: {
            build: {
                src: ['<%= cfg.dirs.tmp %>']
            },
            dist: {
                src: ['<%= cfg.dirs.build.source%>/dist/*.*']
            }
        },
        sass: {
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= cfg.dirs.build.dest %>styles/theme.css': '<%= cfg.dirs.build.source %>styles/scss/theme.scss',
                    '<%= cfg.dirs.build.dest %>styles/bootstrap.min.css': '<%= cfg.dirs.build.source %>styles/scss/bootstrap.scss'

                }
            }
        },
        copy: {
            prepare: {//copies non-common Angular app files source files to tmp folder
                files: [{
                    cwd: '<%= cfg.dirs.build.source %>',
                    expand: true,
                    src: [
                        'scripts/utils/*.util.js',
                        'scripts/build/**/*'

                    ],
                    dest: '<%= cfg.dirs.tmp %>'
                }]
            }
        },
        concat: {
            options: {
                separator: ';'

            },
            build: {
                files: [{
                    src: [

                        '<%= cfg.dirs.build.source%>/node_modules/jquery/jquery.min.js',
                        '<%= cfg.dirs.build.source%>/node_modules/angular/angular.min.js',
                        '<%= cfg.dirs.build.source%>/node_modules/angular-resource/angular-resource.min.js',
                        '<%= cfg.dirs.build.source%>/node_modules/angular-route/angular-route.min.js',
                        '<%= cfg.dirs.build.source%>/node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',

                        '<%= cfg.dirs.tmp %>/scripts/utils/*.util.js',
                        
                        '<%= cfg.dirs.tmp %>/dist/**/*.annotated.js'

                    ],
                    dest: '<%= cfg.dirs.tmp.source %>dist/ng-starter.min.js'
                }]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
                add:true
            },
            agentmananger:{
                files:[
                    {
                        expand:true,
                        src:['<%= cfg.dirs.tmp %>/scripts/build/**/*.js'],
                        ext:'.annotated.js',
                        extDot:'last'
                    }
                ]
            }
        },
        uglify: {
            build: {//minifies all files
                options: {
                    compress: {
                        drop_console: true,
                        global_defs: {
                            "DEBUG": false
                        },
                        dead_code: true
                    }
                },
                files: [{
                    cwd: '<%= cfg.dirs.tmp %>/scripts/build',
                    expand: true,
                    src: ['**/*.annotated.js'],
                    dest: '<%= cfg.dirs.tmp %>dist'
                }]
            }
        },
        cssmin : {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
         
          target : {
            files: {
                
                'dist/ng-starter.min.css': ['styles/bootstrap.min.css', 'styles/theme.css']
            }
          }
          
        },
        watch:{
            files:[
                '<%=cfg.dirs.build.source %>/scripts/build/**/*',
                '<%= cfg.dirs.build.source%>/scripts/utils/*.util.js',
                '<%=cfg.dirs.build.source %>/styles/**/*.scss',
                '<%=cfg.dirs.build.source %>/views/**/*.html'
            ],
            tasks:['buildprod']
        },
        karma: {
            unit: {
                configFile: '<%=cfg.dirs.build.source %>/scripts/test/karma.conf.js'
            }
        }
    });
    
    grunt.registerTask('buildprod',['clean:dist', 'sass', 'copy', 'ngAnnotate', 'uglify', 'concat', 'cssmin', 'clean:build'])
    grunt.registerTask('dev', ['buildprod','watch']);
    grunt.registerTask('prod', ['buildprod']);
    grunt.registerTask('test', ['karma']);
};
