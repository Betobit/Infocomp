angular.module('infocomp.controllers', [])

.controller('MainCtrl', function($scope) {

})

.controller('InicioCtrl', function($scope, $http) {
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
	
})

.controller('TransparenciaCtrl', function($scope) {
	
})

.controller('InfocompCtrl', function($scope) {
	
})