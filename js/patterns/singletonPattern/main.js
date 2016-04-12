(function(){
	var singletonApp = angular.module('reviseNG',[]);

	var taskController = function(Task, taskRepo){
		var self = this;
		this.tasks = [];
		this.tasks.push(new Task(taskRepo.get(1)));
		this.tasks.push(new Task(taskRepo.get(2)));
		//this.tasks.push(new Task({name: 'user',completed: false}));
	};
	singletonApp.controller('taskCtrl', taskController);
}());