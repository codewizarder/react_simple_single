"use strict";

var gulp = require('gulp');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify') // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // use conventional text streams with gulp
var reactify = require('reactify') // Transforms React JSX to JS

var paths = {
//        js: './app/**/*.js',
        mainJs: './app/main.js',
        dist: './dist'
    }

gulp.task('js', function(){
    
   browserify(paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.dist + '/scripts'))
});

gulp.task('default', ['js']); 