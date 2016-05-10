const gulp = require('gulp'),
  debug = require('gulp-debug'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  webpack = require('webpack-stream');

var base = 'views/';
var path = {
  HTML: base + 'src/*.jade',
  ALL: [
    base + 'src/*.jade'
    , base + 'src/**.jade'
    , base + 'jsx/*.jsx'
    , base + 'jsx/**/*.jsx'
    , base + '*.jade'
    , base + 'scss/*.scss'
    , base + 'scss/**/*.scss'
  ],
  JS: [
    base + 'jsx/*.jsx'
    , base + 'jsx/**/*.jsx'
    , base + 'jsx/components/**/*.jsx'
    , base + 'lib/*.jsx'
    , base + 'lib/**/*.jsx'
  ],
  SASS: [
    base + 'scss/**.scss'
  ],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: base + '/src',
  DEST_BUILD: 'public/src',
  HTML_DEST: 'views/dest'
};

gulp.task('transform', function() {
  gulp.src(path.JS)
    .pipe(debug({
      title: 'react:'
    }))
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [{
          test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
          loader: 'babel', // The module to load. "babel" is short for "babel-loader"
          query: {
            presets: ['es2015', 'react']
          }
        }]
      }
    }))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('copy', function() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.HTML_DEST));
});

gulp.task('sass', function() {
  return gulp.src(path.SASS)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('watch', function() {
  gulp.watch(path.ALL, ['transform', 'sass', 'copy']);
});

gulp.task('default', ['transform', 'sass', 'copy', 'watch']);
