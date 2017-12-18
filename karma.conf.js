module.exports = function (config) {
  'use strict';

  let configuration = {
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
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
