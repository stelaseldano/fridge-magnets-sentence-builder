var gulp = require('gulp');


// task: delete build/*
var del = require('del');

gulp.task('clean', function(callback) {
	del(['ship/*'], callback);
});

// process html
gulp.task('html', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('ship'))
		.pipe(connect.reload());
});

// process css
var less = require('gulp-less');
var LessPluginCleanCss = require('less-plugin-clean-css');
var cleanCss = new LessPluginCleanCss({advanced: true});

gulp.task('less', function() {
	gulp.src('styles/*.less')
		.pipe(less({
			plugins: [cleanCss]
		}))
		.pipe(gulp.dest('ship/styles'))
		.pipe(connect.reload());
});

// process scripts
gulp.task('scripts', function() {
	gulp.src('scripts/*.js')
		.pipe(gulp.dest('ship/scripts'))
		.pipe(connect.reload());
});

// task: watch
gulp.task('watch', function() {
	gulp.watch('index.html', ['html']);
	gulp.watch('styles/*', ['less']);
	gulp.watch('scripts/*', ['scripts']);
});

// connect server
var connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		root: 'ship',
		port: 9000,
		livereload: true
	});
});


// the default task
gulp.task('default', ['watch', 'connect']);