angular.module('infocomp.controllers', [])

.controller('LoginCtrl', function($scope) {
	$scope.titulo = 'Login'
})

.controller('MainCtrl', function($scope, ngDialog) {
	$scope.abrirLogin = function(){
		ngDialog.open({
			template: 'paginas/login.html',
			controller: 'LoginCtrl'
		})
	}
})
.controller('InicioCtrl', function($scope, $http) {
	$scope.titulo = "Noticias",
	$scope.noticias = []
	$http.get('http://graph.facebook.com/acominf/photos/uploaded?fields=source,name,link&limit=13')
		.success(function(response) {

			var noticias = response.data;
			for(var i =0; i<noticias.length; i++)
			{
				if(typeof noticias[i].name != 'undefined')
				{
					$scope.noticias.push(noticias[i])
				}
			}
			console.log(response.data)

		}).error(function(error) {
			console.log(error)
		})

})


.controller('CarrerasCtrl', function($scope, $routeParams) {
	$scope.titulo = 'Ingeniería en '
	$scope.imagenGrande = 'css/img/carreras' 

	if($routeParams.carrera == 'computacion')
	{		
		$scope.titulo += 'Computación'
		$scope.imagenGrande += '/computacion.jpg' 
	}else{
		$scope.titulo += 'Informática'
		$scope.imagenGrande += '/informatica.jpg' 
	}

})

.controller('ProyectosCtrl', function($scope) {
	$scope.titulo = 'Proyectos'
})

.controller('DocentesCtrl', function($scope) {
	$scope.titulo = "Docentes"

	var maestros = []

	for(var i = 0; i<28; i++)
		maestros[i] = {image: '/css/img/user.png', email: 'email'+i+'@gmail.com'}

	$scope.maestros = maestros
})

.controller('AlumnosCtrl', function($scope) {
	
})

.controller('InfocompCtrl', function($scope) {
	$scope.titulo = 'INFOCOMP'
	$scope.documentosNormativa = [
		{
			nombre : 'Estatuto Orgánico',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/estatuto.pdf'
		},
		{
			nombre : 'Reglamento Personal Académico',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/reglamento_del%20personal_academico.pdf'
		},
		{
			nombre : 'Reglamento de Examenes',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/examen.pdf'
		},
		{
			nombre : 'Reglamento de Diplomados',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/diplomados.pdf'
		},
		{
			nombre : 'Reglamento de Posgrados',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/posgrado.pdf'
		},
		{
			nombre : 'Reglamento de Permisos y Licencias',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/permisos.pdf'
		}
	]

	$scope.documentosFacultad = [
		{
			nombre : 'Manual de Organización',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/manorg.pdf'
		},
		{
			nombre : 'Reglamento Interno',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/regint.pdf'
		},
		{
			nombre : 'Reglamento interno',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/procedi.pdf'
		},
		{
			nombre : 'Manual de Procedimientos',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/diplomados.pdf'
		},
		{
			nombre : 'Desarrollo Curricular y Academias',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/descurr.pdf'
		},
		{
			nombre : 'Movilidad Académicas Estudiantil',
			link : 'http://infocomp.ingenieria.uaslp.mx/infocomp/docs/normativa/movacad.pdf'
		}
	]
})