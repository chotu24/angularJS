angular.module('basicHttpApp',[])
.controller('basicHttpController',function ($scope, $http){
	$scope.getName = function(){
		var futureResponse = $http.get('data.json');
		futureResponse.success(function ( data,status, headers, config){
			$scope.data = data;
		});
		futureResponse.error(function (data, status, headers, config){
			throw new Error('basic http getName() something went wrong');
		})
	};

	$scope.getThen = function(){
		var responsePromise = $http.get('data.json');
		
		responsePromise.then(function (response){
			$scope.userName = response.data.name; 
		},function (response){
			throw new Error('basic http getThen() something went wrong');
		});

	};

	$scope.getUser = function(){
	    
	    //$http.get('/someUrl', config)
	    $http.get('https://api.mongolab.com/api/1/databases/ascrum/collections/users', {
		        params:{
		          apiKey:'4fb51e55e4b02e56a67b0b66'
		        }
      	}).success(function (data, status, headers, config){
      	  	$scope.getGenericUser = data;
        }).error(function (data, status, headers, config){
      	  	throw new Error('something went wrong');
    	});
	};      
})