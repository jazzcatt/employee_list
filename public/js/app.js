var app = angular.module('employee_list', []);

app.controller('MainCtrl', function($scope, dataService){
	var dataPromise = dataService.getData(this.url);
	dataPromise.then(function(res){$scope.data = res;});

	$scope.addUser = function(data){
		var res = dataService.addUser(data);     // some server request if(access) => 
			$scope.data.push(data);
	};
})