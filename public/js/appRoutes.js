//Angular Routes
angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

      // home page
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
      })

      // nerds page that will use the NerdController
      .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactController'
      });
  $locationProvider.html5Mode(true);
}]);
