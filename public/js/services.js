app.factory('dataService', function($http,$q) {
	return {
		getData: function() {
			var deferred = $q.defer();
            $http.get('/load').
             success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });       
            return deferred.promise;
        	},

        addUser: function(data) {
        	var data = JSON.stringify(data);
        	$http.post('/add', data).then(
       			function(success){
       				alert("User added successful!");
        	 		$("#add_modal").modal('hide');
       			}, 
      		 	function(error){
         		// failure callback
         			alert("Failure, try again ... ;)");
         			console.log(error);
       			});
        	
        	}

		}//return


	});