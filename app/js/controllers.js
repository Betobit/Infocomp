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
	$scope.titulo = "Bienvenidos"
	$http.get('http://graph.facebook.com/acominf/photos/uploaded?fields=source,name&limit=5')
		.success(function(response) {
			$scope.noticias = response.data;
		}).error(function(error) {
			console.log(error)
		})
})


.controller('CarrerasCtrl', function($scope, $routeParams) {
	$scope.titulo = 'Ingeniería en '+$routeParams.carrera
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
})