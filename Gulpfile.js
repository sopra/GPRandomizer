var gulp = require('gulp'),
    uglify = require('gulp-uglifyes'),
    plumber = require('gulp-plumber'),
    ejs = require('gulp-ejs'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    autoprefix = require('gulp-autoprefixer'),
    execSync = require('child_process').execSync,
    os = require('os'),
    uglify_option = {
        mangle: true,
        output: {
          'comments': '/^!/'
        },
        compress: {
          'drop_console': true
        },
        ecma: 6
    };

function jsMinify() {
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(concat('randomizer.js'))
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./docs/js/'));
}

function serviceworkerMinify() {
    var revision = execSync('git rev-parse HEAD').toString().replace(os.EOL, '');

    return gulp.src('./src/serviceworker.js')
        .pipe(plumber())
        .pipe(ejs({ "revision": revision }))
        .pipe(uglify(uglify_option))
        .pipe(gulp.dest('./docs/'));
}

function htmlMinify() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
          "html5": true,
          "collapseWhitespace": true,
          "minifyCSS": true,
          "minifyJS": true
        }))
        .pipe(gulp.dest('./docs/'));
}

function cssMinify() {
    return gulp.src('./src/css/*.css')
      .pipe(autoprefix({grid: true}))
      .pipe(cleancss())
      .pipe(gulp.dest('./docs/css/'));
}

function copyPic() {
    return gulp.src('./src/pic/*').pipe(gulp.dest('./docs/pic/'));
}

function copyImage() {
    return gulp.src('./src/image/*').pipe(gulp.dest('./docs/image/'));
}

function copyManifest() {
    return gulp.src('./src/manifest.json').pipe(gulp.dest('./docs/'));
}

function copyFavicon() {
    return gulp.src('./src/favicon.ico').pipe(gulp.dest('./docs/'));
}

var staticCopy = gulp.parallel(copyPic, copyImage, copyManifest, copyFavicon);

var build = gulp.parallel(
    jsMinify,
    serviceworkerMinify,
    htmlMinify,
    staticCopy,
    cssMinify
);

exports.default = build;
