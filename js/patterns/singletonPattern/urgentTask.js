(function(){
	var decorator = angular.module('reviseNG');

	decorator.factory('UrgentTask', function(Task, taskRepo){

		var UrgentTask = function(data){
			Task.call(this,data);
		};
		UrgentTask.prototype = Object.create(Task.prototype);

		UrgentTask.prototype.notify = function(){
			console.log('notifying prototype');
		};

		UrgentTask.prototype.save = function(){
			this.notify();
			Task.prototype.save.call(this);
		}
		return UrgentTask;
	});

})()