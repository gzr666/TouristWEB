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

	var getApartmani = function(){
		var q = $q.defer();

		$http.get("data/apartmani.json").then(
			function(data){


					q.resolve(data.data);

		},
		function(error){

			q.reject(error);
		});

		return q.promise;


	}

	var getBooking = function(id)
	{
		var q = $q.defer();

		$http.get("http://nodesinj-gzr.rhcloud.com/apartman?apartmanID=" + id ).then(
			function(data){


					q.resolve(data.data);

		},
		function(error){

			q.reject(error);
		});

		return q.promise;
	}

	var postBook = function(booking)
	{

		var q = $q.defer();

		$http.post("http://nodesinj-gzr.rhcloud.com/apartman",booking).then(
			function(data){


					q.resolve(data.data);

		},
		function(error){

			q.reject(error);
		});

		return q.promise;


	}

	var deleteBooking = function(id){

		var q = $q.defer();

		$http.delete("http://nodesinj-gzr.rhcloud.com/apartman/" + id ).then(
			function(data){


					q.resolve(data.data);

		},
		function(error){

			q.reject(error);
		});

		return q.promise;


	}





return {

	getApartman:getData,
	getApartments:getApartmani,
	getBookings:getBooking,
	postBooking:postBook,
	deleteBooking:deleteBooking

}


});


}());