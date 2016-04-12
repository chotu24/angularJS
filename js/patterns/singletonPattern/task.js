(function(){

	var TaskConstructor = angular.module('reviseNG');

	TaskConstructor.factory('Task', function(taskRepo){

		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;
		};

		Task.prototype.complete = function(){
			this.completed=true;
			console.log('completing '+ this.completed);
			this.save();
		};

		Task.prototype.save = function(){
			taskRepo.save(this);
			console.log('saving '+ this.name);
			
		}
		return Task;
	});

}());