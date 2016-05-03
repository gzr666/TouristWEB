(function(){

angular.module("routerApp")
.controller("HomeController",function($scope,$rootScope,$http,apartmanService)

	{
		$rootScope.linker = 0;
		$rootScope.pageClass = 'page-home';


		apartmanService.getApartman(1).then(function(data){
	
		
	
	},function(error){
	
	
	});

		
    


	});


}());