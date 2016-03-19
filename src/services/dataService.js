(function()
{

	angular.module("routerApp").provider("mySecondService", function() {
    var provider = {};

    provider.$get = function() {
        var service = {};

        service.doService = function() {
            console.log("mySecondService: Service Done!");
        }

        return service;
    }

    return provider;
});


}());