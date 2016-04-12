(function(){
	var singletonApp = angular.module('reviseNG',[]);

	var taskController = function(Task,UrgentTask, taskRepo){
		var self = this;
		this.tasks = [];
		this.tasks.push(new Task(taskRepo.get(1)));
		this.tasks.push(new Task(taskRepo.get(2)));
		//this.tasks.push(new urgentTask({name: 'urgentTask', completed: true}));
		this.tasks.push(new UrgentTask(taskRepo.get(3)));
		this.tasks.push(new UrgentTask(taskRepo.get(4)));
	};
	singletonApp.controller('taskCtrl', taskController);
}());