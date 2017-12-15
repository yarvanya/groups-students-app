module.exports = function (config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine', 'mocha', 'chai'],
    preprocessors: {
      'src/**/**/**/*.js': ['browserify']
    },
    files: [
      'bower_components/angular/angular.js',
      'src/**/**/**/*.js',
    ],
    exclude: [],
    colors: true,
    reporters: ['progress'],
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: ['es2015']
          }
        ]
      ]
    }
  });
};
