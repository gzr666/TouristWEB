(function(){

var routerApp = angular.module('routerApp', ["ui.router",
  "ngAnimate",
  "toastr",
  "pascalprecht.translate",
  'jkuri.bookingcalendar','ui.calendar','ui.bootstrap','angularMoment',"nya.bootstrap.select",
  "720kb.datepicker","angular-storage","angular-jwt"]);

routerApp.config(function($stateProvider,$urlRouterProvider,$httpProvider,$translateProvider,$locationProvider,jwtInterceptorProvider){

jwtInterceptorProvider.tokenGetter = function(store)
      {

        return store.get("jwt");
      }
      
$httpProvider.interceptors.push('jwtInterceptor');


      

       $urlRouterProvider.otherwise("/home");

       $stateProvider.state("home",{

			url:"/home",
			templateUrl:"templates/home.html",
			controller:"HomeController"

       });

        $stateProvider.state("admin",{

      url:"/admin",
      templateUrl:"templates/admin.html",
      controller:"AdminController",
      data:{requiresLogin:true
      }

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
      controller:"MapController"
      

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

       
       $translateProvider.translations('en_EN', {
        

        "HEADLINE": "Introducing ngTranslate",
        "HOME":"Home",
        "ABOUT":"Apartments",
        "LOCATION":"Contact",
        "GALLERY":"Gallery",
        "LANGUAGE":"Language",
        "test":"testen",

       
        "ContactUS-header" : "Contact Us",

        "apartman1.name": "apartman1-en",
        "apartman2.name": "apartman2-en"


        
    });   

    
     

     

     $translateProvider.useStaticFilesLoader({
            prefix: 'data/locale-',
            suffix: '.json'
  });


$translateProvider.preferredLanguage('en_EN');

        
      




   });
routerApp.run(function($state,$rootScope,$translate,store){





  
  //changing route event

  $rootScope.$on("$stateChangeStart",function(e,to){

      if(to.data && to.data.requiresLogin)
      {
        
        if(!store.get("jwt"))
        {
            e.preventDefault();
            $state.go("login");
        }
        
      }

  });

  $rootScope.logMeOff = function()
  {
    store.remove("jwt");
    $rootScope.showLogin = false;

  };
  

  

$rootScope.toggleLang = function (langKey) {

  

  

    $translate.use(langKey);
    };
  

});




}());
  