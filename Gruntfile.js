// var _ = require('lodash');
var webpack = require('webpack');
var webpackOptions = require('./webpack.config');
var webpackDevOptions = require('./webpack.dev.config');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch:sass','webpack-dev-server:start']
      }
    },
    webpack: {
      options: webpackOptions,
      dist: {
        plugins: webpackOptions.plugins.concat(
          new webpack.DefinePlugin({
            "process.env": {
              // This has effect on the react lib size
              "NODE_ENV": JSON.stringify("production")
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        ),
        output: {
          path: './dist/assets/js',
          filename: 'app-bundle.js'
        }
      }
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackDevOptions,
        contentBase: 'src/',
        publicPath: '/assets/js/',
        hot: true
      },
      start: {
        port: 42000,
        keepAlive: true
      }
    },
    watch: {
      sass: {
        files: 'src/assets/scss/**/*.scss',
        tasks: ['sass:dev', 'postcss:dev'],
        options: {atBegin: true}
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/scss',
          src: ['*.scss'],
          dest: 'dist/assets/css',
          ext: '.css'
        }],
        options: {
          loadPath: ['node_modules/foundation-sites/scss'],
          style: 'compressed'
        }
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/assets/scss',
          src: ['*.scss'],
          dest: 'src/assets/css',
          ext: '.css'

        }],
        options: {
          loadPath: ['node_modules/foundation-sites/scss'],
          style: 'nested',
          quiet: true,
          lineNumbers: true
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
            require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dev: {
        src: './src/assets/css/*.css'
      },
      dist: {
        src: './dist/assets/css/*.css'
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: [
          '**',
          '!assets/.sass-cache/',
          '!assets/css/**',
          '!assets/scss/**',
          '!assets/js/**'
        ],
        dest: 'dist/'
      }
    },
    clean: {
      dist: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('dev', ['concurrent:dev']);
  grunt.registerTask('build', ['clean:dist', 'copy:dist', 'webpack:dist', 'sass:dist', 'postcss:dist']);
};
