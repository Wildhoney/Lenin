module.exports = function(config) {

    config.set({

        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'src/*.test.js',
            'src/**/*.test.js',
            'src/**/**/*.test.js',
            'tests/*.test.js',
            'tests/**/*.test.js',
            'tests/**/**/*.test.js'
        ],
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Firefox'],
        singleRun: false,
        preprocessors: {
            'src/*.js': ['browserify'],
            'src/**/*.js': ['browserify'],
            'src/**/**/*.js': ['browserify'],
            'tests/*.test.js': ['browserify'],
            'tests/**/*.test.js': ['browserify'],
            'tests/**/**/*.test.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [["babelify", { stage: 0 }]]
        }

    });

};
