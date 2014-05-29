module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        phplint: {
            tl: ['TyreLabel.php'],
            tests: ['tests/*.php']
        },
        phpcs: {
            options: {
                standard: 'PSR2'
            },
            tl: {
                dir: ['TyreLabel.php']
            },
            tests: {
                dir: ['tests/*.php'],
                options: {
                    standard: 'Zend'
                }
            }
        },
        phpmd: {
            options: {
                reportFormat: 'text',
                rulesets: 'codesize'
            },
            tl: {
                dir: 'TyreLabel.php'
            },
            tests: {
                dir: 'tests/*.php'
            }
        },
        jshint: {
            all: ['Gruntfile.js', '*.json'],
            options: {
                reporter: require('jshint-stylish')
            }
        }
    });

    grunt.loadNpmTasks('grunt-phplint');
    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-phpmd');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['phplint:all']);
    grunt.registerTask('full', ['jshint', 'phplint', 'phpcs', 'phpmd']);
};