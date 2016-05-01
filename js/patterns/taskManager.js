(function(){
	var TaskApp = angular.module('reviseNG',[]);

	var taskController = function(Task){
		var ctrl = this;
		ctrl.tasks = [new Task({name:'constructor'}),
		new Task({name: 'module', completed: true})];
	};


	TaskApp.controller('taskCtrl',taskController);

/*var TaskApp.factory('Task', function($scope){
	$scope.message = "test";
})
*/
/*
.controller('basicHttpController',function ($scope, $http){
	$scope.getName = function(){
		var futureResponse = $http.get('data.json');
		futureResponse.success(function ( data,status,
*/
	var httpRequestController = function($scope, $http){
		var self = this;
		function onUserComplete(response){
			var data = response.data;
			$scope.id = data.id;
			$scope.myLogo = data.avatar_url;
			console.log($scope.id);
		}
		function error(e){
			console.log(e);
		}
		$scope.getUser = function(userToSearch){
				console.log(userToSearch);
				$http.get("https://api.github.com/users/"+userToSearch).
					then(onUserComplete, error);

		};
		console.log('inside httpRequestController app');
	}
	TaskApp.controller('taskCtrl2', httpRequestController);
}());











