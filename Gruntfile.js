/*jshint camelcase:false*/

module.exports = function (grunt)
{
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-gh-pages');
    require('load-grunt-tasks')(grunt);


    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config,
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= config.app %>/index.html', '<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js', '<%= config.app %>/**/*.css']
            }
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '127.0.0.1'
            },
            test: {
                options: {
                    base: ['app'],
                    port: 9001,
                    hostname: process.env.HOSTNAME
                }
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        },
        jshint: {
            default: {
                options: {
                    jshintrc: true
                },
                files: {
                    src: ['app/**/*.js', 'test/**/*.js', '!app/bower_components/**/*.js']
                }
            },
            verify: {
                options: {
                    jshintrc: true,
                    reporter: 'checkstyle',
                    reporterOutput: 'target/jshint.xml'
                },
                files: {src: ['app/**/*.js', 'test/**/*.js', '!app/bower_components/**/*.js']}
            }
        },
        'gh-pages': {
            options: {
                base: 'app'
            },
            src: ['**']
        }
    });

    grunt.registerTask('serve', ['connect:livereload', 'watch']);

    grunt.registerTask('verify', ['jshint:verify', 'karma:unit', 'connect:test', 'protractor:chrome']);

    grunt.registerTask('test:dev', ['karma:dev']);

    grunt.registerTask('test:e2e', ['connect:test', 'protractor:chrome']);

    grunt.registerTask('default', ['serve']);
};
