(function(){

angular.module("routerApp").factory("apartmanService",function($http,$q){

	

	var getData = function(id)
	{
		var q = $q.defer();

		$http.get("data/apartman" + id + ".json").then(
			function(data){


					q.resolve(data.data);

		},
		function(error){

			q.reject(error);
		});

		return q.promise;
	}


return {

	getApartman:getData

}


});


}());