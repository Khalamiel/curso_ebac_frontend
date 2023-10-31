module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                compress: true,
            },
            files: {
                'main.min.css': 'main.less'
            }
        },
        concurrent: {
            target: ['less', 'uglify']
        },
        watch: {
            less: {
                files: ['main.less'],
                tasks : ['concurrent']
            },
            javascript: {
                files: ['main.js'],
                tasks: ['concurrent']
            }
        },
        uglify: {
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
}