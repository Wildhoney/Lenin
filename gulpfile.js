(function main() {

    var gulp        = require('gulp'),
        karma       = require('gulp-karma'),
        jshint      = require('gulp-jshint'),
        fs          = require('fs'),
        yaml        = require('js-yaml'),
        browserify  = require('browserify'),
        babelify    = require('babelify'),
        config      = yaml.safeLoad(fs.readFileSync('./lenin.yml', 'utf8')),
        bundleFiles = [].concat('example/js/application.js', config.src);

    var compile = function(destPath, entryFile) {

        return browserify({ debug: true })
            .transform(babelify)
            .require(entryFile, { entry: true })
            .bundle()
            .on('error', function (model) { console.error(['Error:', model.message].join(' ')); })
            .pipe(fs.createWriteStream(destPath));

    };

    gulp.task('karma', function() {

        return gulp.src([].concat(config.dependencies, config.src, config.tests))
            .pipe(karma({
                configFile: 'karma.conf.js',
                action: 'run'
            }))
            .on('error', function(error) {
                throw error;
            });

    });

    gulp.task('example', function() {
        compile('example/js/bundle.js', bundleFiles[0]);
    });

    gulp.task('lint', function() {

        return gulp.src(config.src)
            .pipe(jshint())
            .pipe(jshint.reporter('default', {
                verbose: true
            }));

    });

    gulp.task('test', ['lint', 'karma']);
    gulp.task('build', ['example']);
    gulp.task('default', ['test', 'build']);
    gulp.task('watch', function watch() {
        gulp.watch(bundleFiles, ['build'])
    });

})();