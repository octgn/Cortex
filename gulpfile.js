/// <binding BeforeBuild='build' />
var gulp = require('gulp');
var bower = require('gulp-bower');
var runElectron = require("gulp-run-electron");

gulp.task("watch", function () {
	return gulp.watch("app/**/*", runElectron.rerun);
});

gulp.task("build",['bower'], function () {
	return gulp.src("app/**/*").pipe(gulp.dest("build"));
});

gulp.task("run", function () {
	return gulp.src("build").pipe(runElectron());
});

gulp.task("default", ["watch", "build", "run"], function () {
});

gulp.task('bower', function() {
	bower();
	gulp.src("semantic/dist/*.min.js").pipe(gulp.dest("build/lib")); 
	gulp.src("semantic/dist/*.min.css").pipe(gulp.dest("build/css")); 
	gulp.src("bower_components/jquery/dist/*.min.js").pipe(gulp.dest("build/lib")); 
	return gulp.src("bower_components/react/*.min.js").pipe(gulp.dest("build/lib")); 
});