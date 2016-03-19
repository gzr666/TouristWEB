(function(){

angular.module("routerApp")
.controller("LoginController",function($scope,$rootScope,authService,$http,$state,store,jwtHelper)

{
	$rootScope.linker = 3;
	 $rootScope.pageClass = 'page-about';

	$scope.user={};
	 
	 

	 $scope.postForm = function()
	 {
	 	$http.post("http://nodesinj-gzr.rhcloud.com/token",$scope.user).success(function(result){


	 		store.set("jwt",result.token);
	 			$state.go("admin");
	 	}).error(function(){
	 		$state.go("home");
	 	});


	 	};
	

	
});


}());