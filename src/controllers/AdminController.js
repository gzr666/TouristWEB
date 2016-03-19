(function(){

angular.module("routerApp")
.controller("AdminController",function($scope,$rootScope,apartmanService,toastr,$state,store)

{
	$rootScope.linker = 8;
	$scope.ok ="Odaberi Apartman:";
	$scope.apartman = {};
	$scope.bookings = [];

	apartmanService.getApartments().then(function(data){


		$scope.apartments = data;
		$scope.bookings = [];



	},function(){

	});


$scope.dropdown = function(apartman)
{
	if(apartman==null)
	{
		
	}

else
{
	$scope.apartman = apartman;
	apartmanService.getBookings(apartman.id).then(function(data){


		$scope.bookings = data;

	}
	,function(error){


	});
}

}

$scope.postForm = function(booking)
{
	


	var bookingPost = {

		"title": "BOOKED",
		"start": booking.start,
		"end": booking.end,
		"borderColor": "black",
		"color": "blue",
		"apartmanID":$scope.apartman.id


	};


	apartmanService.postBooking(bookingPost).then(function(data){

		toastr.success('Booking Spremljen', 'Suskaju EURI...');
		$scope.bookings.push(data);

	},function(){

	});

}

$scope.deleteBooking = function(booking){


	apartmanService.deleteBooking(booking._id).then(function(data){

		toastr.success('Booking izbrisan', '');

		var index = $scope.bookings.indexOf(booking);
  $scope.bookings.splice(index, 1);
		

	},function(err){

	});

}

$scope.logmeOff = function()
{
	store.remove("jwt");
	
	$state.go("home");

}
	



});




}());