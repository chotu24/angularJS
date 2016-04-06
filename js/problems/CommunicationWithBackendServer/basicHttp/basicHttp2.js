angular.module('basicHttpApp',[])
.controller('basicHttpController', function($scope, $http){
	$scope.getName = function(){
		
		futureResponse = $http.get('data.json');
		
		futureResponse.success(function(data, status, header, config){
			$scope.data = data.name;
		});

		futureResponse.error(function(data, status, header, config){
			$scope.data = "getName failed to get response";
		})
	};
});