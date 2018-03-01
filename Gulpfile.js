var gulp = require('gulp'),
    uglify = require('gulp-uglifyes'),
    plumber = require('gulp-plumber'),
    ejs = require('gulp-ejs'),
    htmlmin = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    autoprefix = require('gulp-autoprefixer'),
    execSync = require('child_process').execSync,
    os = require('os'),
    uglify_option = {
        mangle: true,
        ecma: 6
    };

gulp.task('randomizer-minify', function() {
    return gulp.src('./src/js/randomizer.js')
        .pipe(plumber())
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./docs/js/'));
});

gulp.task('serviceworker-minify', function() {
    var revision = execSync('git rev-parse HEAD').toString().replace(os.EOL, '');

    return gulp.src('./src/serviceworker.js')
        .pipe(plumber())
        .pipe(ejs({ "revision": revision }))
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./docs/'));
});

gulp.task('html-minify', function() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
          "html5": true,
          "collapseWhitespace": true,
          "minifyCSS": true,
          "minifyJS": true
        }))
        .pipe(gulp.dest('./docs/'));
});

gulp.task('css-minify', function() {
    gulp.src('./src/css/*.css')
      .pipe(autoprefix({grid: true}))
      .pipe(cleancss())
      .pipe(gulp.dest('./docs/css/'))
});

gulp.task('static-copy', function() {
    gulp.src('./src/pic/*').pipe(gulp.dest('./docs/pic/'));
    gulp.src('./src/image/*').pipe(gulp.dest('./docs/image/'));
    gulp.src('./src/manifest.json').pipe(gulp.dest('./docs/'));
    gulp.src('./src/favicon.ico').pipe(gulp.dest('./docs/'));
    return;
});

var tasks = [
    'randomizer-minify',
    'serviceworker-minify',
    'html-minify',
    'static-copy',
    'css-minify'
];

gulp.task('default', tasks, function() {
    return;
});
