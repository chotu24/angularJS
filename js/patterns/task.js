(function(){

	var TaskConstructor = angular.module('reviseNG');

	TaskConstructor.factory('Task', function(){

		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;
		};

		Task.prototype.complete = function(){
			this.completed=true;
			console.log('completing '+ this.completed);
		};

		Task.prototype.save = function(){
			console.log('saving '+ this.name);
		}
		return Task;
	});

}())