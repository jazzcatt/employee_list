var app = angular.module('employee_list', []);

app.controller('MainCtrl', function($scope, dataService){
	$scope.data = dataService.getData();
	console.log($scope.data);
})