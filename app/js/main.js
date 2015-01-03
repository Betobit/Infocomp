(function (){

$(document).ready(function() {
	
	//Girar boton de menu
	$('.navbar-toggle').on('click', function() {
		$(this).toggleClass('activo')
	})

	//Ocultar menu al hacer click en una opcion
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') )
	    {
	        $(this).collapse('hide')
	        $('.navbar-toggle').toggleClass('activo')
	    }
	})

});

angular.module('infocomp', ['ngRoute', 'infocomp.controllers', 'ngAnimate'])

//Acesso a las plantillas que serán incrustadas en el html
.config(function($routeProvider) {
	$routeProvider
		//Página de INICIO
		.when('/inicio', {
			templateUrl : 'paginas/inicio.html',
			controller  : 'InicioCtrl'
		})
		//CARRERAS
		.when('/carreras', {
			templateUrl : 'paginas/carreras.html',
			controller  : 'CarrerasCtrl'
		})
		//PROYECTOS
		.when('/proyectos', {
			templateUrl : 'paginas/proyectos.html',
			controller  : 'ProyectosCtrl'
		})
		//DOCENTES
		.when('/docentes', {
			templateUrl : 'paginas/docentes.html',
			controller  : 'DocentesCtrl'
		})
		//TRANSPARENCIA
		.when('/transparencia', {
			templateUrl : 'paginas/transparencia.html',
			controller  : 'TransparenciaCtrl'
		})
		//INFOCOMP
		.when('/infocomp', {
			templateUrl : 'paginas/infocomp.html',
			controller  : 'InfocompCtrl'
		})
	    .otherwise({
	        redirectTo: '/inicio'
	    });
})
})()