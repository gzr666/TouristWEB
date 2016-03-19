(function(){

angular.module("routerApp")
.controller("ApartmanController",function($scope,$rootScope,$stateParams,moment,apartmanService,$http,toastr)

	{

		$scope.name = "apartman" + $stateParams.id + ".name";
		
		$scope.images = [];
		$scope.booking = {

			smjedinica:$scope.name

		};


		$scope.eventSources1 = {
			events:[]
		};

	$scope.sendEmail = function()
	{
		

		$http.post("http://nodesinj-gzr.rhcloud.com/mail",$scope.booking).success(function(data){

				toastr.success('Email successfully sent', '');
				$scope.booking = {};

		});



	}	

	apartmanService.getApartman($stateParams.id).then(function(data){
	
		$scope.images = data.root.images;
	
	},function(error){
	
	
	});

		
		
		apartmanService.getBookings($stateParams.id).then(
		function(data){
			//$scope.eventSourcesRemote.events = data;
			angular.forEach(data,function(event,key){

					$scope.eventSources1.events.push(
						{title:event.title,
							start:moment(event.start),
							end:moment(event.end),
							color:event.color,
							borderColor:event.borderColor
						});





			});

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

			console.log($scope.eventSources1);
		


		},
		function(error){

		});


		

 

      /*$scope.eventSources = {

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
		            color:"blue"
		           
		       }
		        
			]
			
		};*/
		
		
		

		
    


	});


}());