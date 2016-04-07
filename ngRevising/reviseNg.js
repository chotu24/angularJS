(function(){
	
	
	var reviseNG = angular.module('reviseNG',[])
	
	var loginCtrl = function($scope){
		$scope.isUserLogin = false;
		var userDetials = {};
		$scope.message =" hello revise angularJS";
		
		$scope.userLogin = function(){
				
				userDetials.name = $scope.userName;
				userDetials.password = $scope.password;
				console.log('userName'+userDetials.name+ ' password'+ userDetials.password); 		
				$scope.isUserLogin = true;
		}		

	}

	reviseNG.controller('loginCtrl',loginCtrl);

}());