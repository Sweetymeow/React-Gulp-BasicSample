/*
*   http://jpsierens.com/tutorial-gulp-javascript-2015-react/
*	Task Automation to make my life easier.
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp'); // The task runner itself.
var gutil = require('gulp-util'); // Utility functions for gulp plugins, like nice logging.
var webserver = require('gulp-webserver');
var babelify = require('babelify'); //  This is our transpiler. It converts ES6 and JSX to plain old javascript. v6.0+ of babelify must include presets in order to work. 
var browserify = require('browserify');  // Bundles your javascript files together and let’s you use modules that can be exported and imported in your javascript code.
var source = require('vinyl-source-stream');  // Plugin used for working with stream outputs. Need this to work with Browserify easily.

var fs = require("graceful-fs");  // A drop-in replacement for fs, making various improvements.

var dest = 'web/';

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
  	'react-dom'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('deploy', function (){
	bundleApp(true);
});

// ----------------------------------------------------------------------------
// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up 
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify 
// handle es6 including imports.
gulp.task('es6', function() {
	browserify({ debug: true })
//		.transform(babelify)
		.transform(babelify, {presets: ["es2015"]})
		.require("./app/es6app.js", { entry: true })
		.bundle()
		.on('error',gutil.log)
		.pipe(source('bundle.js'))
    	.pipe(gulp.dest('./web/js/'));
});
// NEW ES6 Task -----------------------------------------------------

gulp.task('watch', function () {
	gulp.watch(['./app/*.js'], ['scripts']);
});

gulp.task('webserver', function() {
  console.log(dest);
  gulp.src(dest)
    .pipe(webserver({
        open: true,
        livereload: true,
    }));
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['es6','scripts','watch','webserver']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
	scriptsCount++;
	// Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
	var appBundler = browserify({
    	entries: './app/app.js',
    	debug: true
  	})

	// If it's not for production, a separate vendors.js file will be created
	// the first time gulp is run so that we don't have to rebundle things like
	// react everytime there's a change in the js file
  	if (!isProduction && scriptsCount === 1){
  		// create vendors.js for dev environment.
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./web/js/'));
  	}
  	if (!isProduction){
  		// make the dependencies external so they dont get bundled by the 
		// app bundler. Dependencies are already bundled in vendor.js for
		// development environments.
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}

  	appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./web/js/'));
}
