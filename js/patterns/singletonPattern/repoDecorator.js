//Wrapping additiona functionality , apart from 
//existing taskRepo.js
(function (argument) {
	var taskRepoDeco = angular.module('reviseNG');

	//notice the use of decorator function
	taskRepoDeco.decorator('taskRepo',function($delegate){
		//here i want to change the taskRep method

		var oldSave = $delegate.save;
			// adding new save() method with help of decorator
		$delegate.save = function(task){
			console.log('decorator saving this '+task.name );
			//now calling old taskRepo save ()
			oldSave(task);
		}

		return $delegate;
	})
})();