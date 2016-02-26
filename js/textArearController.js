var myApp = angular.module('myApp',[]);

var textAreaController = function($scope){
	
	var maxLen = 50;
	var warnMsgLength = 15;
	$scope.message = 'test';

	$scope.remainingMsgLength = function(){
		var msgLengthRemaining = maxLen - $scope.message.length;
		return msgLengthRemaining;
	};

	$scope.warnUser = function(){
		return $scope.remainingMsgLength() < warnMsgLength;
	};

	$scope.hasCharCountMax = function(){
		return $scope.message.length <= maxLen; 
	} ;

	$scope.send = function() {
		console.log('sending it to DB');
	};

	$scope.clear = function(){
		$scope.message = '';
	}
}

myApp.controller('textAreaController', textAreaController);