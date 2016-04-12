(function(){
	var singletonAppRepo = angular.module('reviseNG');

	taskRepository = function(){
		var called = 0;

		var get = function(id){
			called++;
			console.log('taskRepo get called'+ called);
			return{
				name: 'task'+id
			}
		}

		save =  function(){
			called++;
			console.log('repo is saving'+'and it is called'+ called);
		}

		return {
			save: save,
			get: get
		}
	}

	singletonAppRepo.service('taskRepo', taskRepository);

}());