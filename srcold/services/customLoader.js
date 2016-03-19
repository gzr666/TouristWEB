(function(){

angular.module("routerApp").factory("customLoader",function($http,$q){

	

	return function () {
        var deferred = $q.defer();
        // do something with $http, $q and key to load localization files

        var data = {
            
        };

        $http.get("data/apartman1.json").then(function(result){

        	data = result.data;

        });

        return deferred.resolve(data);
        // or
        //return deferred.reject(options.key);
    };


});


}());