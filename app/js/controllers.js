angular.module('infocomp.controllers', [])

.controller('MainCtrl', function($scope) {

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

.controller('CarrerasCtrl', function($scope) {
	
})

.controller('ProyectosCtrl', function($scope) {
	
})

.controller('DocentesCtrl', function($scope) {
	$scope.titulo = "Docentes"

	var maestros = []

	for(var i = 0; i<28; i++)
		maestros[i] = {image: '/css/img/user.png', email: 'email'+i+'@gmail.com'}

	$scope.maestros = maestros
})

.controller('TransparenciaCtrl', function($scope) {
	
})

.controller('InfocompCtrl', function($scope) {
	
})