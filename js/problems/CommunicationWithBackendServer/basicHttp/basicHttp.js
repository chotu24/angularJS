angular.module('basicHttpApp',[])
.controller('basicHttpController',function ($scope, $http){
	$scope.getName = function(){
		var futureResponse = $http.get('data.json');
		futureResponse.success(function(data,status, header, config){
			$scope.data = data;
		});
		futureResponse.error(function(data, status, header, config){
			throw new Error('basic http getName() something went wrong');
		})
	}
})