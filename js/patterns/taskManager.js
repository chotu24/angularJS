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

}());