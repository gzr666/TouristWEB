(function(){

var routerApp = angular.module('routerApp', ["ui.router","ngAnimate","pascalprecht.translate",'jkuri.bookingcalendar','ui.calendar','ui.bootstrap','angularMoment']);

routerApp.config(function($stateProvider,$urlRouterProvider,$httpProvider,$translateProvider){


      



      

       $urlRouterProvider.otherwise("/home");

       $stateProvider.state("home",{

			url:"/home",
			templateUrl:"templates/home.html",
			controller:"HomeController"

       });

       $stateProvider.state("apartman",{

          url:"/apartman/:id",
          templateUrl:"templates/apartman.html",
          controller:"ApartmanController"

          

       });

       $stateProvider.state("login",{

      url:"/login",
      templateUrl:"templates/login.html",
      controller:"LoginController"

       });

       $stateProvider.state("map",{

      url:"/map",
      templateUrl:"templates/map.html",
      controller:"MapController",
      data:{requiresLogin:true
      }

       });

       $stateProvider.state("about",{

			url:"/about",
			templateUrl:"templates/about.html",
			controller:"AboutController"

       });

       $stateProvider.state("gallery",{

      url:"/gallery",
      templateUrl:"templates/gallery.html",
      controller:"GalleryController"

       });

       //nested views

       $stateProvider.state("home.list",{

       		 	url: '/list',
        		templateUrl: 'templates/home-list.html',
        		controller: "BookListController"

       });


      
     



       //translations

       /*
       $translateProvider.translations('en_EN', {
        'HEADLINE': 'Introducing ngTranslate',
        "HOME":"Home",
        "ABOUT":"About Us",
        "LOCATION":"Location",
        "LANGUAGE":"Language",
        "test":"testen",
        "lorem":"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."


        
    });   

    $translateProvider.translations('de_DE', {
        'HEADLINE': 'ngTranslate',
        "HOME":"Pocetna",
        "ABOUT":"O Nama",
        "LOCATION":"Lokacija",
        "LANGUAGE":"Jezik",
         "test":"testhr",
         "lorem":"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."



        
    });   
    
     $translateProvider.preferredLanguage('en_EN');

     */

     $translateProvider.useStaticFilesLoader({
            prefix: 'data/locale-',
            suffix: '.json'
  });


$translateProvider.preferredLanguage('en_EN');

        
      




   });
routerApp.run(function($state,$rootScope,$translate){



  
  //changing route event
  

  

$rootScope.toggleLang = function (langKey) {

  

  

    $translate.use(langKey);
    };
  

});




}());
  