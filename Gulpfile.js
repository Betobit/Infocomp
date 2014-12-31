var gulp    = require('gulp'),
	connect = require('gulp-connect'),
	stylus  = require('gulp-stylus'),
	nib     = require('nib'),
	inject  = require('gulp-inject'),
	wiredep = require('wiredep').stream,
	hApiFallBack = require('connect-history-api-fallback');

//SERVIDOR WEB DE DESARROLLO
gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true,
		middleware: function(connect, opt) {
			return [hApiFallBack]
		}
	})
})

//PREPROCESA ARCHIVOS STYLUS A CSS y recarga los cambios
gulp.task('css', function() {
	gulp.src('./app/stylus/main.styl')
		.pipe(stylus({ use: nib()}))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload())
})

//RECARGA EL NAVEGADOR CUANDO HAY CAMBIOS EN EL HTML
gulp.task('html', function() {
	gulp.src('./app/*.html')
		.pipe(connect.reload())
})

//BUSCA EN LA CARPETA CSS/ ARCHIVOS DE ESTILOS Y LOS INYECTA EN EL HTML
gulp.task('inject', function() {
var sources = gulp.src(['./app/css/*.css', './app/js/*.js'])
	return gulp.src('index.html', {cwd: './app'})
		.pipe(inject(sources, {read: false,ignorePath: '/app'}))
		.pipe(gulp.dest('./app'))
})

//INYECTA LAS LIBREARÍAS INSTALADAS VÍA BOWER
gulp.task('wiredep', function () {
	gulp.src('./app/index.html')
	.pipe(wiredep({directory: './app/lib'}))
	.pipe(gulp.dest('./app'));
})

//VIGILA LOS CAMBIOS Y LANZA LAS TAREAS SELECCIONADAS
gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html'])
	gulp.watch(['./app/stylus/*.styl'], ['css', 'inject'])
	gulp.watch(['./app/js/*.js'], ['inject'])
	gulp.watch(['./bower.json'], ['wiredep'])
})

gulp.task('default', ['server', 'wiredep', 'watch', 'inject'])