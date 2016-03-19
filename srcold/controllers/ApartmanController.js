(function(){

angular.module("routerApp")
.controller("ApartmanController",function($scope,$rootScope,$stateParams,moment)

	{

		$scope.name = "apartman" + $stateParams.id + ".name";

		
		


		

 $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          
         
          right: 'today prev,next'
         
        },
        fixedWeekCount:false,
        displayEventTime: false
        
      }
  };

      $scope.eventSources = {

      	events:[

		      {
		            title: 'BOOKED',
		            start: moment("2016-01-25"),
		            end:moment("2016-01-29"),
		            borderColor :"black",
		            color:"red"
		           
		       },
		       {
		            title: 'BOOKED',
		            start: moment("2016-02-20"),
		            end:moment("2016-02-27"),
		            borderColor :"black",
		            color:"red"
		           
		       }
		        
			]
			
		};
		
		
		

		
    


	});


}());